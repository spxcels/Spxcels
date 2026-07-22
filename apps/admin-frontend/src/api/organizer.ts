import api from "./axios";

import type {
  OrganizerResult,
  OrganizerSection,
} from "@/pages/products/phones/spec-organizer/types";

/* =====================================================
   PREVIEW SPECIFICATIONS
===================================================== */

type OrganizerRequest = {
  raw: string;
};

type OrganizerApiResponse = {
  raw?: string;

  sections: OrganizerSection[];

  warnings: string[];

  errors: string[];
};

export async function previewSpecifications(
  raw: string,
): Promise<OrganizerResult> {
  const { data } =
    await api.post<OrganizerApiResponse>(
      "/products/phones/organizer/preview",
      {
        raw,
      } satisfies OrganizerRequest,
    );

  return {
    raw,
    ...data,
  };
}

/* =====================================================
   GET SAVED SPECIFICATIONS
===================================================== */

export async function getSpecifications(
  modelId: number,
): Promise<OrganizerResult | null> {
  const { data } =
    await api.get<OrganizerApiResponse>(
      `/products/phones/specifications/${modelId}`,
    );

  if (!data) {
    return null;
  }

  return {
    raw: data.raw ?? "",
    sections: data.sections,
    warnings: data.warnings,
    errors: data.errors,
  };
}

/* =====================================================
   SAVE ORGANIZED SPECIFICATIONS
===================================================== */

type SaveSpecificationsRequest = {
  phoneModelId: number;

  raw: string;

  sections: OrganizerSection[];

  warnings: string[];

  errors: string[];
};

export async function saveSpecifications(
  modelId: number,
  dto: SaveSpecificationsRequest,
) {
  const { data } =
    await api.put(
      `/products/phones/specifications/${modelId}`,
      dto,
    );

  return data;
}