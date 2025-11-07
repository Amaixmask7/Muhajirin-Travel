import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import PackageCard from "@/components/PackageCard";
import LegalitySection from "@/components/LegalitySection";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import hotelImage from "@assets/generated_images/Luxury_Mecca_hotel_room_f42f9135.png";
import avatar1 from "@assets/generated_images/Indonesian_Muslim_woman_portrait_1fd11be7.png";
import avatar2 from "@assets/generated_images/Indonesian_Muslim_man_portrait_446fc646.png";
import avatar3 from "@assets/generated_images/Indonesian_Muslim_couple_portrait_102ce6cb.png";

export default function Home() {
  const featuredPackages = [
    {
      id: "1",
      name: "Paket Umroh Ramadhan Premium",
      destination: "Makkah - Madinah",
      duration: 12,
      departureDate: "15 Maret 2024",
      airline: "Garuda Indonesia",
      priceQuad: 28500000,
      availableSlots: 15,
      totalSlots: 40,
      status: "open" as const,
      imageUrl: hotelImage,
    },
    {
      id: "2",
      name: "Paket Umroh Plus Turki",
      destination: "Makkah - Madinah - Istanbul",
      duration: 16,
      departureDate: "20 April 2024",
      airline: "Turkish Airlines",
      priceQuad: 35000000,
      availableSlots: 5,
      totalSlots: 30,
      status: "limited" as const,
      imageUrl: hotelImage,
    },
    {
      id: "3",
      name: "Paket Umroh Hemat",
      destination: "Makkah - Madinah",
      duration: 9,
      departureDate: "10 Mei 2024",
      airline: "Saudia Airlines",
      priceQuad: 22000000,
      availableSlots: 25,
      totalSlots: 45,
      status: "open" as const,
      imageUrl: hotelImage,
    },
  ];

  const testimonials = [
    {
      name: "Siti Aminah",
      tripDate: "Umroh Februari 2024",
      rating: 5,
      comment: "Alhamdulillah, pengalaman umroh bersama Al-Muhajirin Travel sangat menyenangkan. Pelayanan ramah, hotel nyaman dekat dengan Masjidil Haram, dan pembimbing yang sangat membantu. Terima kasih!",
      photoUrl: avatar1,
    },
    {
      name: "Ahmad Hidayat",
      tripDate: "Umroh Januari 2024",
      rating: 5,
      comment: "Sangat puas dengan pelayanan Al-Muhajirin Travel. Semua terorganisir dengan baik, dari pengurusan visa sampai bimbingan ibadah. Harga juga sangat kompetitif. Insya Allah akan umroh lagi!",
      photoUrl: avatar2,
    },
    {
      name: "Putri & Rizki",
      tripDate: "Umroh Desember 2023",
      rating: 5,
      comment: "Umroh pertama kami sangat berkesan. Tim Al-Muhajirin sangat membantu dan sabar mengajari kami tata cara ibadah. Hotel bintang 5 dan transportasi nyaman. Recommended!",
      photoUrl: avatar3,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <StatsSection />
      
      <div className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Promo Terbatas</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Paket Umroh Pilihan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pilih paket umroh yang sesuai dengan kebutuhan dan budget Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/paket">
              <Button size="lg" data-testid="button-lihat-semua-paket">
                Lihat Semua Paket
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <LegalitySection />

      <div className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Testimoni</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
              Kata Jamaah Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dengarkan pengalaman jamaah yang telah menunaikan ibadah bersama kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>

      <CTASection />
      <Footer />
    </div>
  );
}
