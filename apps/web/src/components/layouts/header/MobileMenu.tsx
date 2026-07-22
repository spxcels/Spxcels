"use client";

import { AnimatePresence, motion } from "motion/react";

import MobileNavigation from "./MobileNavigation";
import SearchButton from "./SearchButton";

import SearchDialog from "@/features/search/components/SearchDialog";
import { useSearch } from "@/features/search/hooks/useSearch";

interface MobileMenuProps {
  open: boolean;
  onNavigate: () => void;
}

export default function MobileMenu({
  open,
  onNavigate,
}: MobileMenuProps) {
  const {
    open: searchOpen,
    openDialog,
    close,

    query,
    setQuery,

    results,

    loading,

    error,
  } = useSearch();

  function handleSearchClose() {
    close();
    onNavigate();
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
              y: -12,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              y: 0,
            }}
            exit={{
              opacity: 0,
              height: 0,
              y: -12,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="overflow-hidden border-t border-border/40 bg-background/80 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4">
              <SearchButton
                mobile
                onClick={openDialog}
              />

              <MobileNavigation
                onNavigate={onNavigate}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchDialog
        open={searchOpen}
        query={query}
        results={results}
        loading={loading}
        error={error}
        onClose={handleSearchClose}
        onQueryChange={setQuery}
      />
    </>
  );
}