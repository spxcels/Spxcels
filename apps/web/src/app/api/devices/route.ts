import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma"; // make sure you have prisma client setup

export async function GET() {
  try {
    const devices = await prisma.phoneModel.findMany({
      include: {
        brand: true,
        specs: true,
      },
      orderBy: { name: "asc" },
    });

    // Map to frontend-friendly structure
    const results = devices.map((d) => ({
      id: d.id,
      name: d.name,
      image: d.image ?? "/images/placeholder.jpg", // fallback if no image
      brand: d.brand.name,
      specs: {
        OS: d.specs?.os ?? "-",
        Chipset: d.specs?.chipset ?? "-",
        CPU: d.specs?.cpu ?? "-",
        GPU: d.specs?.gpu ?? "-",
        Display: d.specs?.displaySize ?? "-",
        Camera: d.specs?.mainCamera ?? "-",
        Battery: d.specs?.batteryCapacity ?? "-",
        Price: "-", // optional: you can fill from AffiliateLink later
      },
    }));

    return NextResponse.json({ results });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ results: [] }, { status: 500 });
  }
}
