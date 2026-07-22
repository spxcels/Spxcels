import { prisma } from "@spxcel/db";

import { mapPhoneModel } from "@/features/phones/mappers/phone";

import type { PhoneModel } from "@/features/phones/types";

export async function getPhone(
  slug: string,
): Promise<PhoneModel | null> {
  const model = await prisma.phoneModel.findUnique({
    where: {
      slug,
    },
    include: {
      brand: true,
      specs: true,
    },
  });

  if (!model) {
    return null;
  }

  return mapPhoneModel(model);
}