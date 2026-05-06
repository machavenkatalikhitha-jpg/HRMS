import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "+911234567890";
const WHATSAPP_MESSAGE = "Hello! I'm interested in your manpower services.";

export function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d]/g, "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="whatsapp.button"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg transition-smooth hover:scale-110 focus-visible:ring-4 focus-visible:ring-green-400 focus-visible:outline-none"
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" />
    </a>
  );
}

export default WhatsAppButton;
