"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useScroll, useTransform } from "framer-motion";

import Hero from "@/app/home/components/hero";
import FeaturedPhone from "@/app/home/components/featuredphone";
import TrendingProducts from "@/app/home/components/trendingproducts";
import FeaturedComparison from "@/app/home/components/featuredcomparisons";
import PopularBrands from "@/app/home/components/popularbrands";
import SupportSection from "@/app/home/components/supportsection";

import ScrollReveal from "@/components/ui/ScrollReveal";
import CinematicBackground from "@/components/ui/CinematicBackground";
import Section from "@/components/ui/Section";

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

export default function HomePage() {
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
      } catch (error) {
        console.error("Search failed:", error);
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

    el?.scrollIntoView({
      block: "nearest",
    });
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
        <Hero
          query={query}
          setQuery={setQuery}
          open={open}
          setOpen={setOpen}
          combinedResults={combinedResults}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          listRef={listRef}
          glowY={glowY}
          glowOpacity={glowOpacity}
          navigateToResult={navigateToResult}
        />

        {/* ================= CONTENT ================= */}

        <Section>
          <FeaturedPhone />
        </Section>

        <Section layered>
          <TrendingProducts />
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

        <Section>
          <ScrollReveal>
            <SupportSection />
          </ScrollReveal>
        </Section>
      </div>
    </div>
  );
}