import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profileImage from '@/assets/profile.png';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'GSAP', icon: '✨' },
    { name: 'Three.js', icon: '🎮' },
    { name: 'Node.js', icon: '🚀' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([imageRef.current, contentRef.current], {
        opacity: 0,
        y: 50,
        filter: 'blur(10px)'
      });

      gsap.set(skillsRef.current?.children || [], {
        opacity: 0,
        y: 30,
        scale: 0.8
      });

      // Create timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.to(imageRef.current, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power2.out'
      })
      .to(contentRef.current, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power2.out'
      }, '-=0.7')
      .to(skillsRef.current?.children || [], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.7)',
        stagger: 0.1
      }, '-=0.5');

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="relative">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-smooth scale-110" />
              <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden glass-elevated group-hover:scale-105 group-hover:rotate-3 transition-bounce">
                <img 
                  src={profileImage}
                  alt="Anthony - Web Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About{' '}
                <span className="gradient-text">Me</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate web developer with a keen eye for creating immersive 
                  digital experiences. With expertise in modern technologies like React, 
                  GSAP, and Three.js, I bring ideas to life through code.
                </p>
                <p>
                  My journey in web development started with a fascination for interactive 
                  design and has evolved into creating premium, performance-driven 
                  applications that push the boundaries of what's possible on the web.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new animation techniques, 
                  experimenting with 3D graphics, or contributing to open-source projects.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 gradient-text">
                Skills & Technologies
              </h3>
              <div ref={skillsRef} className="grid grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group p-4 glass rounded-xl hover:glow-primary transition-smooth hover:scale-105 cursor-pointer"
                  >
                    <div className="text-center space-y-2">
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-smooth">
                        {skill.icon}
                      </div>
                      <div className="text-sm font-medium text-foreground group-hover:text-primary transition-smooth">
                        {skill.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
      </div>
    </section>
  );
};

export default About;