import { Download, Eye, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import heroImage from "/lovable-uploads/f72808bd-0977-4750-b902-3d0834d57a40.png"
import TypewriterText from "./TypewriterText"
import ParticleBackground from "./ParticleBackground"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-bg relative overflow-hidden">
      <ParticleBackground />
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/5 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <p className="text-accent font-medium text-lg">Hello, I'm Ryan Waweru</p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Building Digital Realities &{" "}
                <span className="text-gradient">
                  <TypewriterText 
                    texts={["Intelligent Solutions", "Amazing Experiences", "Future Technologies"]}
                    speed={80}
                    pause={2000}
                  />
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                <TypewriterText 
                  texts={[
                    "Web Dev | App Dev | AI Prompting | Copywriting | Backend Engineering",
                    "Creating innovative solutions with cutting-edge technology",
                    "Transforming ideas into powerful digital experiences"
                  ]}
                  speed={60}
                  pause={3000}
                />
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="btn-glow bg-primary hover:bg-primary/90 morph-button group"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                View Projects
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground magnetic group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Contact Me
              </Button>
              
              <Button 
                size="lg" 
                variant="secondary"
                className="hover-scale group glass-effect"
              >
                <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </Button>
            </div>

            {/* Stats with counter animation */}
            <div className="flex gap-8 pt-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary pulse-glow">50+</p>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary pulse-glow" style={{ animationDelay: '0.5s' }}>3+</p>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary pulse-glow" style={{ animationDelay: '1s' }}>100%</p>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Image with 3D hover effect */}
          <div className="relative animate-float">
            <div className="relative z-10 project-card">
              <div className="project-card-inner">
                <img
                  src={heroImage}
                  alt="Ryan Waweru - Full Stack Developer"
                  loading="eager"
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl hover-scale transition-all duration-300 hover:shadow-primary/50 hover:shadow-2xl"
                  onLoad={(e) => {
                    e.currentTarget.style.opacity = '1'
                  }}
                  style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}
                />
              </div>
            </div>
            {/* Enhanced decorative elements with animation */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl pulse-glow"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl pulse-glow" style={{ animationDelay: '1.5s' }}></div>
            
            {/* Floating particles around image */}
            <div className="particle absolute top-10 right-10" style={{ animationDelay: '0s' }}></div>
            <div className="particle absolute bottom-20 left-10" style={{ animationDelay: '2s' }}></div>
            <div className="particle absolute top-1/2 left-0" style={{ animationDelay: '4s' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}