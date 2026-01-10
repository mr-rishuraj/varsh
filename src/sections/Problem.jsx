import { Shield, Droplet, TrendingUp } from "lucide-react";

export default function Problem() {
  return (
    <section id="problem" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Crisis We're Solving
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            India faces a massive public health and environmental challenge with
            used cooking oil disposal
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Health Crisis */}
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
            <div className="bg-red-600 text-white rounded-full h-16 w-16 flex items-center justify-center mb-4">
              <Shield className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Health Crisis
            </h3>
            <p className="text-gray-700">
              Over 60% of used cooking oil illegally re-enters the food chain,
              exposing millions to severe cancer risks and cardiovascular
              diseases.
            </p>
          </div>

          {/* Urban Pollution */}
          <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-8">
            <div className="bg-orange-600 text-white rounded-full h-16 w-16 flex items-center justify-center mb-4">
              <Droplet className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Urban Pollution
            </h3>
            <p className="text-gray-700">
              Improper disposal clogs city drainage systems, causing flooding and
              contaminating water sources across urban India.
            </p>
          </div>

          {/* Wasted Resource */}
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8">
            <div className="bg-yellow-600 text-white rounded-full h-16 w-16 flex items-center justify-center mb-4">
              <TrendingUp className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Wasted Resource
            </h3>
            <p className="text-gray-700">
              Despite FSSAI mandates, restaurants lack reliable disposal
              partners, wasting valuable biodiesel feedstock worth crores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
