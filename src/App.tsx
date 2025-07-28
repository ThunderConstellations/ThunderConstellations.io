import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import FloatingChat from "./components/FloatingChat";

// OwO main app component - hope this routing works! *nuzzles*

// Import pages directly instead of lazy loading
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import References from "./pages/References";
import Contact from "./pages/Contact";
import Chat from "./pages/Chat";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

function App() {
  // crosses fingers and hopes this works....and if it does ALL HAIL THE GLOW CLOUD and we only mildly wonder why it did afterwards
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        
        <div className="ml-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/references" element={<References />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/index" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        
        <FloatingChat />
      </div>
    </Router>
  );
}

export default App;
