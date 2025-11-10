import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassmorphismContainer } from '@/components/ui/GlassmorphismContainer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Plane, Star, Phone, MessageCircle, Heart, Share2, Download, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StickySidebarProps {
  packageId: string;
  className?: string;
}

export const StickySidebar = ({ 
  packageId, 
  className = '' 
}: StickySidebarProps) => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const sidebar = document.getElementById('sticky-sidebar');
      if (sidebar) {
        const rect = sidebar.getBoundingClientRect();
        const shouldBeSticky = rect.top <= 100;
        setIsSticky(shouldBeSticky);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sidebarSections = [
    { id: 'overview', label: 'Ringkasan', icon: FileText },
    { id: 'itinerary', label: 'Itinerary', icon: Calendar },
    { id: 'facilities', label: 'Fasilitas', icon: Star },
    { id: 'hotel', label: 'Hotel', icon: MapPin },
    { id: 'booking', label: 'Pemesanan', icon: Users },
  ];

  return (
    <motion.aside
      id="sticky-sidebar"
      className={cn(
        'sticky top-24 h-fit w-80 transition-all duration-300',
        isSticky ? 'shadow-2xl' : 'shadow-lg',
        className
      )}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <GlassmorphismContainer variant="light" className="p-6">
        <div className="space-y-6">
          {/* Package Quick Info */}
          <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
            <h3 className="font-semibold text-primary mb-3">Paket Umroh Premium</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>15-20 Desember 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Plane className="w-4 h-4 text-primary" />
                <span>Saudi Airlines</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span>10 Slot Tersedia</span>
              </div>
            </div>
            <div className="pt-3 border-t border-primary/20">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-primary">Rp 25.000.000</span>
                <Badge className="bg-green-500 text-white">Tersedia</Badge>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            {sidebarSections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={cn(
                  'w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors',
                  activeSection === section.id 
                    ? 'bg-primary/20 text-primary' 
                    : 'hover:bg-muted text-foreground'
                )}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <section.icon className="w-5 h-5" />
                <span className="font-medium">{section.label}</span>
              </motion.button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4 border-t border-border">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="w-full justify-start" variant="outline">
                <Heart className="w-4 h-4 mr-2" />
                Tambah ke Wishlist
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="w-full justify-start" variant="outline">
                <Share2 className="w-4 h-4 mr-2" />
                Bagikan
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="w-full justify-start bg-primary hover:bg-primary/90">
                <Download className="w-4 h-4 mr-2" />
                Unduh Brosur
              </Button>
            </motion.div>
          </div>

          {/* Contact */}
          <div className="space-y-3 pt-4 border-t border-border">
            <h4 className="font-semibold text-foreground mb-3">Butuh Bantuan</h4>
            
            <motion.a
              href="tel:+628123456789"
              className="flex items-center space-x-2 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4 text-secondary-foreground" />
              <span className="text-sm">+62 812-345-6789</span>
            </motion.a>
            
            <motion.a
              href="https://wa.me/628123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 p-3 rounded-lg bg-green-500/20 hover:bg-green-500/30 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-4 h-4 text-green-600" />
              <span className="text-sm text-green-600">WhatsApp</span>
            </motion.a>
          </div>
        </div>
      </GlassmorphismContainer>
    </motion.aside>
  );
};

// Mobile version
export const MobileStickySidebar = ({ 
  packageId, 
  className = '' 
}: StickySidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  const sidebarSections = [
    { id: 'overview', label: 'Ringkasan', icon: FileText },
    { id: 'itinerary', label: 'Itinerary', icon: Calendar },
    { id: 'facilities', label: 'Fasilitas', icon: Star },
    { id: 'hotel', label: 'Hotel', icon: MapPin },
    { id: 'booking', label: 'Pemesanan', icon: Users },
  ];

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'fixed bottom-20 right-4 z-40 bg-primary text-white p-3 rounded-full shadow-lg md:hidden',
          isOpen && 'scale-110'
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="sr-only">Toggle Sidebar</span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7-6h7a2 2 0 002 2v6a2 2 0 002-2h-7a2 2 0 00-2-2v-6a2 2 0 00-2 2h7a2 2 0 002 2v6a2 2 0 002-2z" />
        </svg>
      </motion.button>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
            <motion.div
              className="absolute right-0 top-0 h-full w-80 max-w-full bg-background shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <GlassmorphismContainer variant="light" className="h-full p-6 overflow-y-auto">
                <div className="space-y-6">
                  {/* Package Quick Info */}
                  <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                    <h3 className="font-semibold text-primary mb-3">Paket Umroh Premium</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>15-20 Desember 2024</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Plane className="w-4 h-4 text-primary" />
                        <span>Saudi Airlines</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span>10 Slot Tersedia</span>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-primary/20">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-primary">Rp 25.000.000</span>
                        <Badge className="bg-green-500 text-white">Tersedia</Badge>
                      </div>
                    </div>
                  </div>

                  {/* Navigation */}
                  <nav className="space-y-1">
                    {sidebarSections.map((section) => (
                      <motion.button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={cn(
                          'w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors',
                          activeSection === section.id 
                            ? 'bg-primary/20 text-primary' 
                            : 'hover:bg-muted text-foreground'
                        )}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <section.icon className="w-5 h-5" />
                        <span className="font-medium">{section.label}</span>
                      </motion.button>
                    ))}
                  </nav>

                  {/* Action Buttons */}
                  <div className="space-y-3 pt-4 border-t border-border">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="w-full justify-start" variant="outline">
                        <Heart className="w-4 h-4 mr-2" />
                        Tambah ke Wishlist
                      </Button>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="w-full justify-start" variant="outline">
                        <Share2 className="w-4 h-4 mr-2" />
                        Bagikan
                      </Button>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="w-full justify-start bg-primary hover:bg-primary/90">
                        <Download className="w-4 h-4 mr-2" />
                        Unduh Brosur
                      </Button>
                    </motion.div>
                  </div>

                  {/* Contact */}
                  <div className="space-y-3 pt-4 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-3">Butuh Bantuan</h4>
                    
                    <motion.a
                      href="tel:+628123456789"
                      className="flex items-center space-x-2 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Phone className="w-4 h-4 text-secondary-foreground" />
                      <span className="text-sm">+62 812-345-6789</span>
                    </motion.a>
                    
                    <motion.a
                      href="https://wa.me/628123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 p-3 rounded-lg bg-green-500/20 hover:bg-green-500/30 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MessageCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-green-600">WhatsApp</span>
                    </motion.a>
                  </div>
                </div>
              </GlassmorphismContainer>
            </motion.div>
          </AnimatePresence>
        )}
      </AnimatePresence>
    </>
  );
};