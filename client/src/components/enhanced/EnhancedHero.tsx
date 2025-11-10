import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles } from 'lucide-react';
import { ParallaxLayer } from '@/components/animations/ParallaxLayer';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { PatternOverlay } from '@/components/patterns/IslamicPattern';
import heroImage from '@assets/generated_images/Aerial_Mecca_blue_hour_b8d073b4.png';

export const EnhancedHero = () => {
  return (
    <div className="relative h-[700px] overflow-hidden">
      {/* Background parallax layer */}
      <ParallaxLayer speed={0.3} className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
      </ParallaxLayer>
      
      {/* Gradient overlay with Islamic pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70">
        <PatternOverlay 
          variant="geometric-1" 
          opacity={0.15}
          color="rgba(255,255,255,0.1)"
        />
      </div>
      
      {/* Content with scroll reveal animation */}
      <ScrollReveal direction="up" delay={0.2}>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center h-full flex items-center justify-center">
          <div className="space-y-6">
            <ScrollReveal direction="up" delay={0.4}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Badge className="mb-6 bg-primary/90 backdrop-blur-sm border-primary/30 text-white px-4 py-2 text-sm animate-pulse">
                  <Sparkles className="w-4 h-4 mr-2 inline" />
                  Promo Ramadhan 2024 - Diskon Hingga 15%
                </Badge>
              </motion.div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.6}>
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Wujudkan Impian Ibadah<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
                  Umroh & Haji Anda
                </span>
              </motion.h1>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.8}>
              <motion.p 
                className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Bersama Al-Muhajirin Travel, perjalanan spiritual Anda akan penuh berkah dan kenyamanan dengan layanan premium
              </motion.p>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={1.0}>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <ScrollReveal direction="up" delay={1.2}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 backdrop-blur-sm border border-primary-border shadow-xl text-lg px-8 py-6 group"
                      data-testid="button-lihat-paket"
                    >
                      <span className="group-hover:scale-110 inline-block transition-transform">
                        Lihat Paket Umroh
                      </span>
                    </Button>
                  </motion.div>
                </ScrollReveal>
                
                <ScrollReveal direction="up" delay={1.3}>
                  <motion.a
                    href="https://wa.me/628123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="bg-white/20 backdrop-blur-md text-white border-white/40 hover:bg-white/30 shadow-xl text-lg px-8 py-6"
                      data-testid="button-konsultasi"
                    >
                      Konsultasi Gratis
                    </Button>
                  </motion.a>
                </ScrollReveal>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};