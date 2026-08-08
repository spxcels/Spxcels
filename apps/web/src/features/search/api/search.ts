import type { SearchResponse } from "../types";

export interface SearchParams {
  query: string;
  limit?: number;
}

export async function search({
  query,
  limit = 8,
}: SearchParams): Promise<SearchResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/search?query=${encodeURIComponent(
      query,
    )}&limit=${limit}`,
    {
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to search phones.");
  }

  return response.json();
}
