import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Smartphone,
  Laptop,
  PcCase,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const [hovered, setHovered] = useState(false);

  const expanded = !collapsed || hovered;

  const isActive = (path: string) =>
    location.pathname === path ||
    location.pathname.startsWith(path + "/");

  return (
    <>
      {/* MOBILE HEADER */}
      <div className="flex items-center justify-between p-4 border-b md:hidden border-zinc-800 bg-zinc-950">
        <h1 className="text-lg font-bold tracking-wide text-white">
          SPXCEL
        </h1>

        <button
          onClick={() => setOpen(true)}
          className="p-2 rounded-lg hover:bg-zinc-800"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* MOBILE BACKDROP */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        onMouseEnter={() => {
          if (collapsed) setHovered(true);
        }}
        onMouseLeave={() => {
          if (collapsed) setHovered(false);
        }}
        className={`
          fixed md:sticky top-0 left-0 z-50
          flex flex-col h-screen
          border-r border-zinc-800
          bg-zinc-950
          transition-all duration-300

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }

          ${expanded ? "md:w-64" : "md:w-20"}
          w-64
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-4 border-b border-zinc-800">
          {expanded ? (
            <div>
              <h1 className="text-lg font-bold tracking-wide text-white">
                SPXCEL
              </h1>

              <p className="text-xs text-zinc-500">
                Admin Panel
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-center w-full">
              <span className="text-lg font-bold text-violet-400">
                S
              </span>
            </div>
          )}

          {expanded && (
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="items-center justify-center hidden w-8 h-8 text-white transition-all duration-200 rounded-lg shadow-lg  md:flex bg-violet-600 shadow-violet-950/40 hover:bg-violet-500"
            >
              {collapsed ? (
                <ChevronRight size={18} />
              ) : (
                <ChevronLeft size={18} />
              )}
            </button>
          )}

          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-lg md:hidden hover:bg-zinc-800"
          >
            <X size={20} />
          </button>
        </div>

        {/* NAVIGATION */}
        <nav className="flex flex-col flex-1 p-3">
          <NavItem
            to="/admin/dashboard"
            label="Dashboard"
            icon={<LayoutDashboard size={18} />}
            active={isActive("/admin/dashboard")}
            collapsed={!expanded}
            onClick={() => setOpen(false)}
          />

          <NavItem
            to="/admin/products/phones"
            label="Phones"
            icon={<Smartphone size={18} />}
            active={isActive("/admin/products/phones")}
            collapsed={!expanded}
            onClick={() => setOpen(false)}
          />

          <NavItem
            to="/admin/products/laptops"
            label="Laptops"
            icon={<Laptop size={18} />}
            active={isActive("/admin/products/laptops")}
            collapsed={!expanded}
            onClick={() => setOpen(false)}
          />

          <NavItem
            to="/admin/products/pcs"
            label="PC Parts"
            icon={<PcCase size={18} />}
            active={isActive("/admin/products/pcs")}
            collapsed={!expanded}
            onClick={() => setOpen(false)}
          />

          <div className="pt-4 mt-auto border-t border-zinc-800">
            <NavItem
              to="/admin/settings/account"
              label="Settings"
              icon={<Settings size={18} />}
              active={isActive("/admin/settings")}
              collapsed={!expanded}
              onClick={() => setOpen(false)}
            />
          </div>
        </nav>
      </aside>
    </>
  );
}

function NavItem({
  to,
  label,
  icon,
  active,
  collapsed,
  onClick,
}: {
  to: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
  collapsed: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      title={collapsed ? label : ""}
      className={`
        flex items-center gap-3
        px-3 py-3
        rounded-xl
        transition-all duration-200

        ${
          active
            ? "bg-violet-600 text-white shadow-lg shadow-violet-950/30"
            : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
        }

        ${collapsed ? "justify-center" : ""}
      `}
    >
      <span className="shrink-0">
        {icon}
      </span>

      {!collapsed && (
        <span className="text-sm font-medium">
          {label}
        </span>
      )}
    </Link>
  );
}