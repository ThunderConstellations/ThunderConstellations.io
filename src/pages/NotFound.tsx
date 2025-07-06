
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import BackgroundLayers from '../components/graphics/BackgroundLayers';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="cosmic-bg min-h-screen flex items-center justify-center relative">
      <BackgroundLayers variant="minimal" />
      <div className="text-center relative z-10">
        <h1 className="text-4xl font-bold mb-4 text-cosmic-gold">404</h1>
        <p className="text-xl text-cosmic-starlight/80 mb-4">Oops! Page not found</p>
        <a href="/" className="text-cosmic-gold hover:text-cosmic-starlight underline transition-colors">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
