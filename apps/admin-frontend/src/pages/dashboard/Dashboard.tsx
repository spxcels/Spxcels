import { useEffect, useState } from "react";
import { auto } from "@/api/auto";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    brands: 0,
    models: 0,
    specs: 0,
    media: 0,
    affiliates: 0,
    admins: 0,
  });

  useEffect(() => {
    auto.stats().then(setStats);
  }, []);

  const cards = [
    { label: "Total Brands", value: stats.brands, route: "/admin/tables/phone_brands" },
    { label: "Total Models", value: stats.models, route: "/admin/tables/phone_models" },
    { label: "Total Specs", value: stats.specs, route: "/admin/tables/phone_specs" },
    { label: "Total Media", value: stats.media, route: "/admin/tables/phone_media" },
    { label: "Total Affiliates", value: stats.affiliates, route: "/admin/tables/affiliate_links" },
    { label: "Total Admins", value: stats.admins, route: "/admin/tables/admins" },
  ];

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
        Dashboard
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.label}
            className="flex flex-col justify-between p-6 text-gray-900 bg-white border border-gray-200 rounded-xl dark:bg-zinc-900 dark:text-gray-100 dark:border-zinc-800"
          >
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {card.label}
              </p>

              <p className="mt-3 text-3xl font-semibold">
                {card.value}
              </p>
            </div>

            <button
              onClick={() => navigate(card.route)}
              className="mt-6 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400 w-fit"
            >
              View details →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
