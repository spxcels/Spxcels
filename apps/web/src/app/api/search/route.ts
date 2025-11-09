import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import Fuse from "fuse.js";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const search = url.searchParams.get("search");

    if (!search || search.trim() === "") {
      return NextResponse.json({ results: [] });
    }

    const query = search.trim().toLowerCase();

    // Fetch all models and brands
    const [models, brands] = await Promise.all([
      prisma.phoneModel.findMany({
        include: { brand: true },
        orderBy: { name: "asc" },
      }),
      prisma.phoneBrand.findMany({
        orderBy: { name: "asc" },
      }),
    ]);

    // Combine both sets into a unified dataset
    const combined = [
      ...models.map((m) => ({ ...m, type: "model" })),
      ...brands.map((b) => ({ ...b, type: "brand" })),
    ];

    // Initialize Fuse.js for fuzzy matching
    const fuse = new Fuse(combined, {
      keys: [
        { name: "name", weight: 0.6 },
        { name: "brand.name", weight: 0.4 },
      ],
      threshold: 0.4, // 0 = exact match, 1 = very loose match
      distance: 80,
      ignoreLocation: true,
    });

    // Perform fuzzy search
    const fuzzyResults = fuse.search(query);

    // Extract top matches
    const results = fuzzyResults.map((r) => r.item).slice(0, 20);

    return NextResponse.json({ results });
  } catch (error) {
    console.error("Search API error:", error);
    return NextResponse.json({ results: [] }, { status: 500 });
  }
}
