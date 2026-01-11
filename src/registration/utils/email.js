import emailjs from "@emailjs/browser";

/* =========================
   USER CONFIRMATION EMAIL
   Template ID: template_wv4xkmm
   ========================= */
export async function sendRegistrationEmail(data) {
  try {
    const result = await emailjs.send(
      "service_0i70jkq",          // ✅ Your Service ID
      "template_wv4xkmm",         // ✅ USER confirmation template
      {
        to_email: data.email,    // 👈 USER email
        owner_name: data.ownerName,
        restaurant_name: data.restaurantName,
        phone: data.phone,
        whatsapp: data.whatsappNumber,
        address: `${data.address}, ${data.city}, ${data.state} - ${data.pincode}`,
        oil_quantity: data.oilQuantity,
        collection_frequency: data.collectionFrequency,
        collection_time: data.collectionTime || "Not specified",
      },
      "5I9yiA8bGTFJrnSjY"           // ⚠️ Replace with your EmailJS Public Key
    );

    console.log("User confirmation email sent:", result.text);
    return { success: true };

  } catch (error) {
    console.error("User confirmation email error:", error);
    return { success: false, error };
  }
}

/* =========================
   ADMIN NOTIFICATION EMAIL
   Template ID: template_gqqcw6d
   ========================= */
export async function sendNotificationEmail(data) {
  try {
    const result = await emailjs.send(
      "service_0i70jkq",          // ✅ Same Service ID
      "template_gqqcw6d",         // ✅ ADMIN notification template
      {
        to_email: "varshgayatellene@gmail.com", // 👈 ADMIN email
        restaurant_name: data.restaurantName,
        owner_name: data.ownerName,
        email: data.email,
        phone: data.phone,
        whatsapp: data.whatsappNumber,
        address: `${data.address}, ${data.city}, ${data.state} - ${data.pincode}`,
        oil_quantity: data.oilQuantity,
        collection_frequency: data.collectionFrequency,
        collection_time: data.collectionTime || "Not specified",
      },
      "5I9yiA8bGTFJrnSjY"           // ⚠️ Replace with your EmailJS Public Key
    );

    console.log("Admin notification email sent:", result.text);
    return { success: true };

  } catch (error) {
    console.error("Admin notification email error:", error);
    return { success: false, error };
  }
}
