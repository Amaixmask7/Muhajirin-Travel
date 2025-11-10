import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GlassmorphismContainer } from '@/components/ui/GlassmorphismContainer';
import { 
  ChevronDown, 
  ChevronRight, 
  Calendar, 
  MapPin, 
  Users, 
  Plane, 
  Star, 
  Phone, 
  MessageCircle, 
  Heart, 
  Share2, 
  Download, 
  FileText,
  X,
  Menu,
  Search,
  User,
  Globe,
  CreditCard,
  HelpCircle,
  Settings,
  LogOut,
  Home,
  Package,
  Info,
  BookOpen,
  Clock,
  DollarSign,
  Shield,
  Award,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface MenuItem {
  id: string;
  label: string;
  href?: string;
  icon?: React.ReactNode;
  badge?: string;
  children?: React.ReactNode;
  description?: string;
}

interface MegaMenuProps {
  className?: string;
}

export const MegaMenu = ({ className = '' }: MegaMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const menuItems: MenuItem[] = [
    {
      id: 'paket',
      label: 'Paket Umroh',
      href: '/paket',
      icon: <Package className="w-5 h-5" />,
      badge: 'Promo',
      children: [
        {
          id: 'paket-regular',
          label: 'Paket Regular',
          href: '/paket?category=regular',
          description: 'Paket umroh dengan fasilitas standar'
        },
        {
          id: 'paket-vip',
          label: 'Paket VIP',
          href: '/paket?category=vip',
          description: 'Paket umroh dengan fasilitas premium'
        },
        {
          id: 'paket-eksekutif',
          label: 'Paket Eksekutif',
          href: '/paket?category=eksekutif',
          description: 'Paket umroh untuk keluarga'
        }
      ]
    },
    {
      id: 'informasi',
      label: 'Informasi',
      icon: <Info className="w-5 h-5" />,
      children: [
        {
          id: 'tentang',
          label: 'Tentang Kami',
          href: '/tentang',
          description: 'Informasi tentang Al-Muhajirin Travel'
        },
        {
          id: 'syarat',
          label: 'Syarat & Ketentuan',
          href: '/syarat',
          description: 'Syarat dan ketentuan pemesanan'
        },
        {
          id: 'faq',
          label: 'FAQ',
          href: '/faq',
          description: 'Pertanyaan yang sering diajukan'
        }
      ]
    },
    {
      id: 'layanan',
      label: 'Layanan',
      icon: <HelpCircle className="w-5 h-5" />,
      children: [
        {
          id: 'visa',
          label: 'Visa',
          href: '/visa',
          description: 'Pengurusan visa umroh'
        },
        {
          id: 'dokumen',
          label: 'Dokumen',
          href: '/dokumen',
          description: 'Persyaratan dokumen'
        },
        {
          id: 'asuransi',
          label: 'Asuransi',
          href: '/asuransi',
          description: 'Asuransi perjalanan'
        }
      ]
    },
    {
      id: 'galeri',
      label: 'Galeri',
      icon: <Globe className="w-5 h-5" />,
      children: [
        {
          id: 'foto',
          label: 'Foto',
          href: '/galeri/foto',
          description: 'Galeri foto jamaah'
        },
        {
          id: 'video',
          label: 'Video',
          href: '/galeri/video',
          description: 'Galeri video perjalanan'
        }
      ]
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={cn('relative', className)} ref={menuRef}>
      {/* Main Menu Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Menu className="w-5 h-5 text-primary" />
        <span className="font-medium text-primary">Menu</span>
        <ChevronDown className={cn(
          "w-4 h-4 text-primary transition-transform duration-200",
          isOpen && "rotate-180"
        )} />
      </motion.button>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 z-50 w-screen"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <GlassmorphismContainer variant="light" className="mx-4 mt-2 p-6 rounded-lg shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {menuItems.map((item) => (
                  <motion.div
                    key={item.id}
                    className="space-y-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {/* Menu Header */}
                    <div className="flex items-center space-x-3 pb-3 border-b border-border">
                      {item.icon && (
                        <div className="p-2 bg-primary/10 rounded-lg">
                          {item.icon}
                        </div>
                      )}
                      <div>
                        <h3 className="font-semibold text-foreground">{item.label}</h3>
                        {item.badge && (
                          <Badge className="ml-2 bg-red-500 text-white text-xs">{item.badge}</Badge>
                        )}
                      </div>
                    </div>

                    {/* Menu Content */}
                    <div className="space-y-2">
                      {item.children ? (
                        item.children.map((child) => (
                          <Link
                            key={child.id}
                            href={child.href}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                            onMouseEnter={() => setActiveMenu(child.id)}
                            onMouseLeave={() => setActiveMenu(null)}
                          >
                            <div className="flex items-center space-x-3">
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                <span className="text-sm font-medium text-foreground">{child.label}</span>
                              </div>
                              {child.description && (
                                <p className="text-xs text-muted-foreground max-w-[200px]">{child.description}</p>
                              )}
                            </div>
                            <ChevronRight className={cn(
                              "w-4 h-4 text-muted-foreground transition-transform duration-200",
                              activeMenu === child.id && "rotate-90"
                            )} />
                          </Link>
                        ))
                      ) : (
                        <Link
                          href={item.href || '#'}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-primary/10 transition-colors"
                        >
                          <span className="text-sm font-medium text-foreground">{item.label}</span>
                          {item.description && (
                            <p className="text-xs text-muted-foreground max-w-[200px]">{item.description}</p>
                          )}
                          <ChevronRight className="w-4 h-4 text-muted-foreground" />
                        </Link>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/hubungi">
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    Hubungi Kami
                  </Button>
                </Link>
                <Link href="/paket">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Package className="w-4 h-4 mr-2" />
                    Lihat Paket
                  </Button>
                </Link>
              </div>
            </GlassmorphismContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Mobile version
export const MobileMegaMenu = ({ className = '' }: MegaMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    {
      id: 'paket',
      label: 'Paket Umroh',
      href: '/paket',
      icon: <Package className="w-5 h-5" />,
      badge: 'Promo',
      children: [
        {
          id: 'paket-regular',
          label: 'Paket Regular',
          href: '/paket?category=regular',
          description: 'Paket umroh dengan fasilitas standar'
        },
        {
          id: 'paket-vip',
          label: 'Paket VIP',
          href: '/paket?category=vip',
          description: 'Paket umroh dengan fasilitas premium'
        },
        {
          id: 'paket-eksekutif',
          label: 'Paket Eksekutif',
          href: '/paket?category=eksekutif',
          description: 'Paket umroh untuk keluarga'
        }
      ]
    },
    {
      id: 'informasi',
      label: 'Informasi',
      icon: <Info className="w-5 h-5" />,
      children: [
        {
          id: 'tentang',
          label: 'Tentang Kami',
          href: '/tentang',
          description: 'Informasi tentang Al-Muhajirin Travel'
        },
        {
          id: 'syarat',
          label: 'Syarat & Ketentuan',
          href: '/syarat',
          description: 'Syarat dan ketentuan pemesanan'
        },
        {
          id: 'faq',
          label: 'FAQ',
          href: '/faq',
          description: 'Pertanyaan yang sering diajukan'
        }
      ]
    },
    {
      id: 'layanan',
      label: 'Layanan',
      icon: <HelpCircle className="w-5 h-5" />,
      children: [
        {
          id: 'visa',
          label: 'Visa',
          href: '/visa',
          description: 'Pengurusan visa umroh'
        },
        {
          id: 'dokumen',
          label: 'Dokumen',
          href: '/dokumen',
          description: 'Persyaratan dokumen'
        },
        {
          id: 'asuransi',
          label: 'Asuransi',
          href: '/asuransi',
          description: 'Asuransi perjalanan'
        }
      ]
    },
    {
      id: 'galeri',
      label: 'Galeri',
      icon: <Globe className="w-5 h-5" />,
      children: [
        {
          id: 'foto',
          label: 'Foto',
          href: '/galeri/foto',
          description: 'Galeri foto jamaah'
        },
        {
          id: 'video',
          label: 'Video',
          href: '/galeri/video',
          description: 'Galeri video perjalanan'
        }
      ]
    }
  ];

  return (
    <div className={cn('relative', className)}>
      {/* Mobile Menu Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors md:hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Menu className="w-5 h-5 text-primary" />
        <span className="font-medium text-primary">Menu</span>
      </motion.button>

      {/* Mobile Menu Dropdown */}
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
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <h2 className="text-lg font-semibold text-foreground">Menu</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-md hover:bg-muted transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Menu Content */}
                <div className="flex-1 overflow-y-auto p-4">
                  {menuItems.map((item) => (
                    <div key={item.id} className="mb-6">
                      {/* Menu Header */}
                      <div className="flex items-center space-x-3 pb-3 border-b border-border">
                        {item.icon && (
                          <div className="p-2 bg-primary/10 rounded-lg">
                            {item.icon}
                          </div>
                        )}
                        <div>
                          <h3 className="font-semibold text-foreground">{item.label}</h3>
                          {item.badge && (
                            <Badge className="ml-2 bg-red-500 text-white text-xs">{item.badge}</Badge>
                          )}
                        </div>
                      </div>

                      {/* Menu Content */}
                      <div className="space-y-2">
                        {item.children ? (
                          item.children.map((child) => (
                            <Link
                              key={child.id}
                              href={child.href}
                              className="flex items-center justify-between p-3 rounded-lg hover:bg-primary/10 transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              <div className="flex items-center space-x-3">
                                <div className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-primary rounded-full" />
                                  <span className="text-sm font-medium text-foreground">{child.label}</span>
                                </div>
                                {child.description && (
                                  <p className="text-xs text-muted-foreground">{child.description}</p>
                                )}
                              </div>
                              <ChevronRight className="w-4 h-4 text-muted-foreground" />
                            </Link>
                          ))
                        ) : (
                          <Link
                            href={item.href || '#'}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-primary/10 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="text-sm font-medium text-foreground">{item.label}</span>
                            {item.description && (
                              <p className="text-xs text-muted-foreground">{item.description}</p>
                            )}
                            <ChevronRight className="w-4 h-4 text-muted-foreground" />
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Actions */}
                <div className="p-4 border-t border-border space-y-3">
                  <Link href="/hubungi" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full justify-start">
                      <Phone className="w-4 h-4 mr-2" />
                      Hubungi Kami
                    </Button>
                  </Link>
                  <Link href="/paket" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Package className="w-4 h-4 mr-2" />
                      Lihat Paket
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};