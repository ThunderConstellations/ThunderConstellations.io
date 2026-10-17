import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import BackgroundLayers from '../components/graphics/BackgroundLayers';
import { Home, FileText, ArrowLeft, Compass } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("404 Error: Non-existent route requested:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="cosmic-bg min-h-screen flex items-center justify-center relative px-4">
      <BackgroundLayers variant="minimal" />
      <div className="glass-morphism rounded-2xl p-8 sm:p-12 text-center max-w-lg w-full relative z-10 border border-cosmic-gold/20 shadow-2xl">
        <div className="w-16 h-16 bg-cosmic-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-cosmic-gold">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>
        <h1 className="text-6xl font-extrabold mb-2 text-cosmic-gold tracking-tight">404</h1>
        <h2 className="text-2xl font-bold text-cosmic-starlight mb-4">Lost in the Constellations</h2>
        <p className="text-cosmic-starlight/70 text-sm mb-8 leading-relaxed">
          The coordinate <code className="px-2 py-1 bg-black/40 rounded text-cosmic-gold text-xs">{location.pathname}</code> does not exist in this sector. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="lightning-btn px-6 py-3 rounded-lg flex items-center justify-center gap-2 text-sm font-medium"
          >
            <Home className="w-4 h-4" />
            Return Home
          </Link>
          <Link
            to="/resume"
            className="px-6 py-3 border border-cosmic-gold/30 rounded-lg text-cosmic-gold hover:bg-cosmic-gold/10 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
          >
            <FileText className="w-4 h-4" />
            View Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
