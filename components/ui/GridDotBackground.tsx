import React from 'react';

export function GridBackground({
  children,
  className,
}: Readonly<{
  children: React.ReactNode,
  className?: string,
}>) {
  return (
    <div className={`w-full bg-black bg-grid-white/[0.03] relative flex items-start mt-10 justify-center ${className}`}>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      {children}
    </div>
  );
}
