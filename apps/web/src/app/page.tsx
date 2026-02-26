"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { motion, useScroll, useTransform } from "framer-motion";

import AutoHeroPhone from "@/components/home/AutoHeroPhone";
import TrendingPhones from "@/components/home/TrendingPhones";
import FeaturedComparison from "@/components/home/FeaturedComparison";
import PopularBrands from "@/components/home/PopularBrands";
import SupportSection from "@/components/home/SupportSection";

import ScrollReveal from "@/components/ui/ScrollReveal";
import CinematicBackground from "@/components/ui/CinematicBackground";
import Section from "@/components/ui/Section";

interface SearchResult {
  id: number;
  name: string;
  slug?: string;
  brand?: { id: number; name: string; slug: string };
  type: "model" | "brand";
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const listRef = useRef<HTMLDivElement>(null);

  /* ================= CINEMATIC GLOW ================= */

  const { scrollYProgress } = useScroll();
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  /* ================= SEARCH ================= */

  useEffect(() => {
    const trimmed = query.trim();

    if (!trimmed) {
      setResults([]);
      setOpen(false);
      setActiveIndex(-1);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        const res = await fetch(
          `/api/search?search=${encodeURIComponent(trimmed)}`
        );

        const data = await res.json();
        setResults(data.results || []);
        setOpen(true);
        setActiveIndex(-1);
      } catch (e) {
        console.error("Search failed:", e);
      }
    }, 250);

    return () => clearTimeout(timeout);
  }, [query]);

  /* ================= COMBINED RESULTS ================= */

  const combinedResults = useMemo(() => {
    const brands = results.filter((r) => r.type === "brand");
    const models = results.filter((r) => r.type === "model");
    return [...brands, ...models];
  }, [results]);

  /* ================= AUTO SCROLL ACTIVE ================= */

  useEffect(() => {
    if (!listRef.current || activeIndex < 0) return;

    const el = listRef.current.querySelector(
      `[data-index="${activeIndex}"]`
    ) as HTMLElement | null;

    el?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  /* ================= HELPERS ================= */

  const navigateToResult = (item: SearchResult) => {
    if (item.type === "brand") {
      window.location.href = `/phones?brand=${encodeURIComponent(item.name)}`;
    } else {
      window.location.href = `/phones/${item.slug}`;
    }
  };

  /* ================= UI ================= */

  return (
    <div className="relative min-h-screen overflow-hidden text-foreground">
      <CinematicBackground />

      <div className="relative z-10">
        {/* ================= HERO ================= */}
        <section className="relative flex items-center min-h-[80vh] px-6 py-16 overflow-hidden md:py-24">

          {/* glowing background */}
          <motion.div
            style={{ y: glowY, opacity: glowOpacity }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-purple-400/20 blur-[120px]" />
            <div className="absolute left-1/3 top-20 h-[500px] w-[500px] rounded-full bg-sky-400/20 blur-[120px]" />
          </motion.div>

          <div className="relative z-10 flex flex-col items-center max-w-6xl mx-auto text-center">

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold sm:text-6xl"
            >
              Spxcels
            </motion.h1>

            <p className="mt-3 text-lg text-muted-foreground">
              Search. Compare. Choose your next phone.
            </p>

            {/* SEARCH BOX */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="w-full max-w-2xl mt-8"
            >
              <div className="relative">
                <MagnifyingGlassIcon className="absolute w-5 h-5 -translate-y-1/2 left-4 top-1/2 text-muted-foreground" />

                <input
                  type="text"
                  placeholder="Search phones or brands..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full py-4 pl-12 pr-4 border rounded-full bg-card/90 border-border backdrop-blur"
                  onKeyDown={(e) => {
                    if (!open || combinedResults.length === 0) return;

                    if (e.key === "ArrowDown") {
                      e.preventDefault();
                      setActiveIndex((p) =>
                        p < combinedResults.length - 1 ? p + 1 : 0
                      );
                    }

                    if (e.key === "ArrowUp") {
                      e.preventDefault();
                      setActiveIndex((p) =>
                        p > 0 ? p - 1 : combinedResults.length - 1
                      );
                    }

                    if (e.key === "Escape") {
                      setOpen(false);
                      setActiveIndex(-1);
                    }

                    if (e.key === "Enter" && activeIndex >= 0) {
                      e.preventDefault();
                      navigateToResult(combinedResults[activeIndex]);
                    }
                  }}
                />
              </div>

              {/* DROPDOWN */}
              {open && (
                <div
                  ref={listRef}
                  className="mt-2 overflow-y-auto text-left border shadow-lg max-h-96 rounded-xl bg-card"
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
                      className={`block px-4 py-2 hover:bg-muted ${
                        activeIndex === index ? "bg-muted" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>

            {/* CTA */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <Link
                href="/phones"
                className="px-6 py-3 transition rounded-full bg-primary text-primary-foreground hover:opacity-90"
              >
                All Phones
              </Link>

              <Link
                href="/compare"
                className="px-6 py-3 transition rounded-full bg-muted text-muted-foreground hover:opacity-90"
              >
                Compare
              </Link>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-48 pointer-events-none bg-gradient-to-b from-transparent to-background" />
        </section>

        {/* ================= CONTENT SECTIONS ================= */}

        <Section>
          <AutoHeroPhone />
        </Section>

        <Section layered>
          <TrendingPhones />
        </Section>

        <Section>
          <ScrollReveal>
            <FeaturedComparison />
          </ScrollReveal>
        </Section>

        <Section layered>
          <ScrollReveal>
            <PopularBrands />
          </ScrollReveal>
        </Section>

        {/* ⭐ DONATE / SUPPORT SECTION */}
        <Section>
          <ScrollReveal>
            <SupportSection />
          </ScrollReveal>
        </Section>
      </div>
    </div>
  );
}