import { Droplet } from "lucide-react";

export default function Footer({ navigateTo }) {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Droplet className="h-8 w-8 text-green-500" />
              <span className="text-2xl font-bold">VARSH</span>
            </div>
            <p className="text-gray-400">
              Transforming waste oil into clean energy for a sustainable India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() =>
                  document
                    .getElementById("problem")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-gray-400 hover:text-green-500 transition text-left"
              >
                Problem
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("solution")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-gray-400 hover:text-green-500 transition text-left"
              >
                Solution
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("impact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-gray-400 hover:text-green-500 transition text-left"
              >
                Impact
              </button>
            </div>
          </div>

          {/* Partners */}
          <div>
            <h4 className="text-lg font-bold mb-4">For Partners</h4>
            <div className="space-y-2">
              <button
                onClick={() => navigateTo("register")}
                className="block text-gray-400 hover:text-green-500 transition text-left"
              >
                Restaurants
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-gray-400 hover:text-green-500 transition text-left"
              >
                Manufacturers
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-gray-400 hover:text-green-500 transition text-left"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>Email: varshgayatellene@gmail.com</p>
              <p>Phone: +91 9131786701</p>
              <p>Location: India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 VARSH. All rights reserved. Making India cleaner, one drop
            at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
