import { useEffect, useState } from "react";
import { useCountUp } from "@/lib/useCountUp";
import { auto } from "@/api/auto";
import { useNavigate } from "react-router-dom";

interface TiltState {
  x: number;
  y: number;
}

export default function Dashboard() {
  const navigate = useNavigate();

  // REAL DATA
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

  // COUNT-UP ANIMATIONS
  const brands = useCountUp(stats.brands);
  const models = useCountUp(stats.models);
  const specs = useCountUp(stats.specs);
  const media = useCountUp(stats.media);
  const affiliates = useCountUp(stats.affiliates);
  const admins = useCountUp(stats.admins);

  // TILT STATES
  const [tilts, setTilts] = useState<TiltState[]>(
    Array(6).fill({ x: 0, y: 0 })
  );

  const makeTiltHandlers = (index: number) => ({
    onMouseMove: (e: any) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const newTilt = [...tilts];
      newTilt[index] = {
        x: (y / rect.height) * 10,
        y: -(x / rect.width) * 10,
      };
      setTilts(newTilt);
    },
    onMouseLeave: () => {
      const newTilt = [...tilts];
      newTilt[index] = { x: 0, y: 0 };
      setTilts(newTilt);
    },
  });

  // CARD DEFINITIONS + ROUTES
  const cards = [
    {
      label: "Total Brands",
      value: brands,
      route: "/admin/tables/PhoneBrand",
      color: "from-purple-600 via-blue-500 to-pink-600",
      text: "text-purple-300",
      border: "border-purple-700",
    },
    {
      label: "Total Models",
      value: models,
      route: "/admin/tables/PhoneModel",
      color: "from-pink-600 via-blue-500 to-purple-600",
      text: "text-pink-300",
      border: "border-pink-700",
    },
    {
      label: "Total Specs",
      value: specs,
      route: "/admin/tables/PhoneSpecs",
      color: "from-blue-600 via-purple-500 to-pink-600",
      text: "text-blue-300",
      border: "border-blue-700",
    },
    {
      label: "Total Media",
      value: media,
      route: "/admin/tables/PhoneMedia",
      color: "from-yellow-600 via-orange-500 to-red-600",
      text: "text-yellow-300",
      border: "border-yellow-700",
    },
    {
      label: "Total Affiliates",
      value: affiliates,
      route: "/admin/tables/AffiliateLink",
      color: "from-green-600 via-teal-500 to-blue-600",
      text: "text-green-300",
      border: "border-green-700",
    },
    {
      label: "Total Admins",
      value: admins,
      route: "/admin/tables/Admin",
      color: "from-red-600 via-pink-500 to-purple-600",
      text: "text-red-300",
      border: "border-red-700",
    },
  ];

  return (
    <>
      {/* HEADER */}
      <h1 className="mb-12 text-3xl font-semibold tracking-tight text-transparent sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
        Dashboard
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card, i) => (
          <div
            key={i}
            {...makeTiltHandlers(i)}
            style={{
              transform: `perspective(1200px) rotateX(${tilts[i].x}deg) rotateY(${tilts[i].y}deg)`,
              transition: "transform 0.2s ease-out",
            }}
            className="relative group"
          >
            {/* Glow Background */}
            <div
              className={`absolute inset-0 transition-all duration-500 -z-10 rounded-2xl bg-gradient-to-br ${card.color} blur-2xl opacity-40 group-hover:opacity-70 pointer-events-none`}
            />

            {/* CARD */}
            <div
              className={`pointer-events-auto p-6 sm:p-7 rounded-2xl bg-black/60 ${card.border} border backdrop-blur-xl shadow-[0_8px_45px_rgba(0,0,0,0.35)] group-hover:scale-[1.04] transition-all duration-200`}
            >
              <h2 className={`text-sm sm:text-base md:text-lg font-medium ${card.text}`}>
                {card.label}
              </h2>

              {/* VALUE */}
              <p
                className="mt-3 font-bold text-white"
                style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}
              >
                {card.value}
              </p>

              {/* BUTTON */}
              <button
                onClick={() => navigate(card.route)}
                className="px-5 py-2 mt-5 text-sm text-white transition-all rounded-lg shadow-lg sm:text-base bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 active:scale-95"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
