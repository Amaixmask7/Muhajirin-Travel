import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileCheck, Award } from "lucide-react";
import certificateImg from "@assets/generated_images/Indonesian_official_certificate_document_8793318c.png";

export default function LegalitySection() {
  const certifications = [
    {
      icon: Shield,
      title: "Izin PPIU Kemenag",
      number: "D/123/2020",
      description: "Terdaftar resmi di Kementerian Agama RI",
    },
    {
      icon: FileCheck,
      title: "Izin PIHK",
      number: "PIHK/456/2020",
      description: "Penyelenggara Ibadah Haji Khusus",
    },
    {
      icon: Award,
      title: "Sertifikat ISO",
      number: "ISO 9001:2015",
      description: "Standar kualitas pelayanan internasional",
    },
  ];

  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4">Legalitas Terjamin</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Travel Resmi & Terpercaya
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Al-Muhajirin Travel telah memiliki izin resmi dan sertifikasi lengkap untuk menyelenggarakan perjalanan umroh dan haji
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Card key={index} className="text-center" data-testid={`card-certification-${index}`}>
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary mb-2">{cert.number}</p>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
