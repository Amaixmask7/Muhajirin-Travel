import { useState } from "react";
import { useRoute } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Upload } from "lucide-react";

export default function Daftar() {
  const [, params] = useRoute("/daftar/:id");
  const packageId = params?.id;
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    passportName: "",
    roomType: "quad",
  });

  const [files, setFiles] = useState({
    ktp: null as File | null,
    kk: null as File | null,
    passport: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: keyof typeof files) => {
    if (e.target.files && e.target.files[0]) {
      setFiles({ ...files, [type]: e.target.files[0] });
      console.log(`${type} file selected:`, e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData, files);
    toast({
      title: "Pendaftaran Berhasil!",
      description: "Tim kami akan segera menghubungi Anda untuk proses selanjutnya.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="bg-primary text-primary-foreground py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Formulir Pendaftaran Umroh</h1>
          <p className="text-lg opacity-90">
            Lengkapi data diri dan upload dokumen yang diperlukan
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Data Pribadi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Nama Lengkap *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Nama sesuai KTP"
                    data-testid="input-full-name"
                  />
                </div>
                <div>
                  <Label htmlFor="passportName">Nama Sesuai Paspor *</Label>
                  <Input
                    id="passportName"
                    name="passportName"
                    required
                    value={formData.passportName}
                    onChange={handleInputChange}
                    placeholder="Nama sesuai paspor"
                    data-testid="input-passport-name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@example.com"
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Nomor Telepon *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="08123456789"
                    data-testid="input-phone"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="roomType">Tipe Kamar *</Label>
                <Select value={formData.roomType} onValueChange={(value) => setFormData({ ...formData, roomType: value })}>
                  <SelectTrigger id="roomType" data-testid="select-room-type">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="quad">Quad (4 orang/kamar)</SelectItem>
                    <SelectItem value="triple">Triple (3 orang/kamar)</SelectItem>
                    <SelectItem value="double">Double (2 orang/kamar)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upload Dokumen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="ktp">Foto KTP *</Label>
                <div className="mt-2 flex items-center gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("ktp")?.click()}
                    data-testid="button-upload-ktp"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Pilih File
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    {files.ktp ? files.ktp.name : "Belum ada file dipilih"}
                  </span>
                  <input
                    id="ktp"
                    type="file"
                    accept="image/*,.pdf"
                    className="hidden"
                    onChange={(e) => handleFileChange(e, "ktp")}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="kk">Foto Kartu Keluarga *</Label>
                <div className="mt-2 flex items-center gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("kk")?.click()}
                    data-testid="button-upload-kk"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Pilih File
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    {files.kk ? files.kk.name : "Belum ada file dipilih"}
                  </span>
                  <input
                    id="kk"
                    type="file"
                    accept="image/*,.pdf"
                    className="hidden"
                    onChange={(e) => handleFileChange(e, "kk")}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="passport">Foto Paspor (jika ada)</Label>
                <div className="mt-2 flex items-center gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("passport")?.click()}
                    data-testid="button-upload-passport"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Pilih File
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    {files.passport ? files.passport.name : "Belum ada file dipilih"}
                  </span>
                  <input
                    id="passport"
                    type="file"
                    accept="image/*,.pdf"
                    className="hidden"
                    onChange={(e) => handleFileChange(e, "passport")}
                  />
                </div>
              </div>

              <div className="text-sm text-muted-foreground pt-2">
                <p>* Format file: JPG, PNG, atau PDF</p>
                <p>* Maksimal ukuran file: 5MB</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button type="submit" size="lg" className="flex-1" data-testid="button-submit-registration">
                  Kirim Pendaftaran
                </Button>
                <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button type="button" variant="outline" size="lg" className="w-full" data-testid="button-bantuan">
                    Butuh Bantuan?
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>

      <Footer />
    </div>
  );
}
