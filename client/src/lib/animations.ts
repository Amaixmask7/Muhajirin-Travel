import { Variants, Transition, MotionProps } from 'framer-motion';

export const animationVariants: Variants = {
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
  slideLeft: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  },
  slideRight: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  },
  scaleOut: {
    initial: { opacity: 0, scale: 1.1 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 }
  }
};

export const transitionPresets: Record<string, Transition> = {
  smooth: { duration: 0.6, ease: "easeOut" },
  bouncy: { type: "spring", stiffness: 300, damping: 20 },
  fast: { duration: 0.3, ease: "easeInOut" },
  slow: { duration: 1.0, ease: "easeInOut" },
  elastic: { type: "spring", stiffness: 200, damping: 15, mass: 1 },
  dramatic: { duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }
};

export const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Hover animation presets
export const hoverPresets = {
  lift: {
    whileHover: { y: -8, scale: 1.02 },
    transition: { type: "spring", stiffness: 400, damping: 17 }
  },
  scale: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 400, damping: 17 }
  },
  glow: {
    whileHover: { 
      scale: 1.02,
      boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
    },
    transition: { duration: 0.3 }
  },
  rotate: {
    whileHover: { rotate: 5 },
    whileTap: { rotate: -5 },
    transition: { type: "spring", stiffness: 300, damping: 20 }
  },
  bounce: {
    whileHover: { y: -5 },
    whileTap: { y: 0 },
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }
};

// Loading animation variants
export const loadingVariants = {
  pulse: {
    animate: {
      opacity: [0.4, 1, 0.4],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  shimmer: {
    animate: {
      x: ["-100%", "100%"]
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear"
    }
  },
  spin: {
    animate: {
      rotate: 360
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear"
    }
  },
  bounce: {
    animate: {
      y: [0, -10, 0]
    },
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Page transition variants
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4, ease: "easeInOut" }
};

// Modal animation variants
export const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    scale: 0.8,
    transition: { duration: 0.2, ease: "easeIn" }
  }
};

// Drawer/Slide panel variants
export const drawerVariants = {
  hidden: { x: "100%" },
  visible: { 
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 }
  },
  exit: { 
    x: "100%",
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};