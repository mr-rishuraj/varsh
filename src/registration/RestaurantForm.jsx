import {
  Factory,
  MapPin,
  Droplet,
  Clock,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export default function RestaurantForm({
  data,
  onChange,
  onSubmit,
  onBack,
}) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Restaurant Information
      </h2>

      {/* Business Details */}
      <Section icon={Factory} title="Business Details">
        <Input name="restaurantName" label="Restaurant Name" data={data} onChange={onChange} required />
        <Input name="ownerName" label="Owner Name" data={data} onChange={onChange} required />
        <Input name="email" label="Email" data={data} onChange={onChange} required />
        <Input name="phone" label="Phone" data={data} onChange={onChange} required />
        <Input name="whatsappNumber" label="WhatsApp Number" data={data} onChange={onChange} required />
      </Section>

      {/* Location */}
      <Section icon={MapPin} title="Location">
        <Textarea name="address" label="Complete Address" data={data} onChange={onChange} required />
        <Input name="city" label="City" data={data} onChange={onChange} />
        <Input name="state" label="State" data={data} onChange={onChange} />
        <Input name="pincode" label="Pincode" data={data} onChange={onChange} />
      </Section>

      {/* UCO */}
      <Section icon={Droplet} title="UCO Details">
        <Input name="oilQuantity" label="Estimated UCO (L/month)" data={data} onChange={onChange} required />
        <Input name="collectionTime" label="Preferred Collection Time" type="time" data={data} onChange={onChange} />
      </Section>

      {/* Actions */}
      <div className="flex gap-4 pt-6">
        <button
          onClick={onSubmit}
          className="flex-1 bg-green-600 text-white py-4 rounded-lg font-semibold flex justify-center items-center"
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          Submit & Send WhatsApp
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>

        <button
          onClick={onBack}
          className="px-8 border-2 border-gray-300 rounded-lg"
        >
          Back
        </button>
      </div>
    </div>
  );
}

/* helper components */

function Section({ icon: Icon, title, children }) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <Icon className="h-6 w-6 text-green-600 mr-2" />
        {title}
      </h3>
      <div className="grid md:grid-cols-2 gap-6">{children}</div>
    </div>
  );
}

function Input({ label, name, data, onChange, type = "text", required }) {
  return (
    <div>
      <label className="block font-semibold mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={data[name]}
        onChange={onChange}
        className="w-full px-4 py-3 border-2 rounded-lg"
      />
    </div>
  );
}

function Textarea({ label, name, data, onChange, required }) {
  return (
    <div className="md:col-span-2">
      <label className="block font-semibold mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        name={name}
        rows="3"
        value={data[name]}
        onChange={onChange}
        className="w-full px-4 py-3 border-2 rounded-lg"
      />
    </div>
  );
}
