import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassmorphismContainerProps {
  children: ReactNode;
  className?: string;
  variant?: 'light' | 'dark' | 'colored' | 'primary' | 'secondary';
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  border?: boolean;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const GlassmorphismContainer = ({ 
  children, 
  className = '',
  variant = 'light',
  blur = 'md',
  border = true,
  rounded = 'lg'
}: GlassmorphismContainerProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'light':
        return 'bg-white/10 backdrop-blur-md border-white/20 text-white';
      case 'dark':
        return 'bg-black/10 backdrop-blur-md border-black/20 text-white';
      case 'colored':
        return 'bg-primary/10 backdrop-blur-md border-primary/20 text-primary-foreground';
      case 'primary':
        return 'bg-primary/20 backdrop-blur-md border-primary/30 text-primary-foreground';
      case 'secondary':
        return 'bg-secondary/20 backdrop-blur-md border-secondary/30 text-secondary-foreground';
      default:
        return 'bg-white/10 backdrop-blur-md border-white/20 text-white';
    }
  };

  const getBlurClass = () => {
    switch (blur) {
      case 'sm': return 'backdrop-blur-sm';
      case 'md': return 'backdrop-blur-md';
      case 'lg': return 'backdrop-blur-lg';
      case 'xl': return 'backdrop-blur-xl';
      default: return 'backdrop-blur-md';
    }
  };

  const getRoundedClass = () => {
    switch (rounded) {
      case 'none': return '';
      case 'sm': return 'rounded-sm';
      case 'md': return 'rounded-md';
      case 'lg': return 'rounded-lg';
      case 'xl': return 'rounded-xl';
      case 'full': return 'rounded-full';
      default: return 'rounded-lg';
    }
  };

  return (
    <div 
      className={cn(
        'relative',
        getVariantClasses(),
        getBlurClass(),
        getRoundedClass(),
        border && 'border',
        'shadow-xl',
        className
      )}
    >
      {children}
    </div>
  );
};

// Glassmorphism card component
interface GlassmorphismCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'light' | 'dark' | 'colored' | 'primary' | 'secondary';
  hover?: boolean;
}

export const GlassmorphismCard = ({ 
  children, 
  className = '',
  variant = 'light',
  hover = true
}: GlassmorphismCardProps) => {
  return (
    <GlassmorphismContainer 
      variant={variant}
      className={cn(
        'p-6',
        hover && 'hover:scale-105 hover:shadow-2xl transition-all duration-300',
        className
      )}
    >
      {children}
    </GlassmorphismContainer>
  );
};

// Glassmorphism button component
interface GlassmorphismButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'light' | 'dark' | 'colored' | 'primary' | 'secondary';
  onClick?: () => void;
}

export const GlassmorphismButton = ({ 
  children, 
  className = '',
  variant = 'primary',
  onClick
}: GlassmorphismButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-6 py-3 font-medium transition-all duration-300',
        'hover:scale-105 active:scale-95',
        variant === 'primary' && 'bg-primary/30 backdrop-blur-md border-primary/40 text-primary-foreground hover:bg-primary/40',
        variant === 'secondary' && 'bg-secondary/30 backdrop-blur-md border-secondary/40 text-secondary-foreground hover:bg-secondary/40',
        variant === 'light' && 'bg-white/20 backdrop-blur-md border-white/30 text-foreground hover:bg-white/30',
        variant === 'dark' && 'bg-black/20 backdrop-blur-md border-black/30 text-white hover:bg-black/30',
        variant === 'colored' && 'bg-primary/20 backdrop-blur-md border-primary/30 text-primary-foreground hover:bg-primary/30',
        'rounded-lg shadow-lg',
        className
      )}
    >
      {children}
    </button>
  );
};

// Glassmorphism navbar component
export const GlassmorphismNavbar = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  return (
    <GlassmorphismContainer 
      variant="dark"
      className={cn(
        'sticky top-0 z-50 px-4 py-3',
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {children}
      </div>
    </GlassmorphismContainer>
  );
};

// Glassmorphism sidebar component
export const GlassmorphismSidebar = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  return (
    <GlassmorphismContainer 
      variant="light"
      className={cn(
        'sticky top-20 h-fit w-64 p-4',
        className
      )}
    >
      {children}
    </GlassmorphismContainer>
  );
};