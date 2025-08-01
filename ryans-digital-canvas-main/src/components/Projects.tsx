import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import casinoImage from "@/assets/casino-project.jpg"
import artistryImage from "@/assets/artistry-project.jpg"
import ScrollReveal from "./ScrollReveal"

const projects = [
  {
    title: "WealthWise",
    description: "AI-powered financial platform that combines emotional intelligence with smart tracking. Features expense categorization, goal setting, and community support for emerging markets.",
    image: "/lovable-uploads/eb62d664-62d2-41c7-aeb3-41dfd6fa1920.png",
    technologies: ["React", "TypeScript", "AI/ML", "Node.js", "PostgreSQL"],
    liveUrl: "https://wealth-wise-io-k8oq.vercel.app/",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Styles n Tunes",
    description: "Fashion e-commerce platform where music meets streetwear. Features artist collaborations, exclusive drops, and urban fashion culture with seamless shopping experience.",
    image: "/lovable-uploads/040941f4-c14e-4fbf-8d76-aa681a8d7ae9.png",
    technologies: ["React", "Next.js", "Commerce.js", "Tailwind CSS", "Stripe"],
    liveUrl: "https://style-n-tunes-iyk7.vercel.app/",
    githubUrl: "#",
    featured: true
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my latest work and creative solutions
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`card-gradient rounded-2xl overflow-hidden hover-scale magnetic group project-card ${
                  project.featured ? 'lg:col-span-1' : ''
                } stagger-${(index % 2) + 1}`}
              >
              <div className="project-card-inner">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    onLoad={(e) => {
                      e.currentTarget.style.opacity = '1'
                    }}
                    style={{ opacity: 0, transition: 'opacity 0.3s ease-in-out' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating tech badges */}
                  <div className="absolute top-4 right-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Links Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-white morph-button"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-scramble">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies with hover effects */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 hover:scale-105 transition-all cursor-pointer magnetic stagger-${(techIndex % 3) + 1}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground morph-button group"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                      View Project
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

        {/* View All Projects Button */}
        <ScrollReveal delay={400}>
          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="btn-glow bg-primary hover:bg-primary/90 morph-button group"
            >
              <span className="group-hover:tracking-wider transition-all duration-300">
                View All Projects
              </span>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}