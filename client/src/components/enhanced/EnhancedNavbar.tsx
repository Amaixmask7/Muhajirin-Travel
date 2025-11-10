import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Search, User, Heart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GlassmorphismContainer } from "@/components/ui/GlassmorphismContainer";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function EnhancedNavbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/paket", label: "Paket Umroh" },
    { href: "/tentang", label: "Tentang Kami" },
    { href: "/hubungi", label: "Hubungi Kami" },
  ];

  return (
    <>
      <motion.nav 
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          isScrolled ? "py-2" : "py-4"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <GlassmorphismContainer variant="dark" className="mx-4 md:mx-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center space-x-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-xl font-bold text-primary-foreground">Al-Muhajirin Travel</div>
                </motion.div>
              </Link>

              <div className="hidden md:flex items-center space-x-1">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="ghost"
                        className={cn(
                          "text-foreground hover:text-primary transition-colors",
                          location === link.href && "bg-primary-foreground/10 text-primary"
                        )}
                      >
                        {link.label}
                      </Button>
                    </motion.div>
                  </Link>
                ))}
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSearchOpen(!searchOpen)}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <Search className="w-4 h-4" />
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <User className="w-4 h-4" />
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-secondary hover:bg-secondary/80 shadow-lg"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </a>
                </motion.div>
              </div>

              <motion.button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </GlassmorphismContainer>
        </motion.nav>

        {/* Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              className="fixed top-16 left-0 right-0 z-40 p-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <GlassmorphismContainer variant="light" className="max-w-2xl mx-auto p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Cari paket umroh..."
                    className="pl-10 pr-4 py-3 bg-background/50 backdrop-blur-sm border-border/50 text-foreground"
                    autoFocus
                  />
                </div>
              </GlassmorphismContainer>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden fixed top-16 left-0 right-0 z-40"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <GlassmorphismContainer variant="dark" className="mx-4 md:mx-8">
                <div className="px-4 py-4 space-y-2">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-start text-foreground hover:text-primary transition-colors",
                          location === link.href && "bg-primary-foreground/10 text-primary"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Button>
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-border/50">
                    <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" className="block">
                      <Button
                        variant="secondary"
                        className="w-full bg-secondary hover:bg-secondary/80"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              </GlassmorphismContainer>
            </motion.div>
          )}
        </AnimatePresence>
      </>
  );
}