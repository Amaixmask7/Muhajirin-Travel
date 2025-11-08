import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import PackageCard from "@/components/PackageCard";
import LegalitySection from "@/components/LegalitySection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import GallerySection from "@/components/GallerySection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Sparkles } from "lucide-react";
import hotelImage1 from "@assets/generated_images/Luxury_hotel_Mecca_night_view_66f35bf8.png";
import hotelImage2 from "@assets/generated_images/Masjid_Nabawi_interior_b6a3a284.png";
import hotelImage3 from "@assets/generated_images/Airplane_sunset_clouds_0ee351f6.png";
import hotelImage4 from "@assets/generated_images/Blue_Mosque_Istanbul_64eff276.png";
import hotelImage5 from "@assets/generated_images/Luxury_Mecca_hotel_room_f42f9135.png";
import avatar1 from "@assets/generated_images/Indonesian_Muslim_woman_portrait_1fd11be7.png";
import avatar2 from "@assets/generated_images/Indonesian_Muslim_man_portrait_446fc646.png";
import avatar3 from "@assets/generated_images/Indonesian_Muslim_couple_portrait_102ce6cb.png";
import gallery1 from "@assets/generated_images/Pilgrims_selfie_Kaaba_8730a78a.png";
import gallery2 from "@assets/generated_images/Pilgrims_Mount_Uhud_9ca43e51.png";
import gallery3 from "@assets/generated_images/Iftar_family_meal_4fab22e1.png";
import gallery4 from "@assets/generated_images/Souq_market_shopping_450744ec.png";
import gallery5 from "@assets/generated_images/Indonesian_pilgrims_group_photo_41b9bc2a.png";

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
      imageUrl: hotelImage1,
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
      imageUrl: hotelImage4,
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
      imageUrl: hotelImage2,
    },
    {
      id: "4",
      name: "Paket Umroh VIP Executive",
      destination: "Makkah - Madinah",
      duration: 10,
      departureDate: "25 Juni 2024",
      airline: "Emirates",
      priceQuad: 45000000,
      availableSlots: 8,
      totalSlots: 20,
      status: "limited" as const,
      imageUrl: hotelImage5,
    },
    {
      id: "5",
      name: "Paket Umroh Reguler",
      destination: "Makkah - Madinah",
      duration: 9,
      departureDate: "5 Juli 2024",
      airline: "Lion Air",
      priceQuad: 20000000,
      availableSlots: 30,
      totalSlots: 50,
      status: "open" as const,
      imageUrl: hotelImage3,
    },
    {
      id: "6",
      name: "Paket Umroh Syawal",
      destination: "Makkah - Madinah",
      duration: 11,
      departureDate: "10 Agustus 2024",
      airline: "Qatar Airways",
      priceQuad: 32000000,
      availableSlots: 12,
      totalSlots: 35,
      status: "open" as const,
      imageUrl: hotelImage1,
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
    {
      name: "Bapak Hendra",
      tripDate: "Umroh November 2023",
      rating: 5,
      comment: "Perjalanan umroh yang sangat berkesan. Guide yang berpengalaman, hotel strategis, dan pelayanan memuaskan. Terima kasih Al-Muhajirin Travel!",
      photoUrl: avatar2,
    },
    {
      name: "Ibu Fatimah",
      tripDate: "Umroh Oktober 2023",
      rating: 5,
      comment: "MasyaAllah, pengalaman spiritual yang luar biasa. Semua fasilitas sangat baik dan tim sangat helpful. Sangat recommended untuk yang ingin umroh!",
      photoUrl: avatar1,
    },
  ];

  const galleryImages = [
    { url: gallery1, title: "Selfie di depan Ka'bah", category: "Makkah" },
    { url: gallery5, title: "Foto Bersama Jamaah", category: "Makkah" },
    { url: gallery2, title: "Ziarah Gunung Uhud", category: "Madinah" },
    { url: gallery3, title: "Buka Puasa Bersama", category: "Kegiatan" },
    { url: gallery4, title: "Belanja di Souq Tradisional", category: "Kegiatan" },
    { url: hotelImage2, title: "Interior Masjid Nabawi", category: "Madinah" },
    { url: hotelImage1, title: "Hotel Mewah Makkah", category: "Fasilitas" },
    { url: hotelImage4, title: "Istanbul Blue Mosque", category: "Turki" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <StatsSection />
      
      <FeaturesSection />
      
      <div className="py-20 bg-gradient-to-b from-background to-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-primary to-primary/80 border-none">
              <Sparkles className="w-3 h-3 mr-1 inline" />
              Promo Terbatas
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Paket Umroh Pilihan Terbaik
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pilih paket umroh yang sesuai dengan kebutuhan dan budget Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/paket">
              <Button size="lg" className="shadow-lg group" data-testid="button-lihat-semua-paket">
                <span className="group-hover:scale-110 inline-block transition-transform">
                  Lihat Semua Paket
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <LegalitySection />

      <GallerySection images={galleryImages} />

      <div className="py-20 bg-card">
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

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </div>

      <CTASection />
      <Footer />
    </div>
  );
}
