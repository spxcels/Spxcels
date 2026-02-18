import { NextResponse } from "next/server";
import { prisma } from "@spxcel/db";

export async function GET() {
  try {
    const devices = await prisma.phoneModel.findMany({
      include: {
        brand: true,
        specs: true,
        media: true,
        affiliates: true,
      },
    });

    /* ================= TRENDING SCORE ================= */

    const scored = devices.map((d) => {
      let score = 0;

      // specs boost
      if (d.specs) score += 10;

      // media boost
      score += d.media.length * 2;

      // affiliate boost
      score += d.affiliates.length * 3;

      return {
        id: d.id,
        name: d.name,
        slug: d.slug,
        image: d.image ?? "/images/placeholder.jpg",
        brand: {
          name: d.brand.name,
        },
        score,
        createdAt: d.createdAt,
      };
    });

    /* ================= SORT BY SCORE ================= */

    scored.sort((a, b) => {
      // first by score
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      // fallback → newest first
      return (
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime()
      );
    });

    return NextResponse.json({
      devices: scored,
    });
  } catch (error) {
    console.error("❌ /api/devices error:", error);

    return NextResponse.json(
      { error: "Failed to load devices", devices: [] },
      { status: 500 }
    );
  }
}
