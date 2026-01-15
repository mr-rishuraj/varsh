import { CheckCircle, Mail } from "lucide-react";

export default function WhatsNext() {
  const steps = [
    "You’ll receive a confirmation email after submitting the form",
    "Our team will review your registration details within 24 hours",
    "We’ll reach out via email to confirm pickup schedule and setup",
    "UCO collection will begin as per the agreed plan",
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
        <Mail className="h-6 w-6 text-green-600 mt-1" />
        <p>
          All updates and communication will be shared via email and whatsapp
        </p>
      </div>
    </div>
  );
}
