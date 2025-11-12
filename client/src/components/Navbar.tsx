import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useScrollPosition } from "@/hooks/use-scroll-position";

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  
  // Determine if header should be transparent or have background
  const isTransparent = scrollPosition < 50;
  const isScrolled = scrollPosition > 0;

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/paket", label: "Paket Umroh" },
    { href: "/tentang", label: "Tentang Kami" },
    { href: "/hubungi", label: "Hubungi Kami" },
  ];

  return (
    <>
      {/* Transparent header - shown at the top */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isTransparent ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
              <div className={`text-xl font-bold ${isTransparent ? 'text-white' : 'text-primary-foreground'}`}>
                Al-Muhajirin Travel
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Button
                    variant="ghost"
                    className={`${
                      location === link.href
                        ? "bg-white/20"
                        : ""
                    } ${isTransparent ? 'text-white hover:bg-white/10' : 'text-primary-foreground hover:bg-primary-foreground/10'}`}
                    data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
              <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="secondary"
                  size="sm"
                  className={`ml-2 ${isTransparent ? 'bg-white/20 text-white border border-white/30 hover:bg-white/30' : ''}`}
                  data-testid="button-whatsapp"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>

            <button
              className={`md:hidden ${isTransparent ? 'text-white' : 'text-primary-foreground'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className={`md:hidden ${isTransparent ? 'bg-black/50 backdrop-blur-sm' : 'bg-primary'} border-t ${isTransparent ? 'border-white/20' : 'border-primary-foreground/10'}`}>
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${
                      location === link.href
                        ? "bg-white/20"
                        : ""
                    } ${isTransparent ? 'text-white hover:bg-white/10' : 'text-primary-foreground hover:bg-primary-foreground/10'}`}
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
              <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" className="block">
                <Button
                  variant="secondary"
                  size="sm"
                  className={`w-full ${isTransparent ? 'bg-white/20 text-white border border-white/30 hover:bg-white/30' : ''}`}
                  data-testid="button-mobile-whatsapp"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Sticky header - shown when scrolling */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        } bg-primary text-primary-foreground shadow-md`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
            <div className="text-xl font-bold">Al-Muhajirin Travel</div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  className={`${
                    location === link.href
                      ? "bg-primary-foreground/10"
                      : ""
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="sm" className="ml-2" data-testid="button-whatsapp">
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${
                    location === link.href
                      ? "bg-primary-foreground/10"
                      : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="secondary" size="sm" className="w-full" data-testid="button-mobile-whatsapp">
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
    </>
  );
}
