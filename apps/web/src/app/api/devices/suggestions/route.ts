import { NextResponse } from "next/server";
import db from "@spxcel/db";
import Fuse from "fuse.js";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    // ------------------------------------------------
    // Query params
    // ------------------------------------------------
    const query = searchParams.get("q") ?? "";
    const currentId = Number(searchParams.get("id") ?? 0);

    // ------------------------------------------------
    // 1️⃣ Fetch phones (SAFE with your schema)
    // ------------------------------------------------
    const phones = await db.phoneModel.findMany({
      take: 200,
      select: {
        id: true,
        name: true,
        slug: true,
        image: true,
        brand: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!phones.length) {
      return NextResponse.json([]);
    }

    // ------------------------------------------------
    // 2️⃣ Find current phone (for smart boosting)
    // ------------------------------------------------
    const currentPhone = phones.find((p) => p.id === currentId);

    // ------------------------------------------------
    // 3️⃣ Fuse smart fuzzy search
    // ------------------------------------------------
    const fuse = new Fuse(phones, {
      keys: [
        { name: "name", weight: 0.75 },
        { name: "brand.name", weight: 0.25 },
      ],
      threshold: 0.35,
      ignoreLocation: true,
      includeScore: true,
    });

    let results = query.trim()
      ? fuse.search(query).map((r) => ({
          ...r.item,
          _score: r.score ?? 1,
        }))
      : phones.map((p) => ({
          ...p,
          _score: 1,
        }));

    // ------------------------------------------------
    // 4️⃣ Smart ranking (AI-feeling but SAFE)
    // ------------------------------------------------
    results = results
      .filter((p) => p.id !== currentId)
      .map((phone) => {
        let rank = 0;

        // Fuse relevance (lower score = better)
        rank += (1 - phone._score) * 50;

        // Same brand boost (feels intelligent)
        if (
          currentPhone &&
          phone.brand.name === currentPhone.brand.name
        ) {
          rank += 20;
        }

        // Slight boost for shorter names (usually cleaner models)
        rank += Math.max(0, 20 - phone.name.length);

        return {
          ...phone,
          _rank: rank,
        };
      })
      .sort((a, b) => b._rank - a._rank);

    // ------------------------------------------------
    // 5️⃣ Return suggestions
    // ------------------------------------------------
    return NextResponse.json(results.slice(0, 6));
  } catch (error) {
    console.error("Suggestions error:", error);
    return NextResponse.json([]);
  }
}