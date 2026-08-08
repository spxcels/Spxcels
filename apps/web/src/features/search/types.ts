export interface SearchBrand {
  id: number;
  name: string;
  slug: string;
}

export interface SearchResult {
  id: number;
  name: string;
  slug: string;
  cardImage: string | null;
  brand: SearchBrand;
}

export interface SearchResponse {
  results: SearchResult[];
}
