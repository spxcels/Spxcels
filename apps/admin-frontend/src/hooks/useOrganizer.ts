import { useMemo, useState } from "react";

import { previewSpecifications } from "@/api/organizer";

import type {
  OrganizerResult,
} from "@/pages/products/phones/organizer/types";

export function useOrganizer(
  raw: string,
) {
  const [result, setResult] =
    useState<OrganizerResult | null>(
      null,
    );

  const [isOrganizing, setIsOrganizing] =
    useState(false);

  const canOrganize =
    useMemo(
      () => raw.trim().length > 0,
      [raw],
    );

  async function organize() {
    if (!canOrganize) {
      return;
    }

    setIsOrganizing(true);

    try {
      const parsed =
        await previewSpecifications(
          raw,
        );

      setResult(parsed);
    } finally {
      setIsOrganizing(false);
    }
  }

  function reset() {
    setResult(null);
  }

  return {
    result,

    isOrganizing,

    canOrganize,

    organize,

    reset,
  };
}