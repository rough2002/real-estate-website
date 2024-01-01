import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <div className="text-orange-900 grid grid-rows-[70px_1fr] h-screen">
      <Navbar />
      <div className="overflow-auto row-start-2 row-span-1 bg-slate-100 h-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
