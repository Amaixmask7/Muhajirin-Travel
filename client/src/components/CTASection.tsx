import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { Link } from "wouter";

export default function CTASection() {
  return (
    <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Siap Memulai Perjalanan Spiritual Anda?
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Daftarkan diri Anda sekarang atau konsultasi gratis dengan tim kami
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/paket">
            <Button 
              size="lg" 
              variant="secondary"
              data-testid="button-cta-daftar"
            >
              Daftar Sekarang
            </Button>
          </Link>
          <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white border-green-600 shadow-lg"
              data-testid="button-cta-whatsapp"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat WhatsApp
            </Button>
          </a>
          <a href="tel:+628123456789">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 border-white shadow-lg font-semibold"
              data-testid="button-cta-phone"
            >
              <Phone className="w-5 h-5 mr-2" />
              Hubungi Kami
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
