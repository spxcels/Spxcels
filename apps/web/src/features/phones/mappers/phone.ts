import { getQuickSpecs } from "@/features/phones/utils/getQuickSpecs";

import type {
  PhoneModel,
  PhoneSpecs,
} from "@/features/phones/types";

import type { Prisma } from "@spxcel/db";

type PrismaPhoneModel = {
  id: number;
  name: string;
  slug: string;
  cardImage: string | null;

  colors: string[];
  variants: string[];

  brand: {
    id: number;
    name: string;
    slug: string;
  };

  specs: {
    specs: Prisma.JsonValue | null;
  } | null;
};

export function mapPhoneSpecs(
  value: Prisma.JsonValue | null,
): PhoneSpecs | null {
  if (value == null) {
    return null;
  }

  // Prisma stores this as JsonValue. We know the structure
  // matches PhoneSpecs, so cast through unknown.
  return value as unknown as PhoneSpecs;
}

export function mapPhoneModel(
  model: PrismaPhoneModel,
): PhoneModel {
  const specs = mapPhoneSpecs(
    model.specs?.specs ?? null,
  );

  return {
    id: model.id,
    name: model.name,
    slug: model.slug,

    brand: {
      id: model.brand.id,
      name: model.brand.name,
      slug: model.brand.slug,
    },

    cardImage: model.cardImage,

    specs,

    colors: model.colors,

    variants: model.variants,

    quickSpecs: getQuickSpecs(specs),
  };
}