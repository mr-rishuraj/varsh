import { ArrowRight, Shield, Leaf } from "lucide-react";

export default function Hero({ navigateTo }) {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Turning Waste Oil Into{" "}
              <span className="text-green-600">Clean Energy</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              We collect used cooking oil from restaurants and supply it to
              biodiesel manufacturers, protecting public health and powering a
              sustainable future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigateTo("register")}
                className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition flex items-center justify-center"
              >
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("solution")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition text-center"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative">
            <div className="bg-green-600 rounded-3xl p-8 text-white shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield className="h-12 w-12 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      60%+ Illegal Reuse
                    </h3>
                    <p className="text-green-100">
                      Used cooking oil re-enters food chain, causing severe
                      health risks
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Leaf className="h-12 w-12 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Zero Waste</h3>
                    <p className="text-green-100">
                      Convert waste into valuable biodiesel feedstock
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
