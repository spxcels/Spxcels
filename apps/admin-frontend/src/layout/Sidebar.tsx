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
  Database,
} from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (path: string) =>
    location.pathname === path ||
    location.pathname.startsWith(path + "/");

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="flex items-center justify-between p-4 bg-white border-b md:hidden dark:bg-zinc-900 dark:border-zinc-800">
        <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Spex Admin
        </h1>

        <button
          onClick={() => setOpen(true)}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed md:sticky top-0 left-0 z-50
          h-screen flex flex-col
          transition-all duration-300
          border-r bg-white border-gray-200
          dark:bg-zinc-900 dark:border-zinc-800
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          ${collapsed ? "md:w-20" : "md:w-64"}
          w-64
        `}
      >
        <div className="p-4 overflow-y-auto">
          {/* HEADER */}
          <div className="flex items-center justify-between mb-6">
            {!collapsed && (
              <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Spxcel
              </h1>
            )}

            <button
              onClick={() => setCollapsed(!collapsed)}
              className="hidden p-2 rounded-md md:flex hover:bg-gray-100 dark:hover:bg-zinc-800"
            >
              {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </button>

            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-md md:hidden hover:bg-gray-100 dark:hover:bg-zinc-800"
            >
              <X size={22} />
            </button>
          </div>

          {/* DASHBOARD */}
          <NavItem
            to="/admin/dashboard"
            label="Dashboard"
            icon={<LayoutDashboard size={18} />}
            active={isActive("/admin/dashboard")}
            collapsed={collapsed}
            onClick={() => setOpen(false)}
          />

          {/* TABLES */}
          {!collapsed && (
            <p className="mt-6 mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
              Tables
            </p>
          )}

          <NavItem
            to="/admin/tables/phone-models"
            label="Phone Models"
            icon={<Database size={18} />}
            active={isActive("/admin/tables/phone-models")}
            collapsed={collapsed}
            onClick={() => setOpen(false)}
          />

          <NavItem
            to="/admin/tables/phone-media"
            label="Phone Media"
            icon={<Database size={18} />}
            active={isActive("/admin/tables/phone-media")}
            collapsed={collapsed}
            onClick={() => setOpen(false)}
          />

          <NavItem
            to="/admin/tables/brands"
            label="Brands"
            icon={<Database size={18} />}
            active={isActive("/admin/tables/brands")}
            collapsed={collapsed}
            onClick={() => setOpen(false)}
          />

          <NavItem
            to="/admin/tables/specs"
            label="Specs"
            icon={<Database size={18} />}
            active={isActive("/admin/tables/specs")}
            collapsed={collapsed}
            onClick={() => setOpen(false)}
          />

          <NavItem
            to="/admin/tables/affiliate-links"
            label="Affiliate Links"
            icon={<Database size={18} />}
            active={isActive("/admin/tables/affiliate-links")}
            collapsed={collapsed}
            onClick={() => setOpen(false)}
          />

          {/* PRODUCTS */}
          {!collapsed && (
            <p className="mt-6 mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
              Products
            </p>
          )}

          <NavItem
            to="/admin/products/phones"
            label="Phones"
            icon={<Smartphone size={18} />}
            active={isActive("/admin/products/phones")}
            collapsed={collapsed}
            onClick={() => setOpen(false)}
          />

          <NavItem
            to="/admin/products/laptops"
            label="Laptops"
            icon={<Laptop size={18} />}
            active={isActive("/admin/products/laptops")}
            collapsed={collapsed}
            onClick={() => setOpen(false)}
          />

          <NavItem
            to="/admin/products/pcs"
            label="PCs"
            icon={<PcCase size={18} />}
            active={isActive("/admin/products/pcs")}
            collapsed={collapsed}
            onClick={() => setOpen(false)}
          />
        </div>
      </aside>
    </>
  );
}

/* =========================
   NAV ITEM
========================= */

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
      className={`
        flex items-center gap-3 px-3 py-2 rounded-md mb-1
        transition-all duration-150
        ${
          active
            ? "bg-gray-200 text-gray-900 font-semibold dark:bg-zinc-800 dark:text-white"
            : "text-gray-700 hover:bg-gray-100 hover:font-semibold dark:text-gray-300 dark:hover:bg-zinc-800"
        }
      `}
    >
      {icon}
      {!collapsed && label}
    </Link>
  );
}
