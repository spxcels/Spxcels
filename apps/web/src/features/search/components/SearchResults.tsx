"use client";

import SearchResultItem from "./SearchResultItem";

import type { SearchResult } from "@/features/search/types";

interface SearchResultsProps {
  results: SearchResult[];
  onSelect?: () => void;
}

export default function SearchResults({
  results,
  onSelect,
}: SearchResultsProps) {
  return (
    <div className="p-2">
      {results.map((result) => (
        <SearchResultItem
          key={result.id}
          result={result}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}