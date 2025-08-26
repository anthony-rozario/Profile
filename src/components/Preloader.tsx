import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial states
    gsap.set([logoRef.current, percentRef.current], { 
      opacity: 0, 
      y: 50,
      filter: 'blur(10px)'
    });
    gsap.set(progressBarRef.current, { width: '0%' });

    // Animation sequence
    tl.to([logoRef.current, percentRef.current], {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.2
    })
    .to(progressBarRef.current, {
      width: '100%',
      duration: 1.5,
      ease: 'power2.out',
      onUpdate: function() {
        const progress = Math.round(this.progress() * 100);
        if (percentRef.current) {
          percentRef.current.textContent = `${progress}%`;
        }
      }
    }, '-=0.5')
    .to([logoRef.current, percentRef.current], {
      opacity: 0,
      y: -30,
      filter: 'blur(5px)',
      duration: 0.6,
      ease: 'power2.in'
    }, '+=0.5')
    .to(preloaderRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      ease: 'power2.inOut',
      onComplete: () => {
        onComplete();
      }
    }, '-=0.3');

  }, [onComplete]);

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="text-center space-y-8">
        {/* Animated Logo */}
        <div ref={logoRef} className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold gradient-text text-glow">
            Anthony
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Web Developer
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto space-y-4">
          <div className="relative">
            <div className="h-1 bg-muted rounded-full overflow-hidden">
              <div 
                ref={progressBarRef}
                className="h-full bg-gradient-primary rounded-full glow-primary"
              />
            </div>
          </div>
          <div 
            ref={percentRef}
            className="text-primary font-mono text-lg"
          >
            0%
          </div>
        </div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float" />
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-float-delayed" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/20 rounded-full blur-xl animate-float" />
      </div>
    </div>
  );
};

export default Preloader;