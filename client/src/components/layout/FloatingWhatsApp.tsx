import { motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
  position?: 'bottom-right' | 'bottom-left' | 'bottom-center';
}

export const FloatingWhatsApp = ({ 
  phoneNumber = "628123456789", 
  message = "Halo, saya tertarik dengan paket umroh.",
  className = '',
  position = 'bottom-right'
}: FloatingWhatsAppProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'bottom-center': 'bottom-6 left-1/2 transform -translate-x-1/2'
  };

  const whatsappUrl = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

  return (
    <>
      {/* Main WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'fixed z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300',
          positionClasses[position],
          isOpen && 'scale-110',
          className
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
          1
        </span>
      </motion.a>

      {/* Minimized Version */}
      {isMinimized && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'fixed z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300',
            positionClasses[position],
            'w-14 h-14'
          )}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <MessageCircle className="w-8 h-8" />
        </motion.a>
      )}

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsMinimized(!isMinimized)}
        className={cn(
          'fixed z-40 bg-green-600 text-white p-2 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300',
          positionClasses[position],
          'w-10 h-10'
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isMinimized ? "Expand WhatsApp" : "Minimize WhatsApp"}
      >
        {isMinimized ? (
          <MessageCircle className="w-6 h-6" />
        ) : (
          <X className="w-6 h-6" />
        )}
      </motion.button>

      {/* Chat Window */}
      {isOpen && !isMinimized && (
        <motion.div
          className={cn(
            'fixed z-50 bg-white rounded-lg shadow-2xl border border-gray-200 w-80',
            position === 'bottom-right' ? 'bottom-20 right-6' : 
            position === 'bottom-left' ? 'bottom-20 left-6' : 
            'bottom-20 left-1/2 transform -translate-x-1/2'
          )}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Header */}
          <div className="bg-green-500 text-white p-3 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">WhatsApp Chat</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-green-600 p-1 rounded transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4">
            <div className="text-sm text-gray-600 mb-3">
              Kami siap membantu Anda. Silakan kirim pesan:
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 text-white text-center py-2 px-4 rounded hover:bg-green-600 transition-colors"
            >
              Kirim Pesan WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
};

// Simple version without chat window
export const SimpleFloatingWhatsApp = ({ 
  phoneNumber = "628123456789", 
  className = '',
  position = 'bottom-right'
}: Omit<FloatingWhatsAppProps, 'message'>) => {
  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'bottom-center': 'bottom-6 left-1/2 transform -translate-x-1/2'
  };

  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300',
        positionClasses[position],
        className
      )}
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9, rotate: -15 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  );
};