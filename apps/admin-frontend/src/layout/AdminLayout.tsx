import Sidebar from "./Sidebar";
import Navbar from "./Topbar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-zinc-950 text-zinc-100">

      {/* SIDEBAR */}
      <aside className="h-full shrink-0">
        <Sidebar />
      </aside>

      {/* MAIN */}
      <div className="flex flex-col flex-1 min-w-0">

        {/* TOPBAR */}
        <div className="border-b shrink-0 border-zinc-900 bg-zinc-950">
          <Navbar />
        </div>

        {/* CONTENT */}
        <main className="flex-1 px-5 py-5 overflow-y-auto bg-zinc-950">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>

      </div>
    </div>
  );
}