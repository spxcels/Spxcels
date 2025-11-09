"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import ImageSlider from "../../../components/ImageSlider";
import { motion } from "framer-motion";

interface Brand {
  id: number;
  name: string;
  slug: string;
}

interface Specs {
  [key: string]: any;
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

interface Model {
  id: number;
  name: string;
  slug: string;
  image?: string | null;
  colors?: string[];
  variants?: string[];
  brand: Brand;
  specs?: Specs | null;
  media?: Media[];
  affiliates?: Affiliate[];
}

export default function PhoneDetailsClient({ model }: { model: Model }) {
  const mediaList =
    model.media?.length && model.media.some((m) => m.url)
      ? model.media
      : model.image
        ? [{ id: 0, url: model.image, type: "IMAGE" as const }]
        : [{ id: 0, url: "/placeholder-phone.png", type: "IMAGE" as const }];

  // ✅ Local store logos
  const storeLogos: Record<string, string> = {
    Amazon: "/logos/amazon.png",
    Flipkart: "/logos/flipkart.png",
  };

  // ✅ Fallback to favicon if no logo found
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

  const specGroups: Record<string, string[]> = {
    Networks: ["network"],
    Platform: ["os", "chipset", "cpu", "gpu"],
    Display: [
      "displayType",
      "displaySize",
      "resolution",
      "refreshRate",
      "protection",
    ],
    Camera: ["mainCamera", "selfieCamera", "videoRecording"],
    Battery: ["batteryCapacity", "chargingSpeed", "wirelessCharging"],
    Build: ["dimensions", "weight", "sim", "protection"],
    Storage: ["internal", "cardSlot"],
    Other: ["features", "colors"],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* 🔙 Back */}
      <div className="mb-6">
        <Link
          href="/phones"
          className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 transition"
        >
          <ChevronLeft size={16} className="mr-1" /> Back to Phones
        </Link>
      </div>

      {/* 🧩 Layout */}
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left - Media Slider */}
        <div className="flex-1">
          <ImageSlider media={mediaList} modelName={model.name} />
        </div>

        {/* Right - Info */}
        <div className="flex-1 space-y-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                {model.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Brand: {model.brand.name}
              </p>
            </div>

            {bestDeal && (
              <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
                <span className="text-xl font-semibold text-green-600">
                  {bestDeal.price}
                </span>
                <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-md ml-1">
                  Best Price
                </span>
              </div>
            )}
          </div>

          {/* Variants */}
          {model.variants?.length ? (
            <div>
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Variants
              </h3>
              <div className="flex flex-wrap gap-2">
                {model.variants.map((v) => (
                  <span
                    key={v}
                    className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-800 rounded-full"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {/* Colors */}
          {model.colors?.length ? (
            <div>
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Colors
              </h3>
              <div className="flex flex-wrap gap-2">
                {model.colors.map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-800 rounded-full capitalize"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {/* 💰 Buy Online */}
          {sortedAffiliates.length ? (
            <div className="pt-4">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Buy Online
              </h3>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
                {sortedAffiliates.map((a, idx) => (
                  <motion.a
                    key={a.id}
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.03,
                      boxShadow:
                        "0px 4px 15px rgba(0, 255, 100, 0.15)",
                    }}
                    transition={{ type: "spring", stiffness: 250 }}
                    className={`flex items-center justify-between w-full sm:w-[280px] border border-border rounded-xl p-3 transition-all cursor-pointer ${idx === 0
                      ? "bg-green-50 dark:bg-green-900/20"
                      : "bg-card"
                      }`}
                  >
                    {/* Left: Logo & Name */}
                    <div className="flex items-center gap-3">
                      <Image
                        src={
                          storeLogos[a.name] ||
                          a.logo ||
                          getFavicon(a.url)
                        }
                        alt={`${a.name || "Store"} logo`}
                        width={40}
                        height={40}
                        className="object-contain rounded-md bg-white p-1"
                      />
                      <div className="flex flex-col">
                        <span className="font-medium text-sm">
                          {a.name || "Store"}
                        </span>
                        {idx === 0 && (
                          <span className="text-[10px] bg-green-500 text-white px-2 py-[1px] rounded-md w-fit mt-1">
                            Best Price
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Right: Animated Price */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="text-right"
                    >
                      {a.price ? (
                        <span className="text-green-600 font-bold text-sm">
                          {a.price}
                        </span>
                      ) : (
                        <span className="text-gray-500 text-xs">
                          Price N/A
                        </span>
                      )}
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* 📱 Specifications */}
      {model.specs ? (
        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Specifications
          </h2>

          {Object.entries(specGroups).map(([groupName, keys]) => {
            const groupSpecs = keys
              .map((key) => [key, model.specs?.[key]])
              .filter(([_, value]) => value);

            if (!groupSpecs.length) return null;

            return (
              <div key={groupName} className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">
                  {groupName}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {groupSpecs.map(([key, value]) => (
                    <div
                      key={key}
                      className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg"
                    >
                      <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g, " $1")}
                      </p>
                      <p className="font-medium text-gray-800 dark:text-gray-100">
                        {String(value)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      ) : (
        <p className="mt-10 text-gray-500 dark:text-gray-400 text-sm text-center">
          Specifications not available yet.
        </p>
      )}
    </div>
  );
}
