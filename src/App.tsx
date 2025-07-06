
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigation from "./components/Navigation";
import FloatingChat from "./components/FloatingChat";
import AnimatedCursor from "./components/AnimatedCursor";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Skills = lazy(() => import("./pages/Skills"));
const Resume = lazy(() => import("./pages/Resume"));
const References = lazy(() => import("./pages/References"));
const Contact = lazy(() => import("./pages/Contact"));
const Chat = lazy(() => import("./pages/Chat"));
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-cosmic-black text-cosmic-starlight relative overflow-x-hidden">
          <AnimatedCursor />
          <Navigation />
          
          {/* Main content with proper spacing for sidebar */}
          <div className="ml-0 transition-all duration-300">
            <Suspense fallback={<div className="cosmic-bg min-h-screen flex items-center justify-center">
              <div className="text-cosmic-gold text-xl">Loading...</div>
            </div>}>
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
            </Suspense>
          </div>
          
          <FloatingChat />
          <Toaster />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
