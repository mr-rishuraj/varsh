// Backend API endpoint (Node.js/Express example)
export async function sendWhatsAppMessages(data) {
  const businessWhatsApp = "919131786701";
  
  const safe = (v) => v || "Not provided";
  
  let restaurantPhone = safe(data.whatsappNumber).replace(/[^0-9]/g, "");
  if (restaurantPhone.length === 10) {
    restaurantPhone = "91" + restaurantPhone;
  }

  const messageToRestaurant = `🌿 *Welcome to VARSH - OilCycle!*

Thank you for registering with us, ${safe(data.ownerName)}!

🍽️ ${safe(data.restaurantName)}
📞 ${safe(data.phone)}
📍 ${safe(data.address)}, ${safe(data.city)} - ${safe(data.pincode)}

🛢️ ${safe(data.oilQuantity)} L/month
📅 ${safe(data.collectionFrequency)}
⏰ ${safe(data.collectionTime)}`;

  const messageToYou = `🔔 *New Restaurant Registration*

🍽️ ${safe(data.restaurantName)}
👤 ${safe(data.ownerName)}
📞 ${safe(data.phone)}
💬 ${restaurantPhone}

🛢️ ${safe(data.oilQuantity)} L/month`;

  try {
    // Send message to restaurant
    await sendWhatsAppAPI(restaurantPhone, messageToRestaurant);
    
    // Send message to your business number
    await sendWhatsAppAPI(businessWhatsApp, messageToYou);
    
    return { success: true };
  } catch (error) {
    console.error("WhatsApp send error:", error);
    return { success: false, error: error.message };
  }
}

async function sendWhatsAppAPI(phoneNumber, message) {
  const WHATSAPP_API_URL = "https://graph.facebook.com/v18.0/YOUR_PHONE_NUMBER_ID/messages";
  const ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;

  const response = await fetch(WHATSAPP_API_URL, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to: phoneNumber,
      type: "text",
      text: {
        body: message
      }
    })
  });

  if (!response.ok) {
    throw new Error(`WhatsApp API error: ${response.statusText}`);
  }

  return await response.json();
}