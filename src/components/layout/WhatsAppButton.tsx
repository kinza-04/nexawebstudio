import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/923002473592?text=Hello%20Nexa%20WebStudio,%20I'm%20interested%20in%20your%20services.%20I'd%20like%20to%20discuss%20my%20project.";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 rounded-full text-white shadow-lg hover:shadow-green-500/20 transition-all"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} />
    </motion.a>
  );
}
