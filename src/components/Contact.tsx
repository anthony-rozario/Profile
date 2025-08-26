import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Github, Linkedin, Mail, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([formRef.current, infoRef.current], {
        opacity: 0,
        y: 50,
        filter: 'blur(10px)'
      });

      // Animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.to(infoRef.current, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power2.out'
      })
      .to(formRef.current, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power2.out'
      }, '-=0.7');

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    // Show success message (you can implement toast notification here)
    console.log('Form submitted successfully!');
  };

  return (
    <section ref={sectionRef} id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In{' '}
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div ref={infoRef} className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold gradient-text mb-8">
                Let's Connect
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 glass rounded-lg group-hover:glow-primary transition-smooth">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">anthony@example.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="p-3 glass rounded-lg group-hover:glow-primary transition-smooth">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 glass rounded-xl hover:glow-primary transition-smooth hover:scale-105"
                >
                  <Github className="w-6 h-6 group-hover:text-primary transition-smooth" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 glass rounded-xl hover:glow-primary transition-smooth hover:scale-105"
                >
                  <Linkedin className="w-6 h-6 group-hover:text-primary transition-smooth" />
                </a>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float" />
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-secondary/10 rounded-full blur-2xl animate-float-delayed" />
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 glass rounded-xl border border-white/10 bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:glow-primary transition-smooth"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 glass rounded-xl border border-white/10 bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:glow-primary transition-smooth"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 glass rounded-xl border border-white/10 bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:glow-primary transition-smooth resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full px-8 py-4 bg-gradient-primary rounded-xl font-medium text-primary-foreground glow-primary hover:scale-105 transition-bounce relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-100 transition-smooth" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float-delayed" />
      </div>
    </section>
  );
};

export default Contact;