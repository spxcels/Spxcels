import { NextResponse } from "next/server";
import db from "@spxcel/db";
import Fuse from "fuse.js";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const searchParams = url.searchParams;

    // ------------------------------------------------
    // Query params
    // ------------------------------------------------
    const query = searchParams.get("q") ?? "";
    const currentId = Number(searchParams.get("id") ?? 0);

    // ------------------------------------------------
    // Fetch phones (DB filtering first)
    // ------------------------------------------------
    const phones = await db.phoneModel.findMany({
      where: query
        ? {
            OR: [
              {
                name: {
                  contains: query,
                  mode: "insensitive",
                },
              },
              {
                brand: {
                  name: {
                    contains: query,
                    mode: "insensitive",
                  },
                },
              },
            ],
          }
        : undefined,

      take: 20,

      select: {
        id: true,
        name: true,
        slug: true,
        cardImage: true,
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
    // Find current phone
    // ------------------------------------------------
    const currentPhone = phones.find((p) => p.id === currentId);

    // ------------------------------------------------
    // Fuse search
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
    // Smart ranking
    // ------------------------------------------------
    results = results
      .filter((p) => p.id !== currentId)
      .map((phone) => {
        let rank = 0;

        rank += (1 - phone._score) * 50;

        if (currentPhone && phone.brand.name === currentPhone.brand.name) {
          rank += 20;
        }

        rank += Math.max(0, 20 - phone.name.length);

        return {
          ...phone,
          _rank: rank,
        };
      })
      .sort((a, b) => b._rank - a._rank);

    // ------------------------------------------------
    // Return suggestions
    // ------------------------------------------------
    return NextResponse.json(results.slice(0, 6));
  } catch (error) {
    console.error("Suggestions error:", error);
    return NextResponse.json([]);
  }
}