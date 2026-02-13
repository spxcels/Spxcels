import { NextResponse } from "next/server";
import Fuse from "fuse.js";
import { prisma } from "@spxcel/db";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const search = url.searchParams.get("search");

    if (!search || search.trim() === "") {
      return NextResponse.json({ results: [] });
    }

    const query = search.trim().toLowerCase();

    // Fetch models and brands concurrently
    const [models, brands] = await Promise.all([
      prisma.phoneModel.findMany({
        include: { brand: true },
        orderBy: { name: "asc" },
      }),
      prisma.phoneBrand.findMany({
        orderBy: { name: "asc" },
      }),
    ]);

    // Combine models + brands into one dataset
    const combined = [
      ...models.map((m) => ({ ...m, type: "model" })),
      ...brands.map((b) => ({ ...b, type: "brand" })),
    ];

    // Fuse.js config
    const fuse = new Fuse(combined, {
      keys: [
        { name: "name", weight: 0.6 },
        { name: "brand.name", weight: 0.4 },
      ],
      threshold: 0.35,
      distance: 70,
      ignoreLocation: true,
    });

    const fuzzyResults = fuse.search(query);
    const results = fuzzyResults.map((r) => r.item).slice(0, 20);

    return NextResponse.json({ results });
  } catch (error) {
    console.error("❌ Search API error:", error);
    return NextResponse.json(
      { error: "Search failed", results: [] },
      { status: 500 }
    );
  }
}
