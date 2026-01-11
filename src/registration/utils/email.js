import emailjs from "@emailjs/browser";


export async function sendRegistrationEmail(data) {
  try {
    const result = await emailjs.send(
      "service_0i70jkq",          
      "template_wv4xkmm",         
      {
        to_email: data.email,    
        owner_name: data.ownerName,
        restaurant_name: data.restaurantName,
        phone: data.phone,
        whatsapp: data.whatsappNumber,
        address: `${data.address}, ${data.city}, ${data.state} - ${data.pincode}`,
        oil_quantity: data.oilQuantity,
        collection_frequency: data.collectionFrequency,
        collection_time: data.collectionTime || "Not specified",
      },
      "5I9yiA8bGTFJrnSjY"           
    );

    console.log("User confirmation email sent:", result.text);
    return { success: true };

  } catch (error) {
    console.error("User confirmation email error:", error);
    return { success: false, error };
  }
}

export async function sendNotificationEmail(data) {
  try {
    const result = await emailjs.send(
      "service_0i70jkq",          
      "template_gqqcw6d",         
      {
        to_email: "varshgayatellene@gmail.com", 
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
      "5I9yiA8bGTFJrnSjY"           
    );

    console.log("Admin notification email sent:", result.text);
    return { success: true };

  } catch (error) {
    console.error("Admin notification email error:", error);
    return { success: false, error };
  }
}
