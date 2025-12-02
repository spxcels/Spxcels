import { NextResponse } from "next/server";
import prisma from "@spxcel/db";

export async function GET() {
  try {
    const devices = await prisma.phoneModel.findMany({
      include: {
        brand: true,
        specs: true,
      },
      orderBy: { name: "asc" },
    });

    const results = devices.map((d) => ({
      id: d.id,
      name: d.name,
      image: d.image ?? "/images/placeholder.jpg",
      brand: d.brand.name,
      specs: {
        OS: d.specs?.os ?? "-",
        Chipset: d.specs?.chipset ?? "-",
        CPU: d.specs?.cpu ?? "-",
        GPU: d.specs?.gpu ?? "-",
        Display: d.specs?.displaySize ?? "-",
        Camera: d.specs?.mainCamera ?? "-",
        Battery: d.specs?.batteryCapacity ?? "-",
        Price: "-",
      },
    }));

    return NextResponse.json({ results });
  } catch (error) {
    console.error("❌ /api/devices error:", error);
    return NextResponse.json(
      { error: "Failed to load devices", results: [] },
      { status: 500 }
    );
  }
}
