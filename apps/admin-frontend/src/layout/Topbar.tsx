// src/layout/Topbar.tsx

import {
  Bell,
  Search,
  Sparkles,
} from "lucide-react";

import { useAuth } from "@/context/AuthContext";
import { AvatarMenu } from "@/components/user";

export default function Topbar() {
  const { user } = useAuth();

  return (
    <header
      className="sticky top-0 z-30 border-b  border-zinc-800 bg-zinc-950/80 backdrop-blur-xl"
    >
      <div
        className="flex items-center justify-between px-6 py-4 "
      >
        {/* =======================================
            LEFT
        ======================================= */}

        <div className="flex flex-col">
          <h1 className="text-lg font-semibold text-white">
            Dashboard
          </h1>

          <p className="text-sm text-zinc-400">
            Welcome back
            {user ? `, ${user.email}` : "..."}
          </p>
        </div>

        {/* =======================================
            RIGHT
        ======================================= */}

        <div className="flex items-center gap-3">

          {/* SEARCH */}

          <div className="relative hidden lg:block">

            <Search
              size={16}
              className="absolute -translate-y-1/2  left-3 top-1/2 text-zinc-500"
            />

            <input
              type="text"
              placeholder="Search phones, brands..."
              className="py-2 pl-10 pr-4 text-sm text-white transition border outline-none  w-80 rounded-xl border-zinc-800 bg-zinc-900 placeholder:text-zinc-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
            />

          </div>

          {/* LIVE STATUS */}

          <button
            className="flex items-center gap-2 px-3 py-2 text-sm transition border  rounded-xl border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-violet-500 hover:bg-zinc-800"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500" />

            <span className="hidden xl:block">
              Live
            </span>
          </button>

          {/* AI */}

          <button
            className="
              rounded-xl
              border border-zinc-800
              bg-zinc-900
              p-2.5
              text-zinc-400
              transition

              hover:border-violet-500
              hover:bg-zinc-800
              hover:text-violet-400
            "
          >
            <Sparkles size={18} />
          </button>

          {/* NOTIFICATIONS */}

          <button
            className="
              relative
              rounded-xl
              border border-zinc-800
              bg-zinc-900
              p-2.5
              text-zinc-400
              transition

              hover:border-violet-500
              hover:bg-zinc-800
              hover:text-white
            "
          >
            <Bell size={18} />

            <span
              className="absolute w-2 h-2 rounded-full  right-2 top-2 bg-violet-500"
            />
          </button>

          {/* DIVIDER */}

          <div className="w-px h-8 bg-zinc-800" />

          {/* USER */}

          <div className="flex items-center gap-3">

            <div className="hidden text-right md:block">

              <p className="text-sm font-medium text-white">
                Administrator
              </p>

              <p className="text-xs text-zinc-400">
                {user?.email ?? "Loading..."}
              </p>

            </div>

            <AvatarMenu />

          </div>

        </div>
      </div>
    </header>
  );
}