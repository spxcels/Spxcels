"use client";

import { useEffect } from "react";

import SearchButton from "./SearchButton";
import ThemeToggle from "./ThemeToggle";

import SearchDialog from "@/features/search/components/SearchDialog";
import { useSearch } from "@/features/search/hooks/useSearch";

export default function DesktopActions() {
  const {
    open,
    openDialog,
    close,

    query,
    setQuery,

    results,

    loading,

    error,
  } = useSearch();

  useEffect(() => {
    console.log("Dialog open:", open);
  }, [open]);

  return (
    <>
      <div className="hidden items-center gap-3 md:flex">
        <SearchButton
          onClick={() => {
            console.log("Calling openDialog()");
            openDialog();
          }}
        />

        <ThemeToggle />
      </div>

      <SearchDialog
        open={open}
        query={query}
        results={results}
        loading={loading}
        error={error}
        onClose={close}
        onQueryChange={setQuery}
      />
    </>
  );
}