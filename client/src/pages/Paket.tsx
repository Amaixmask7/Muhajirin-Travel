import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackageCard from "@/components/PackageCard";
import PageHeader from "@/components/PageHeader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";
import hotelImage1 from "@assets/generated_images/Luxury_hotel_Mecca_night_view_66f35bf8.png";
import hotelImage2 from "@assets/generated_images/Masjid_Nabawi_interior_b6a3a284.png";
import hotelImage3 from "@assets/generated_images/Airplane_sunset_clouds_0ee351f6.png";
import hotelImage4 from "@assets/generated_images/Blue_Mosque_Istanbul_64eff276.png";
import hotelImage5 from "@assets/generated_images/Luxury_Mecca_hotel_room_f42f9135.png";

export default function Paket() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterAirline, setFilterAirline] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterPrice, setFilterPrice] = useState("all");

  const allPackages = [
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
    {
      id: "7",
      name: "Paket Umroh Plus Dubai",
      destination: "Makkah - Madinah - Dubai",
      duration: 14,
      departureDate: "15 September 2024",
      airline: "Emirates",
      priceQuad: 38000000,
      availableSlots: 18,
      totalSlots: 40,
      status: "open" as const,
      imageUrl: hotelImage3,
    },
    {
      id: "8",
      name: "Paket Umroh Keluarga",
      destination: "Makkah - Madinah",
      duration: 10,
      departureDate: "1 Oktober 2024",
      airline: "Garuda Indonesia",
      priceQuad: 25000000,
      availableSlots: 0,
      totalSlots: 45,
      status: "full" as const,
      imageUrl: hotelImage5,
    },
  ];

  const filteredPackages = allPackages.filter((pkg) => {
    const matchesSearch = pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pkg.destination.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAirline = filterAirline === "all" || pkg.airline === filterAirline;
    const matchesStatus = filterStatus === "all" || pkg.status === filterStatus;
    const matchesPrice = filterPrice === "all" || 
      (filterPrice === "low" && pkg.priceQuad < 25000000) ||
      (filterPrice === "medium" && pkg.priceQuad >= 25000000 && pkg.priceQuad < 35000000) ||
      (filterPrice === "high" && pkg.priceQuad >= 35000000);

    return matchesSearch && matchesAirline && matchesStatus && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="Paket Umroh"
        subtitle="Pilih paket umroh terbaik untuk perjalanan spiritual Anda"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Filter Paket</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="search">Cari Paket</Label>
                  <div className="relative mt-2">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="search"
                      type="search"
                      placeholder="Cari nama paket..."
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      data-testid="input-search-package"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="airline">Maskapai</Label>
                  <Select value={filterAirline} onValueChange={setFilterAirline}>
                    <SelectTrigger id="airline" className="mt-2" data-testid="select-airline">
                      <SelectValue placeholder="Pilih maskapai" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Semua Maskapai</SelectItem>
                      <SelectItem value="Garuda Indonesia">Garuda Indonesia</SelectItem>
                      <SelectItem value="Saudia Airlines">Saudia Airlines</SelectItem>
                      <SelectItem value="Turkish Airlines">Turkish Airlines</SelectItem>
                      <SelectItem value="Lion Air">Lion Air</SelectItem>
                      <SelectItem value="Emirates">Emirates</SelectItem>
                      <SelectItem value="Qatar Airways">Qatar Airways</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="status">Status Ketersediaan</Label>
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger id="status" className="mt-2" data-testid="select-status">
                      <SelectValue placeholder="Pilih status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Semua Status</SelectItem>
                      <SelectItem value="open">Tersedia</SelectItem>
                      <SelectItem value="limited">Terbatas</SelectItem>
                      <SelectItem value="full">Penuh</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="price">Harga</Label>
                  <Select value={filterPrice} onValueChange={setFilterPrice}>
                    <SelectTrigger id="price" className="mt-2" data-testid="select-price">
                      <SelectValue placeholder="Pilih rentang harga" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Semua Harga</SelectItem>
                      <SelectItem value="low">&lt; 25 Juta</SelectItem>
                      <SelectItem value="medium">25 - 35 Juta</SelectItem>
                      <SelectItem value="high">&gt; 35 Juta</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </aside>

          <div className="lg:col-span-3">
            <div className="mb-6">
              <p className="text-muted-foreground">
                Menampilkan {filteredPackages.length} dari {allPackages.length} paket
              </p>
            </div>

            {filteredPackages.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredPackages.map((pkg) => (
                  <PackageCard key={pkg.id} {...pkg} />
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground">
                    Tidak ada paket yang sesuai dengan filter Anda
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
