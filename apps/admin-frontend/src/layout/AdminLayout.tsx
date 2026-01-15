import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex h-screen bg-[#0d0d0d] text-gray-200 overflow-hidden">
      
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden h-screen md:block">
        <Sidebar />
      </aside>

      {/* MOBILE SIDEBAR */}
      <div className="md:hidden">
        <Sidebar />
      </div>

      {/* MAIN AREA */}
      <div className="flex flex-col flex-1 h-screen min-w-0">

        {/* NAVBAR */}
        <Navbar />

        {/* SCROLLABLE PAGE CONTENT */}
        <main className="flex-1 p-4 overflow-x-hidden overflow-y-auto sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>

      </div>
    </div>
  );
}
