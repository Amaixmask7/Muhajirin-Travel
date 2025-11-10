import { useInView } from 'react-intersection-observer';
import { useRef, RefObject } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
  delay?: number;
}

interface ScrollRevealResult {
  ref: RefObject<HTMLElement>;
  inView: boolean;
  entry?: IntersectionObserverEntry;
}

export const useScrollReveal = (options: ScrollRevealOptions = {}): ScrollRevealResult => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = '-100px',
    delay = 0
  } = options;

  const ref = useRef<HTMLElement>(null);
  
  const { inView, entry } = useInView({
    threshold,
    triggerOnce,
    rootMargin,
    delay
  });

  return {
    ref,
    inView,
    entry
  };
};

export const useScrollRevealSequence = (count: number, options: ScrollRevealOptions = {}) => {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const { inView, entry } = useInView({
    threshold: options.threshold || 0.1,
    triggerOnce: options.triggerOnce !== false,
    rootMargin: options.rootMargin || '-100px',
    delay: options.delay || 0
  });

  // Create refs for each item in sequence
  const setRefs = (index: number) => (el: HTMLElement | null) => {
    refs.current[index] = el;
  };

  return {
    refs: refs.current,
    setRefs,
    inView,
    entry
  };
};