import { NextResponse } from "next/server";
import db from "@spxcel/db";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const brand = searchParams.get("brand");
    const currentId = searchParams.get("id");

    if (!brand) {
      return NextResponse.json([]);
    }

    const phones = await db.phoneModel.findMany({
      where: {
        brand: {
          name: brand,
        },
        NOT: {
          id: Number(currentId),
        },
      },
      take: 4,
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

    return NextResponse.json(phones);
  } catch (error) {
    console.error("Suggestions error:", error);
    return NextResponse.json([]);
  }
}