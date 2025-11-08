import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Sparkles } from "lucide-react";
import heroImage from "@assets/generated_images/Aerial_Mecca_blue_hour_b8d073b4.png";

export default function Hero() {
  return (
    <div className="relative h-[700px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge className="mb-6 bg-primary/90 backdrop-blur-sm border-primary/30 text-white px-4 py-2 text-sm animate-pulse">
          <Sparkles className="w-4 h-4 mr-2 inline" />
          Promo Ramadhan 2024 - Diskon Hingga 15%
        </Badge>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
          Wujudkan Impian Ibadah<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
            Umroh & Haji Anda
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto drop-shadow-lg">
          Bersama Al-Muhajirin Travel, perjalanan spiritual Anda akan penuh berkah dan kenyamanan dengan layanan premium
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/paket">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 backdrop-blur-sm border border-primary-border shadow-xl text-lg px-8 py-6 group"
              data-testid="button-lihat-paket"
            >
              <span className="group-hover:scale-110 inline-block transition-transform">
                Lihat Paket Umroh
              </span>
            </Button>
          </Link>
          <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/20 backdrop-blur-md text-white border-white/40 hover:bg-white/30 shadow-xl text-lg px-8 py-6"
              data-testid="button-konsultasi"
            >
              Konsultasi Gratis
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
