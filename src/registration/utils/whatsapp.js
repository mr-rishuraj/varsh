export function sendWhatsAppMessages(data) {
  const receiverNumber = "919131786701"; // number you want to send WhatsApp to

  const safe = (v) => (v && v.toString().trim()) || "Not provided";

  const message = `Hello VARSH Team 👋

This is ${safe(data.ownerName)} from ${safe(data.restaurantName)}.

📞 Phone: ${safe(data.phone)}
📍 Address: ${safe(data.address)}, ${safe(data.city)} - ${safe(data.pincode)}

🛢️ UCO Details:
Quantity: ${safe(data.oilQuantity)} L/month
Frequency: ${safe(data.collectionFrequency)}
Time: ${safe(data.collectionTime)}

I have just registered on VARSH and would like to proceed further.
`;

  const whatsappURL = `https://wa.me/${receiverNumber}?text=${encodeURIComponent(message)}`;

  // Opens WhatsApp on the USER's device
  window.open(whatsappURL, "_blank", "noopener,noreferrer");
}
