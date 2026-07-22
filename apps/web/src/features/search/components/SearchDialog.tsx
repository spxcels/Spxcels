"use client";

import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

import type { SearchResult } from "../types";

interface SearchDialogProps {
  open: boolean;
  query: string;
  results: SearchResult[];
  loading: boolean;
  error: string | null;
  onClose: () => void;
  onQueryChange: (value: string) => void;
}

export default function SearchDialog({
  open,
  query,
  results,
  loading,
  error,
  onClose,
  onQueryChange,
}: SearchDialogProps) {
  if (!open) {
    return null;
  }

  return (
    <>
      {/* Backdrop */}

      <div
        onClick={onClose}
        className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm"
      />

      {/* Dialog */}

      <div className="fixed left-1/2 top-24 z-[9999] w-full max-w-2xl -translate-x-1/2 px-4">
        <div className="overflow-hidden rounded-3xl border border-border bg-background shadow-2xl">
          <div className="border-b border-border p-4">
            <SearchInput
              value={query}
              onChange={onQueryChange}
            />
          </div>

          <div className="max-h-[420px] overflow-y-auto">
            {!query.trim() ? (
              <div className="flex items-center justify-center py-16 text-sm text-muted-foreground">
                Start typing to search...
              </div>
            ) : loading ? (
              <div className="flex items-center justify-center py-16 text-sm text-muted-foreground">
                Searching...
              </div>
            ) : error ? (
              <div className="flex items-center justify-center py-16 text-sm text-destructive">
                {error}
              </div>
            ) : results.length === 0 ? (
              <div className="flex items-center justify-center py-16 text-sm text-muted-foreground">
                No results found.
              </div>
            ) : (
              <SearchResults
                results={results}
                onSelect={onClose}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}