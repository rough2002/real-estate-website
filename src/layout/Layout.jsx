import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div className="text-orange-900 grid grid-rows-[80px_1fr] h-screen">
      <Navbar />
      <div>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
