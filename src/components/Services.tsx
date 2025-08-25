import { Brain, Code, Database, MessageSquare, Zap } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "AI Development",
    description: "Building intelligent applications with machine learning and AI integration for smarter solutions.",
    features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "AI API Integration"]
  },
  {
    icon: Code,
    title: "Software Engineering",
    description: "Full-stack development with modern frameworks and best practices for scalable applications.",
    features: ["React & Next.js", "Node.js & Python", "Mobile Development", "API Design"]
  },
  {
    icon: Database,
    title: "Backend Engineering",
    description: "Robust server-side architecture and database design for high-performance applications.",
    features: ["Database Design", "Cloud Architecture", "Microservices", "Performance Optimization"]
  },
  {
    icon: MessageSquare,
    title: "AI & Tech Consulting",
    description: "Strategic guidance on technology adoption and AI implementation for business growth.",
    features: ["Technology Strategy", "AI Implementation", "Team Training", "Process Optimization"]
  },
  {
    icon: Zap,
    title: "Copywriting",
    description: "Compelling technical content and marketing copy that converts and engages audiences.",
    features: ["Technical Writing", "Marketing Copy", "Content Strategy", "SEO Optimization"]
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What <span className="text-gradient">I Do</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            I offer a comprehensive range of services to help bring your digital vision to life
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-gradient p-8 rounded-2xl hover-scale group hover:btn-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-primary/50 transition-shadow duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}