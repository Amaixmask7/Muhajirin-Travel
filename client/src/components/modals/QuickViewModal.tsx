import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
  ChevronRight,
  Clock,
  DollarSign
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
}

interface QuickViewModalProps {
  package: Package;
  isOpen: boolean;
  onClose: () => void;
  onBookNow?: (packageId: string) => void;
  onAddToWishlist?: (packageId: string) => void;
  onShare?: (package: Package) => void;
}

export const QuickViewModal = ({ 
  package: pkg,
  isOpen, 
  onClose, 
  onBookNow, 
  onAddToWishlist, 
  onShare 
}: QuickViewModalProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Check if package is already in wishlist
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setIsWishlisted(wishlist.includes(pkg.id));
  }, [pkg.id]);

  const statusConfig = {
    open: { label: "Tersedia", color: "bg-green-500 text-white" },
    limited: { label: "Terbatas", color: "bg-orange-500 text-white" },
    full: { label: "Penuh", color: "bg-red-500 text-white" }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleBookNow = () => {
    if (onBookNow) {
      onBookNow(pkg.id);
      onClose();
    }
  };

  const handleAddToWishlist = () => {
    if (onAddToWishlist) {
      onAddToWishlist(pkg.id);
      setIsWishlisted(true);
      
      // Update localStorage
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      if (!wishlist.includes(pkg.id)) {
        wishlist.push(pkg.id);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
      }
    }
  };

  const handleShare = () => {
    if (onShare) {
      onShare(pkg);
    }
  };

  const tabs = [
    { id: 'overview', label: 'Ringkasan', icon: FileText },
    { id: 'itinerary', label: 'Itinerary', icon: Calendar },
    { id: 'facilities', label: 'Fasilitas', icon: Star },
    { id: 'hotel', label: 'Hotel', icon: MapPin },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="max-w-4xl mx-auto"
          >
            <DialogContent className="p-0 max-h-[90vh] overflow-y-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left Column - Package Image and Basic Info */}
                <div className="space-y-4">
                  {/* Package Image */}
                  <div className="relative h-64 md:h-80 bg-muted rounded-lg overflow-hidden">
                    {pkg.imageUrl && (
                      <motion.img
                        src={pkg.imageUrl}
                        alt={pkg.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>

                  {/* Package Name and Status */}
                  <div className="space-y-2">
                    <DialogHeader className="pb-2">
                      <DialogTitle className="text-xl font-bold text-foreground">{pkg.name}</DialogTitle>
                      <div className="flex items-center gap-2">
                        <Badge className={cn("px-3 py-1", statusConfig[pkg.status].color)}>
                          {statusConfig[pkg.status].label}
                        </Badge>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={cn(
                                "w-4 h-4",
                                i < Math.floor(pkg.rating || 0) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              )}
                            />
                          ))}
                          <span className="text-sm text-muted-foreground ml-1">({pkg.reviewCount || 0})</span>
                        </div>
                      </div>
                    </DialogHeader>

                    {/* Quick Info */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{pkg.departureDate} • {pkg.duration} Hari</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Plane className="w-4 h-4 text-primary" />
                        <span>{pkg.airline}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{pkg.availableSlots} dari {pkg.totalSlots} Slot Tersedia</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="pt-3 border-t border-border">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Mulai dari</span>
                        <span className="text-2xl font-bold text-primary">{formatPrice(pkg.priceQuad)}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">per orang (quad)</div>
                    </div>
                  </div>

                  {/* Description */}
                  {pkg.description && (
                    <div className="pt-4 border-t border-border">
                      <h4 className="font-semibold text-foreground mb-2">Deskripsi</h4>
                      <p className="text-sm text-muted-foreground line-clamp-3">{pkg.description}</p>
                    </div>
                  )}
                </div>

                {/* Right Column - Tabs and Detailed Info */}
                <div className="space-y-4">
                  {/* Tabs */}
                  <div className="flex border-b border-border">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                          "flex-1 px-4 py-3 text-sm font-medium transition-colors relative",
                          activeTab === tab.id
                            ? "text-primary border-b-2 border-primary"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        <tab.icon className="w-4 h-4 mr-2" />
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 min-h-[300px]"
                  >
                    {activeTab === 'overview' && (
                      <div className="space-y-4">
                        <h4 className="font-semibold text-foreground mb-3">Ringkasan Paket</h4>
                        <div className="space-y-3 text-sm text-muted-foreground">
                          <p>Paket umroh premium dengan fasilitas lengkap dan pelayanan terbaik untuk jamaah Indonesia.</p>
                          <p>Termasuk akomodasi hotel bintang 4, transportasi darat, dan makanan halal.</p>
                          <p>Dibimbing oleh tour guide berpengalaman dan didampingi oleh ustz yang ahli.</p>
                        </div>
                      </div>
                    )}

                    {activeTab === 'itinerary' && (
                      <div className="space-y-4">
                        <h4 className="font-semibold text-foreground mb-3">Itinerary Perjalanan</h4>
                        <div className="space-y-3">
                          {pkg.itinerary && pkg.itinerary.length > 0 ? (
                            pkg.itinerary.map((day, index) => (
                              <div key={index} className="space-y-2">
                                <h5 className="font-medium text-primary">Hari {index + 1}</h5>
                                <ul className="space-y-1 text-sm text-muted-foreground">
                                  {day.map((activity, actIndex) => (
                                    <li key={actIndex} className="flex items-start gap-2">
                                      <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                      <span>{activity}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))
                          ) : (
                            <div className="text-sm text-muted-foreground">
                              <p>Itinerary lengkap akan disediakan setelah konfirmasi pemesanan.</p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {activeTab === 'facilities' && (
                      <div className="space-y-4">
                        <h4 className="font-semibold text-foreground mb-3">Fasilitas</h4>
                        <div className="space-y-3">
                          {pkg.facilities && pkg.facilities.length > 0 ? (
                            pkg.facilities.map((facility, index) => (
                              <div key={index} className="flex items-center gap-2 p-3 bg-secondary/20 rounded-lg">
                                <Star className="w-4 h-4 text-primary" />
                                <span className="text-sm">{facility}</span>
                              </div>
                            ))
                          ) : (
                            <div className="text-sm text-muted-foreground">
                              <p>Fasilitas lengkap akan disediakan untuk kenyamanan dan kenyamanan jamaah.</p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {activeTab === 'hotel' && (
                      <div className="space-y-4">
                        <h4 className="font-semibold text-foreground mb-3">Akomodasi Hotel</h4>
                        <div className="space-y-3 text-sm text-muted-foreground">
                          {pkg.hotel ? (
                            <div>
                              <p>{pkg.hotel}</p>
                              <p>Hotel bintang 4 dengan fasilitas lengkap dan lokasi strategis dekat tempat ibadah.</p>
                            </div>
                          ) : (
                            <p>Informasi hotel akan disediakan setelah konfirmasi pemesanan.</p>
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-border space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={handleAddToWishlist}
                        >
                          <Heart className={cn("w-4 h-4 mr-2", isWishlisted ? "fill-red-500 text-red-500" : "")} />
                          {isWishlisted ? "Dihapus dari Wishlist" : "Tambah ke Wishlist"}
                        </Button>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={handleShare}
                        >
                          <Share2 className="w-4 h-4 mr-2" />
                          Bagikan
                        </Button>
                      </motion.div>
                    </div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        className="w-full bg-primary hover:bg-primary/90"
                        onClick={handleBookNow}
                      >
                        <DollarSign className="w-4 h-4 mr-2" />
                        Pesan Sekarang
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};