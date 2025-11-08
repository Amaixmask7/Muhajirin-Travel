import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, HeadphonesIcon, Plane, Hotel, BookOpen } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Izin Resmi & Terpercaya",
      description: "Terdaftar resmi di Kemenag dengan izin PPIU dan PIHK",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Hotel,
      title: "Hotel Bintang 5",
      description: "Penginapan berkualitas dekat Masjidil Haram & Nabawi",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Plane,
      title: "Maskapai Terpilih",
      description: "Penerbangan nyaman dengan maskapai ternama",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: BookOpen,
      title: "Bimbingan Ibadah",
      description: "Pembimbing berpengalaman mendampingi sepanjang perjalanan",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: Users,
      title: "Grup Kecil",
      description: "Rombongan tidak terlalu besar untuk kenyamanan bersama",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      icon: HeadphonesIcon,
      title: "Customer Support 24/7",
      description: "Tim kami siap membantu Anda kapan saja",
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
    },
  ];

  return (
    <div className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Layanan terbaik untuk perjalanan spiritual yang berkesan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-none shadow-sm hover-elevate transition-all duration-300 group"
                data-testid={`feature-card-${index}`}
              >
                <CardContent className="p-6">
                  <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
