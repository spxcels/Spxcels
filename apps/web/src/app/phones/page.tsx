import { prisma } from "@spxcel/db";
import PhonesPage from "./PhonesPage";

export default async function Page() {
  const brands = await prisma.phoneBrand.findMany({
    orderBy: { name: "asc" },
  });

  const models = await prisma.phoneModel.findMany({
    include: {
      brand: {
        select: { id: true, name: true },
      },
    },
    orderBy: { name: "asc" },
  });

  const modelsWithDisplay = models.map((m) => ({
    id: m.id,
    name: m.name,
    slug: m.slug,
    image: m.image || null,
    colors: m.colors || [],
    variants: m.variants || [],
    brandId: m.brandId,
    brand: {
      id: m.brand?.id ?? 0,
      name: m.brand?.name ?? "Unknown",
    },
  }));

  return <PhonesPage brands={brands} models={modelsWithDisplay} />;
}
