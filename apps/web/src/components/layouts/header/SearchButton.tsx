"use client";

import { Search } from "lucide-react";
import { motion } from "motion/react";

interface SearchButtonProps {
  mobile?: boolean;
  onClick: () => void;
}

export default function SearchButton({
  mobile = false,
  onClick,
}: SearchButtonProps) {
  function handleClick() {
    console.log("🔍 Search button clicked");
    onClick();
  }

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className={
        mobile
          ? "flex h-12 w-full items-center gap-3 rounded-2xl border border-border/50 bg-background/60 px-4 text-sm text-muted-foreground backdrop-blur-xl transition-colors hover:bg-muted"
          : "hidden h-10 items-center gap-3 rounded-xl border border-border/50 bg-background/60 px-4 text-sm text-muted-foreground backdrop-blur-xl transition-colors hover:bg-muted md:flex"
      }
    >
      <Search
        size={mobile ? 18 : 16}
        className="shrink-0"
      />

      <span className="flex-1 text-left">
        Search phones, brands and news...
      </span>

      {!mobile && (
        <kbd className="ml-2 rounded-md border border-border bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
          Ctrl K
        </kbd>
      )}
    </motion.button>
  );
}