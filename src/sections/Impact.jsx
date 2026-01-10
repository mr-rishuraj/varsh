import { Users, Factory, Leaf } from "lucide-react";

export default function Impact({ navigateTo }) {
  return (
    <section id="impact" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creating a sustainable ecosystem that benefits everyone
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Users className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-gray-900 mb-2">500+</h3>
            <p className="text-gray-600 text-lg">
              Restaurant Partners (Target)
            </p>
          </div>

          <div className="text-center">
            <Factory className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-gray-900 mb-2">10+</h3>
            <p className="text-gray-600 text-lg">
              Manufacturer Partnerships
            </p>
          </div>

          <div className="text-center">
            <Leaf className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-gray-900 mb-2">100%</h3>
            <p className="text-gray-600 text-lg">
              Waste Oil Recycled
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Join the Green Revolution
          </h3>
          <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
            Be part of India's sustainable future. Transform waste into energy
            while protecting public health.
          </p>
          <button
            onClick={() => navigateTo("register")}
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
          >
            Partner With Us Today
          </button>
        </div>
      </div>
    </section>
  );
}
