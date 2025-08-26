import { useEffect, useRef, memo } from 'react';
import { gsap } from 'gsap';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Set initial states
    gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], {
      opacity: 0,
      y: 50,
      filter: 'blur(10px)'
    });

    gsap.set(splineRef.current, {
      opacity: 0,
      x: 100,
      filter: 'blur(5px)'
    });

    // Animate elements in sequence
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1.2,
      ease: 'power2.out'
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1,
      ease: 'power2.out'
    }, '-=0.8')
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1,
      ease: 'power2.out'
    }, '-=0.6')
    .to(splineRef.current, {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      duration: 1.5,
      ease: 'power2.out'
    }, '-=1');

  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Spline 3D Background - Interactive */}
      <div ref={splineRef} className="absolute inset-0 z-10">
        <iframe 
          src='https://my.spline.design/orb-4SDRNlU4cXR5zOtYIbKFL3YH/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full pointer-events-auto"
          loading="lazy"
          allow="accelerometer; gyroscope"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 pointer-events-none">
        <div className="max-w-4xl">
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          >
            Hi, I'm{' '}
            <span className="gradient-text text-glow">
              Anthony
            </span>
            <br />
            <span className="text-foreground">
              Web Developer
            </span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-muted-foreground font-light mb-12 max-w-2xl leading-relaxed"
          >
            Crafting immersive digital experiences with cutting-edge technology, 
            stunning animations, and pixel-perfect design.
          </p>
          
          <button
            ref={ctaRef}
            onClick={scrollToProjects}
            className="group px-8 py-4 bg-gradient-primary rounded-xl font-medium text-primary-foreground glow-primary hover:scale-105 transition-bounce relative overflow-hidden pointer-events-auto"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>View My Work</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-smooth" />
            </span>
            <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-100 transition-smooth" />
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none z-5">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 left-1/5 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-accent/5 rounded-full blur-2xl animate-float" />
      </div>

    </section>
  );
};

export default memo(Hero);