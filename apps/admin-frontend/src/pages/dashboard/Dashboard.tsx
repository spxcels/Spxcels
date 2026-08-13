import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { auto } from "@/api/auto";

interface DashboardStats {
  brands: number;
  models: number;
  specs: number;
  media: number;
  affiliates: number;
  admins: number;
}

type IconName =
  | "brands"
  | "models"
  | "specs"
  | "media"
  | "affiliates"
  | "admins";

interface DashboardCard {
  label: string;
  value: number;
  description: string;
  icon: IconName;
  route?: string;
}

function CardIcon({ name }: { name: IconName }) {
  const commonProps = {
    width: 21,
    height: 21,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "brands":
      return (
        <svg {...commonProps}>
          <path d="M4 20V10" />
          <path d="M10 20V4" />
          <path d="M16 20v-7" />
          <path d="M22 20V7" />
        </svg>
      );

    case "models":
      return (
        <svg {...commonProps}>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 7h6" />
          <path d="M9 17h6" />
        </svg>
      );

    case "specs":
      return (
        <svg {...commonProps}>
          <path d="M8 6h12" />
          <path d="M8 12h12" />
          <path d="M8 18h12" />
          <path d="M4 6h.01" />
          <path d="M4 12h.01" />
          <path d="M4 18h.01" />
        </svg>
      );

    case "media":
      return (
        <svg {...commonProps}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="8.5" cy="9" r="1.5" />
          <path d="m21 15-5-5L5 20" />
        </svg>
      );

    case "affiliates":
      return (
        <svg {...commonProps}>
          <path d="M10 13a5 5 0 0 0 7.07.07l1.86-1.86a5 5 0 0 0-7.07-7.07l-1.07 1.07" />
          <path d="M14 11a5 5 0 0 0-7.07-.07l-1.86 1.86a5 5 0 0 0 7.07 7.07l1.07-1.07" />
        </svg>
      );

    case "admins":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="8" r="3" />
          <path d="M5 20a7 7 0 0 1 14 0" />
        </svg>
      );
  }
}

export default function Dashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState<DashboardStats>({
    brands: 0,
    models: 0,
    specs: 0,
    media: 0,
    affiliates: 0,
    admins: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadStats = async () => {
      try {
        const data = await auto.stats();

        if (!mounted) return;

        setStats({
          brands: Number(data?.brands ?? 0),
          models: Number(data?.models ?? 0),
          specs: Number(data?.specs ?? 0),
          media: Number(data?.media ?? 0),
          affiliates: Number(data?.affiliates ?? 0),
          admins: Number(data?.admins ?? 0),
        });
      } catch (error) {
        console.error("Failed to load dashboard stats:", error);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadStats();

    return () => {
      mounted = false;
    };
  }, []);

  const cards: DashboardCard[] = [
    {
      label: "Total Brands",
      value: stats.brands,
      description: "Phone manufacturers",
      route: "/admin/products/phones",
      icon: "brands",
    },
    {
      label: "Total Models",
      value: stats.models,
      description: "Phone models in catalog",
      route: "/admin/products/phones/models",
      icon: "models",
    },
    {
      label: "Total Specifications",
      value: stats.specs,
      description: "Structured specification records",
      icon: "specs",
    },
    {
      label: "Total Media",
      value: stats.media,
      description: "Images and media assets",
      icon: "media",
    },
    {
      label: "Affiliate Links",
      value: stats.affiliates,
      description: "Connected buying links",
      icon: "affiliates",
    },
    {
      label: "Administrators",
      value: stats.admins,
      description: "Admin accounts",
      icon: "admins",
    },
  ];

  const handleCardClick = (route?: string) => {
    if (!route) return;

    navigate(route);
  };

  return (
    <div className="min-h-full pb-10 space-y-8">
      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-white">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-zinc-500">
          Overview of your Spexcel catalog and administration system.
        </p>
      </div>

      {/* =====================================================
          STAT CARDS
      ===================================================== */}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => {
          const isNavigable = Boolean(card.route);

          return (
            <button
              key={card.label}
              type="button"
              disabled={!isNavigable}
              onClick={() => handleCardClick(card.route)}
              className={[
                "group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-200",
                isNavigable
                  ? "cursor-pointer border-white/[0.08] bg-zinc-950/80 hover:-translate-y-0.5 hover:border-white/[0.14] hover:bg-zinc-900/90"
                  : "cursor-default border-white/[0.06] bg-zinc-950/60",
              ].join(" ")}
            >
              {/* Subtle glow */}
              <div
                className={[
                  "pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full blur-3xl transition-opacity duration-200",
                  isNavigable
                    ? "bg-violet-500/[0.06] group-hover:bg-violet-500/[0.10]"
                    : "bg-transparent",
                ].join(" ")}
              />

              <div className="relative">
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <div
                    className={[
                      "flex h-10 w-10 items-center justify-center rounded-xl border transition-colors",
                      isNavigable
                        ? "border-white/[0.08] bg-white/[0.04] text-zinc-300 group-hover:border-violet-500/20 group-hover:bg-violet-500/10 group-hover:text-violet-300"
                        : "border-white/[0.06] bg-white/[0.025] text-zinc-500",
                    ].join(" ")}
                  >
                    <CardIcon name={card.icon} />
                  </div>

                  {isNavigable && (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-zinc-700 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-zinc-400"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  )}
                </div>

                {/* Label */}
                <p
                  className={[
                    "mt-5 text-sm font-medium",
                    isNavigable ? "text-zinc-400" : "text-zinc-500",
                  ].join(" ")}
                >
                  {card.label}
                </p>

                {/* Number */}
                <div className="mt-1">
                  {loading ? (
                    <div className="h-10 w-20 animate-pulse rounded-lg bg-white/[0.06]" />
                  ) : (
                    <p className="text-4xl font-semibold tracking-tight text-white">
                      {card.value.toLocaleString()}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="mt-2 text-xs text-zinc-600">
                  {card.description}
                </p>

                {/* Bottom action */}
                <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
                  <span
                    className={[
                      "text-xs font-medium",
                      isNavigable
                        ? "text-zinc-500 transition-colors group-hover:text-zinc-300"
                        : "text-zinc-700",
                    ].join(" ")}
                  >
                    {isNavigable ? "View details" : "Coming soon"}
                  </span>

                  {isNavigable && (
                    <span className="text-xs transition-colors text-zinc-700 group-hover:text-violet-400">
                      →
                    </span>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}