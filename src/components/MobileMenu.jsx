export default function MobileMenu({
  currentPage,
  navigateTo,
  closeMenu,
}) {
  return (
    <div className="md:hidden fixed top-16 left-0 w-full bg-white border-t shadow-lg z-40">
      <div className="px-4 py-4 space-y-3">

        <button
          onClick={() => navigateTo("home")}
          className={`block w-full text-left ${
            currentPage === "home"
              ? "text-green-600 font-semibold"
              : "text-gray-700"
          } hover:text-green-600 transition`}
        >
          Home
        </button>

        <button
          onClick={() => navigateTo("register")}
          className={`block w-full text-left ${
            currentPage === "register"
              ? "text-green-600 font-semibold"
              : "text-gray-700"
          } hover:text-green-600 transition`}
        >
          Register Restaurant
        </button>

        <button
          onClick={() => navigateTo("dashboard")}
          className={`block w-full text-left ${
            currentPage === "dashboard"
              ? "text-green-600 font-semibold"
              : "text-gray-700"
          } hover:text-green-600 transition`}
        >
          Dashboard
        </button>

        <button
          onClick={() => {
            navigateTo("home");
            setTimeout(() => {
              document
                .getElementById("problem")
                ?.scrollIntoView({ behavior: "smooth" });
            }, 100);
          }}
          className="block w-full text-left text-gray-700 hover:text-green-600 transition"
        >
          Problem
        </button>

        <button
          onClick={() => {
            navigateTo("home");
            setTimeout(() => {
              document
                .getElementById("solution")
                ?.scrollIntoView({ behavior: "smooth" });
            }, 100);
          }}
          className="block w-full text-left text-gray-700 hover:text-green-600 transition"
        >
          Solution
        </button>

        <button
          onClick={() => {
            navigateTo("home");
            setTimeout(() => {
              document
                .getElementById("impact")
                ?.scrollIntoView({ behavior: "smooth" });
            }, 100);
          }}
          className="block w-full text-left text-gray-700 hover:text-green-600 transition"
        >
          Impact
        </button>

        <button
          onClick={() => {
            navigateTo("home");
            setTimeout(() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }, 100);
          }}
          className="block bg-green-600 text-white px-6 py-3 rounded-full text-center font-semibold"
        >
          Contact
        </button>

      </div>
    </div>
  );
}
