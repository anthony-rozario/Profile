import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

// Import project images
import project1 from '@/assets/project-1.png';
import project2 from '@/assets/project-2.png';
import project3 from '@/assets/project-3.png';
import project4 from '@/assets/project-4.png';
import project5 from '@/assets/project-5.png';
import project6 from '@/assets/project-6.png';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: 'Neural Web Design',
      description: 'Futuristic 3D web experience with AI-powered animations and glassmorphic UI elements.',
      image: project1,
      tech: ['React', 'Three.js', 'GSAP', 'WebGL'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 2,
      title: 'CyberGaming Dashboard',
      description: 'Real-time gaming statistics dashboard with cyberpunk aesthetics and particle effects.',
      image: project2,
      tech: ['Vue.js', 'Socket.io', 'Canvas', 'CSS3'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 3,
      title: 'Modern Business App',
      description: 'Clean and professional web application with advanced data visualization.',
      image: project3,
      tech: ['React', 'TypeScript', 'Chart.js', 'TailwindCSS'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 4,
      title: 'Interactive Portfolio',
      description: 'Award-winning portfolio website with stunning animations and 3D interactions.',
      image: project4,
      tech: ['Next.js', 'Framer Motion', 'Spline', 'SASS'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 5,
      title: 'E-commerce Platform',
      description: 'Modern online store with seamless user experience and advanced animations.',
      image: project5,
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 6,
      title: 'Mobile-First Design',
      description: 'Responsive mobile application with innovative UI/UX and smooth transitions.',
      image: project6,
      tech: ['React Native', 'Expo', 'Redux', 'Firebase'],
      links: {
        demo: '#',
        github: '#'
      }
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(titleRef.current, {
        opacity: 0,
        y: 50,
        filter: 'blur(10px)'
      });

      gsap.set(gridRef.current?.children || [], {
        opacity: 0,
        y: 100,
        scale: 0.8
      });

      // Title animation
      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });

      // Cards animation
      gsap.to(gridRef.current?.children || [], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
        stagger: 0.15,
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 70%',
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover my latest work showcasing cutting-edge web technologies 
            and innovative design solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group glass-elevated rounded-2xl overflow-hidden hover:scale-105 hover:glow-primary transition-bounce cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                
                {/* Project Links */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-smooth">
                  <a
                    href={project.links.demo}
                    className="p-2 glass rounded-lg hover:glow-primary transition-smooth"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.links.github}
                    className="p-2 glass rounded-lg hover:glow-primary transition-smooth"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 glass-elevated rounded-xl font-medium hover:glow-primary hover:scale-105 transition-bounce group">
            <span className="gradient-text group-hover:text-glow">
              View All Projects
            </span>
          </button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float-delayed" />
      </div>
    </section>
  );
};

export default Projects;