export function sendWhatsAppMessages(data) {
  // ✅ YOUR WhatsApp number (India)
  const businessWhatsApp = "919131786701";

  const messageToRestaurant = `🌿 *Welcome to VARSH - OilCycle!*

Thank you for registering with us, ${data.ownerName}!

*Restaurant Details:*
🍽️ ${data.restaurantName}
📧 ${data.email}
📞 ${data.phone}
📍 ${data.address}, ${data.city}, ${data.state} - ${data.pincode}

*UCO Collection Details:*
🛢️ Estimated Quantity: ${data.oilQuantity} liters/month
📅 Collection Frequency: ${data.collectionFrequency}
⏰ Preferred Time: ${data.collectionTime || "Not specified"}

Our team will contact you within 24 hours.

— Team VARSH ♻️`;

  const messageToYou = `🔔 *New Restaurant Registration*

🍽️ Restaurant: ${data.restaurantName}
👤 Owner: ${data.ownerName}
📞 Phone: ${data.phone}
💬 WhatsApp: ${data.whatsappNumber}
📧 Email: ${data.email}

📍 Address:
${data.address}
${data.city}, ${data.state} - ${data.pincode}

🛢️ UCO Details:
Quantity: ${data.oilQuantity} L/month
Frequency: ${data.collectionFrequency}
Time: ${data.collectionTime || "Not specified"}

⚠️ Action: Contact restaurant within 24 hours`;

  // Clean restaurant WhatsApp number
  const restaurantPhone = data.whatsappNumber.replace(/[^0-9]/g, "");

  // WhatsApp URLs
  const restaurantURL = `https://wa.me/${restaurantPhone}?text=${encodeURIComponent(
    messageToRestaurant
  )}`;

  const businessURL = `https://wa.me/${businessWhatsApp}?text=${encodeURIComponent(
    messageToYou
  )}`;

  // Open WhatsApp chats
  window.open(restaurantURL, "_blank");

  setTimeout(() => {
    window.open(businessURL, "_blank");
  }, 800);
}
