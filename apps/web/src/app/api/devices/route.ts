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

    const scored = devices.map((d) => {
      let score = 0;

      if (d.specs) score += 10;
      score += d.media.length * 2;
      score += d.affiliates.length * 3;

      /* ================= NORMALIZE SPECS ================= */
      const normalizedSpecs: Record<string, string> = {};

      const sections =
        (d.specs as any)?.specs?.sections ||
        (d.specs as any)?.sections ||
        [];

      sections.forEach((section: any) => {
        section.rows?.forEach((row: any) => {
          if (!row?.label) return;

          const value =
            row.values
              ?.map((v: any) => v?.text)
              .filter(Boolean)
              .join(", ") || "-";

          normalizedSpecs[row.label] = value;
        });
      });

      return {
        id: d.id,
        name: d.name,
        slug: d.slug,
        image: d.cardImage ?? "/images/placeholder.jpg",
        brand: d.brand?.name ?? "Unknown",
        specs: normalizedSpecs,
        score,
        createdAt: d.createdAt,
      };
    });

    scored.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;

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