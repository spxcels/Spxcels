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

/* ================= COMPONENT ================= */

export default function PhoneDetailsClient({ model }: { model: Model }) {
  const [suggestions, setSuggestions] = useState<SuggestedPhone[]>([]);

  const variants = ["128GB", "256GB", "512GB", "1TB"];

  const colors = [
    "Natural Titanium",
    "Black Titanium",
    "White Titanium",
    "Blue Titanium",
  ];

  const [selectedColor, setSelectedColor] = useState(colors[0]);

  /* ================= AUTO SUGGESTIONS ================= */

  useEffect(() => {
    let mounted = true;

    const loadSuggestions = async () => {
      try {
        const res = await fetch(
          `/api/devices/suggestions?brand=${model.brand.name}&id=${model.id}`
        );

        if (!res.ok) return;

        const data = await res.json();

        if (mounted) {
          setSuggestions(Array.isArray(data) ? data : []);
        }
      } catch (e) {
        console.error("Suggestion fetch error:", e);
      }
    };

    loadSuggestions();

    return () => {
      mounted = false;
    };
  }, [model.id, model.brand.name]);

  /* ================= MEDIA ================= */

  const mediaList =
    model.media?.length && model.media.some((m) => m.url)
      ? model.media
      : model.image
      ? [{ id: 0, url: model.image, type: "IMAGE" as const }]
      : [{ id: 0, url: "/placeholder-phone.png", type: "IMAGE" as const }];

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
          const priceA = Number(a.price?.replace(/[^0-9]/g, "")) || 0;
          const priceB = Number(b.price?.replace(/[^0-9]/g, "")) || 0;
          return priceA - priceB;
        })
      : [];

  const bestDeal = sortedAffiliates[0];
  const specs = (model.specs as any)?.specs || model.specs;

  /* ================= CLEAN SPECS ================= */

  const cleanSpecText = (text: string): string[] => {
    if (!text) return [text];

    const lower = text.toLowerCase();
    const output: string[] = [];

    const mp = text.match(/\d+\s?mp/i);
    if (mp) output.push(`${mp[0]} high-resolution sensor`);
    if (lower.includes("ois")) output.push("Optical image stabilization (OIS)");
    if (lower.includes("pdaf")) output.push("Fast auto-focus (PDAF)");
    if (lower.includes("ultrawide")) output.push("Ultra-wide lens");
    if (lower.includes("telephoto")) output.push("Telephoto zoom lens");

    const hz = text.match(/\d+\s?hz/i);
    if (hz) output.push(`${hz[0]} smooth refresh rate`);

    const mah = text.match(/\d+\s?mah/i);
    if (mah) output.push(`${mah[0]} battery capacity`);

    return output.length ? output : [text];
  };

  /* ================= UI ================= */

  return (
    <div className="max-w-6xl px-4 py-10 mx-auto">
      <div className="mb-6">
        <Link
          href="/phones"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft size={16} className="mr-1" />
          Back to Phones
        </Link>
      </div>

      <div className="flex flex-col gap-10 md:flex-row">
        <div className="flex-1">
          <ImageSlider media={mediaList} modelName={model.name} />
        </div>

        {/* RIGHT PANEL */}
        <div className="flex-1 space-y-4 md:sticky md:top-24">
          <h1 className="text-3xl font-bold">{model.name}</h1>
          <p className="text-sm text-gray-500">Brand: {model.brand.name}</p>

          {bestDeal && (
            <div className="flex items-center gap-2 px-4 py-2 border bg-gray-50 rounded-xl">
              <span className="text-xl font-semibold text-green-600">
                {bestDeal.price}
              </span>
              <span className="px-2 py-1 text-xs text-white bg-green-500 rounded-md">
                Best Price
              </span>
            </div>
          )}

          {/* Variants */}
          <div className="p-4 bg-white border rounded-2xl">
            <h3 className="mb-3 text-sm font-semibold">Variants</h3>
            <div className="flex flex-wrap gap-2">
              {variants.map((v) => (
                <button
                  key={v}
                  className="px-3 py-1.5 text-xs border rounded-lg hover:border-black"
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="p-4 bg-white border rounded-2xl">
            <h3 className="mb-3 text-sm font-semibold">Colors</h3>
            <div className="flex gap-2 pb-1 overflow-x-auto">
              {colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedColor(c)}
                  className={`whitespace-nowrap flex-shrink-0 px-3 py-1.5 text-xs rounded-lg border
                  ${
                    selectedColor === c
                      ? "border-black bg-gray-50"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* BUY ONLINE */}
          {sortedAffiliates.length > 0 && (
            <div className="p-4 border border-green-200 bg-green-50 rounded-2xl">
              <h3 className="mb-3 text-sm font-semibold">Buy Online</h3>

              <div className="space-y-3">
                {sortedAffiliates.map((a) => (
                  <motion.a
                    key={a.id}
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.01 }}
                    className="flex items-center justify-between p-3 bg-white border border-green-200 rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={storeLogos[a.name] || a.logo || getFavicon(a.url)}
                        alt={a.name}
                        width={30}
                        height={30}
                      />
                      <div>
                        <p className="text-sm font-medium">{a.name}</p>
                        <p className="text-xs text-gray-500">Trusted seller</p>
                      </div>
                    </div>

                    <span className="text-lg font-bold text-green-600">
                      {a.price}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* SPECIFICATIONS */}
      <section className="mt-14">
        <h2 className="mb-6 text-xl font-semibold">Specifications</h2>
        <p className="text-sm text-gray-500">No specs found.</p>
      </section>

      {/* SUGGESTIONS (FIXED IMAGES) */}
      {suggestions.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-6 text-xl font-semibold">You may also like</h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {suggestions.map((phone) => (
              <Link
                key={phone.id}
                href={`/phones/${phone.slug}`}
                className="p-3 transition border rounded-2xl hover:shadow-lg"
              >
                <div className="relative w-full mb-3 overflow-hidden bg-gray-100 h-44 rounded-xl">
                  <Image
                    src={
                      phone.image?.trim()
                        ? phone.image
                        : "/placeholder-phone.png"
                    }
                    alt={phone.name}
                    fill
                    sizes="(max-width:768px) 50vw, 25vw"
                    className="object-contain p-2"
                  />
                </div>

                <p className="text-sm font-semibold">{phone.name}</p>
                <p className="text-xs text-gray-500">{phone.brand.name}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}