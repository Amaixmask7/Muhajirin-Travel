import React, { ReactNode, useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MasonryGridProps {
  children: ReactNode;
  className?: string;
  columnCount?: number;
  gap?: string;
  minColumnWidth?: number;
}

export const MasonryGrid = ({ 
  children, 
  className = '',
  columnCount = 3,
  gap = 'gap-6',
  minColumnWidth = 300
}: MasonryGridProps) => {
  const [columns, setColumns] = useState(columnCount);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateColumns = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setContainerWidth(width);
        
        // Calculate optimal number of columns based on container width
        const optimalColumns = Math.max(1, Math.floor(width / minColumnWidth));
        setColumns(Math.min(optimalColumns, columnCount));
      }
    };

    updateColumns();
    
    const resizeObserver = new ResizeObserver(updateColumns);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
      resizeObserver.disconnect();
    };
  }, [columnCount, minColumnWidth]);

  // Distribute children into columns
  const distributeChildren = () => {
    const childArray = React.Children.toArray(children);
    const columnHeights = new Array(columns).fill(0);
    const columnElements: ReactNode[][] = Array.from({ length: columns }, () => []);

    childArray.forEach((child, index) => {
      // Find the column with the minimum height
      const minHeightColumn = columnHeights.indexOf(Math.min(...columnHeights));
      columnElements[minHeightColumn].push(child);
      columnHeights[minHeightColumn] += (child as any).props.height || 300; // Default height if not provided
    });

    return columnElements;
  };

  const columnElements = distributeChildren();

  return (
    <div 
      ref={containerRef}
      className={cn('grid w-full', gap, className)}
      style={{ 
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: gap.replace('gap-', ' ')
      }}
    >
      {columnElements.map((column, columnIndex) => (
        <motion.div
          key={columnIndex}
          className="flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: columnIndex * 0.1,
            ease: "easeOut"
          }}
        >
          {column.map((child, childIndex) => (
            <motion.div
              key={childIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: childIndex * 0.05,
                ease: "easeOut"
              }}
              className="mb-6"
            >
              {child}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

// Enhanced Masonry Grid with loading states
interface EnhancedMasonryGridProps extends MasonryGridProps {
  isLoading?: boolean;
  loadingComponent?: ReactNode;
  emptyComponent?: ReactNode;
  items?: any[];
  renderItem?: (item: any, index: number) => ReactNode;
}

export const EnhancedMasonryGrid = ({ 
  children,
  className = '',
  columnCount = 3,
  gap = 'gap-6',
  minColumnWidth = 300,
  isLoading = false,
  loadingComponent,
  emptyComponent,
  items = [],
  renderItem
}: EnhancedMasonryGridProps) => {
  if (isLoading) {
    return (
      <div className={cn('w-full', gap, className)}>
        {loadingComponent || (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-muted rounded-lg h-64 animate-pulse" />
            ))}
          </div>
        )}
      </div>
    );
  }

  if (items.length === 0 && emptyComponent) {
    return (
      <div className={cn('w-full flex items-center justify-center py-12', className)}>
        {emptyComponent}
      </div>
    );
  }

  return (
    <MasonryGrid 
      columnCount={columnCount}
      gap={gap}
      minColumnWidth={minColumnWidth}
      className={className}
    >
      {items.map((item, index) => (
        <div key={item.id || index} className="h-full">
          {renderItem ? renderItem(item, index) : children}
        </div>
      ))}
    </MasonryGrid>
  );
};

// Responsive Masonry Grid that adjusts columns based on screen size
interface ResponsiveMasonryGridProps extends MasonryGridProps {
  breakpoints?: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}

export const ResponsiveMasonryGrid = ({ 
  children, 
  className = '',
  columnCount = 3,
  gap = 'gap-6',
  minColumnWidth = 300,
  breakpoints = {
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4
  }
}: ResponsiveMasonryGridProps) => {
  const [columns, setColumns] = useState(columnCount);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateColumns = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setContainerWidth(width);
        
        // Determine columns based on breakpoints
        let newColumns = columnCount;
        if (width >= 1280 && breakpoints.xl) newColumns = breakpoints.xl;
        else if (width >= 1024 && breakpoints.lg) newColumns = breakpoints.lg;
        else if (width >= 768 && breakpoints.md) newColumns = breakpoints.md;
        else if (width >= 640 && breakpoints.sm) newColumns = breakpoints.sm;
        
        setColumns(newColumns);
      }
    };

    updateColumns();
    
    const resizeObserver = new ResizeObserver(updateColumns);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
      resizeObserver.disconnect();
    };
  }, [columnCount, breakpoints]);

  // Distribute children into columns
  const distributeChildren = () => {
    const childArray = React.Children.toArray(children);
    const columnHeights = new Array(columns).fill(0);
    const columnElements: ReactNode[][] = Array.from({ length: columns }, () => []);

    childArray.forEach((child, index) => {
      // Find the column with the minimum height
      const minHeightColumn = columnHeights.indexOf(Math.min(...columnHeights));
      columnElements[minHeightColumn].push(child);
      columnHeights[minHeightColumn] += (child as any).props.height || 300; // Default height if not provided
    });

    return columnElements;
  };

  const columnElements = distributeChildren();

  return (
    <div 
      ref={containerRef}
      className={cn('grid w-full', gap, className)}
      style={{ 
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: gap.replace('gap-', ' ')
      }}
    >
      {columnElements.map((column, columnIndex) => (
        <motion.div
          key={columnIndex}
          className="flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: columnIndex * 0.1,
            ease: "easeOut"
          }}
        >
          {column.map((child, childIndex) => (
            <motion.div
              key={childIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: childIndex * 0.05,
                ease: "easeOut"
              }}
              className="mb-6"
            >
              {child}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};