import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Plane, MapPin, Users } from "lucide-react";
import { Link } from "wouter";

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
}

export default function PackageCard({
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
}: PackageCardProps) {
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

  return (
    <Card className="overflow-hidden hover-elevate" data-testid={`card-package-${id}`}>
      <div className="relative h-48 bg-muted">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute top-3 right-3">
          <Badge className={statusConfig[status].color}>
            {statusConfig[status].label}
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`text-package-name-${id}`}>
          {name}
        </h3>
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
          <p className="text-2xl font-bold text-primary" data-testid={`text-price-${id}`}>
            {formatPrice(priceQuad)}
          </p>
          <p className="text-xs text-muted-foreground">per orang (quad)</p>
        </div>
      </CardContent>

      <CardFooter>
        <Link href={`/paket/${id}`} className="w-full">
          <Button className="w-full" data-testid={`button-detail-${id}`}>
            Lihat Detail
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
