# Enhanced Component Library Structure

## Core Animation Components

### 1. Parallax Components

```typescript
// client/src/components/animations/ParallaxLayer.tsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxLayer = ({ 
  children, 
  speed = 0.5, 
  className = '' 
}: ParallaxLayerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);
  
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};
```

```typescript
// client/src/components/animations/EnhancedHero.tsx
import { motion } from 'framer-motion';
import { ParallaxLayer } from './ParallaxLayer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles } from 'lucide-react';
import heroImage from '@assets/generated_images/Aerial_Mecca_blue_hour_b8d073b4.png';

export const EnhancedHero = () => {
  return (
    <div className="relative h-[700px] overflow-hidden">
      {/* Background parallax layer */}
      <ParallaxLayer speed={0.3} className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
      </ParallaxLayer>
      
      {/* Gradient overlay with Islamic pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70">
        <div className="absolute inset-0 opacity-20">
          {/* Islamic geometric pattern overlay */}
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="islamic-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                {/* Islamic geometric pattern SVG */}
                <path d="M50,10 L90,50 L50,90 L10,50 Z" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
          </svg>
        </div>
      </div>
      
      {/* Content with scroll reveal animation */}
      <motion.div 
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center h-full flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Badge className="mb-6 bg-primary/90 backdrop-blur-sm border-primary/30 text-white px-4 py-2 text-sm animate-pulse">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              Promo Ramadhan 2024 - Diskon Hingga 15%
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Wujudkan Impian Ibadah<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
              Umroh & Haji Anda
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Bersama Al-Muhajirin Travel, perjalanan spiritual Anda akan penuh berkah dan kenyamanan dengan layanan premium
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 backdrop-blur-sm border border-primary-border shadow-xl text-lg px-8 py-6 group hover:scale-105 transition-transform"
              data-testid="button-lihat-paket"
            >
              <span className="group-hover:scale-110 inline-block transition-transform">
                Lihat Paket Umroh
              </span>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/20 backdrop-blur-md text-white border-white/40 hover:bg-white/30 shadow-xl text-lg px-8 py-6 hover:scale-105 transition-transform"
              data-testid="button-konsultasi"
            >
              Konsultasi Gratis
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
```

### 2. Scroll Reveal Components

```typescript
// client/src/components/animations/ScrollReveal.tsx
import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

export const ScrollReveal = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up',
  duration = 0.6
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: 50 };
      case 'down': return { opacity: 0, y: -50 };
      case 'left': return { opacity: 0, x: -50 };
      case 'right': return { opacity: 0, x: 50 };
      default: return { opacity: 0, y: 50 };
    }
  };

  const getFinalPosition = () => {
    switch (direction) {
      case 'up':
      case 'down': return { opacity: 1, y: 0 };
      case 'left':
      case 'right': return { opacity: 1, x: 0 };
      default: return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitialPosition()}
      animate={isInView ? getFinalPosition() : getInitialPosition()}
      transition={{ 
        duration, 
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};
```

### 3. Micro-Animation Components

```typescript
// client/src/components/animations/MicroAnimations.tsx
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'scale' | 'bounce' | 'rotate' | 'pulse';
}

export const AnimatedButton = ({ 
  children, 
  className = '', 
  onClick,
  variant = 'scale'
}: AnimatedButtonProps) => {
  const getAnimation = () => {
    switch (variant) {
      case 'scale':
        return {
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 }
        };
      case 'bounce':
        return {
          whileHover: { y: -5 },
          whileTap: { y: 0 }
        };
      case 'rotate':
        return {
          whileHover: { rotate: 5 },
          whileTap: { rotate: -5 }
        };
      case 'pulse':
        return {
          whileHover: { scale: [1, 1.05, 1] },
          transition: { duration: 0.3 }
        };
      default:
        return {
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 }
        };
    }
  };

  return (
    <motion.button
      className={className}
      onClick={onClick}
      {...getAnimation()}
    >
      {children}
    </motion.button>
  );
};

interface AnimatedIconProps {
  children: ReactNode;
  className?: string;
  animation?: 'spin' | 'bounce' | 'pulse' | 'shake';
}

export const AnimatedIcon = ({ 
  children, 
  className = '', 
  animation = 'pulse'
}: AnimatedIconProps) => {
  const getAnimation = () => {
    switch (animation) {
      case 'spin':
        return {
          animate: { rotate: 360 },
          transition: { duration: 2, repeat: Infinity, ease: "linear" }
        };
      case 'bounce':
        return {
          animate: { y: [0, -10, 0] },
          transition: { duration: 1, repeat: Infinity }
        };
      case 'pulse':
        return {
          animate: { scale: [1, 1.2, 1] },
          transition: { duration: 1, repeat: Infinity }
        };
      case 'shake':
        return {
          animate: { x: [0, -5, 5, -5, 5, 0] },
          transition: { duration: 0.5 }
        };
      default:
        return {};
    }
  };

  return (
    <motion.div className={className} {...getAnimation()}>
      {children}
    </motion.div>
  );
};
```

### 4. Skeleton Loading Components

