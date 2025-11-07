import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  tripDate: string;
  rating: number;
  comment: string;
  photoUrl?: string;
}

export default function TestimonialCard({
  name,
  tripDate,
  rating,
  comment,
  photoUrl,
}: TestimonialCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Card className="h-full" data-testid={`card-testimonial-${name}`}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src={photoUrl} alt={name} />
            <AvatarFallback>{getInitials(name)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground" data-testid={`text-testimonial-name-${name}`}>
              {name}
            </h4>
            <p className="text-sm text-muted-foreground">{tripDate}</p>
          </div>
        </div>
        
        <div className="flex gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating
                  ? "fill-yellow-500 text-yellow-500"
                  : "fill-gray-300 text-gray-300"
              }`}
            />
          ))}
        </div>

        <p className="text-sm text-foreground leading-relaxed" data-testid={`text-testimonial-comment-${name}`}>
          {comment}
        </p>
      </CardContent>
    </Card>
  );
}
