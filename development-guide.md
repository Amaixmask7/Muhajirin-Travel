# Development Guide for MuhajirinTravel Enhancements

## Getting Started

### Prerequisites
- Node.js 18+ installed
- PostgreSQL database set up
- Git for version control
- VS Code or preferred code editor
- Chrome DevTools for debugging

### Initial Setup

1. **Clone and Install Dependencies**
```bash
git clone <repository-url>
cd muhajirin-travel
npm install
```

2. **Environment Configuration**
```bash
cp .env.example .env
# Configure your environment variables
```

3. **Database Setup**
```bash
npm run db:push
npm run db:seed  # Optional: seed with sample data
```

4. **Start Development Server**
```bash
npm run dev
```

## Phase 1: Visual and Design Improvements

### 1.1 Parallax Scrolling Implementation

**Step 1: Install Additional Dependencies**
```bash
npm install react-intersection-observer
```

**Step 2: Create Animation Utilities**
```typescript
// client/src/hooks/useParallax.ts
import { useState, useEffect } from 'react';

export const useParallax = (speed: number = 0.5) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * speed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { offsetY };
};
```

**Step 3: Update Hero Component**
Replace the existing Hero component with the enhanced version from `component-library-structure.md`.

### 1.2 Islamic Geometric Patterns

**Step 1: Create Pattern Components**
```typescript
// client/src/components/patterns/IslamicPattern.tsx
interface IslamicPatternProps {
  variant: 'geometric-1' | 'geometric-2' | 'calligraphy';
  className?: string;
  opacity?: number;
}

export const IslamicPattern = ({ variant, className = '', opacity = 0.1 }: IslamicPatternProps) => {
  const patterns = {
    'geometric-1': (
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="geom-pattern-1" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M50,10 L90,50 L50,90 L10,50 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1"/>
            <path d="M50,20 L80,50 L50,80 L20,50 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#geom-pattern-1)" />
      </svg>
    ),
    'geometric-2': (
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="geom-pattern-2" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <polygon points="40,10 70,30 70,50 40,70 10,50 10,30" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="40" cy="40" r="25" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#geom-pattern-2)" />
      </svg>
    ),
    'calligraphy': (
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" 
              fontSize="24" fill="currentColor" opacity="0.3">
          بسم الله الرحمن الرحيم
        </text>
      </svg>
    )
  };

  return (
    <div className={`absolute inset-0 ${className}`} style={{ opacity }}>
      {patterns[variant]}
    </div>
  );
};
```

### 1.3 Micro-animations Setup

**Step 1: Create Animation Configuration**
```typescript
// client/src/lib/animations.ts
export const animationVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  slideUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 }
  },
  slideDown: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  }
};

export const transitionPresets = {
  smooth: { duration: 0.6, ease: "easeOut" },
  bouncy: { type: "spring", stiffness: 300, damping: 20 },
  fast: { duration: 0.3, ease: "easeInOut" }
};
```

### 1.4 Skeleton Loading Implementation

**Step 1: Create Skeleton Components**
```typescript
// client/src/components/animations/SkeletonLoader.tsx
import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
}

export const Skeleton = ({ 
  className, 
  variant = 'text', 
  width, 
  height 
}: SkeletonProps) => {
  const variantClasses = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-md'
  };

  return (
    <div
      className={cn(
        'animate-pulse bg-muted',
        variantClasses[variant],
        className
      )}
      style={{ width, height }}
    />
  );
};
```

### 1.5 Enhanced CSS Animations

**Step 1: Update CSS File**
Add the following to `client/src/styles/animations.css`:

```css
/* Enhanced hover effects */
.hover-elevate {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-elevate:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Glassmorphism base class */
.glassmorphism {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Color transitions for status badges */
.status-badge {
  transition: all 0.3s ease;
}

.status-badge:hover {
  transform: scale(1.05);
  filter: brightness(1.1);
}
```

## Phase 2: Layout and Structure Enhancements

### 2.1 Masonry Layout Implementation

**Step 1: Install Masonry Library**
```bash
npm install masonry-layout
```

**Step 2: Create Masonry Component**
```typescript
// client/src/components/layout/MasonryGrid.tsx
import { useEffect, useRef } from 'react';
import Masonry from 'masonry-layout';

interface MasonryGridProps {
  children: React.ReactNode;
  className?: string;
}

export const MasonryGrid = ({ children, className = '' }: MasonryGridProps) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      const masonry = new Masonry(gridRef.current, {
        itemSelector: '.masonry-item',
        columnWidth: '.masonry-sizer',
        percentPosition: true,
        gutter: 20
      });

      return () => {
        masonry.destroy();
      };
    }
  }, [children]);

  return (
    <div ref={gridRef} className={className}>
      <div className="masonry-sizer"></div>
      {children}
    </div>
  );
};
```

### 2.2 Breadcrumb Navigation

