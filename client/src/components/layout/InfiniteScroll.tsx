import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Loader2, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InfiniteScrollProps {
  children: React.ReactNode;
  hasMore?: boolean;
  isLoading?: boolean;
  isError?: boolean;
  onLoadMore?: () => void;
  loader?: React.ReactNode;
  endMessage?: string;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export const InfiniteScroll = ({ 
  children, 
  hasMore = true, 
  isLoading = false, 
  isError = false,
  onLoadMore,
  loader,
  endMessage = "Tidak ada lagi data untuk dimuat",
  className = '',
  threshold = 0.8,
  rootMargin = '0px'
}: InfiniteScrollProps) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setIsIntersecting(true);
      
      // Load more data when element is visible
      if (hasMore && !isLoading && !isError && onLoadMore) {
        onLoadMore();
      }
    } else {
      setIsIntersecting(false);
    }
  }, [hasMore, isLoading, isError, onLoadMore]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin,
      threshold,
    };

    observerRef.current = new IntersectionObserver(handleObserver, options);

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleObserver, rootMargin, threshold]);

  return (
    <div className={cn('w-full', className)}>
      {children}
      
      {/* Load More Trigger */}
      <AnimatePresence>
        {hasMore && (
          <motion.div
            ref={loadMoreRef}
            className="flex justify-center py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                <span className="text-sm text-muted-foreground">Memuat...</span>
              </div>
            ) : isError ? (
              <div className="flex flex-col items-center space-y-2">
                <p className="text-sm text-red-500">Terjadi kesalahan saat memuat data</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onLoadMore}
                  className="mt-2"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Coba Lagi
                </Button>
              </div>
            ) : (
              <Button
                variant="outline"
                onClick={onLoadMore}
                className="px-6"
              >
                Muat Lebih Banyak
              </Button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* End Message */}
      <AnimatePresence>
        {!hasMore && (
          <motion.div
            className="flex justify-center py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="text-sm text-muted-foreground">{endMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Pagination Component
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  maxVisiblePages?: number;
}

export const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  className = '',
  showFirstLast = true,
  showPrevNext = true,
  maxVisiblePages = 5
}: PaginationProps) => {
  const [visiblePages, setVisiblePages] = useState<number[]>([]);

  useEffect(() => {
    const calculateVisiblePages = () => {
      const pages: number[] = [];
      
      // Always include first and last page if showFirstLast is true
      if (showFirstLast && currentPage > 1) {
        pages.push(1);
      }
      
      // Calculate range of pages around current page
      const halfVisible = Math.floor(maxVisiblePages / 2);
      let startPage = Math.max(1, currentPage - halfVisible);
      let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      
      // Adjust if we're near the beginning or end
      if (endPage - startPage < maxVisiblePages - 1) {
        if (startPage === 1) {
          endPage = Math.min(totalPages, maxVisiblePages);
        } else {
          startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }
      }
      
      for (let i = startPage; i <= endPage; i++) {
        if (i > 1 && i < totalPages) {
          pages.push(i);
        }
      }
      
      // Always include last page if showFirstLast is true
      if (showFirstLast && currentPage < totalPages) {
        pages.push(totalPages);
      }
      
      // Remove duplicates
      return [...new Set(pages)].sort((a, b) => a - b);
    };

    setVisiblePages(calculateVisiblePages());
  }, [currentPage, totalPages, showFirstLast, maxVisiblePages]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <div className={cn('flex items-center justify-center space-x-1', className)}>
      {/* First Page Button */}
      {showFirstLast && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          className="hidden sm:flex"
        >
          Pertama
        </Button>
      )}
      
      {/* Previous Page Button */}
      {showPrevNext && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7 7" />
          </svg>
        </Button>
      )}
      
      {/* Page Numbers */}
      {visiblePages.map((page) => (
        <Button
          key={page}
          variant={page === currentPage ? "default" : "outline"}
          size="sm"
          onClick={() => handlePageChange(page)}
          className={cn(
            "w-10 h-10",
            page === currentPage && "bg-primary text-primary-foreground"
          )}
        >
          {page}
        </Button>
      ))}
      
      {/* Next Page Button */}
      {showPrevNext && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      )}
      
      {/* Last Page Button */}
      {showFirstLast && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="hidden sm:flex"
        >
          Terakhir
        </Button>
      )}
    </div>
  );
};

// Smooth Scroll Pagination
interface SmoothScrollPaginationProps extends PaginationProps {
  scrollToTop?: boolean;
}

export const SmoothScrollPagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  className = '',
  showFirstLast = true,
  showPrevNext = true,
  maxVisiblePages = 5,
  scrollToTop = true
}: SmoothScrollPaginationProps) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      // Scroll to top before changing page
      if (scrollToTop) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      
      // Small delay to ensure scroll starts before page change
      setTimeout(() => {
        onPageChange(page);
      }, 300);
    }
  };

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
      className={className}
      showFirstLast={showFirstLast}
      showPrevNext={showPrevNext}
      maxVisiblePages={maxVisiblePages}
    />
  );
};

// Load More Button Component
interface LoadMoreButtonProps {
  onClick: () => void;
  isLoading?: boolean;
  hasMore?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const LoadMoreButton = ({ 
  onClick, 
  isLoading = false, 
  hasMore = true,
  className = '',
  children = "Muat Lebih Banyak"
}: LoadMoreButtonProps) => {
  return (
    <AnimatePresence>
      {hasMore && (
        <motion.div
          className={cn("flex justify-center py-6", className)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Button
            variant="outline"
            onClick={onClick}
            disabled={isLoading}
            className="px-6"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                <span>Memuat...</span>
              </div>
            ) : (
              children
            )}
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};