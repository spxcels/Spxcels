"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Noto_Sans_JP } from "next/font/google";
import { Typewriter } from "react-simple-typewriter";

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
  const [greeting, setGreeting] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLUListElement>(null);

  // Auto-focus input
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Greeting & time
  useEffect(() => {
    const updateTimeAndGreeting = () => {
      const now = new Date();
      const hour = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      if (hour >= 5 && hour < 12) setGreeting("Good morning");
      else if (hour >= 12 && hour < 18) setGreeting("Good afternoon");
      else setGreeting("Good evening");

      setCurrentTime(
        `${hour.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );
    };

    updateTimeAndGreeting();
    const interval = setInterval(updateTimeAndGreeting, 1000);
    return () => clearInterval(interval);
  }, []);

  // Fetch search results
  useEffect(() => {
    if (!searchQuery) {
      setSearchResults([]);
      setActiveIndex(-1);
      setDropdownOpen(false);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search?search=${encodeURIComponent(searchQuery)}`);
        const data = await res.json();
        setSearchResults(data.results || []);
        setActiveIndex(-1);
        setDropdownOpen(true);
      } catch (err) {
        console.error("Search fetch error:", err);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        !inputRef.current?.contains(e.target as Node) &&
        !resultsRef.current?.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
        setActiveIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!searchResults.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % searchResults.length);
      scrollToActive();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + searchResults.length) % searchResults.length);
      scrollToActive();
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0) {
        const item = searchResults[activeIndex];
        if (item.type === "model" && item.slug) {
          window.location.href = `/phones/${item.slug}`;
        } else if (item.type === "brand") {
          window.location.href = `/phones?brand=${encodeURIComponent(item.name)}`;
        }
      }
    } else if (e.key === "Escape") {
      setDropdownOpen(false);
      setActiveIndex(-1);
    }
  };

  const scrollToActive = () => {
    if (resultsRef.current && activeIndex >= 0) {
      const item = resultsRef.current.children[activeIndex] as HTMLElement;
      if (item) item.scrollIntoView({ block: "nearest" });
    }
  };

  const highlight = (text: string) => {
    if (!searchQuery) return text;
    const regex = new RegExp(`(${searchQuery})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <span key={i} className="bg-yellow-300 text-black px-1 rounded">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const modelResults = searchResults.filter((r) => r.type === "model");
  const brandResults = searchResults.filter((r) => r.type === "brand");

  return (
    <div className={`${notoJP.variable} font-sans min-h-screen relative flex flex-col`}>
      <div className="flex flex-col items-center justify-center px-6 sm:px-20 gap-10 flex-1 bg-background text-foreground relative pt-20">

        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-bold text-center text-foreground"
        >
          Spxcel
        </motion.h1>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-center"
        >
          <span className="font-semibold">{greeting}</span>, welcome to Spex!{" "}
          <span className="font-mono">{currentTime}</span>
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-2xl flex flex-col gap-2"
        >
          <div className="relative w-full">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search for a phone or brand..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full pl-14 pr-6 py-4 rounded-full border border-border shadow-sm focus:outline-none focus:ring-2 focus:ring-ring text-lg bg-card text-card-foreground placeholder-muted-foreground transition duration-200"
            />
          </div>

          {dropdownOpen && (
            <motion.ul
              ref={resultsRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full bg-card border border-border rounded-xl shadow-lg max-h-96 overflow-y-auto divide-y divide-border"
            >
              {brandResults.length > 0 && (
                <li className="px-6 py-2 text-sm font-semibold text-muted-foreground bg-muted/40">
                  Brands
                </li>
              )}
              {brandResults.map((brand, index) => (
                <li
                  key={`brand-${brand.id}`}
                  className={`cursor-pointer transition ${index === activeIndex ? "bg-primary/20" : "hover:bg-primary/10"
                    }`}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <Link
                    href={`/phones?brand=${encodeURIComponent(brand.name)}`}
                    className="block px-6 py-3 text-foreground hover:underline"
                    onClick={() => {
                      setSearchQuery("");
                      setDropdownOpen(false);
                    }}
                  >
                    {highlight(brand.name)}
                  </Link>
                </li>
              ))}

              {modelResults.length > 0 && (
                <li className="px-6 py-2 text-sm font-semibold text-muted-foreground bg-muted/40">
                  Models
                </li>
              )}
              {modelResults.map((phone, index) => (
                <li
                  key={`model-${phone.id}`}
                  className={`cursor-pointer transition ${index === activeIndex ? "bg-primary/20" : "hover:bg-primary/10"
                    }`}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <div className="flex flex-col px-6 py-3">
                    <Link
                      href={`/phones/${phone.slug}`}
                      className="text-base font-medium text-foreground hover:underline"
                      onClick={() => {
                        setSearchQuery("");
                        setDropdownOpen(false);
                      }}
                    >
                      {highlight(phone.name)}
                    </Link>
                    {phone.brand && (
                      <Link
                        href={`/phones?brand=${encodeURIComponent(phone.brand.name)}`}
                        className="text-sm text-muted-foreground hover:underline"
                        onClick={() => {
                          setSearchQuery("");
                          setDropdownOpen(false);
                        }}
                      >
                        {highlight(phone.brand.name)}
                      </Link>
                    )}
                  </div>
                </li>
              ))}

              {searchResults.length === 0 && (
                <li className="px-6 py-3 text-muted-foreground">No results found.</li>
              )}
            </motion.ul>
          )}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex gap-4 flex-col sm:flex-row"
        >
          <Link
            href="/phones"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/80 transition text-center"
          >
            All Phones
          </Link>

          <Link
            href="/compare"
            className="px-6 py-3 bg-muted text-muted-foreground rounded-full hover:bg-muted/80 transition text-center"
          >
            Compare
          </Link>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl text-center mt-8 px-4"
        >
          <motion.p
            className="italic text-2xl sm:text-3xl font-bold drop-shadow-lg text-foreground"
            animate={{ y: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Typewriter
              words={[
                "Spex – See beyond the specs. Explore, compare, and choose the perfect phone for you.",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </motion.p>

          <motion.p
            className="mt-3 text-lg sm:text-xl font-medium drop-shadow-lg text-foreground/80"
            animate={{ y: [0, -1, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
          >
            Your guide to smarter phone decisions, bringing clarity to the endless choices in the mobile world.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
