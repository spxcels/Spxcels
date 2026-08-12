"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const MIN_DISPLAY_TIME = 220;
const MAX_DISPLAY_TIME = 8000;

export default function PageTransition() {
  const pathname = usePathname();

  const [isLoading, setIsLoading] = useState(false);

  const startedAt = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Start the transition immediately when the user clicks
  // an internal navigation link.
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as HTMLElement;
      const link = target.closest("a");

      if (!link) return;

      const href = link.getAttribute("href");

      if (!href) return;

      // Ignore external links, anchors and special links.
      if (
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#") ||
        link.target === "_blank" ||
        link.hasAttribute("download")
      ) {
        return;
      }

      const url = new URL(href, window.location.origin);

      // Same-page navigation doesn't need the global transition.
      if (url.pathname === window.location.pathname) {
        return;
      }

      startedAt.current = performance.now();

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      setIsLoading(true);

      // Safety fallback so a broken navigation never leaves
      // the transition stuck forever.
      timeoutRef.current = setTimeout(() => {
        setIsLoading(false);
        startedAt.current = null;
      }, MAX_DISPLAY_TIME);
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // The pathname changes when Next.js finishes the navigation.
  // This makes the transition naturally adapt to the user's
  // actual connection/server response time.
  useEffect(() => {
    if (!isLoading || startedAt.current === null) return;

    const elapsed = performance.now() - startedAt.current;
    const remaining = Math.max(MIN_DISPLAY_TIME - elapsed, 0);

    const finish = setTimeout(() => {
      setIsLoading(false);
      startedAt.current = null;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    }, remaining);

    return () => clearTimeout(finish);
  }, [pathname, isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/95 backdrop-blur-sm dark:bg-slate-950/95"
          aria-live="polite"
          aria-label="Loading page"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                rotate: [0, 4, -4, 0],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-xl font-bold text-white shadow-lg"
            >
              S
            </motion.div>

            <motion.div
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-sm font-medium tracking-wide text-gray-500 dark:text-gray-400"
            >
              Loading...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}