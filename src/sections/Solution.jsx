import { CheckCircle } from "lucide-react";

export default function Solution() {
  return (
    <section
      id="solution"
      className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A seamless bridge between restaurants and biodiesel manufacturers
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* How It Works */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              How It Works
            </h3>

            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "Partner Registration",
                  desc:
                    "Restaurants sign up for free scheduled collection services"
                },
                {
                  step: 2,
                  title: "Scheduled Collection",
                  desc:
                    "Our team collects used cooking oil with proper storage containers"
                },
                {
                  step: 3,
                  title: "Quality Processing",
                  desc:
                    "Oil is filtered and processed to meet industry standards"
                },
                {
                  step: 4,
                  title: "Supply to Manufacturers",
                  desc:
                    "Clean feedstock delivered to biodiesel production facilities"
                }
              ].map((item) => (
                <div key={item.step} className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Benefits for Partners
            </h3>

            <div className="space-y-4">
              {[
                "FSSAI compliance guaranteed",
                "Free scheduled collection service",
                "Proper documentation and certificates",
                "Zero hassle disposal solution",
                "Support India's green energy mission",
                "Potential revenue sharing opportunities"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
