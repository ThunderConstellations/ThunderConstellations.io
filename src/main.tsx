import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// main entry point - crosses fingers and hopes this works....and if it does ALL HAIL THE GLOW CLOUD and we only mildly wonder why it did afterwards
// CACHE BUST: Force new deployment to fix useState errors - v2 // Updated cache bust comment
createRoot(document.getElementById("root")!).render(<App />);
