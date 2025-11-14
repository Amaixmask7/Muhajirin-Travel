import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  rightSlot?: React.ReactNode;
  className?: string;
}

export default function PageHeader({ title, subtitle, rightSlot, className }: PageHeaderProps) {
  return (
    <div className={`bg-primary text-primary-foreground py-16 mt-12 ${className ?? ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {rightSlot ? (
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
              {subtitle && (
                <p className="text-lg opacity-90">{subtitle}</p>
              )}
            </div>
            {rightSlot}
          </div>
        ) : (
          <>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
            {subtitle && (
              <p className="text-lg opacity-90">{subtitle}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}