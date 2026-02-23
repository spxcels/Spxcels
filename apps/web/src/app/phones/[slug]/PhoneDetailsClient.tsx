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
  /* ================= AUTO SUGGESTIONS ================= */
  const [suggestions, setSuggestions] = useState<SuggestedPhone[]>([]);

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
      const domain = new URL(url).hostname;
      return `https://www.google.com/s2/favicons?domain=${domain}`;
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
  const specs = (model.specs as any)?.specs || (model.specs as any);

  const variants = ["128GB", "256GB", "512GB", "1TB"];
  const colors = ["#f5f5f5", "#3d3d3d", "#bfa37a", "#1f2a44"];

  /* ================= AI CLEAN SPECS ================= */

  const cleanSpecText = (text: string): string[] => {
    if (!text) return [text];

    const lower = text.toLowerCase();
    const output: string[] = [];

    const mp = text.match(/\d+\s?mp/i);
    if (mp) output.push(`${mp[0]} high-resolution sensor`);
    if (lower.includes("ois"))
      output.push("Optical image stabilization (OIS)");
    if (lower.includes("pdaf")) output.push("Fast auto-focus (PDAF)");
    if (lower.includes("ultrawide")) output.push("Ultra-wide lens");
    else if (lower.includes("wide")) output.push("Wide-angle lens");
    if (lower.includes("telephoto")) output.push("Telephoto zoom lens");

    const hz = text.match(/\d+\s?hz/i);
    if (hz) output.push(`${hz[0]} smooth refresh rate`);

    const mah = text.match(/\d+\s?mah/i);
    if (mah) output.push(`${mah[0]} battery capacity`);

    if (lower.includes("fast charging"))
      output.push("Fast charging support");

    return output.length ? output : [text];
  };

  /* ================= UI ================= */

  return (
    <div className="max-w-6xl px-4 py-10 mx-auto">
      {/* Back */}
      <div className="mb-6">
        <Link
          href="/phones"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft size={16} className="mr-1" />
          Back to Phones
        </Link>
      </div>

      {/* MAIN */}
      <div className="flex flex-col items-start gap-10 md:flex-row">
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
          <div className="p-4 bg-white border shadow-sm rounded-2xl">
            <h3 className="mb-3 text-sm font-semibold">Variants</h3>
            <div className="flex flex-wrap gap-2">
              {variants.map((v) => (
                <button
                  key={v}
                  className="px-4 py-2 text-sm font-medium transition border rounded-xl hover:border-black"
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="p-4 bg-white border shadow-sm rounded-2xl">
            <h3 className="mb-3 text-sm font-semibold">Colors</h3>
            <div className="flex gap-3">
              {colors.map((c) => (
                <button
                  key={c}
                  className="w-8 h-8 transition border-2 border-gray-300 rounded-full hover:scale-110"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          {/* Affiliate */}
          {sortedAffiliates.length > 0 && (
            <div className="p-4 border border-green-200 shadow-sm rounded-2xl bg-green-50">
              <h3 className="mb-3 text-sm font-semibold">Buy Online</h3>
              <div className="space-y-3">
                {sortedAffiliates.map((a) => (
                  <motion.a
                    key={a.id}
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.01 }}
                    className="flex items-center justify-between p-3 transition bg-white border border-green-200 rounded-xl hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={storeLogos[a.name] || a.logo || getFavicon(a.url)}
                        alt={a.name}
                        width={36}
                        height={36}
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

        {specs?.sections?.length ? (
          specs.sections.map((section: any) => (
            <div key={section.title} className="mb-10">
              <h3 className="mb-3 text-lg font-semibold">{section.title}</h3>

              <div className="overflow-hidden border rounded-xl">
                {section.rows.map((row: any) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[140px_1fr] gap-4 border-b last:border-b-0 px-4 py-3"
                  >
                    <div className="text-sm text-gray-500">{row.label}</div>

                    <div className="space-y-1 text-sm text-gray-800">
                      {row.values?.map((v: any, i: number) =>
                        cleanSpecText(v.text).map((line, j) => (
                          <p key={`${i}-${j}`} className="flex gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-400" />
                            <span>{line}</span>
                          </p>
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">No specs found.</p>
        )}
      </section>

      {/* AUTO RECOMMENDATIONS */}
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
                <Image
                  src={phone.image || "/placeholder-phone.png"}
                  alt={phone.name}
                  width={300}
                  height={300}
                  className="object-cover mb-3 rounded-xl"
                />
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