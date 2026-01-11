import {
  Factory,
  MapPin,
  Droplet,
  Clock,
  MessageCircle,
  ArrowRight,
  Mail,
} from "lucide-react";

export default function RestaurantForm({
  data,
  onChange,
  onSubmit,
  onBack,
  isSubmitting,
}) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Restaurant Information
      </h2>

      {/* Business Details */}
      <Section icon={Factory} title="Business Details">
        <Input 
          name="restaurantName" 
          label="Restaurant Name" 
          data={data} 
          onChange={onChange} 
          required 
          placeholder="Enter restaurant name"
        />
        <Input 
          name="ownerName" 
          label="Owner Name" 
          data={data} 
          onChange={onChange} 
          required 
          placeholder="Enter owner name"
        />
        <Input 
          name="email" 
          label="Email Address" 
          type="email"
          data={data} 
          onChange={onChange} 
          required 
          placeholder="your@email.com"
        />
        <Input 
          name="phone" 
          label="Phone Number" 
          type="tel"
          data={data} 
          onChange={onChange} 
          required 
          placeholder="+91 XXXXX XXXXX"
        />
        <div className="md:col-span-2">
          <label className="block font-semibold mb-2 text-gray-700">
            WhatsApp Number <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center space-x-2">
            <MessageCircle className="h-5 w-5 text-green-600" />
            <input
              type="tel"
              name="whatsappNumber"
              value={data.whatsappNumber}
              onChange={onChange}
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">📱 We'll send updates on this number</p>
        </div>
      </Section>

      {/* Location */}
      <Section icon={MapPin} title="Location Details">
        <Textarea 
          name="address" 
          label="Complete Address" 
          data={data} 
          onChange={onChange} 
          required 
          placeholder="Enter complete address with landmarks"
        />
        <Input 
          name="city" 
          label="City" 
          data={data} 
          onChange={onChange}
          placeholder="Enter city"
        />
        <Input 
          name="state" 
          label="State" 
          data={data} 
          onChange={onChange}
          placeholder="Enter state"
        />
        <Input 
          name="pincode" 
          label="Pincode" 
          data={data} 
          onChange={onChange}
          placeholder="6-digit pincode"
        />
      </Section>

      {/* UCO Details */}
      <Section icon={Droplet} title="UCO Collection Details">
        <div>
          <label className="block font-semibold mb-2 text-gray-700">
            Estimated UCO Quantity (Liters/Month) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="oilQuantity"
            value={data.oilQuantity}
            onChange={onChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
            placeholder="e.g., 50"
            min="0"
          />
          <p className="text-sm text-gray-500 mt-2">Approximate amount of used cooking oil generated per month</p>
        </div>
        <div>
          <label className="block font-semibold mb-2 text-gray-700">
            Collection Frequency
          </label>
          <select
            name="collectionFrequency"
            value={data.collectionFrequency}
            onChange={onChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
          >
            <option value="daily">Daily</option>
            <option value="alternate">Alternate Days</option>
            <option value="weekly">Weekly</option>
            <option value="biweekly">Bi-weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-2 text-gray-700">
            Preferred Collection Time
          </label>
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-gray-400" />
            <input
              type="time"
              name="collectionTime"
              value={data.collectionTime}
              onChange={onChange}
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">Best time for our team to collect UCO</p>
        </div>
      </Section>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <button
          onClick={onSubmit}
          disabled={isSubmitting}
          className={`flex-1 ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-green-600 hover:bg-green-700'
          } text-white py-4 rounded-lg text-lg font-semibold transition flex items-center justify-center`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                <circle 
                  className="opacity-25" 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  strokeWidth="4" 
                  fill="none"
                />
                <path 
                  className="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending Email...
            </>
          ) : (
            <>
              <Mail className="mr-2 h-5 w-5" />
              Submit & Send Email Confirmation
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </button>

        <button
          onClick={onBack}
          disabled={isSubmitting}
          className={`sm:w-auto px-8 border-2 border-gray-300 text-gray-700 py-4 rounded-lg text-lg font-semibold transition ${
            isSubmitting 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:bg-gray-50'
          }`}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

/* Helper Components */

function Section({ icon: Icon, title, children }) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
        <Icon className="h-6 w-6 text-green-600 mr-2" />
        {title}
      </h3>
      <div className="grid md:grid-cols-2 gap-6">{children}</div>
    </div>
  );
}

function Input({ label, name, data, onChange, type = "text", required, placeholder }) {
  return (
    <div>
      <label className="block font-semibold mb-2 text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={data[name]}
        onChange={onChange}
        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
}

function Textarea({ label, name, data, onChange, required, placeholder }) {
  return (
    <div className="md:col-span-2">
      <label className="block font-semibold mb-2 text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        name={name}
        rows="3"
        value={data[name]}
        onChange={onChange}
        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
}