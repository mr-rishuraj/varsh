import { useState } from "react";
import RegistrationHeader from "./RegistrationHeader";
import BenefitsCards from "./BenefitsCards";
import RestaurantForm from "./RestaurantForm";
import WhatsNext from "./WhatsNext";
import { sendWhatsAppMessages } from "./utils/whatsapp";

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

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
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

    sendWhatsAppMessages(formData);
    alert("Registration successful! WhatsApp confirmation sent.");

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
        />
        <WhatsNext />
      </div>
    </div>
  );
}
