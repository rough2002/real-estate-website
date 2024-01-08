import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on route change
  }, [location.pathname]);
  return (
    <div className="text-orange-900 grid grid-rows-[80px_1fr] h-screen">
      <Navbar />

      <div className="mt-20">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
