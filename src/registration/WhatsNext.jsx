import { CheckCircle, MessageCircle } from "lucide-react";

export default function WhatsNext() {
  const steps = [
    "Instant WhatsApp confirmation",
    "Verification within 24 hours",
    "Site visit & container setup",
    "Start scheduled collection",
  ];

  return (
    <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-2xl p-8">
      <h3 className="text-2xl font-bold mb-4">What Happens Next?</h3>

      {steps.map((s, i) => (
        <div key={i} className="flex items-start space-x-3 mb-3">
          <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
          <p>{s}</p>
        </div>
      ))}

      <div className="flex items-start space-x-3 mt-4">
        <MessageCircle className="h-6 w-6 text-green-600 mt-1" />
        <p>All communication happens via WhatsApp</p>
      </div>
    </div>
  );
}
