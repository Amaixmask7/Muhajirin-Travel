import { Link } from 'wouter';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbNavigationProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const BreadcrumbNavigation = ({ 
  items, 
  className = '' 
}: BreadcrumbNavigationProps) => {
  return (
    <nav className={cn('flex items-center space-x-2 text-sm text-muted-foreground', className)} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="flex items-center space-x-1 hover:text-foreground transition-colors">
            <Home className="w-4 h-4" />
            <span className="sr-only">Beranda</span>
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href ? (
              <Link 
                href={item.href} 
                className={cn(
                  'flex items-center space-x-1 hover:text-foreground transition-colors',
                  item.active && 'text-foreground font-medium'
                )}
              >
                <span>{item.label}</span>
              </Link>
            ) : (
              <span className={cn(
                'flex items-center space-x-1',
                item.active && 'text-foreground font-medium'
              )}>
                <span>{item.label}</span>
              </span>
            )}
            
            {index < items.length - 1 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </motion.div>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};