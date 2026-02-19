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

      // 🔥 Normalize specs into flat key/value object
      const normalizedSpecs: Record<string, string> = {};

      if (d.specs) {
        Object.entries(d.specs).forEach(([key, value]) => {
          if (value !== null && value !== undefined) {
            normalizedSpecs[key] = String(value);
          }
        });
      }

      return {
        id: d.id,
        name: d.name,
        slug: d.slug,
        image: d.image ?? "/images/placeholder.jpg",
        brand: d.brand?.name ?? "Unknown",
        specs: normalizedSpecs, // ✅ RETURN SPECS
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
