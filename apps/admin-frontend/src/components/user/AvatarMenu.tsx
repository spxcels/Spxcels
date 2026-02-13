import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { userMenuConfig } from "./menu.config";

export default function AvatarMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <div className="relative">
      {/* Avatar button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-center text-sm font-semibold text-white bg-gray-800 rounded-full w-9 h-9 dark:bg-zinc-700"
      >
        A
      </button>

      {open && (
        <div className="absolute right-0 z-50 w-56 mt-2 bg-white border rounded-lg shadow-lg dark:bg-zinc-900 dark:border-zinc-800">
          {/* MAIN */}
          <div className="py-1">
            {userMenuConfig.main.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  navigate(item.href);
                  setOpen(false);
                }}
                className="w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-zinc-800"
              >
                {item.label}
              </button>
            ))}
          </div>

          <Divider />

          {/* SETTINGS */}
          <div className="py-1">
            <p className="px-4 py-1 text-xs text-gray-500 uppercase">
              Settings
            </p>

            {userMenuConfig.settings.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  navigate(item.href);
                  setOpen(false);
                }}
                className="w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-zinc-800"
              >
                {item.label}
              </button>
            ))}
          </div>

          <Divider />

          {/* LOGOUT */}
          <button
            onClick={() => {
              setOpen(false);
              logout();
            }}
            className="w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

function Divider() {
  return (
    <div className="h-px my-1 bg-gray-200 dark:bg-zinc-800" />
  );
}
