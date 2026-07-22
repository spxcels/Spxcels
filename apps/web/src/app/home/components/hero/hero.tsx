"use client";

import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { motion, MotionValue } from "framer-motion";

interface SearchResult {
  id: number;
  name: string;
  slug?: string;
  brand?: {
    id: number;
    name: string;
    slug: string;
  };
  type: "model" | "brand";
}

interface HeroProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;

  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;

  combinedResults: SearchResult[];

  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;

  listRef: React.RefObject<HTMLDivElement | null>;

  glowY: MotionValue<number>;
  glowOpacity: MotionValue<number>;

  navigateToResult: (item: SearchResult) => void;
}

export default function Hero({
  query,
  setQuery,
  open,
  setOpen,
  combinedResults,
  activeIndex,
  setActiveIndex,
  listRef,
  glowY,
  glowOpacity,
  navigateToResult,
}: HeroProps) {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden px-6 py-16 md:py-24">
      <motion.div
        style={{
          y: glowY,
          opacity: glowOpacity,
        }}
        className="pointer-events-none absolute inset-0"
      >
        {/* Background reserved for future effects */}
      </motion.div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold sm:text-6xl"
        >
          Spxcel
        </motion.h1>

        <p className="mt-3 text-lg text-muted-foreground">
          Search. Compare. Choose your next phone.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mt-8 w-full max-w-2xl"
        >
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

            <input
              type="text"
              placeholder="Search phones or brands..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-full border border-border bg-card py-4 pl-12 pr-4"
              onKeyDown={(e) => {
                if (!open || combinedResults.length === 0) return;

                switch (e.key) {
                  case "ArrowDown":
                    e.preventDefault();
                    setActiveIndex((prev) =>
                      prev < combinedResults.length - 1 ? prev + 1 : 0
                    );
                    break;

                  case "ArrowUp":
                    e.preventDefault();
                    setActiveIndex((prev) =>
                      prev > 0 ? prev - 1 : combinedResults.length - 1
                    );
                    break;

                  case "Escape":
                    setOpen(false);
                    setActiveIndex(-1);
                    break;

                  case "Enter":
                    if (activeIndex >= 0) {
                      e.preventDefault();
                      navigateToResult(combinedResults[activeIndex]);
                    }
                    break;
                }
              }}
            />
          </div>

          {open && (
            <div
              ref={listRef}
              className="mt-2 max-h-96 overflow-y-auto rounded-xl border bg-card text-left shadow-lg"
            >
              {combinedResults.map((item, index) => (
                <Link
                  key={`${item.type}-${item.id}`}
                  data-index={index}
                  href={
                    item.type === "brand"
                      ? `/phones?brand=${encodeURIComponent(item.name)}`
                      : `/phones/${item.slug}`
                  }
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-2 transition-colors hover:bg-muted ${
                    activeIndex === index ? "bg-muted" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </motion.div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/phones"
            className="rounded-full bg-primary px-6 py-3 text-primary-foreground transition hover:opacity-90"
          >
            All Phones
          </Link>

          <Link
            href="/compare"
            className="rounded-full bg-muted px-6 py-3 text-muted-foreground transition hover:opacity-90"
          >
            Compare
          </Link>
        </div>
      </div>
    </section>
  );
}