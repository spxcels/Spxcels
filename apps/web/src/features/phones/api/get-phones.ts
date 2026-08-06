import type { PhoneModel } from "@/features/phones/types";

import type {
  GetPhonesResult,
  PhoneBrand,
  PhoneListResponse,
} from "./types";

export async function getPhones(): Promise<GetPhonesResult> {
  const [brandsResponse, phonesResponse] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/brands`, {
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    }),

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/phones`, {
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    }),
  ]);

  if (!brandsResponse.ok || !phonesResponse.ok) {
    throw new Error("Failed to load phones.");
  }

  const brands: PhoneBrand[] = await brandsResponse.json();
  const phones: PhoneListResponse = await phonesResponse.json();

  const models: PhoneModel[] = phones.items.map((phone) => ({
    id: phone.id,
    name: phone.name,
    slug: phone.slug,

    brand: {
      id: phone.brand.id,
      name: phone.brand.name,
      slug: phone.brand.slug,
    },

    cardImage: phone.cardImage,

    specs: null,

    colors: [],
    variants: [],

    quickSpecs: [],
  }));

  return {
    brands,
    models,
  };
}