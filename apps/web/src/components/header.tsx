"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Menu,
  Sun,
  Moon,
  Search,
  Smartphone,
  Gift,
  ArrowLeftRight,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SearchResult {
  id: number;
  name: string;
  slug?: string;
  brand?: { id: number; name: string; slug: string };
  type: "model" | "brand";
}

const ThemeIcon = ({ isDark }: { isDark: boolean }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return isDark ? <Sun size={18} /> : <Moon size={18} />;

  return (
    <AnimatePresence mode="wait">
      {isDark ? (
        <motion.div
          key="sun"
          initial={{ rotate: 90, opacity: 0, scale: 0 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: -90, opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Sun size={18} />
        </motion.div>
      ) : (
        <motion.div
          key="moon"
          initial={{ rotate: -90, opacity: 0, scale: 0 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Moon size={18} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLUListElement>(null);

  // Load theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      document.documentElement.classList.toggle("dark", newTheme);
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };

  // Debounced search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setDropdownOpen(false);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search?search=${encodeURIComponent(searchQuery)}`);
        const data = await res.json();
        setSearchResults(data.results || []);
        setDropdownOpen(true);
      } catch (e) {
        console.error("Search error:", e);
      }
    }, 400);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        !searchInputRef.current?.contains(e.target as Node) &&
        !resultsRef.current?.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Prevent scroll when mobile search is open
  useEffect(() => {
    document.body.style.overflow = mobileSearchOpen ? "hidden" : "";
  }, [mobileSearchOpen]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!searchResults.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((p) => (p + 1) % searchResults.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((p) => (p - 1 + searchResults.length) % searchResults.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = searchResults[activeIndex] || searchResults[0];
      if (item) {
        if (item.type === "model" && item.slug)
          window.location.href = `/phones/${item.slug}`;
        else if (item.type === "brand")
          window.location.href = `/phones?brand=${encodeURIComponent(item.name)}`;
        setDropdownOpen(false);
      }
    } else if (e.key === "Escape") {
      setDropdownOpen(false);
    }
  };

  const highlight = (text: string) => {
    if (!searchQuery) return text;
    const regex = new RegExp(`(${searchQuery})`, "gi");
    return text.split(regex).map((part, i) =>
      regex.test(part) ? (
        <span key={i} className="bg-yellow-300 text-black px-1 rounded">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const navItems = [
    { name: "Phones", href: "/phones", icon: <Smartphone size={16} /> },
    { name: "Compare", href: "/compare", icon: <ArrowLeftRight size={16} /> },
    { name: "Donate", href: "/donate", icon: <Gift size={16} /> },
  ];

  return (
    <header className="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-md flex items-center justify-center text-white font-bold">
              spX
            </div>
            <span className="hidden sm:block font-semibold text-slate-900 dark:text-slate-100">
              Spxcel
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-1 text-slate-700 dark:text-slate-200 font-medium hover:text-sky-600 dark:hover:text-sky-400"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Search + Theme */}
          <div className="hidden md:flex items-center gap-4 relative">
            <div className="relative w-64">
              <Search size={16} className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search..."
                className="w-full pl-8 pr-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              {dropdownOpen && (
                <motion.ul
                  ref={resultsRef}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute left-0 mt-1 w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md shadow-lg z-50 max-h-80 overflow-y-auto"
                >
                  {searchResults.length ? (
                    searchResults.map((item, idx) => (
                      <li
                        key={`${item.type}-${item.id}`}
                        className={`px-3 py-2 cursor-pointer text-sm ${activeIndex === idx
                            ? "bg-sky-100 dark:bg-slate-700"
                            : "hover:bg-slate-100 dark:hover:bg-slate-700"
                          }`}
                        onMouseEnter={() => setActiveIndex(idx)}
                        onClick={() => {
                          if (item.type === "model" && item.slug)
                            window.location.href = `/phones/${item.slug}`;
                          else if (item.type === "brand")
                            window.location.href = `/phones?brand=${encodeURIComponent(item.name)}`;
                          setDropdownOpen(false);
                        }}
                      >
                        <div className="font-medium">{highlight(item.name)}</div>
                        {item.brand && (
                          <div className="text-xs text-slate-500">{highlight(item.brand.name)}</div>
                        )}
                      </li>
                    ))
                  ) : (
                    <li className="px-3 py-2 text-sm text-slate-500">No results found.</li>
                  )}
                </motion.ul>
              )}
            </div>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <ThemeIcon isDark={isDark} />
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileSearchOpen(true)}
              aria-label="Search"
              className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <Search size={20} />
            </button>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <ThemeIcon isDark={isDark} />
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 py-3 space-y-3"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-medium hover:text-sky-600 dark:hover:text-sky-400"
                onClick={() => setOpen(false)}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Search */}
      <AnimatePresence>
        {mobileSearchOpen && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed inset-0 bg-white dark:bg-slate-900 z-50 p-4"
          >
            <div className="flex items-center gap-2 mb-4">
              <Search size={20} />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full bg-transparent outline-none text-lg text-slate-900 dark:text-slate-100"
              />
              <button onClick={() => setMobileSearchOpen(false)} aria-label="Close search">
                <X size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
