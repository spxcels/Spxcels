import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex h-screen overflow-hidden text-gray-900 bg-gray-100 dark:bg-zinc-950 dark:text-gray-100">
      {/* SIDEBAR */}
      <aside className="h-full shrink-0">
        <Sidebar />
      </aside>

      {/* MAIN AREA */}
      <div className="flex flex-col flex-1 h-full min-w-0">
        {/* NAVBAR (sticky, no scroll) */}
        <div className="shrink-0">
          <Navbar />
        </div>

        {/* SCROLLABLE CONTENT */}
        <main className="flex-1 p-4 overflow-y-auto sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
