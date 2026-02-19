import { NextResponse } from "next/server";
import Fuse from "fuse.js";
import { prisma } from "@spxcel/db";

/* ===============================
   GLOBAL CACHE (FAST SEARCH)
=============================== */

let fuse: Fuse<any> | null = null;
let lastLoaded = 0;

const CACHE_TIME = 1000 * 60 * 5; // 5 minutes

async function getFuseIndex() {
  const now = Date.now();

  // reuse cache if valid
  if (fuse && now - lastLoaded < CACHE_TIME) {
    return fuse;
  }

  // fetch data once
  const [models, brands] = await Promise.all([
    prisma.phoneModel.findMany({
      select: {
        id: true,
        name: true,
        slug: true,
        brand: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
      },
    }),

    prisma.phoneBrand.findMany({
      select: {
        id: true,
        name: true,
        slug: true,
      },
    }),
  ]);

  const combined = [
    ...models.map((m) => ({ ...m, type: "model" })),
    ...brands.map((b) => ({ ...b, type: "brand" })),
  ];

  // build fuse index once
  fuse = new Fuse(combined, {
    keys: [
      { name: "name", weight: 0.7 },
      { name: "brand.name", weight: 0.3 },
    ],
    threshold: 0.35,
    ignoreLocation: true,
  });

  lastLoaded = now;

  return fuse;
}

/* ===============================
   SEARCH API
=============================== */

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const search = url.searchParams.get("search");

    if (!search?.trim()) {
      return NextResponse.json({ results: [] });
    }

    const query = search.trim().toLowerCase();

    const fuseIndex = await getFuseIndex();

    const results = fuseIndex
      .search(query, { limit: 20 })
      .map((r) => r.item);

    return NextResponse.json({ results });
  } catch (error) {
    console.error("❌ Search API error:", error);

    return NextResponse.json(
      { error: "Search failed", results: [] },
      { status: 500 }
    );
  }
}
