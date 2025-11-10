import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  lines?: number;
}

export const Skeleton = ({ 
  className, 
  variant = 'text', 
  width, 
  height,
  lines = 1
}: SkeletonProps) => {
  const variantClasses = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-md'
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={cn('space-y-2', className)}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={cn(
              'animate-pulse bg-muted',
              variantClasses[variant]
            )}
            style={{
              width: index === lines - 1 ? `${Math.random() * 40 + 60}%` : width,
              height: height || '1rem'
            }}
          />
        ))}
      </div>
    );
  }

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

export const SkeletonCard = () => (
  <Card className="overflow-hidden">
    <div className="relative h-48 bg-muted">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
    </div>
    <CardHeader>
      <div className="space-y-2">
        <Skeleton height="1.5rem" width="80%" />
        <Skeleton height="1rem" width="60%" />
      </div>
    </CardHeader>
    <CardContent className="space-y-3">
      <Skeleton height="1rem" width="100%" />
      <Skeleton height="1rem" width="90%" />
      <Skeleton height="1rem" width="70%" />
      <div className="pt-4 border-t border-border">
        <Skeleton height="1rem" width="50%" />
        <Skeleton height="2rem" width="40%" />
        <Skeleton height="0.75rem" width="30%" />
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

export const SkeletonTestimonial = () => (
  <div className="bg-card p-6 rounded-lg shadow-lg">
    <div className="flex items-center space-x-4 mb-4">
      <Skeleton variant="circular" width={60} height={60} />
      <div className="flex-1 space-y-2">
        <Skeleton height="1.25rem" width="40%" />
        <Skeleton height="1rem" width="60%" />
      </div>
    </div>
    <div className="space-y-2">
      <Skeleton lines={3} />
    </div>
  </div>
);

export const SkeletonGallery = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {Array.from({ length: 8 }).map((_, index) => (
      <div key={index} className="relative aspect-square bg-muted rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      </div>
    ))}
  </div>
);

export const SkeletonStats = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {Array.from({ length: 4 }).map((_, index) => (
      <div key={index} className="text-center space-y-2">
        <Skeleton variant="circular" width={48} height={48} className="mx-auto" />
        <Skeleton height="1.5rem" width="60%" className="mx-auto" />
        <Skeleton height="1rem" width="40%" className="mx-auto" />
      </div>
    ))}
  </div>
);

// Loading overlay component
export const LoadingOverlay = ({ 
  isLoading, 
  children, 
  message = 'Loading...' 
}: { 
  isLoading: boolean; 
  children: React.ReactNode; 
  message?: string; 
}) => {
  return (
    <div className="relative">
      {children}
      {isLoading && (
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-muted-foreground animate-pulse">{message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Pulse loading indicator
export const PulseLoader = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className={cn('bg-primary rounded-full animate-pulse', sizeClasses[size])} />
  );
};

// Shimmer effect for text
export const ShimmerText = ({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) => {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
      <span className="relative z-10">{children}</span>
    </div>
  );
};