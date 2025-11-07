import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/paket", label: "Paket Umroh" },
    { href: "/tentang", label: "Tentang Kami" },
    { href: "/hubungi", label: "Hubungi Kami" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
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
  );
}
