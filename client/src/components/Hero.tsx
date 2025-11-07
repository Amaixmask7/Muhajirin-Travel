import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/Kaaba_Mecca_golden_hour_8f73cbfb.png";

export default function Hero() {
  return (
    <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Wujudkan Impian Ibadah Umroh & Haji Anda
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          Bersama Al-Muhajirin Travel, perjalanan spiritual Anda akan penuh berkah dan kenyamanan
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/paket">
            <Button 
              size="lg" 
              variant="default"
              className="bg-primary/90 backdrop-blur-sm border border-primary-border hover-elevate"
              data-testid="button-lihat-paket"
            >
              Lihat Paket Umroh
            </Button>
          </Link>
          <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white/30"
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
