import {
  ArrowLeftRight,
  Gift,
  Smartphone,
} from "lucide-react";

import type { NavigationItem } from "./types";

export const NAV_ITEMS: NavigationItem[] = [
  {
    name: "Phones",
    href: "/products/phones",
    icon: Smartphone,
  },
  {
    name: "Compare",
    href: "/compare",
    icon: ArrowLeftRight,
  },
  {
    name: "Donate",
    href: "/donate",
    icon: Gift,
  },
];