"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import ImageSlider from "../../../components/ImageSlider";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ================= TYPES ================= */

interface Brand {
  id: number;
  name: string;
  slug: string;
}

interface Media {
  id: number;
  url: string;
  type?: "IMAGE" | "VIDEO";
}

interface Affiliate {
  id: number;
  name: string;
  url: string;
  price?: string;
  logo?: string;
}

interface SuggestedPhone {
  id: number;
  name: string;
  slug: string;
  image?: string | null;
  brand: { name: string };
}

interface Model {
  id: number;
  name: string;
  slug: string;
  image?: string | null;
  brand: Brand;
  specs?: any | null;
  media?: Media[];
  affiliates?: Affiliate[];
}

/* ================= CONSTANTS ================= */

const DEFAULT_VARIANTS = ["128GB", "256GB", "512GB", "1TB"];

const DEFAULT_COLORS = [
  "Natural Titanium",
  "Black Titanium",
  "White Titanium",
  "Blue Titanium",
];

export default function PhoneDetailsClient({ model }: { model: Model }) {
  const [suggestions, setSuggestions] = useState<SuggestedPhone[]>([]);
  const [selectedColor, setSelectedColor] = useState(DEFAULT_COLORS[0]);

  useEffect(() => {
    let mounted = true;

    const loadSuggestions = async () => {
      try {
        const res = await fetch(
          `/api/devices/suggestions?q=${encodeURIComponent(
            model.name
          )}&id=${model.id}`
        );

        if (!res.ok) return;

        const data = await res.json();
        if (mounted) setSuggestions(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error("Suggestion fetch error:", e);
      }
    };

    loadSuggestions();
    return () => {
      mounted = false;
    };
  }, [model.id, model.name]);

  const mediaList =
    model.media?.length
      ? model.media
      : [{ id: 0, url: model.image || "/placeholder-phone.png", type: "IMAGE" as const }];

  const storeLogos: Record<string, string> = {
    Amazon: "/images/logo/amazon-seeklogo.png",
    Flipkart: "/logos/flipkart.png",
  };

  const getFavicon = (url: string) => {
    try {
      return `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}`;
    } catch {
      return "/logos/default.png";
    }
  };

  const sortedAffiliates =
    model.affiliates?.length
      ? [...model.affiliates].sort((a, b) => {
          const pa = Number(a.price?.replace(/[^0-9]/g, "")) || 0;
          const pb = Number(b.price?.replace(/[^0-9]/g, "")) || 0;
          return pa - pb;
        })
      : [];

  const bestDeal = sortedAffiliates[0];
  const specs = (model.specs as any)?.specs || model.specs;

  const cleanSpecText = (text: string): string[] => {
    if (!text) return [text];
    const lower = text.toLowerCase();
    const out: string[] = [];

    const mp = text.match(/\d+\s?mp/i);
    if (mp) out.push(`${mp[0]} sensor`);
    if (lower.includes("ois")) out.push("Optical image stabilization");
    if (lower.includes("pdaf")) out.push("Fast auto-focus");
    if (lower.includes("ultrawide")) out.push("Ultra-wide lens");
    if (lower.includes("telephoto")) out.push("Telephoto zoom");

    const hz = text.match(/\d+\s?hz/i);
    if (hz) out.push(`${hz[0]} refresh rate`);

    const mah = text.match(/\d+\s?mah/i);
    if (mah) out.push(`${mah[0]} battery`);

    return out.length ? out : [text];
  };

  return (
    <div className="max-w-6xl px-4 py-10 mx-auto">
      <div className="mb-6">
        <Link
          href="/phones"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <ChevronLeft size={16} className="mr-1" />
          Back to Phones
        </Link>
      </div>

      <div className="flex flex-col gap-10 md:flex-row">
        <div className="flex-1">
          <ImageSlider media={mediaList} modelName={model.name} />
        </div>

        <div className="flex-1 space-y-4 md:sticky md:top-24">
          <h1 className="text-3xl font-bold dark:text-white">{model.name}</h1>

          {bestDeal && (
            <div className="flex items-center gap-2 px-4 py-2 border rounded-xl bg-gray-50 dark:bg-zinc-900 dark:border-zinc-700">
              <span className="text-xl font-semibold text-green-600 dark:text-green-400">
                {bestDeal.price}
              </span>
              <span className="px-2 py-1 text-xs text-white bg-green-500 rounded-md">
                Best Price
              </span>
            </div>
          )}

          <div className="p-4 bg-white border rounded-2xl dark:bg-zinc-900 dark:border-zinc-700">
            <h3 className="mb-3 text-sm font-semibold dark:text-white">Variants</h3>
            <div className="flex flex-wrap gap-2">
              {DEFAULT_VARIANTS.map((v) => (
                <button key={v} className="px-3 py-1.5 text-xs border rounded-lg dark:border-zinc-600 dark:text-gray-200">
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 bg-white border rounded-2xl dark:bg-zinc-900 dark:border-zinc-700">
            <h3 className="mb-3 text-sm font-semibold dark:text-white">Colors</h3>
            <div className="flex gap-2 overflow-x-auto">
              {DEFAULT_COLORS.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedColor(c)}
                  className={`px-3 py-1.5 text-xs rounded-lg border whitespace-nowrap ${
                    selectedColor === c
                      ? "border-black bg-gray-50 dark:border-white dark:bg-zinc-800"
                      : "border-gray-200 dark:border-zinc-600 dark:text-gray-300"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {sortedAffiliates.length > 0 && (
            <div className="p-4 border rounded-2xl bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800">
              <h3 className="mb-3 text-sm font-semibold dark:text-white">Buy Online</h3>

              {sortedAffiliates.map((a) => (
                <motion.a
                  key={a.id}
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.01 }}
                  className="flex items-center justify-between p-3 mb-2 bg-white border rounded-xl dark:bg-zinc-900 dark:border-zinc-700"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={storeLogos[a.name] || a.logo || getFavicon(a.url)}
                      alt={a.name}
                      width={30}
                      height={30}
                    />
                    <p className="text-sm font-medium dark:text-white">{a.name}</p>
                  </div>

                  <span className="text-lg font-bold text-green-600 dark:text-green-400">
                    {a.price}
                  </span>
                </motion.a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ===== SPECIFICATIONS RESTORED ===== */}
      {specs?.sections?.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-6 text-xl font-semibold dark:text-white">Specifications</h2>

          {specs.sections.map((section: any) => (
            <div key={section.title} className="mb-10">
              <h3 className="mb-3 text-lg font-semibold dark:text-white">{section.title}</h3>

              <div className="overflow-hidden border rounded-xl dark:border-zinc-700">
                {section.rows.map((row: any) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[140px_1fr] gap-4 px-4 py-3 border-b last:border-b-0 dark:border-zinc-700"
                  >
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {row.label}
                    </div>

                    <div className="space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      {row.values?.map((v: any, i: number) =>
                        cleanSpecText(v.text).map((line, j) => (
                          <p key={`${i}-${j}`} className="flex gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500" />
                            <span>{line}</span>
                          </p>
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}