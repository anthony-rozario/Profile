import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { gsap } from 'gsap';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-smooth ${
        scrolled ? 'glass backdrop-blur-xl border-b border-white/10' : ''
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold gradient-text">
              Anthony
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-foreground hover:text-primary transition-smooth"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-smooth"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-foreground hover:text-primary transition-smooth"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-smooth"
              >
                Contact
              </button>
            </div>

            {/* Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass hover:glow-primary transition-smooth group"
              >
                <Github className="w-5 h-5 group-hover:text-primary transition-smooth" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass hover:glow-primary transition-smooth group"
              >
                <Linkedin className="w-5 h-5 group-hover:text-primary transition-smooth" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg glass hover:glow-primary transition-smooth"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block text-2xl font-light text-foreground hover:text-primary transition-smooth"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-2xl font-light text-foreground hover:text-primary transition-smooth"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block text-2xl font-light text-foreground hover:text-primary transition-smooth"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-2xl font-light text-foreground hover:text-primary transition-smooth"
              >
                Contact
              </button>
              
              {/* Mobile Social Links */}
              <div className="flex items-center justify-center space-x-6 pt-8">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg glass hover:glow-primary transition-smooth"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg glass hover:glow-primary transition-smooth"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;