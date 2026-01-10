import { useState } from "react";

/* Layout components */
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Footer from "./components/Footer";

/* Pages */
import Home from "./pages/Home";
import RestaurantRegistration from "./registration/RestaurantRegistration";
import RestaurantDashboard from "./dashboard/RestaurantDashboard";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar
        currentPage={currentPage}
        navigateTo={navigateTo}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <MobileMenu
          currentPage={currentPage}
          navigateTo={navigateTo}
          closeMenu={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Pages */}
      {currentPage === "home" && (
        <>
          <Home navigateTo={navigateTo} />
          <Footer navigateTo={navigateTo} />
        </>
      )}

      {currentPage === "register" && (
        <RestaurantRegistration onBack={() => navigateTo("home")} />
      )}

      {currentPage === "dashboard" && (
        <RestaurantDashboard onBack={() => navigateTo("home")} />
      )}
    </div>
  );
}
