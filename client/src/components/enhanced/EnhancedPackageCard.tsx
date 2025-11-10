import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Plane, MapPin, Users, Heart, Eye, Star } from 'lucide-react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface PackageCardProps {
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
}

export const EnhancedPackageCard = ({
  id,
  name,
  destination,
  duration,
  departureDate,
  airline,
  priceQuad,
  availableSlots,
  totalSlots,
  status,
  imageUrl,
  rating = 0,
  reviewCount = 0,
}: PackageCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const statusConfig = {
    open: { label: "Tersedia", color: "bg-green-500 text-white" },
    limited: { label: "Terbatas", color: "bg-orange-500 text-white" },
    full: { label: "Penuh", color: "bg-red-500 text-white" },
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    // In a real app, this would also update a global wishlist state
  };

  return (
    <motion.div
      className="group"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className={cn(
        "overflow-hidden cursor-pointer",
        "hover:shadow-2xl hover:scale-105 transition-all duration-300"
      )}>
        <div className="relative h-48 bg-muted overflow-hidden">
          {imageUrl && (
            <motion.img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
          )}
          
          {/* Overlay with quick actions */}
          <motion.div
            className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <motion.button
              className="bg-white/90 backdrop-blur-sm p-2 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleWishlist();
              }}
            >
              <Heart className={cn(
                "w-5 h-5 transition-colors duration-300",
                isWishlisted ? "fill-red-500 text-red-500" : "text-gray-700"
              )} />
            </motion.button>
            
            <Link href={`/paket/${id}`}>
              <motion.button
                className="bg-white/90 backdrop-blur-sm p-2 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Eye className="w-5 h-5 text-gray-700" />
              </motion.button>
            </Link>
          </motion.div>
          
          <div className="absolute top-3 right-3">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 400, damping: 17 }}
            >
              <Badge className={cn(
                "shadow-lg",
                statusConfig[status].color
              )}>
                {statusConfig[status].label}
              </Badge>
            </motion.div>
          </div>
          
          {rating > 0 && (
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
              <span>{rating.toFixed(1)}</span>
              {reviewCount > 0 && (
                <span className="text-muted-foreground">({reviewCount})</span>
              )}
            </div>
          )}
        </div>
        
        <CardHeader>
          <motion.h3
            className={cn(
              "text-xl font-semibold text-foreground mb-2 transition-colors duration-300",
              isHovered ? "text-primary" : ""
            )}
          >
            {name}
          </motion.h3>
          <div className="flex items-center text-sm text-muted-foreground gap-2">
            <MapPin className="w-4 h-4" />
            <span>{destination}</span>
          </div>
        </CardHeader>

        <CardContent className="space-y-3">
          <div className="flex items-center text-sm text-foreground gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{departureDate} • {duration} Hari</span>
          </div>
          <div className="flex items-center text-sm text-foreground gap-2">
            <Plane className="w-4 h-4 text-primary" />
            <span>{airline}</span>
          </div>
          <div className="flex items-center text-sm text-foreground gap-2">
            <Users className="w-4 h-4 text-primary" />
            <span>{availableSlots} dari {totalSlots} Slot Tersedia</span>
          </div>
          <div className="pt-2 border-t border-border">
            <p className="text-sm text-muted-foreground">Mulai dari</p>
            <motion.p 
              className="text-2xl font-bold text-primary"
              whileHover={{ scale: 1.05 }}
            >
              {formatPrice(priceQuad)}
            </motion.p>
            <p className="text-xs text-muted-foreground">per orang (quad)</p>
          </div>
        </CardContent>

        <CardFooter>
          <Link href={`/paket/${id}`} className="w-full">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                className={cn(
                  "w-full shadow-lg hover:shadow-xl transition-all duration-300",
                  status === 'open' && "bg-primary hover:bg-primary/90",
                  status === 'limited' && "bg-orange-500 hover:bg-orange-600",
                  status === 'full' && "bg-gray-500 hover:bg-gray-600"
                )}
                data-testid={`button-detail-${id}`}
              >
                Lihat Detail
              </Button>
            </motion.div>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};