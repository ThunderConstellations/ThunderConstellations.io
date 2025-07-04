
import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

interface LazyLoadProps {
  children: ReactNode;
  height?: string;
  placeholder?: ReactNode;
  threshold?: number;
  className?: string;
}

export const LazyLoad: React.FC<LazyLoadProps> = ({
  children,
  height = '200px',
  placeholder,
  threshold = 0.1,
  className = ''
}) => {
  const [isInView, setIsInView] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsInView(true);
          setHasLoaded(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, hasLoaded]);

  const defaultPlaceholder = (
    <div 
      className="flex items-center justify-center bg-cosmic-dark/40 rounded-lg border border-cosmic-gold/20"
      style={{ height }}
    >
      <Loader2 className="w-8 h-8 text-cosmic-gold animate-spin" />
    </div>
  );

  return (
    <div ref={ref} className={className} style={{ minHeight: height }}>
      {isInView ? children : (placeholder || defaultPlaceholder)}
    </div>
  );
};

// Higher-order component for lazy loading images
interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
  loadingClassName?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  fallback = '/placeholder.svg',
  loadingClassName = '',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {isInView && (
        <img
          src={hasError ? fallback : src}
          alt={alt}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setHasError(true);
            setIsLoaded(true);
          }}
          {...props}
        />
      )}
      {!isLoaded && isInView && (
        <div className={`absolute inset-0 flex items-center justify-center bg-cosmic-dark/40 ${loadingClassName}`}>
          <Loader2 className="w-6 h-6 text-cosmic-gold animate-spin" />
        </div>
      )}
    </div>
  );
};
