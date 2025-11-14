import { useRoute, Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Plane, Hotel, MapPin, CheckCircle, Users } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import hotelImage from "@assets/generated_images/Luxury_Mecca_hotel_room_f42f9135.png";
import madinahImage from "@assets/generated_images/Masjid_Nabawi_Medina_sunset_93a57e53.png";

export default function PaketDetail() {
  const [, params] = useRoute("/paket/:id");
  const packageId = params?.id;

  const packageData = {
    id: packageId || "1",
    name: "Paket Umroh Ramadhan Premium",
    destination: "Makkah - Madinah",
    duration: 12,
    departureDate: "15 Maret 2024",
    airline: "Garuda Indonesia",
    hotelMecca: "Hilton Suites Makkah",
    hotelMadinah: "Pullman Zamzam Madinah",
    distanceHaram: "100m dari Masjidil Haram",
    distanceNabawi: "50m dari Masjid Nabawi",
    priceQuad: 28500000,
    priceTriple: 31000000,
    priceDouble: 35000000,
    availableSlots: 15,
    totalSlots: 40,
    status: "open",
    facilities: [
      "Visa Umroh",
      "Tiket Pesawat PP",
      "Hotel Bintang 5",
      "Makan 3x Sehari",
      "Tour Guide Berpengalaman",
      "Transportasi AC",
      "Asuransi Perjalanan",
      "Perlengkapan Umroh",
      "Ziarah Kota Makkah & Madinah",
      "Manasik Umroh",
    ],
    itinerary: [
      {
        day: 1,
        title: "Keberangkatan Jakarta - Jeddah",
        description: "Berkumpul di bandara, penerbangan menuju Jeddah, tiba di Jeddah, perjalanan ke Makkah, check-in hotel"
      },
      {
        day: 2,
        title: "Umroh Pertama",
        description: "Persiapan dan pelaksanaan umroh pertama, istirahat di hotel"
      },
      {
        day: 3,
        title: "Ibadah di Masjidil Haram",
        description: "Ibadah mandiri di Masjidil Haram, city tour Makkah"
      },
      {
        day: 4,
        title: "Ziarah Kota Makkah",
        description: "Ziarah ke tempat-tempat bersejarah di Makkah"
      },
      {
        day: 5,
        title: "Perjalanan ke Madinah",
        description: "Check-out hotel Makkah, perjalanan ke Madinah, check-in hotel Madinah"
      },
      {
        day: 6,
        title: "Ibadah di Masjid Nabawi",
        description: "Shalat di Raudhah, ibadah di Masjid Nabawi"
      },
      {
        day: 7,
        title: "Ziarah Kota Madinah",
        description: "Ziarah ke Jabal Uhud, makam para syuhada, dan tempat bersejarah lainnya"
      },
      {
        day: 8,
        title: "Ibadah Mandiri Madinah",
        description: "Ibadah mandiri di Masjid Nabawi, belanja oleh-oleh"
      },
      {
        day: 9,
        title: "Kembali ke Makkah",
        description: "Check-out hotel Madinah, perjalanan kembali ke Makkah"
      },
      {
        day: 10,
        title: "Umroh Kedua",
        description: "Pelaksanaan umroh kedua, ibadah mandiri"
      },
      {
        day: 11,
        title: "Persiapan Kepulangan",
        description: "Belanja oleh-oleh, check-out hotel, perjalanan ke Jeddah"
      },
      {
        day: 12,
        title: "Kepulangan",
        description: "Penerbangan kembali ke Jakarta, tiba di Indonesia"
      },
    ],
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHeader
        title={packageData.name}
        subtitle={packageData.destination}
        rightSlot={<Badge className="bg-green-500 text-white">Tersedia</Badge>}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <img src={hotelImage} alt="Hotel Makkah" className="w-full h-64 object-cover rounded-lg" />
              <img src={madinahImage} alt="Hotel Madinah" className="w-full h-64 object-cover rounded-lg" />
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Detail Paket</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Keberangkatan</p>
                      <p className="font-semibold">{packageData.departureDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Durasi</p>
                      <p className="font-semibold">{packageData.duration} Hari</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Plane className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Maskapai</p>
                      <p className="font-semibold">{packageData.airline}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Slot Tersedia</p>
                      <p className="font-semibold">{packageData.availableSlots} dari {packageData.totalSlots}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex items-start gap-3 mb-3">
                    <Hotel className="w-5 h-5 text-primary mt-1" />
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Hotel Makkah</p>
                      <p className="font-semibold">{packageData.hotelMecca}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {packageData.distanceHaram}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Hotel className="w-5 h-5 text-primary mt-1" />
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Hotel Madinah</p>
                      <p className="font-semibold">{packageData.hotelMadinah}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {packageData.distanceNabawi}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Fasilitas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {packageData.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm">{facility}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Itinerary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {packageData.itinerary.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-xl font-bold text-primary">H{item.day}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle>Harga Paket</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-muted-foreground">Quad (4 orang/kamar)</span>
                    <span className="font-bold text-primary">{formatPrice(packageData.priceQuad)}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-muted-foreground">Triple (3 orang/kamar)</span>
                    <span className="font-bold text-primary">{formatPrice(packageData.priceTriple)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Double (2 orang/kamar)</span>
                    <span className="font-bold text-primary">{formatPrice(packageData.priceDouble)}</span>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <Link href={`/daftar/${packageData.id}`}>
                    <Button className="w-full" size="lg" data-testid="button-daftar-sekarang">
                      Daftar Sekarang
                    </Button>
                  </Link>
                  <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold" size="lg" data-testid="button-tanya-paket">
                      Tanya Paket Ini
                    </Button>
                  </a>
                </div>

                <div className="text-xs text-muted-foreground pt-4 border-t border-border">
                  <p>* Harga dapat berubah sewaktu-waktu</p>
                  <p>* Pembayaran dapat dicicil</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
