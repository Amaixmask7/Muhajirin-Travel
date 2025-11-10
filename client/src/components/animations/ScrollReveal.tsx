import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { animationVariants, transitionPresets } from '@/lib/animations';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export const ScrollReveal = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up',
  duration = 0.6,
  threshold = 0.1,
  triggerOnce = true,
  rootMargin = '-100px'
}: ScrollRevealProps) => {
  const { ref, inView } = useScrollReveal({
    threshold,
    triggerOnce,
    rootMargin,
    delay
  });

  const getVariant = () => {
    switch (direction) {
      case 'up':
        return animationVariants.slideUp;
      case 'down':
        return animationVariants.slideDown;
      case 'left':
        return animationVariants.slideLeft;
      case 'right':
        return animationVariants.slideRight;
      default:
        return animationVariants.slideUp;
    }
  };

  return (
    <motion.div
      ref={ref as any}
      className={className}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={getVariant() as any}
      transition={{
        ...transitionPresets.smooth,
        duration,
        delay
      }}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  childDelay?: number;
}

export const StaggerContainer = ({ 
  children, 
  className = '',
  staggerDelay = 0.1,
  childDelay = 0.2
}: StaggerContainerProps) => {
  const { ref, inView } = useScrollReveal({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref as any}
      className={className}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={{
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: childDelay
          }
        }
      } as any}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  duration?: number;
}

export const StaggerItem = ({ 
  children, 
  className = '',
  duration = 0.5
}: StaggerItemProps) => {
  return (
    <motion.div
      className={className}
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            ease: "easeOut"
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const FadeIn = ({ 
  children, 
  className = '', 
  delay = 0,
  duration = 0.6,
  direction = 'up'
}: FadeInProps) => {
  const { ref, inView } = useScrollReveal({
    threshold: 0.1,
    triggerOnce: true
  });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 30 };
      case 'down':
        return { opacity: 0, y: -30 };
      case 'left':
        return { opacity: 0, x: 30 };
      case 'right':
        return { opacity: 0, x: -30 };
      default:
        return { opacity: 0, y: 30 };
    }
  };

  return (
    <motion.div
      ref={ref as any}
      className={className}
      initial={getInitialPosition()}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : getInitialPosition()}
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