// Nuclear cache busting script - forces browser to reload fresh content
(function() {
  'use strict';
  
  console.log('🚨 CACHE BUSTER ACTIVATED - Checking for old cached files...');
  
  // Force cache refresh on back/forward navigation
  if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD) {
    console.log('🔄 Back/forward navigation detected, forcing reload...');
    window.location.reload(true);
    return;
  }
  
  // Check for old cached files and force reload
  const oldFilePatterns = [
    'index-CQilrS1Q.js',
    'index-CrbOiTLG.js',
    'index-DwdEaokt.js'
  ];
  
  let foundOldFiles = false;
  
  // Check all script tags
  const scripts = document.querySelectorAll('script[src]');
  scripts.forEach(script => {
    oldFilePatterns.forEach(pattern => {
      if (script.src.includes(pattern)) {
        console.log(`🚨 FOUND OLD CACHED FILE: ${pattern}`);
        foundOldFiles = true;
      }
    });
  });
  
  // Check all link tags
  const links = document.querySelectorAll('link[href]');
  links.forEach(link => {
    oldFilePatterns.forEach(pattern => {
      if (link.href.includes(pattern)) {
        console.log(`🚨 FOUND OLD CACHED FILE: ${pattern}`);
        foundOldFiles = true;
      }
    });
  });
  
  // Force reload if old files found
  if (foundOldFiles) {
    console.log('🔄 OLD CACHED FILES DETECTED - FORCING RELOAD...');
    setTimeout(() => {
      window.location.reload(true);
    }, 100);
    return;
  }
  
  // Add timestamp to all asset URLs that don't have one
  const timestamp = Date.now();
  const allAssets = document.querySelectorAll('link[rel="stylesheet"], script[src], img[src]');
  
  allAssets.forEach(asset => {
    if (asset.href && !asset.href.includes('?v=') && !asset.href.includes('?t=')) {
      asset.href = asset.href + (asset.href.includes('?') ? '&' : '?') + 't=' + timestamp;
    }
    if (asset.src && !asset.src.includes('?v=') && !asset.src.includes('?t=')) {
      asset.src = asset.src + (asset.src.includes('?') ? '&' : '?') + 't=' + timestamp;
    }
  });
  
  console.log('✅ Cache buster completed - fresh files should be loaded');
  
  // Additional check after a delay
  setTimeout(() => {
    const currentScripts = document.querySelectorAll('script[src*="index-CQilrS1Q.js"]');
    if (currentScripts.length > 0) {
      console.log('🚨 STILL LOADING OLD FILES - FORCING FINAL RELOAD...');
      window.location.reload(true);
    }
  }, 2000);
  
})(); 