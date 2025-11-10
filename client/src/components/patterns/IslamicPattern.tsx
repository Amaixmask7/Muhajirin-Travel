import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface IslamicPatternProps {
  variant: 'geometric-1' | 'geometric-2' | 'geometric-3' | 'calligraphy' | 'arabic-text';
  className?: string;
  opacity?: number;
  color?: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
}

export const IslamicPattern = ({ 
  variant, 
  className = '', 
  opacity = 0.1,
  color = 'currentColor',
  size = 'full'
}: IslamicPatternProps) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    full: 'w-full h-full'
  };

  const patterns = {
    'geometric-1': (
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
          <pattern id="geom-pattern-1" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M25,10 L45,25 L25,40 L5,25 Z" fill="none" stroke={color} strokeWidth="0.5"/>
            <circle cx="25" cy="25" r="15" fill="none" stroke={color} strokeWidth="0.3"/>
            <path d="M25,15 L35,25 L25,35 L15,25 Z" fill="none" stroke={color} strokeWidth="0.2"/>
            <circle cx="25" cy="25" r="8" fill="none" stroke={color} strokeWidth="0.2"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#geom-pattern-1)" />
      </svg>
    ),
    'geometric-2': (
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
        <defs>
          <pattern id="geom-pattern-2" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <polygon points="20,8 35,20 35,30 20,40 5,30 5,20" fill="none" stroke={color} strokeWidth="0.5"/>
            <circle cx="20" cy="20" r="12" fill="none" stroke={color} strokeWidth="0.3"/>
            <polygon points="20,12 30,20 20,28 10,20" fill="none" stroke={color} strokeWidth="0.2"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#geom-pattern-2)" />
      </svg>
    ),
    'geometric-3': (
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
        <defs>
          <pattern id="geom-pattern-3" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M15,5 L25,15 L15,25 L5,15 Z" fill="none" stroke={color} strokeWidth="0.5"/>
            <path d="M15,8 L22,15 L15,22 L8,15 Z" fill="none" stroke={color} strokeWidth="0.3"/>
            <circle cx="15" cy="15" r="10" fill="none" stroke={color} strokeWidth="0.3"/>
            <path d="M15,10 L20,15 L15,20 L10,15 Z" fill="none" stroke={color} strokeWidth="0.2"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#geom-pattern-3)" />
      </svg>
    ),
    'calligraphy': (
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
        <text 
          x="50%" 
          y="50%" 
          textAnchor="middle" 
          dominantBaseline="middle" 
          fontSize="24" 
          fill={color}
          opacity="0.3"
          fontFamily="Arial, sans-serif"
        >
          بسم الله الرحمن الرحيم
        </text>
      </svg>
    ),
    'arabic-text': (
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
        <text 
          x="50%" 
          y="50%" 
          textAnchor="middle" 
          dominantBaseline="middle" 
          fontSize="18" 
          fill={color}
          opacity="0.2"
          fontFamily="Arial, sans-serif"
        >
          الحمد لله رب العالمين
        </text>
      </svg>
    )
  };

  return (
    <div 
      className={cn(
        'absolute inset-0 pointer-events-none',
        sizeClasses[size],
        className
      )} 
      style={{ opacity }}
    >
      {patterns[variant]}
    </div>
  );
};

interface PatternOverlayProps {
  variant: IslamicPatternProps['variant'];
  className?: string;
  opacity?: number;
  children?: ReactNode;
}

export const PatternOverlay = ({
  variant,
  className = '',
  opacity = 0.1,
  color = 'currentColor',
  children
}: PatternOverlayProps) => {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      {children}
      <IslamicPattern
        variant={variant}
        opacity={opacity}
        color={color}
        className="absolute inset-0"
      />
    </div>
  );
};

interface SectionDividerProps {
  variant?: 'geometric-1' | 'geometric-2' | 'geometric-3';
  className?: string;
}

export const SectionDivider = ({ 
  variant = 'geometric-1', 
  className = '' 
}: SectionDividerProps) => {
  return (
    <div className={cn('relative py-8', className)}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto px-4">
          <IslamicPattern 
            variant={variant} 
            opacity={0.15}
            color="hsl(var(--primary))"
            size="md"
            className="mx-auto"
          />
        </div>
      </div>
      <div className="relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      </div>
    </div>
  );
};