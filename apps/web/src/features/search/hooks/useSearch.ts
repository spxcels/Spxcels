"use client";

import { useCallback, useEffect, useState } from "react";

import { search } from "../api/search";
import type { SearchResult } from "../types";

export function useSearch() {
  const [open, setOpen] = useState(false);

  const [query, setQuery] = useState("");

  const [results, setResults] = useState<SearchResult[]>([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const openDialog = useCallback(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      setResults([]);
      setLoading(false);
      setError(null);
      return;
    }

    let cancelled = false;

    const timeout = setTimeout(async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await search({
          query: trimmedQuery,
        });

        if (!cancelled) {
          setResults(response.results);
        }
      } catch (err) {
        if (!cancelled) {
          console.error(err);
          setError("Failed to search.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }, 300);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
        setOpen(true);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, []);

  return {
    open,
    openDialog,
    close,

    query,
    setQuery,

    results,

    loading,

    error,
  };
}