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

      if (d.specs) score += 10;
      score += d.media.length * 2;
      score += d.affiliates.length * 3;

      return {
        id: d.id,
        name: d.name,
        slug: d.slug,
        image: d.image ?? "/images/placeholder.jpg",

        // 🔥 FIXED (string, not object)
        brand: d.brand.name,

        score,
        createdAt: d.createdAt,
      };
    });

    /* ================= SORT ================= */

    scored.sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      return (
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime()
      );
    });

    return NextResponse.json({
      results: scored,
    });
  } catch (error) {
    console.error("❌ /api/devices error:", error);

    return NextResponse.json(
      { error: "Failed to load devices", results: [] },
      { status: 500 }
    );
  }
}
