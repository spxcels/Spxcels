import axios from "@/lib/api";

import type { SearchResponse } from "../types";

export interface SearchParams {
  query: string;
  limit?: number;
}

export async function search({
  query,
  limit = 8,
}: SearchParams): Promise<SearchResponse> {
  const { data } = await axios.get<SearchResponse>("/search", {
    params: {
      query,
      limit,
    },
  });

  return data;
}