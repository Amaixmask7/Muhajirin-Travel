import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GlassmorphismContainer } from '@/components/ui/GlassmorphismContainer';
import { Phone, MessageCircle, X, ChevronUp, Calendar, Users, Plane } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StickyCTAProps {
  packageId?: string;
  phoneNumber?: string;
  message?: string;
  className?: string;
}

export const StickyCTA = ({ 
  packageId = '',
  phoneNumber = "628123456789", 
  message = "Halo, saya tertarik dengan paket umroh.",
  className = ''
}: StickyCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show CTA bar after scrolling past hero section
      setIsVisible(scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={cn(
            'fixed bottom-0 left-0 right-0 z-40 md:hidden',
            isMinimized ? 'h-16' : 'h-20'
          )}
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <GlassmorphismContainer variant="dark" className="h-full">
            <div className="flex items-center justify-between h-full px-4 py-2">
              {/* Package Info */}
              <div className="flex items-center space-x-3">
                <div className="text-white text-sm">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>15-20 Des</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Plane className="w-4 h-4" />
                    <span>Saudi Airlines</span>
                  </div>
                </div>
                <div className="text-white text-xs">
                  <span className="font-semibold">10 Slot Tersedia</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2">
                <motion.a
                  href={`tel:+${phoneNumber}`}
                  className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Phone className="w-5 h-5 text-white" />
                </motion.a>

                <motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-green-500/80 backdrop-blur-sm rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                </motion.a>

                <motion.button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronUp className="w-5 h-5 text-white" />
                </motion.button>
              </div>

              {/* Minimize Button */}
              <motion.button
                onClick={() => setIsMinimized(!isMinimized)}
                className="flex items-center justify-center w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMinimized ? (
                  <div className="flex items-center space-x-1">
                    <span className="text-white text-xs">Detail</span>
                    <ChevronUp className="w-3 h-3 text-white" />
                  </div>
                ) : (
                  <X className="w-4 h-4 text-white" />
                )}
              </motion.button>
            </div>
          </GlassmorphismContainer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Desktop version - fixed bottom bar
export const DesktopStickyCTA = ({ 
  packageId = '',
  phoneNumber = "628123456789", 
  message = "Halo, saya tertarik dengan paket umroh.",
  className = ''
}: StickyCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show CTA bar after scrolling past hero section
      setIsVisible(scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-40 hidden md:block"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <GlassmorphismContainer variant="dark" className="h-16">
            <div className="flex items-center justify-between h-full px-6">
              {/* Package Info */}
              <div className="flex items-center space-x-4">
                <div className="text-white text-sm">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>15-20 Des</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Plane className="w-4 h-4" />
                    <span>Saudi Airlines</span>
                  </div>
                </div>
                <div className="text-white text-xs">
                  <span className="font-semibold">10 Slot Tersedia</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3">
                <motion.a
                  href={`tel:+${phoneNumber}`}
                  className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Phone className="w-6 h-6 text-white" />
                </motion.a>

                <motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-green-500/80 backdrop-blur-sm rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <MessageCircle className="w-6 h-6 text-white" />
                </motion.a>

                <motion.button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronUp className="w-6 h-6 text-white" />
                </motion.button>
              </div>
            </div>
          </GlassmorphismContainer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};