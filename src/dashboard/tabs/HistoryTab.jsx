export default function HistoryTab({ data }) {
  const collections = data.collections;

  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Collection History
      </h3>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-4 px-4 font-semibold text-gray-700">
                Date
              </th>
              <th className="text-left py-4 px-4 font-semibold text-gray-700">
                Quantity (L)
              </th>
              <th className="text-left py-4 px-4 font-semibold text-gray-700">
                Amount (₹)
              </th>
              <th className="text-left py-4 px-4 font-semibold text-gray-700">
                Status
              </th>
              <th className="text-left py-4 px-4 font-semibold text-gray-700">
                Payment Date
              </th>
            </tr>
          </thead>

          <tbody>
            {collections.map((collection) => (
              <tr
                key={collection.id}
                className="border-b border-gray-100 hover:bg-gray-50 transition"
              >
                <td className="py-4 px-4 text-gray-900">
                  {collection.date}
                </td>

                <td className="py-4 px-4 font-semibold text-gray-900">
                  {collection.quantity}L
                </td>

                <td className="py-4 px-4 font-semibold text-gray-900">
                  ₹{collection.amount}
                </td>

                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      collection.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {collection.status}
                  </span>
                </td>

                <td className="py-4 px-4 text-gray-600">
                  {collection.paymentDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="mt-6 bg-gray-50 rounded-xl p-6">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <p className="text-gray-600 text-sm mb-1">
              Total Collections
            </p>
            <p className="text-2xl font-bold text-gray-900">
              {collections.length}
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-sm mb-1">
              Total Volume
            </p>
            <p className="text-2xl font-bold text-gray-900">
              {data.totalOilCollected}L
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-sm mb-1">
              Total Value
            </p>
            <p className="text-2xl font-bold text-green-600">
              ₹{data.totalEarnings}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
