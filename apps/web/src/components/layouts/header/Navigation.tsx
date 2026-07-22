"use client";

import { NAV_ITEMS } from "./constants";
import NavigationItem from "./NavigationItem";

interface NavigationProps {
  scrolled?: boolean;
}

export default function Navigation({
  scrolled = false,
}: NavigationProps) {
  return (
    <nav
      className="hidden items-center gap-2 md:flex"
      aria-label="Primary navigation"
    >
      {NAV_ITEMS.map((item) => (
        <NavigationItem
          key={item.href}
          item={item}
          scrolled={scrolled}
        />
      ))}
    </nav>
  );
}