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

  const storeLogos: Record<string, string> = {
    Amazon: "/logos/amazon.png",
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

  /* =======================
     HUMAN LABELS
  ======================== */
  const specLabels: Record<string, string> = {
    os: "Operating System",
    chipset: "Chipset",
    cpu: "CPU",
    gpu: "GPU",
    displayType: "Display Type",
    displaySize: "Display Size",
    resolution: "Resolution",
    refreshRate: "Refresh Rate",
    protection: "Screen Protection",
    mainCamera: "Rear Camera",
    selfieCamera: "Selfie Camera",
    videoRecording: "Video Recording",
    batteryCapacity: "Battery Capacity",
    chargingSpeed: "Charging Speed",
    wirelessCharging: "Wireless Charging",
    dimensions: "Dimensions",
    weight: "Weight",
    sim: "SIM",
    internal: "Storage",
    cardSlot: "Expandable Storage",
    network: "Network",
    features: "Features",
    colors: "Available Colors",
  };

  /* =======================
     AI CLEAN CAMERA FORMATTER
  ======================== */
  const cleanCameraSpec = (value: string) => {
    if (!value) return [];

    const sections = value.split(/\s(?=\d+\s?MP|TOF|LiDAR)/g);

    return sections.map((section) => {
      const mp = section.match(/(\d+\s?MP)/i)?.[1]?.replace(" ", "");
      const zoom = section.match(/(\d+x optical zoom)/i)?.[1];
      const aperture = section.match(/f\/[\d.]+/i)?.[0];

      const lower = section.toLowerCase();

      if (lower.includes("lidar")) return "LiDAR Depth Sensor";

      let label = "";

      if (lower.includes("ultra")) label = "Ultra-wide";
      else if (lower.includes("tele")) label = "Telephoto";
      else if (lower.includes("macro")) label = "Macro";
      else if (lower.includes("wide")) label = "Wide";

      let result = "";

      if (mp) result += mp;
      if (label) result += ` ${label}`;

      if (zoom) result += ` (${zoom})`;
      else if (aperture) result += ` (${aperture})`;

      return result.trim();
    });
  };

  const specGroups: Record<string, string[]> = {
    Networks: ["network"],
    Platform: ["os", "chipset", "cpu", "gpu"],
    Display: ["displayType", "displaySize", "resolution", "refreshRate", "protection"],
    Camera: ["mainCamera", "selfieCamera", "videoRecording"],
    Battery: ["batteryCapacity", "chargingSpeed", "wirelessCharging"],
    Build: ["dimensions", "weight", "sim", "protection"],
    Storage: ["internal", "cardSlot"],
    Other: ["features", "colors"],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Back */}
      <div className="mb-6">
        <Link
          href="/phones"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition"
        >
          <ChevronLeft size={16} className="mr-1" />
          Back to Phones
        </Link>
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="flex-1">
          <ImageSlider media={mediaList} modelName={model.name} />
        </div>

        <div className="flex-1 space-y-4">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{model.name}</h1>
              <p className="text-gray-500 text-sm">Brand: {model.brand.name}</p>
            </div>

            {bestDeal && (
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-4 py-2 rounded-xl">
                <span className="text-xl font-semibold text-green-600">
                  {bestDeal.price}
                </span>
                <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-md">
                  Best Price
                </span>
              </div>
            )}
          </div>

          {/* BUY ONLINE */}
          {sortedAffiliates.length ? (
            <div className="pt-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">
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
                      scale: 1.02,
                      boxShadow: "0px 6px 18px rgba(0,0,0,0.08)",
                    }}
                    className={`flex items-center justify-between w-full sm:w-[280px] border border-gray-200 rounded-2xl p-3 bg-white ${
                      idx === 0 ? "bg-green-50" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={storeLogos[a.name] || a.logo || getFavicon(a.url)}
                        alt={`${a.name} logo`}
                        width={40}
                        height={40}
                        className="object-contain rounded-md bg-white p-1"
                      />
                      <span className="font-medium text-sm">{a.name}</span>
                    </div>

                    <span className="text-green-600 font-bold text-sm">
                      {a.price || "N/A"}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* SPECIFICATIONS */}
      {model.specs ? (
        <section className="mt-14 space-y-8">
          <h2 className="text-xl font-semibold text-gray-900">Specifications</h2>

          {Object.entries(specGroups).map(([groupName, keys]) => {
            const groupSpecs = keys
              .map((key) => [key, model.specs?.[key]])
              .filter(([_, value]) => value);

            if (!groupSpecs.length) return null;

            return (
              <div key={groupName}>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {groupName}
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {groupSpecs.map(([key, value]) => (
                    <div
                      key={key}
                      className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="flex gap-4">
                        <p className="w-40 shrink-0 text-sm text-gray-500">
                          {specLabels[key] ||
                            key.replace(/([A-Z])/g, " $1")}
                        </p>

                        <div className="font-medium text-gray-900 leading-snug space-y-1">
                          {key === "mainCamera" || key === "selfieCamera" ? (
                            cleanCameraSpec(String(value)).map((line, i) => (
                              <p key={i}>• {line}</p>
                            ))
                          ) : (
                            <p>{String(value)}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      ) : (
        <p className="mt-10 text-gray-500 text-sm text-center">
          Specifications not available yet.
        </p>
      )}
    </div>
  );
}
