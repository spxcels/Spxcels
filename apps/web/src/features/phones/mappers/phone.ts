import { getQuickSpecs } from "@/features/phones/utils/getQuickSpecs";

import type {
  PhoneModel,
  PhoneSpecs,
} from "@/features/phones/types";

type ApiPhoneModel = {
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
    specs: unknown;
  } | null;
};

export function mapPhoneSpecs(
  value: unknown,
): PhoneSpecs | null {
  if (value == null) {
    return null;
  }

  return value as PhoneSpecs;
}

export function mapPhoneModel(
  model: ApiPhoneModel,
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
