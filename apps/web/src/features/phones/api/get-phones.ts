import { prisma } from "@spxcel/db";

import { mapPhoneModel } from "@/features/phones/mappers/phone";

import type { PhoneModel } from "@/features/phones/types";

export interface PhoneBrand {
  id: number;
  name: string;
  slug: string;
}

export interface GetPhonesResult {
  brands: PhoneBrand[];
  models: PhoneModel[];
}

export async function getPhones(): Promise<GetPhonesResult> {
  const [brands, models] = await Promise.all([
    prisma.phoneBrand.findMany({
      orderBy: {
        name: "asc",
      },
    }),

    prisma.phoneModel.findMany({
      include: {
        brand: true,
        specs: true,
      },
      orderBy: {
        name: "asc",
      },
    }),
  ]);

  return {
    brands,
    models: models.map(mapPhoneModel),
  };
}