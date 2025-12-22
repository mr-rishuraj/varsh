import React, { useState } from 'react';
import { Droplet, Factory, Leaf, Shield, TrendingUp, Users, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';

export default function WasteOilStartup() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: 'restaurant',
    message: ''
  });

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.phone) {
      alert('Thank you for your interest! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', businessType: 'restaurant', message: '' });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Droplet className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">VARSH</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#problem" className="text-gray-700 hover:text-green-600 transition" onClick={(e) => { e.preventDefault(); document.getElementById('problem').scrollIntoView({ behavior: 'smooth' }); }}>Problem</a>
              <a href="#solution" className="text-gray-700 hover:text-green-600 transition" onClick={(e) => { e.preventDefault(); document.getElementById('solution').scrollIntoView({ behavior: 'smooth' }); }}>Solution</a>
              <a href="#impact" className="text-gray-700 hover:text-green-600 transition" onClick={(e) => { e.preventDefault(); document.getElementById('impact').scrollIntoView({ behavior: 'smooth' }); }}>Impact</a>
              <a href="#contact" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition" onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>Get Started</a>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#problem" className="block text-gray-700 hover:text-green-600" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); document.getElementById('problem').scrollIntoView({ behavior: 'smooth' }); }}>Problem</a>
              <a href="#solution" className="block text-gray-700 hover:text-green-600" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); document.getElementById('solution').scrollIntoView({ behavior: 'smooth' }); }}>Solution</a>
              <a href="#impact" className="block text-gray-700 hover:text-green-600" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); document.getElementById('impact').scrollIntoView({ behavior: 'smooth' }); }}>Impact</a>
              <a href="#contact" className="block bg-green-600 text-white px-6 py-2 rounded-full text-center" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>Get Started</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Turning Waste Oil Into <span className="text-green-600">Clean Energy</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We collect used cooking oil from restaurants and supply it to biodiesel manufacturers, protecting public health and powering a sustainable future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition flex items-center justify-center">
                  Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="#solution" className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition text-center">
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-green-600 rounded-3xl p-8 text-white shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Shield className="h-12 w-12 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">60%+ Illegal Reuse</h3>
                      <p className="text-green-100">Used cooking oil re-enters food chain, causing severe health risks</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Leaf className="h-12 w-12 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Zero Waste</h3>
                      <p className="text-green-100">Convert waste into valuable biodiesel feedstock</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">The Crisis We're Solving</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              India faces a massive public health and environmental challenge with used cooking oil disposal
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <div className="bg-red-600 text-white rounded-full h-16 w-16 flex items-center justify-center mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Health Crisis</h3>
              <p className="text-gray-700">
                Over 60% of used cooking oil illegally re-enters the food chain, exposing millions to severe cancer risks and cardiovascular diseases.
              </p>
            </div>

            <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-8">
              <div className="bg-orange-600 text-white rounded-full h-16 w-16 flex items-center justify-center mb-4">
                <Droplet className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Urban Pollution</h3>
              <p className="text-gray-700">
                Improper disposal clogs city drainage systems, causing flooding and contaminating water sources across urban India.
              </p>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8">
              <div className="bg-yellow-600 text-white rounded-full h-16 w-16 flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Wasted Resource</h3>
              <p className="text-gray-700">
                Despite FSSAI mandates, restaurants lack reliable disposal partners, wasting valuable biodiesel feedstock worth crores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Solution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A seamless bridge between restaurants and biodiesel manufacturers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">1</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Partner Registration</h4>
                    <p className="text-gray-600">Restaurants sign up for free scheduled collection services</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">2</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Scheduled Collection</h4>
                    <p className="text-gray-600">Our team collects used cooking oil with proper storage containers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">3</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Quality Processing</h4>
                    <p className="text-gray-600">Oil is filtered and processed to meet industry standards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">4</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Supply to Manufacturers</h4>
                    <p className="text-gray-600">Clean feedstock delivered to biodiesel production facilities</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits for Partners</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">FSSAI compliance guaranteed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Free scheduled collection service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Proper documentation and certificates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Zero hassle disposal solution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Support India's green energy mission</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Potential revenue sharing opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating a sustainable ecosystem that benefits everyone
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600 text-lg">Restaurant Partners (Target)</p>
            </div>
            <div className="text-center">
              <Factory className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-900 mb-2">10+</h3>
              <p className="text-gray-600 text-lg">Manufacturer Partnerships</p>
            </div>
            <div className="text-center">
              <Leaf className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-900 mb-2">100%</h3>
              <p className="text-gray-600 text-lg">Waste Oil Recycled</p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Join the Green Revolution</h3>
            <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
              Be part of India's sustainable future. Transform waste into energy while protecting public health.
            </p>
            <a href="#contact" className="inline-block bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
              Partner With Us Today
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get Started Today</h2>
            <p className="text-xl text-gray-600">
              Join our network of responsible restaurants and manufacturers
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Business Type</label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
                  >
                    <option value="restaurant">Restaurant</option>
                    <option value="manufacturer">Manufacturer</option>
                    <option value="hotel">Hotel</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
                  placeholder="Tell us about your business and requirements..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-green-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
              >
                Submit Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Droplet className="h-8 w-8 text-green-500" />
                <span className="text-2xl font-bold">VARSH</span>
              </div>
              <p className="text-gray-400">Transforming waste oil into clean energy for a sustainable India.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#problem" className="block text-gray-400 hover:text-green-500 transition">Problem</a>
                <a href="#solution" className="block text-gray-400 hover:text-green-500 transition">Solution</a>
                <a href="#impact" className="block text-gray-400 hover:text-green-500 transition">Impact</a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">For Partners</h4>
              <div className="space-y-2">
                <a href="#contact" className="block text-gray-400 hover:text-green-500 transition">Restaurants</a>
                <a href="#contact" className="block text-gray-400 hover:text-green-500 transition">Manufacturers</a>
                <a href="#contact" className="block text-gray-400 hover:text-green-500 transition">Contact Us</a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>Email: info@VARSH.in</p>
                <p>Phone: +91 XXXXX XXXXX</p>
                <p>Location: India</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VARSH. All rights reserved. Making India cleaner, one drop at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}