```typescript
// client/src/components/animations/SkeletonCard.tsx
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export const SkeletonCard = () => (
  <Card className="overflow-hidden">
    <div className="relative h-48 bg-muted">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
    </div>
    <CardHeader>
      <div className="space-y-2">
        <div className="h-6 bg-muted rounded animate-pulse" />
        <div className="h-4 bg-muted rounded w-3/4 animate-pulse" />
      </div>
    </CardHeader>
    <CardContent className="space-y-3">
      <div className="h-4 bg-muted rounded animate-pulse" />
      <div className="h-4 bg-muted rounded w-5/6 animate-pulse" />
      <div className="h-4 bg-muted rounded w-4/6 animate-pulse" />
      <div className="pt-4 border-t border-border">
        <div className="h-8 bg-muted rounded w-1/2 animate-pulse" />
      </div>
    </CardContent>
  </Card>
);

export const SkeletonPackageGrid = ({ count = 6 }: { count?: number }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: count }).map((_, index) => (
      <SkeletonCard key={index} />
    ))}
  </div>
);
```

### 5. Glassmorphism Components

```typescript
// client/src/components/ui/GlassmorphismContainer.tsx
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlassmorphismContainerProps {
  children: ReactNode;
  className?: string;
  variant?: 'light' | 'dark' | 'colored';
}

export const GlassmorphismContainer = ({ 
  children, 
  className = '',
  variant = 'light'
}: GlassmorphismContainerProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'light':
        return 'bg-white/10 backdrop-blur-md border-white/20';
      case 'dark':
        return 'bg-black/10 backdrop-blur-md border-black/20';
      case 'colored':
        return 'bg-primary/10 backdrop-blur-md border-primary/20';
      default:
        return 'bg-white/10 backdrop-blur-md border-white/20';
    }
  };

  return (
    <div 
      className={cn(
        'relative rounded-lg border shadow-xl',
        getVariantClasses(),
        className
      )}
    >
      {children}
    </div>
  );
};
```

### 6. Enhanced Package Card with Animations

```typescript
// client/src/components/enhanced/EnhancedPackageCard.tsx
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Plane, MapPin, Users, Heart, Eye } from 'lucide-react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { useState } from 'react';

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
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
        <div className="relative h-48 bg-muted overflow-hidden">
          {imageUrl && (
            <motion.img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              whileHover={{ scale: 1.1 }}
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
              onClick={() => setIsWishlisted(!isWishlisted)}
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-700'}`} />
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
              transition={{ delay: 0.2 }}
            >
              <Badge className={`${statusConfig[status].color} shadow-lg`}>
                {statusConfig[status].label}
              </Badge>
            </motion.div>
          </div>
          
          {rating > 0 && (
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold">
              ⭐ {rating.toFixed(1)} ({reviewCount})
            </div>
          )}
        </div>
        
        <CardHeader>
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
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
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button className="w-full shadow-lg hover:shadow-xl transition-shadow">
                Lihat Detail
              </Button>
            </motion.div>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
```

### 7. Enhanced Navbar with Glassmorphism

```typescript
// client/src/components/enhanced/EnhancedNavbar.tsx
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Search, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GlassmorphismContainer } from "@/components/ui/GlassmorphismContainer";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EnhancedNavbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/paket", label: "Paket Umroh" },
    { href: "/tentang", label: "Tentang Kami" },
    { href: "/hubungi", label: "Hubungi Kami" },
  ];

  return (
    <>
      <motion.nav 
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <GlassmorphismContainer className="mx-4 md:mx-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center space-x-2">
                <motion.div 
                  className="text-xl font-bold text-primary"
                  whileHover={{ scale: 1.05 }}
                >
                  Al-Muhajirin Travel
                </motion.div>
              </Link>

              <div className="hidden md:flex items-center space-x-1">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="ghost"
                        className={`${
                          location === link.href
                            ? "bg-primary-foreground/10 text-primary"
                            : ""
                        }`}
                      >
                        {link.label}
                      </Button>
                    </motion.div>
                  </Link>
                ))}
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSearchOpen(!searchOpen)}
                  >
                    <Search className="w-4 h-4" />
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" size="sm">
                    <Heart className="w-4 h-4" />
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" size="sm">
                    <User className="w-4 h-4" />
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="sm" className="ml-2">
                      <Phone className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </a>
                </motion.div>
              </div>

              <motion.button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </GlassmorphismContainer>
      </motion.nav>

      {/* Search Bar */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="fixed top-20 left-0 right-0 z-40 p-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <GlassmorphismContainer className="max-w-2xl mx-auto p-4">
              <Input
                placeholder="Cari paket umroh..."
                className="bg-white/20 backdrop-blur-sm border-white/30 text-white placeholder-white/70"
                autoFocus
              />
            </GlassmorphismContainer>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden fixed top-16 left-0 right-0 z-40"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <GlassmorphismContainer className="mx-4 md:mx-8">
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start ${
                        location === link.href
                          ? "bg-primary-foreground/10"
                          : ""
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Button>
                  </Link>
                ))}
                <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="secondary" size="sm" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </GlassmorphismContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
```

## CSS Animations and Utilities

### Enhanced CSS for Animations

```css
/* client/src/styles/animations.css */

/* Shimmer effect for skeleton loaders */
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}

/* Gradient animation for badges */
@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}

/* Pulse animation for notifications */
@keyframes pulse-ring {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
  }
}

.animate-pulse-ring {
  animation: pulse-ring 2s infinite;
}

/* Floating animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Enhanced hover effects */
.hover-lift {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

This enhanced component library provides the foundation for implementing all the visual and design improvements you've requested. Each component is built with performance, accessibility, and user experience in mind.