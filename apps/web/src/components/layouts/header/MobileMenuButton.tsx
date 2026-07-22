"use client";

import { motion } from "motion/react";

interface MobileMenuButtonProps {
  open: boolean;
  onToggle: () => void;
}

export default function MobileMenuButton({
  open,
  onToggle,
}: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={
        open
          ? "Close navigation menu"
          : "Open navigation menu"
      }
      aria-expanded={open}
      className="group flex h-10 w-10 items-center justify-center rounded-xl transition-colors hover:bg-muted md:hidden"
    >
      <div className="relative flex h-5 w-6 items-center justify-center">
        {/* Top */}
        <motion.span
          animate={
            open
              ? {
                  rotate: 45,
                  y: 0,
                  width: 24,
                }
              : {
                  rotate: 0,
                  y: -7,
                  width: 24,
                }
          }
          transition={{
            type: "spring",
            stiffness: 420,
            damping: 28,
          }}
          className="absolute left-0 h-0.5 origin-center rounded-full bg-current"
        />

        {/* Middle */}
        <motion.span
          animate={
            open
              ? {
                  opacity: 0,
                  width: 0,
                }
              : {
                  opacity: 1,
                  width: 18,
                }
          }
          transition={{
            duration: 0.18,
          }}
          className="absolute right-0 h-0.5 rounded-full bg-current"
        />

        {/* Bottom */}
        <motion.span
          animate={
            open
              ? {
                  rotate: -45,
                  y: 0,
                  width: 24,
                }
              : {
                  rotate: 0,
                  y: 7,
                  width: 12,
                }
          }
          transition={{
            type: "spring",
            stiffness: 420,
            damping: 28,
          }}
          className="absolute right-0 h-0.5 origin-center rounded-full bg-current"
        />
      </div>
    </button>
  );
}