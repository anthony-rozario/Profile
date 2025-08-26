import { useState, useEffect, lazy, Suspense } from 'react';
import { gsap } from 'gsap';
import Preloader from '@/components/Preloader';
import Navigation from '@/components/Nagivation';
import Hero from '@/components/Hero';

// Lazy load components for better performance
const About = lazy(() => import('@/components/About'));
const Projects = lazy(() => import('@/components/Projects'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    
    // Initialize main content animations
    gsap.fromTo(
      '.main-content',
      { opacity: 0, filter: 'blur(5px)' },
      { 
        opacity: 1, 
        filter: 'blur(0px)', 
        duration: 1, 
        ease: 'power2.out',
        delay: 0.2
      }
    );
  };

  return (
    <>
      {/* Preloader */}
      {isLoading && <Preloader onComplete={handleLoadingComplete} />}
      
      {/* Main Content */}
      <div className={`main-content ${isLoading ? 'invisible' : 'visible'}`}>
        <Navigation />
        <main>
          <Hero />
          <Suspense fallback={<div className="min-h-screen" />}>
            <About />
            <Projects />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={<div />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default Index;