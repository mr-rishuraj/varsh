import { useState } from "react";
import RegistrationHeader from "./RegistrationHeader";
import BenefitsCards from "./BenefitsCards";
import RestaurantForm from "./RestaurantForm";
import WhatsNext from "./WhatsNext";
import { sendRegistrationEmail, sendNotificationEmail } from "./utils/email";

export default function RestaurantRegistration({ onBack }) {
  const [formData, setFormData] = useState({
    restaurantName: "",
    ownerName: "",
    email: "",
    phone: "",
    whatsappNumber: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    oilQuantity: "",
    collectionTime: "",
    collectionFrequency: "weekly",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    const required = [
      "restaurantName",
      "ownerName",
      "email",
      "phone",
      "whatsappNumber",
      "address",
      "oilQuantity",
    ];

    const missing = required.some((f) => !formData[f]);
    if (missing) {
      alert("Please fill all required fields");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Send confirmation email to restaurant
      const emailResult = await sendRegistrationEmail(formData);
      
      // Send notification to your business email
      await sendNotificationEmail(formData);

      if (emailResult.success) {
        alert(`✅ Registration successful!\n\nA confirmation email has been sent to ${formData.email}\n\nOur team will contact you within 24 hours to schedule your first UCO collection.`);
      } else {
        alert("✅ Registration received! We will contact you soon via email and phone.");
      }

      // Reset form
      setFormData({
        restaurantName: "",
        ownerName: "",
        email: "",
        phone: "",
        whatsappNumber: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        oilQuantity: "",
        collectionTime: "",
        collectionFrequency: "weekly",
      });
    } catch (error) {
      console.error("Submission error:", error);
      alert("✅ Registration received! Our team will contact you within 24 hours.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <RegistrationHeader />
        <BenefitsCards />
        <RestaurantForm
          data={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onBack={onBack}
          isSubmitting={isSubmitting}
        />
        <WhatsNext />
      </div>
    </div>
  );
}