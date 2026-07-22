export type SearchResultType =
  | "phone"
  | "brand"
  | "news";

export interface SearchResult {
  id: number;

  title: string;

  subtitle: string;

  image?: string;

  type: SearchResultType;

  url: string;
}

export interface SearchResponse {
  results: SearchResult[];
}