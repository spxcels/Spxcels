import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-[#0d0d0d] text-gray-200 overflow-hidden">

      {/* Sidebar */}
      <aside className="hidden md:flex">
        <Sidebar />
      </aside>

      {/* MOBILE SIDEBAR */}
      <div className="md:hidden">
        <Sidebar />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col flex-1 min-w-0">

        {/* TOP NAV */}
        <Navbar />

        {/* MAIN PAGE CONTENT */}
        <main className="w-full p-4 mx-auto overflow-x-hidden sm:p-6 lg:p-8 max-w-7xl">
          <Outlet />   {/* <-- REQUIRED: renders child routes */}
        </main>

      </div>
    </div>
  );
}
