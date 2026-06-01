import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '256703639277'; // International format, no +
const PRESET_MESSAGE = encodeURIComponent(
  "Hi Andyteck! I'm interested in your web development services."
);

export const WhatsAppButton = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${PRESET_MESSAGE}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[60] group"
    >
      {/* Pulsing rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping" />
      <span
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 animate-ping"
        style={{ animationDelay: '0.6s' }}
      />

      {/* Button */}
      <span className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40">
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" fill="currentColor" />
      </span>

      {/* Tooltip */}
      <span className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-2 rounded-lg bg-card border border-border text-foreground text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        Chat with us
      </span>
    </motion.a>
  );
};
