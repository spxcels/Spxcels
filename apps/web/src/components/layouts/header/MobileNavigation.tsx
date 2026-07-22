"use client";

import Link from "next/link";

import { NAV_ITEMS } from "./constants";

interface MobileNavigationProps {
  onNavigate?: () => void;
}

export default function MobileNavigation({
  onNavigate,
}: MobileNavigationProps) {
  return (
    <nav
      className="flex flex-col gap-2"
      aria-label="Mobile navigation"
    >
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className="group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground"
          >
            <Icon
              size={18}
              className="transition-transform duration-200 group-hover:scale-110"
            />

            <span>{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}