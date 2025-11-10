import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GlassmorphismContainer } from '@/components/ui/GlassmorphismContainer';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Plane, 
  Star, 
  Phone, 
  MessageCircle, 
  Heart, 
  Share2, 
  Download, 
  FileText,
  X,
  Plus,
  Minus,
  Check,
  Info,
  DollarSign,
  Hotel,
  Shield,
  Clock,
  ArrowRight,
  Trash2,
  Eye
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Package {
  id: string;
  name: string;
  destination: string;
  duration: number;
  departureDate: string;
  airline: string;
  priceQuad: number;
  priceTriple: number;
  priceDouble: number;
  availableSlots: number;
  totalSlots: number;
  status: "open" | "limited" | "full";
  imageUrl?: string;
  rating?: number;
  reviewCount?: number;
  description?: string;
  facilities?: string[];
  itinerary?: string[];
  hotel?: string;
  hotelRating?: number;
  meals?: string;
  visa?: string;
  insurance?: string;
  guide?: string;
  transport?: string;
}

interface PackageComparisonProps {
  packages: Package[];
  onRemovePackage?: (packageId: string) => void;
  onAddPackage?: () => void;
  className?: string;
}

export const PackageComparison = ({ 
  packages, 
  onRemovePackage, 
  onAddPackage,
  className = ''
}: PackageComparisonProps) => {
  const [selectedPackages, setSelectedPackages] = useState<Package[]>(packages);
  const [comparisonMode, setComparisonMode] = useState<'basic' | 'detailed'>('basic');

  useEffect(() => {
    setSelectedPackages(packages);
  }, [packages]);

  const handleRemovePackage = (packageId: string) => {
    const updatedPackages = selectedPackages.filter(pkg => pkg.id !== packageId);
    setSelectedPackages(updatedPackages);
    if (onRemovePackage) {
      onRemovePackage(packageId);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getWinner = (field: keyof Package) => {
    if (field === 'priceQuad' || field === 'priceTriple' || field === 'priceDouble') {
      const lowestPrice = Math.min(...selectedPackages.map(pkg => pkg[field] as number));
      return selectedPackages.find(pkg => pkg[field] as number === lowestPrice);
    } else if (field === 'rating' || field === 'hotelRating') {
      const highestRating = Math.max(...selectedPackages.map(pkg => pkg[field] as number || 0));
      return selectedPackages.find(pkg => (pkg[field] as number || 0) === highestRating);
    } else if (field === 'duration') {
      const shortestDuration = Math.min(...selectedPackages.map(pkg => pkg.duration));
      return selectedPackages.find(pkg => pkg.duration === shortestDuration);
    } else if (field === 'availableSlots') {
      const mostSlots = Math.max(...selectedPackages.map(pkg => pkg.availableSlots));
      return selectedPackages.find(pkg => pkg.availableSlots === mostSlots);
    }
    return null;
  };

  const renderBasicComparison = () => {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg font-semibold line-clamp-2">{pkg.name}</CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemovePackage(pkg.id)}
                      className="text-red-500 hover:text-red-600 hover:bg-red-50"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Package Image */}
                  <div className="h-40 bg-muted rounded-lg overflow-hidden">
                    {pkg.imageUrl && (
                      <img
                        src={pkg.imageUrl}
                        alt={pkg.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Basic Info */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Harga (Quad)</span>
                      <span className="font-bold text-primary">{formatPrice(pkg.priceQuad)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Durasi</span>
                      <span className="font-medium">{pkg.duration} Hari</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Keberangkatan</span>
                      <span className="font-medium">{formatDate(pkg.departureDate)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Slot Tersedia</span>
                      <span className="font-medium">{pkg.availableSlots}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Lihat Detail
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Add Package Button */}
        {selectedPackages.length < 3 && (
          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={onAddPackage}
              className="flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              Tambah Paket untuk Perbandingan
            </Button>
          </div>
        )}
      </div>
    );
  };

  const renderDetailedComparison = () => {
    const comparisonFields = [
      { key: 'name', label: 'Nama Paket', icon: <FileText className="w-4 h-4" /> },
      { key: 'destination', label: 'Destinasi', icon: <MapPin className="w-4 h-4" /> },
      { key: 'duration', label: 'Durasi', icon: <Calendar className="w-4 h-4" /> },
      { key: 'departureDate', label: 'Keberangkatan', icon: <Clock className="w-4 h-4" /> },
      { key: 'airline', label: 'Maskapai', icon: <Plane className="w-4 h-4" /> },
      { key: 'hotel', label: 'Hotel', icon: <Hotel className="w-4 h-4" /> },
      { key: 'hotelRating', label: 'Rating Hotel', icon: <Star className="w-4 h-4" /> },
      { key: 'meals', label: 'Makanan', icon: <Info className="w-4 h-4" /> },
      { key: 'visa', label: 'Visa', icon: <Shield className="w-4 h-4" /> },
      { key: 'insurance', label: 'Asuransi', icon: <Shield className="w-4 h-4" /> },
      { key: 'guide', label: 'Pemandu', icon: <Users className="w-4 h-4" /> },
      { key: 'transport', label: 'Transportasi', icon: <Plane className="w-4 h-4" /> },
      { key: 'priceQuad', label: 'Harga Quad', icon: <DollarSign className="w-4 h-4" /> },
      { key: 'priceTriple', label: 'Harga Triple', icon: <DollarSign className="w-4 h-4" /> },
      { key: 'priceDouble', label: 'Harga Double', icon: <DollarSign className="w-4 h-4" /> },
      { key: 'rating', label: 'Rating', icon: <Star className="w-4 h-4" /> },
      { key: 'availableSlots', label: 'Slot Tersedia', icon: <Users className="w-4 h-4" /> },
    ];

    return (
      <div className="space-y-6">
        {/* Comparison Mode Toggle */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-lg bg-muted p-1">
            <button
              onClick={() => setComparisonMode('basic')}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                comparisonMode === 'basic' ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-background"
              )}
            >
              Ringkasan
            </button>
            <button
              onClick={() => setComparisonMode('detailed')}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                comparisonMode === 'detailed' ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-background"
              )}
            >
              Detail
            </button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-muted">
                <th className="p-3 text-left font-medium text-foreground border-r border-border">
                  Fitur
                </th>
                {selectedPackages.map((pkg, index) => (
                  <th key={pkg.id} className="p-3 text-center font-medium text-foreground border-r border-border last:border-r-0">
                    <div className="space-y-2">
                      <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden mx-auto">
                        {pkg.imageUrl && (
                          <img
                            src={pkg.imageUrl}
                            alt={pkg.name}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div className="text-sm font-medium line-clamp-2">{pkg.name}</div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemovePackage(pkg.id)}
                        className="text-red-500 hover:text-red-600 hover:bg-red-50 mt-2"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonFields.map((field) => (
                <tr key={field.key} className="border-b border-border">
                  <td className="p-3 font-medium text-foreground border-r border-border">
                    <div className="flex items-center space-x-2">
                      {field.icon}
                      <span>{field.label}</span>
                    </div>
                  </td>
                  {selectedPackages.map((pkg) => (
                    <td key={pkg.id} className="p-3 text-center border-r border-border last:border-r-0">
                      {field.key === 'name' && (
                        <span className="text-sm line-clamp-2">{pkg[field.key]}</span>
                      )}
                      {field.key === 'destination' && (
                        <span className="text-sm">{pkg[field.key]}</span>
                      )}
                      {field.key === 'duration' && (
                        <span className="text-sm">{pkg[field.key]} Hari</span>
                      )}
                      {field.key === 'departureDate' && (
                        <span className="text-sm">{formatDate(pkg[field.key])}</span>
                      )}
                      {field.key === 'airline' && (
                        <span className="text-sm">{pkg[field.key]}</span>
                      )}
                      {field.key === 'hotel' && (
                        <span className="text-sm">{pkg[field.key]}</span>
                      )}
                      {field.key === 'hotelRating' && (
                        <div className="flex items-center justify-center">
                          <span className="text-sm">{pkg[field.key] || 'N/A'}</span>
                          {getWinner(field.key as keyof Package)?.id === pkg.id && (
                            <Badge className="ml-2 bg-green-500 text-white text-xs">Terbaik</Badge>
                          )}
                        </div>
                      )}
                      {field.key === 'meals' && (
                        <span className="text-sm">{pkg[field.key] || 'N/A'}</span>
                      )}
                      {field.key === 'visa' && (
                        <span className="text-sm">{pkg[field.key] || 'N/A'}</span>
                      )}
                      {field.key === 'insurance' && (
                        <span className="text-sm">{pkg[field.key] || 'N/A'}</span>
                      )}
                      {field.key === 'guide' && (
                        <span className="text-sm">{pkg[field.key] || 'N/A'}</span>
                      )}
                      {field.key === 'transport' && (
                        <span className="text-sm">{pkg[field.key] || 'N/A'}</span>
                      )}
                      {(field.key === 'priceQuad' || field.key === 'priceTriple' || field.key === 'priceDouble') && (
                        <div className="flex items-center justify-center">
                          <span className="text-sm font-bold text-primary">{formatPrice(pkg[field.key] as number)}</span>
                          {getWinner(field.key as keyof Package)?.id === pkg.id && (
                            <Badge className="ml-2 bg-green-500 text-white text-xs">Termurah</Badge>
                          )}
                        </div>
                      )}
                      {field.key === 'rating' && (
                        <div className="flex items-center justify-center">
                          <span className="text-sm">{pkg[field.key] || 'N/A'}</span>
                          {getWinner(field.key as keyof Package)?.id === pkg.id && (
                            <Badge className="ml-2 bg-green-500 text-white text-xs">Tertinggi</Badge>
                          )}
                        </div>
                      )}
                      {field.key === 'availableSlots' && (
                        <div className="flex items-center justify-center">
                          <span className="text-sm">{pkg[field.key]}</span>
                          {getWinner(field.key as keyof Package)?.id === pkg.id && (
                            <Badge className="ml-2 bg-green-500 text-white text-xs">Terbanyak</Badge>
                          )}
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Package Button */}
        {selectedPackages.length < 3 && (
          <div className="flex justify-center mt-6">
            <Button
              variant="outline"
              onClick={onAddPackage}
              className="flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              Tambah Paket untuk Perbandingan
            </Button>
          </div>
        )}
      </div>
    );
  };

  return (
    <GlassmorphismContainer variant="light" className={cn("p-6", className)}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Perbandingan Paket Umroh</h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">{selectedPackages.length} paket</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedPackages([])}
              className="text-red-500 hover:text-red-600 hover:bg-red-50"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Hapus Semua
            </Button>
          </div>
        </div>

        {/* Comparison Content */}
        {selectedPackages.length === 0 ? (
          <div className="text-center py-12">
            <div className="inline-flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                <Eye className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Belum ada paket untuk dibandingkan</h3>
              <p className="text-muted-foreground max-w-md">Tambahkan minimal 2 paket untuk mulai perbandingan</p>
              <Button onClick={onAddPackage} className="mt-4">
                <Plus className="w-4 h-4 mr-2" />
                Tambah Paket
              </Button>
            </div>
          </div>
        ) : (
          <>
            {comparisonMode === 'basic' ? renderBasicComparison() : renderDetailedComparison()}
          </>
        )}

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mt-6">
          <Button variant="outline" className="flex items-center space-x-2">
            <Share2 className="w-4 h-4" />
            Bagikan Perbandingan
          </Button>
          <Button className="bg-primary hover:bg-primary/90 flex items-center space-x-2">
            <ArrowRight className="w-4 h-4" />
            Lanjut ke Pemesanan
          </Button>
        </div>
      </div>
    </GlassmorphismContainer>
  );
};