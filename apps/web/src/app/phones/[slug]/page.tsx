import { prisma } from "@spxcel/db";
import PhoneDetailsClient from "./PhoneDetailsClient";

export async function generateStaticParams() {
  const models = await prisma.phoneModel.findMany({
    select: { slug: true },
  });
  return models.map((m) => ({ slug: m.slug }));
}

export default async function PhonePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) {
    console.error("❌ Missing slug in params:", params);
    return (
      <div className="p-10 text-center text-red-500">
        ❌ Invalid URL — missing slug.
      </div>
    );
  }

  const model = await prisma.phoneModel.findUnique({
    where: { slug },
    include: {
      brand: true,
      specs: true,
      media: true,
      affiliates: true,
    },
  });

  if (!model) {
    return (
      <div className="p-10 text-center text-red-500">
        ❌ Phone not found.
      </div>
    );
  }

  const formattedModel = {
    id: model.id,
    name: model.name,
    slug: model.slug,
    image: model.image || null,
    colors: model.colors || [],
    variants: model.variants || [],
    brand: {
      id: model.brand.id,
      name: model.brand.name,
      slug: model.brand.slug,
    },
    specs: model.specs || null,
    media: model.media?.map((m) => ({
      id: m.id,
      url: m.url,
      type: m.type,
    })),
    affiliates: model.affiliates?.map((a) => ({
      id: a.id,
      name: a.storeName,
      url: a.url,
      price: a.price || "",
      logo: "",
    })),
  };

  return <PhoneDetailsClient model={formattedModel} />;
}
