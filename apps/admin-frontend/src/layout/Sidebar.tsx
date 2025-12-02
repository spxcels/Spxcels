import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auto } from "@/api/auto";
import { useAuth } from "@/context/AuthContext";

// Icons
import {
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Database,
  LayoutDashboard,
  LogOut,
  Settings
} from "lucide-react";

export default function Sidebar() {
  const [tables, setTables] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    auto.tables().then((rows) => {
      const names = rows.map((r: any) => r.table_name);
      setTables(names);
    });
  }, []);

  const isActive = (path: string) => location.pathname.includes(path);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="flex items-center justify-between w-full p-4 text-white bg-black/40 backdrop-blur-lg md:hidden">
        <h1 className="text-xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text whitespace-nowrap">
          Spex Admin
        </h1>

        <button
          onClick={() => setOpen(true)}
          className="p-2 transition rounded-lg bg-white/10 hover:bg-white/20 active:scale-95"
        >
          <Menu size={26} />
        </button>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`
          fixed md:static top-0 left-0 h-full z-50
          border-r border-white/10 backdrop-blur-xl shadow-xl bg-black/40
          flex flex-col justify-between transition-all duration-300 
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          ${collapsed ? "md:w-20" : "md:w-64"}
          w-64 p-5
        `}
      >
        <div>
          {/* HEADER */}
          <div className="flex items-center justify-between mb-8">
            {!collapsed && (
              <h1 className="text-2xl font-extrabold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text whitespace-nowrap">
                Spex Admin
              </h1>
            )}

            {/* Desktop collapse */}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="hidden p-2 transition rounded-lg md:flex bg-white/10 hover:bg-white/20"
            >
              {collapsed ? <ChevronRight size={22} /> : <ChevronLeft size={22} />}
            </button>

            {/* Mobile close */}
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-lg md:hidden bg-white/10 hover:bg-white/20"
            >
              <X size={26} />
            </button>
          </div>

          {/* Dashboard */}
          <Link
            to="/admin/dashboard"
            onClick={() => setOpen(false)}
            className={`group relative mb-5 flex items-center gap-3 p-3 rounded-xl transition-all 
              ${
                isActive("/admin/dashboard")
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg"
                  : "bg-white/5 hover:bg-white/10"
              }
            `}
          >
            <LayoutDashboard
              size={22}
              className={`transition-all duration-300
                ${
                  isActive("/admin/dashboard")
                    ? "scale-125 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                    : ""
                }
                group-hover:scale-110 group-hover:text-purple-300
              `}
            />
            {!collapsed && <span>Dashboard</span>}
          </Link>

          {/* DB TITLE */}
          {!collapsed && (
            <h2 className="mb-2 text-sm tracking-widest uppercase opacity-70">
              Database Tables
            </h2>
          )}

          {/* TABLE LINKS */}
          <div className="flex flex-col gap-2">
            {tables.map((table) => (
              <Link
                key={table}
                to={`/admin/tables/${table}`}
                onClick={() => setOpen(false)}
                className={`group relative flex items-center gap-3 p-3 rounded-xl capitalize transition-all 
                  ${
                    isActive(`/admin/tables/${table}`)
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
                      : "bg-white/5 hover:bg-white/10"
                  }
                `}
              >
                <Database
                  size={20}
                  className={`transition-all duration-300
                    ${
                      isActive(`/admin/tables/${table}`)
                        ? "scale-125 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                        : ""
                    }
                    group-hover:scale-110 group-hover:text-pink-300
                  `}
                />
                {!collapsed && table}
              </Link>
            ))}
          </div>

          {/* SETTINGS SECTION */}
          {!collapsed && (
            <h2 className="mt-6 mb-2 text-sm tracking-widest uppercase opacity-70">
              Settings
            </h2>
          )}

          {/* Database Settings */}
          <Link
            to="/admin/settings/database"
            onClick={() => setOpen(false)}
            className={`group relative flex items-center gap-3 p-3 rounded-xl transition-all 
              ${
                isActive("/admin/settings/database")
                  ? "bg-gradient-to-r from-yellow-600 to-orange-600 shadow-lg"
                  : "bg-white/5 hover:bg-white/10"
              }
            `}
          >
            <Settings
              size={20}
              className={`transition-all duration-300
                ${
                  isActive("/admin/settings/database")
                    ? "scale-125 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                    : ""
                }
                group-hover:scale-110 group-hover:text-yellow-300
              `}
            />
            {!collapsed && "Database Settings"}
          </Link>

          {/* Account Settings (NEW) */}
          <Link
            to="/admin/settings/account"
            onClick={() => setOpen(false)}
            className={`group relative flex items-center gap-3 p-3 rounded-xl transition-all 
              ${
                isActive("/admin/settings/account")
                  ? "bg-gradient-to-r from-green-600 to-emerald-600 shadow-lg"
                  : "bg-white/5 hover:bg-white/10"
              }
            `}
          >
            <Settings
              size={20}
              className={`transition-all duration-300
                ${
                  isActive("/admin/settings/account")
                    ? "scale-125 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                    : ""
                }
                group-hover:scale-110 group-hover:text-green-300
              `}
            />
            {!collapsed && "Account Settings"}
          </Link>
        </div>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="relative flex items-center justify-center w-full gap-3 p-3 mt-6 font-semibold text-white transition-all bg-red-600/80 hover:bg-red-700 rounded-xl active:scale-95"
        >
          <LogOut size={20} />
          {!collapsed && "Logout"}
        </button>
      </div>
    </>
  );
}
