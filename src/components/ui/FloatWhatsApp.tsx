import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function FloatWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/5555991679733"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
      aria-label="Contato via WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle size={32} />
      
      {/* Ripple effect */}
      <span className="absolute -z-10 inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40"></span>
    </motion.a>
  );
}
