import { Sun, Moon } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { AvatarMenu } from "@/components/user";

export default function Navbar() {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between w-full px-6 py-4 bg-white border-b border-gray-200 dark:bg-zinc-900 dark:border-zinc-800">
      
      {/* LEFT: USER INFO */}
      <div className="flex items-center gap-3">
        {user && (
          <span
            className="w-2.5 h-2.5 rounded-full bg-green-500"
            title="Online"
          />
        )}

        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
          {user ? user.email : "Loading..."}
        </span>
      </div>

      {/* RIGHT: ACTIONS */}
      <div className="flex items-center gap-3">
        {/* AVATAR MENU */}
        <AvatarMenu />

        {/* THEME TOGGLE */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="p-2 transition bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
        >
          {theme === "dark" ? (
            <Sun size={18} className="text-yellow-400" />
          ) : (
            <Moon size={18} className="text-gray-700" />
          )}
        </button>
      </div>
    </header>
  );
}
