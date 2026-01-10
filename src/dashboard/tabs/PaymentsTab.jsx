import { DollarSign, Clock, TrendingUp, CheckCircle } from "lucide-react";

export default function PaymentsTab({ data }) {
  const paid = data.collections.filter(c => c.status === "Paid");

  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Payment Details
      </h3>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <SummaryCard
          title="TOTAL"
          value={`₹${data.totalEarnings}`}
          icon={DollarSign}
          gradient="from-green-500 to-green-600"
        />
        <SummaryCard
          title="PENDING"
          value={`₹${data.pendingPayment}`}
          icon={Clock}
          gradient="from-yellow-500 to-yellow-600"
        />
        <SummaryCard
          title="RATE"
          value="₹30"
          icon={TrendingUp}
          gradient="from-blue-500 to-blue-600"
        />
      </div>

      {/* Transactions */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
        <h4 className="text-xl font-bold text-gray-900 mb-4">
          Recent Transactions
        </h4>

        <div className="space-y-4">
          {paid.map(payment => (
            <div
              key={payment.id}
              className="flex justify-between items-center border-b py-4 last:border-0"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 rounded-full p-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Collection on {payment.date}
                  </p>
                  <p className="text-sm text-gray-600">
                    {payment.quantity}L collected
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-bold text-green-600 text-lg">
                  ₹{payment.amount}
                </p>
                <p className="text-sm text-gray-600">
                  Paid on {payment.paymentDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Terms */}
      <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
        <h4 className="font-bold text-gray-900 mb-3">
          Payment Terms
        </h4>

        <ul className="space-y-2 text-gray-700">
          {[
            "Payments are processed within 5 business days of collection",
            "Current rate: ₹30 per liter of used cooking oil",
            "Payments are made via bank transfer to registered account"
          ].map((text, i) => (
            <li key={i} className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SummaryCard({ title, value, icon: Icon, gradient }) {
  return (
    <div
      className={`bg-gradient-to-br ${gradient} rounded-2xl p-6 text-white`}
    >
      <div className="flex justify-between items-center mb-4">
        <Icon className="h-8 w-8" />
        <span className="text-sm font-semibold opacity-90">
          {title}
        </span>
      </div>
      <h4 className="text-3xl font-bold mb-1">{value}</h4>
    </div>
  );
}
