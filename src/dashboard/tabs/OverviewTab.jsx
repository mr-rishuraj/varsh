import { Calendar, Truck, Leaf } from "lucide-react";

export default function OverviewTab({ data }) {
  const recent = data.collections[0];

  return (
    <div className="space-y-6">
      {/* Next Pickup */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Truck className="h-6 w-6" />
              <span className="text-green-100 font-semibold">
                UPCOMING PICKUP
              </span>
            </div>
            <h4 className="text-3xl font-bold mb-1">{data.nextPickup}</h4>
            <p className="text-green-100">
              Scheduled at {data.pickupTime}
            </p>
          </div>

          <div className="bg-white bg-opacity-20 rounded-full p-4">
            <Calendar className="h-8 w-8" />
          </div>
        </div>
      </div>

      {/* Recent Activity + Payment Summary */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Recent Collection */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h4 className="text-lg font-bold text-gray-900 mb-4">
            Recent Collection
          </h4>

          <div className="space-y-3">
            <Row label="Date" value={recent.date} />
            <Row label="Quantity" value={`${recent.quantity}L`} />
            <Row
              label="Amount"
              value={`₹${recent.amount}`}
              highlight
            />
            <Row
              label="Status"
              value={
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {recent.status}
                </span>
              }
            />
          </div>
        </div>

        {/* Payment Summary */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h4 className="text-lg font-bold text-gray-900 mb-4">
            Payment Summary
          </h4>

          <div className="space-y-3">
            <Row label="Total Earnings" value={`₹${data.totalEarnings}`} />
            <Row
              label="Pending Payment"
              value={`₹${data.pendingPayment}`}
              warning
            />
            <Row label="Rate per Liter" value="₹30" />
            <div className="pt-3 border-t text-sm text-gray-500">
              Next payment on Jan 15, 2026
            </div>
          </div>
        </div>
      </div>

      {/* Environmental Impact */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
        <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Leaf className="h-6 w-6 text-green-600 mr-2" />
          Your Environmental Impact
        </h4>

        <div className="grid md:grid-cols-3 gap-4 text-center">
          <ImpactStat
            value={`${data.totalOilCollected}L`}
            label="Waste Oil Recycled"
            color="text-green-600"
          />
          <ImpactStat
            value="225kg"
            label="CO₂ Emissions Saved"
            color="text-blue-600"
          />
          <ImpactStat
            value="340L"
            label="Biodiesel Produced"
            color="text-purple-600"
          />
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, highlight, warning }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-600">{label}</span>
      <span
        className={`font-semibold ${
          highlight
            ? "text-green-600"
            : warning
            ? "text-yellow-600"
            : "text-gray-900"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function ImpactStat({ value, label, color }) {
  return (
    <div>
      <div className={`text-3xl font-bold mb-1 ${color}`}>
        {value}
      </div>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
}
