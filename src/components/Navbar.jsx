import { Droplet, Menu, X } from "lucide-react";

export default function Navbar({
  currentPage,
  navigateTo,
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
  const isHome = currentPage === "home";
  const isRegister = currentPage === "register";
  const isDashboard = currentPage === "dashboard";

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Droplet className="h-8 w-8 text-green-600" />
            <button
              onClick={() => navigateTo("home")}
              className="text-2xl font-bold text-gray-900 hover:text-green-600"
            >
              VARSH
            </button>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-6">

            {/* Home */}
            <NavBtn
              active={isHome}
              onClick={() => navigateTo("home")}
            >
              Home
            </NavBtn>

            {/* Scroll links only visible on Home */}
            {isHome && (
              <>
                <ScrollBtn id="problem">Problem</ScrollBtn>
                <ScrollBtn id="solution">Solution</ScrollBtn>
                <ScrollBtn id="impact">Impact</ScrollBtn>
              </>
            )}

            {/* Always visible */}
            <NavBtn
              active={isRegister}
              onClick={() => navigateTo("register")}
            >
              Register
            </NavBtn>

            <NavBtn
              active={isDashboard}
              onClick={() => navigateTo("dashboard")}
            >
              Dashboard
            </NavBtn>

            {/* Contact CTA only on Home */}
            {isHome && (
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700"
              >
                Contact
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
}

/* helpers */

function NavBtn({ children, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`${
        active
          ? "text-green-600 font-semibold"
          : "text-gray-700"
      } hover:text-green-600 transition`}
    >
      {children}
    </button>
  );
}

function ScrollBtn({ id, children }) {
  return (
    <button
      onClick={() =>
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth" })
      }
      className="text-gray-700 hover:text-green-600 transition"
    >
      {children}
    </button>
  );
}
