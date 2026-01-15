import { CheckCircle, Calendar, MessageCircle } from "lucide-react";

export default function BenefitsCards() {
  const cards = [
    {
      icon: CheckCircle,
      title: "FSSAI Compliant",
      desc: "Proper documentation & compliance",
    },
    {
      icon: Calendar,
      title: "Scheduled Pickup",
      desc: "Regular hassle-free collection",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp & Email Updates",
      desc: "Instant confirmations & alerts",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      {cards.map((c, i) => {
        const Icon = c.icon;
        return (
          <div
            key={i}
            className="bg-white rounded-xl p-6 shadow-md text-center"
          >
            <div className="bg-green-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <Icon className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
            <p className="text-gray-600 text-sm">{c.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
