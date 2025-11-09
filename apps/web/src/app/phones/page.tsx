import prisma from "../../lib/prisma";
import PhonesPage from "./PhonesPage";

export default async function Page() {
  const brands = await prisma.phoneBrand.findMany({
    orderBy: { name: "asc" },
  });

  const models = await prisma.phoneModel.findMany({
    include: {
      brand: true,
    },
    orderBy: { name: "asc" },
  });

  // ✅ Send colors + variants directly
  const modelsWithDisplay = models.map((model) => ({
    id: model.id,
    name: model.name,
    slug: model.slug,
    image: model.image,
    colors: model.colors,       // <-- now directly accessible
    variants: model.variants,   // same
    brandId: model.brandId,
    brand: model.brand,
  }));

  return <PhonesPage brands={brands} models={modelsWithDisplay} />;
}
