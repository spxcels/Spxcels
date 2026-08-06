import { mapPhoneModel } from "@/features/phones/mappers/phone";

import type { PhoneModel } from "@/features/phones/types";

export async function getPhone(
  slug: string,
): Promise<PhoneModel | null> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/phones/${slug}`,
      {
        headers: {
          Accept: "application/json",
        },
        cache: "no-store",
      },
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    return mapPhoneModel(data);
  } catch (error) {
    console.error("Failed to load phone details:", error);

    return null;
  }
}