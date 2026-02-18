"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { motion, useScroll, useTransform } from "framer-motion";
import { Noto_Sans_JP } from "next/font/google";

import AutoHeroPhone from "@/components/home/AutoHeroPhone";
import TrendingPhones from "@/components/home/TrendingPhones";
import FeaturedComparison from "@/components/home/FeaturedComparison";
import PopularBrands from "@/components/home/PopularBrands";

import ScrollReveal from "@/components/ui/ScrollReveal";
import CinematicBackground from "@/components/ui/CinematicBackground";
import Section from "@/components/ui/Section";

const notoJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto",
});

interface SearchResult {
  id: number;
  name: string;
  slug?: string;
  brand?: { id: number; name: string; slug: string };
  type: "model" | "brand";
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] =
    useState<SearchResult[]>([]);
  const [dropdownOpen, setDropdownOpen] =
    useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const { scrollYProgress } = useScroll();

  const glowY = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, 0.3]
  );

  /* ================= SEARCH ================= */

  useEffect(() => {
    if (!searchQuery) {
      setSearchResults([]);
      setDropdownOpen(false);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        const res = await fetch(
          `/api/search?search=${encodeURIComponent(searchQuery)}`
        );

        const data = await res.json();
        setSearchResults(data.results || []);
        setDropdownOpen(true);
      } catch (err) {
        console.error("Search failed", err);
      }
    }, 250);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  const brandResults = searchResults.filter(
    (r) => r.type === "brand"
  );

  const modelResults = searchResults.filter(
    (r) => r.type === "model"
  );

  /* ================= UI ================= */

  return (
    <div
      className={`${notoJP.variable} min-h-screen text-foreground relative overflow-hidden`}
    >
      <CinematicBackground />

      <div className="relative z-10">

        {/* ================= HERO ================= */}
        <section className="px-6 min-h-[80vh] flex items-center py-16 md:py-24 relative overflow-hidden">

          {/* GLOW */}
          <motion.div
            style={{ y: glowY, opacity: glowOpacity }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-400/20 blur-[120px] rounded-full" />
            <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-sky-400/20 blur-[120px] rounded-full" />
          </motion.div>

          <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl font-bold"
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
              className="w-full max-w-2xl mt-8"
            >
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />

                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search phones or brands..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full border border-border bg-card/90 backdrop-blur"
                />
              </div>

              {dropdownOpen && (
                <div className="mt-2 bg-card border rounded-xl shadow-lg text-left max-h-96 overflow-y-auto">
                  {brandResults.map((brand) => (
                    <Link
                      key={brand.id}
                      href={`/phones?brand=${encodeURIComponent(
                        brand.name
                      )}`}
                      className="block px-4 py-2 hover:bg-muted"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {brand.name}
                    </Link>
                  ))}

                  {modelResults.map((model) => (
                    <Link
                      key={model.id}
                      href={`/phones/${model.slug}`}
                      className="block px-4 py-2 hover:bg-muted"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {model.name}
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>

            <div className="flex gap-3 mt-6 flex-wrap justify-center">
              <Link
                href="/phones"
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition"
              >
                All Phones
              </Link>

              <Link
                href="/compare"
                className="px-6 py-3 rounded-full bg-muted text-muted-foreground hover:opacity-90 transition"
              >
                Compare
              </Link>
            </div>
          </div>

          {/* HERO BLEND */}
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-background pointer-events-none" />
        </section>

        {/* ================= SECTIONS ================= */}

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

      </div>
    </div>
  );
}
