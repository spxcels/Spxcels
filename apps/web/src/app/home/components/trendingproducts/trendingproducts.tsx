"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/* ================= TYPES ================= */

type Phone = {
  id: number;
  name: string;
  slug: string;
  image: string | null;
  score: number;
  brand: string; // 🔥 API now returns string
};

export default function TrendingPhones() {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [loading, setLoading] = useState(true);

  /* ================= BADGE LOGIC ================= */

  const getBadge = (score: number) => {
    if (score >= 20)
      return { label: "🔥 HOT", color: "bg-red-500 text-white" };
    if (score >= 12)
      return { label: "⭐ TOP", color: "bg-yellow-500 text-black" };

    return { label: "⚡ NEW", color: "bg-blue-500 text-white" };
  };

  /* ================= LOAD DATA ================= */

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/devices");
        const data = await res.json();

        // 🔥 FIXED HERE
        setPhones((data.results || []).slice(0, 6));
      } catch (err) {
        console.error("Failed to load trending phones", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  /* ================= LOADING ================= */

  if (loading) {
    return (
      <section className="px-6 py-16 md:py-20 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-muted-foreground">
            Loading trending phones...
          </p>
        </div>
      </section>
    );
  }

  /* ================= UI ================= */

  return (
    <section className="px-6 py-16 md:py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">🔥 Trending Phones</h2>

          <Link
            href="/phones"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            View all →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {phones.map((phone) => {
            const badge = getBadge(phone.score);

            return (
              <Link
                key={phone.id}
                href={`/phones/${phone.slug}`}
                className="group overflow-hidden border rounded-xl bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] flex items-center justify-center overflow-hidden bg-gradient-to-b from-muted/60 to-muted">
                  <span
                    className={`absolute top-3 left-3 text-xs px-2 py-1 rounded-full font-medium ${badge.color}`}
                  >
                    {badge.label}
                  </span>

                  <img
                    src={phone.image || "/images/phones/a75.jpg"}
                    alt={phone.name}
                    className="w-full h-full object-contain p-6 group-hover:scale-110 transition duration-300"
                  />
                </div>

                <div className="p-4">
                  <p className="text-sm text-muted-foreground">
                    {phone.brand ?? "Unknown"}
                  </p>

                  <h3 className="mt-1 text-lg font-semibold">
                    {phone.name}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
