export const restaurantData = {
  name: "Spice Garden Restaurant",
  registrationDate: "Jan 15, 2024",
  totalOilCollected: 450,
  nextPickup: "Jan 12, 2026",
  pickupTime: "10:00 AM",
  monthlyAverage: 75,
  totalEarnings: 13500,
  pendingPayment: 2250,

  collections: [
    { id: 1, date: "Dec 28, 2025", quantity: 85, amount: 2550, status: "Paid", paymentDate: "Jan 2, 2026" },
    { id: 2, date: "Dec 15, 2025", quantity: 72, amount: 2160, status: "Paid", paymentDate: "Dec 20, 2025" },
    { id: 3, date: "Dec 1, 2025", quantity: 68, amount: 2040, status: "Paid", paymentDate: "Dec 5, 2026" },
    { id: 4, date: "Nov 17, 2025", quantity: 90, amount: 2700, status: "Paid", paymentDate: "Nov 22, 2025" },
    { id: 5, date: "Nov 3, 2025", quantity: 75, amount: 2250, status: "Pending", paymentDate: "-" }
  ],

  upcomingSchedule: [
    { date: "Jan 12, 2026", time: "10:00 AM", status: "Scheduled" },
    { date: "Jan 26, 2026", time: "10:00 AM", status: "Scheduled" },
    { date: "Feb 9, 2026", time: "10:00 AM", status: "Scheduled" }
  ]
};