**Step 1: Create Breadcrumb Component**
```typescript
// client/src/components/layout/BreadcrumbNavigation.tsx
import { Link } from 'wouter';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavigationProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const BreadcrumbNavigation = ({ items, className }: BreadcrumbNavigationProps) => {
  return (
    <nav className={cn('flex items-center space-x-2 text-sm text-muted-foreground', className)}>
      <Link href="/" className="hover:text-foreground transition-colors">
        <Home className="w-4 h-4" />
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4" />
          {item.href ? (
            <Link href={item.href} className="hover:text-foreground transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};
```

### 2.3 Floating WhatsApp Button

**Step 1: Create Floating WhatsApp Component**
```typescript
// client/src/components/layout/FloatingWhatsApp.tsx
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp = () => {
  const phoneNumber = "628123456789"; // Replace with actual number

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 hover:bg-green-600 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  );
};
```

## Phase 3: Interactive Features

### 3.1 Search with Autocomplete

**Step 1: Create Search Component**
```typescript
// client/src/components/interactive/SearchWithAutocomplete.tsx
import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchSuggestion {
  id: string;
  title: string;
  type: 'package' | 'destination' | 'hotel';
}

export const SearchWithAutocomplete = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mock search function - replace with actual API call
  const searchPackages = async (searchQuery: string) => {
    // Simulate API call
    const mockResults: SearchSuggestion[] = [
      { id: '1', title: 'Paket Umroh Ramadhan Premium', type: 'package' },
      { id: '2', title: 'Makkah - Madinah', type: 'destination' },
      { id: '3', title: 'Hilton Suites Makkah', type: 'hotel' },
    ].filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return mockResults;
  };

  useEffect(() => {
    if (query.length > 2) {
      const debounceTimer = setTimeout(async () => {
        const results = await searchPackages(query);
        setSuggestions(results);
        setIsOpen(true);
      }, 300);

      return () => clearTimeout(debounceTimer);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setQuery(suggestion.title);
    setIsOpen(false);
    // Navigate to appropriate page based on type
  };

  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          ref={inputRef}
          type="text"
          placeholder="Cari paket umroh, destinasi, atau hotel..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="pl-10 pr-10"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-1 top-1/2 transform -translate-y-1/2"
            onClick={() => setQuery('')}
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto"
          >
            {suggestions.map((suggestion) => (
              <motion.button
                key={suggestion.id}
                className="w-full text-left px-4 py-3 hover:bg-muted transition-colors flex items-center justify-between group"
                onClick={() => handleSuggestionClick(suggestion)}
                whileHover={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
              >
                <div>
                  <div className="font-medium">{suggestion.title}</div>
                  <div className="text-sm text-muted-foreground capitalize">{suggestion.type}</div>
                </div>
                <div className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  Klik untuk detail
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
```

## Testing Strategy

### Unit Testing
```bash
# Run unit tests
npm run test

# Run with coverage
npm run test:coverage
```

### Integration Testing
```bash
# Run integration tests
npm run test:integration
```

### E2E Testing
```bash
# Run E2E tests
npm run test:e2e
```

## Performance Optimization

### 1. Code Splitting
```typescript
// Implement lazy loading for heavy components
const EnhancedPackageDetail = lazy(() => import('@/components/enhanced/EnhancedPackageDetail'));
const VirtualTour = lazy(() => import('@/components/interactive/VirtualTour'));
```

### 2. Image Optimization
```typescript
// Implement lazy loading for images
const LazyImage = ({ src, alt, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const img = imgRef.current;
          img.src = src;
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src]);

  return (
    <img
      ref={imgRef}
      alt={alt}
      onLoad={() => setIsLoaded(true)}
      className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      {...props}
    />
  );
};
```

### 3. Bundle Optimization
```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-select'],
          animations: ['framer-motion'],
        },
      },
    },
  },
});
```

## Deployment

### Development Deployment
```bash
# Build for development
npm run build:dev

# Deploy to staging
npm run deploy:staging
```

### Production Deployment
```bash
# Build for production
npm run build

# Deploy to production
npm run deploy:prod
```

## Monitoring and Analytics

### 1. Performance Monitoring
```typescript
// Implement performance monitoring
const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};
```

### 2. Error Tracking
```typescript
// Implement error boundary
class ErrorBoundary extends Component {
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Send to error tracking service
  }
}
```

## Best Practices

### 1. Code Organization
- Keep components small and focused
- Use TypeScript for type safety
- Follow consistent naming conventions
- Implement proper error handling

### 2. Performance
- Use React.memo for expensive components
- Implement proper loading states
- Optimize images and assets
- Use code splitting for large bundles

### 3. Accessibility
- Implement proper ARIA labels
- Ensure keyboard navigation
- Test with screen readers
- Respect prefers-reduced-motion

### 4. Security
- Validate all inputs
- Sanitize user content
- Implement proper authentication
- Use HTTPS for all requests

This development guide provides a comprehensive roadmap for implementing all the enhancements while maintaining code quality, performance, and best practices.