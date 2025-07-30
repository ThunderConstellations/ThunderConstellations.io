// Cache busting script - forces browser to reload fresh content
(function() {
  'use strict';
  
  // Force cache refresh
  if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD) {
    window.location.reload(true);
  }
  
  // Add timestamp to all asset URLs
  const timestamp = Date.now();
  const links = document.querySelectorAll('link[rel="stylesheet"], script[src]');
  
  links.forEach(link => {
    if (link.href && !link.href.includes('?v=')) {
      link.href = link.href + (link.href.includes('?') ? '&' : '?') + 'v=' + timestamp;
    }
  });
  
  // Force reload if old cached files are detected
  const scripts = document.querySelectorAll('script[src*="index-CQilrS1Q.js"]');
  if (scripts.length > 0) {
    console.log('Detected old cached files, forcing reload...');
    window.location.reload(true);
  }
})(); 