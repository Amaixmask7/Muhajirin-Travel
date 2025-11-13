import { Link } from "wouter";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" aria-label="Al-Muhajirin Travel" className="inline-flex items-center">
              <img
                src="/almuhajirinlogo.png"
                alt="Al-Muhajirin Travel"
                className="h-20 w-auto mb-4"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Travel umroh dan haji terpercaya dengan layanan profesional dan bimbingan ibadah terbaik.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover-elevate p-2 rounded-md" data-testid="link-facebook">
                <Facebook className="w-5 h-5 text-muted-foreground" />
              </a>
              <a href="#" className="hover-elevate p-2 rounded-md" data-testid="link-instagram">
                <Instagram className="w-5 h-5 text-muted-foreground" />
              </a>
              <a href="#" className="hover-elevate p-2 rounded-md" data-testid="link-youtube">
                <Youtube className="w-5 h-5 text-muted-foreground" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground" data-testid="link-footer-beranda">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/paket" className="text-muted-foreground hover:text-foreground" data-testid="link-footer-paket">
                  Paket Umroh
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="text-muted-foreground hover:text-foreground" data-testid="link-footer-tentang">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/hubungi" className="text-muted-foreground hover:text-foreground" data-testid="link-footer-hubungi">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Umroh Reguler</li>
              <li>Umroh Plus Turki</li>
              <li>Haji Khusus</li>
              <li>Umroh Ramadhan</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                <span>Jl. Sudirman No. 123, Jakarta Pusat 10220</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href="tel:+622112345678" className="hover:text-foreground">
                  (021) 1234-5678
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href="mailto:info@almuhajirin.com" className="hover:text-foreground">
                  info@almuhajirin.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Al-Muhajirin Travel. Hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
