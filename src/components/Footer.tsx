import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(contentRef.current, {
        opacity: 0,
        y: 60,
        filter: 'blur(10px)'
      });

      gsap.to(contentRef.current, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
        }
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer ref={footerRef} className="relative py-20 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div ref={contentRef}>
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text">
                Anthony
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Crafting immersive digital experiences with cutting-edge technology 
                and pixel-perfect design.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/anthony-rozario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass rounded-lg hover:glow-primary transition-smooth group"
                >
                  <Github className="w-5 h-5 group-hover:text-primary transition-smooth" />
                </a>
                <a
                  href="https://linkedin.com/in/anthony-rozario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass rounded-lg hover:glow-primary transition-smooth group"
                >
                  <Linkedin className="w-5 h-5 group-hover:text-primary transition-smooth" />
                </a>
                <a
                  href="mailto:anthonyrozario62@gmail.com"
                  className="p-2 glass rounded-lg hover:glow-primary transition-smooth group"
                >
                  <Mail className="w-5 h-5 group-hover:text-primary transition-smooth" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <nav className="space-y-2">
                <button
                  onClick={() => scrollToSection('hero')}
                  className="block text-muted-foreground hover:text-primary transition-smooth"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="block text-muted-foreground hover:text-primary transition-smooth"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="block text-muted-foreground hover:text-primary transition-smooth"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block text-muted-foreground hover:text-primary transition-smooth"
                >
                  Contact
                </button>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Get In Touch</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>WB, India</p>
                <p>anthonyrozario62@gmail.com</p>
                <p>Available for freelance work</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>by Anthony</span>
            </p>
            
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-primary/30 rounded-full blur-sm animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-primary opacity-10 blur-3xl" />
    </footer>
  );
};

export default Footer;