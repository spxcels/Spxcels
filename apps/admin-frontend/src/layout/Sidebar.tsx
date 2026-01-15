import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auto } from "@/api/auto";
import { useAuth } from "@/context/AuthContext";
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
      setTables(rows.map((r: any) => r.table_name));
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
      <div className="flex items-center justify-between p-4 md:hidden bg-black/40 backdrop-blur-lg">
        <h1 className="text-xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
          Spex Admin
        </h1>

        <button
          onClick={() => setOpen(true)}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20"
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
          fixed md:sticky top-0 left-0 z-50
          h-screen overflow-y-auto
          border-r border-white/10
          backdrop-blur-xl bg-black/40 shadow-xl
          flex flex-col justify-between
          transition-all duration-300
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          ${collapsed ? "md:w-20" : "md:w-64"}
          w-64 p-5
        `}
      >
        {/* TOP */}
        <div>
          {/* HEADER */}
          <div className="flex items-center justify-between mb-8">
            {!collapsed && (
              <h1 className="text-2xl font-extrabold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                Spex Admin
              </h1>
            )}

            <button
              onClick={() => setCollapsed(!collapsed)}
              className="hidden p-2 rounded-lg md:flex bg-white/10 hover:bg-white/20"
            >
              {collapsed ? <ChevronRight /> : <ChevronLeft />}
            </button>

            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-lg md:hidden bg-white/10 hover:bg-white/20"
            >
              <X size={26} />
            </button>
          </div>

          {/* DASHBOARD */}
          <Link
            to="/admin/dashboard"
            onClick={() => setOpen(false)}
            className={`flex items-center gap-3 p-3 mb-4 rounded-xl transition
              ${
                isActive("/admin/dashboard")
                  ? "bg-gradient-to-r from-purple-600 to-pink-600"
                  : "bg-white/5 hover:bg-white/10"
              }
            `}
          >
            <LayoutDashboard />
            {!collapsed && "Dashboard"}
          </Link>

          {!collapsed && (
            <p className="mb-2 text-xs tracking-widest uppercase opacity-60">
              Database Tables
            </p>
          )}

          {tables.map((table) => (
            <Link
              key={table}
              to={`/admin/tables/${table}`}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 p-3 rounded-xl capitalize transition
                ${
                  isActive(`/admin/tables/${table}`)
                    ? "bg-gradient-to-r from-blue-600 to-purple-600"
                    : "bg-white/5 hover:bg-white/10"
                }
              `}
            >
              <Database size={20} />
              {!collapsed && table}
            </Link>
          ))}

          {!collapsed && (
            <p className="mt-6 mb-2 text-xs tracking-widest uppercase opacity-60">
              Settings
            </p>
          )}

          <Link
            to="/admin/settings/database"
            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10"
          >
            <Settings size={20} />
            {!collapsed && "Database Settings"}
          </Link>

          <Link
            to="/admin/settings/account"
            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10"
          >
            <Settings size={20} />
            {!collapsed && "Account Settings"}
          </Link>
        </div>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="flex items-center justify-center gap-3 p-3 mt-6 bg-red-600/80 hover:bg-red-700 rounded-xl"
        >
          <LogOut />
          {!collapsed && "Logout"}
        </button>
      </div>
    </>
  );
}
