import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalitySection from "@/components/LegalitySection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import groupPhoto from "@assets/generated_images/Indonesian_pilgrims_group_photo_41b9bc2a.png";

export default function Tentang() {
  const timeline = [
    {
      year: "2014",
      title: "Pendirian Perusahaan",
      description: "Al-Muhajirin Travel didirikan dengan visi memberikan layanan umroh terbaik"
    },
    {
      year: "2015",
      title: "Izin Resmi PPIU",
      description: "Mendapatkan izin resmi dari Kementerian Agama RI"
    },
    {
      year: "2017",
      title: "1000 Jamaah Pertama",
      description: "Melayani lebih dari 1000 jamaah dengan tingkat kepuasan 99%"
    },
    {
      year: "2019",
      title: "Ekspansi Layanan",
      description: "Menambah paket umroh plus dan haji khusus"
    },
    {
      year: "2024",
      title: "5000+ Jamaah",
      description: "Telah melayani lebih dari 5000 jamaah dengan berbagai paket"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Tentang Al-Muhajirin Travel</h1>
          <p className="text-lg opacity-90">
            Melayani perjalanan spiritual dengan sepenuh hati
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <Badge className="mb-4">Cerita Kami</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Dipercaya Ribuan Jamaah Sejak 2014
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Al-Muhajirin Travel adalah penyelenggara perjalanan ibadah umroh dan haji yang telah berpengalaman lebih dari 10 tahun. Kami berkomitmen memberikan pelayanan terbaik untuk mewujudkan impian spiritual jamaah.
              </p>
              <p>
                Dengan tim yang profesional dan berpengalaman, kami memastikan setiap detail perjalanan ibadah Anda terorganisir dengan baik, mulai dari pengurusan visa, akomodasi hotel bintang 5, hingga bimbingan ibadah yang komprehensif.
              </p>
              <p>
                Kepercayaan jamaah adalah prioritas utama kami. Oleh karena itu, kami memiliki izin resmi dari Kementerian Agama RI dan telah melayani ribuan jamaah dengan tingkat kepuasan yang sangat tinggi.
              </p>
            </div>
          </div>
          <div>
            <img
              src={groupPhoto}
              alt="Jamaah Al-Muhajirin Travel"
              className="w-full rounded-lg shadow-lg"
              data-testid="img-about-group"
            />
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge className="mb-4">Perjalanan Kami</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Timeline Pencapaian
            </h2>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <Card key={index} data-testid={`card-timeline-${index}`}>
                <CardContent className="p-6">
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">{item.year}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <LegalitySection />

        <div className="mt-20 bg-card rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-card-foreground mb-4">
            Visi & Misi Kami
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8 text-left">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Visi</h3>
                <p className="text-muted-foreground">
                  Menjadi penyelenggara perjalanan ibadah umroh dan haji terpercaya dan terbaik di Indonesia yang mampu memberikan pengalaman spiritual yang berkesan bagi setiap jamaah.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Misi</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Memberikan pelayanan prima kepada jamaah</li>
                  <li>• Menyediakan fasilitas terbaik dengan harga kompetitif</li>
                  <li>• Membimbing jamaah dalam pelaksanaan ibadah</li>
                  <li>• Menjaga kepercayaan dan amanah jamaah</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
