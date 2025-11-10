import { motion, MotionValue } from 'framer-motion';
import { ReactNode, useRef, useEffect, useState } from 'react';
import { useParallax } from '@/hooks/useParallax';

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  offset?: number;
}

export const ParallaxLayer = ({ 
  children, 
  speed = 0.5, 
  className = '',
  offset = 0
}: ParallaxLayerProps) => {
  const { offsetY } = useParallax(speed);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ 
        y: offsetY + offset,
        willChange: 'transform' as const
      }}
    >
      {children}
    </motion.div>
  );
};

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  offset?: number;
}

export const ParallaxImage = ({ 
  src, 
  alt, 
  speed = 0.5, 
  className = '',
  offset = 0
}: ParallaxImageProps) => {
  const { offsetY } = useParallax(speed);

  return (
    <div 
      className={`absolute inset-0 ${className}`}
      style={{ 
        transform: `translateY(${offsetY + offset}px)`,
        willChange: 'transform'
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

interface MultiLayerParallaxProps {
  layers: Array<{
    src: string;
    alt: string;
    speed: number;
    className?: string;
  }>;
  className?: string;
  height?: string;
}

export const MultiLayerParallax = ({ 
  layers, 
  className = '',
  height = 'h-[700px]'
}: MultiLayerParallaxProps) => {
  return (
    <div className={`relative overflow-hidden ${height} ${className}`}>
      {layers.map((layer, index) => (
        <ParallaxImage
          key={index}
          src={layer.src}
          alt={layer.alt}
          speed={layer.speed}
          className={layer.className}
        />
      ))}
    </div>
  );
};