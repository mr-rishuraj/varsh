import { Droplet, Calendar, BarChart3, DollarSign } from "lucide-react";

export default function StatsCards({ data }) {
  const cards = [
    { icon: Droplet, value: `${data.totalOilCollected}L`, label: "Oil Collected" },
    { icon: Calendar, value: data.nextPickup, label: "Next Pickup" },
    { icon: BarChart3, value: `${data.monthlyAverage}L`, label: "Monthly Avg" },
    { icon: DollarSign, value: `₹${data.totalEarnings}`, label: "Total Earnings" }
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6 mb-8">
      {cards.map((c, i) => {
        const Icon = c.icon;
        return (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-lg">
            <Icon className="h-6 w-6 text-green-600 mb-4" />
            <h3 className="text-3xl font-bold">{c.value}</h3>
            <p className="text-gray-600">{c.label}</p>
          </div>
        );
      })}
    </div>
  );
}
