import { 
  Target, 
  Lightbulb, 
  Zap, 
  Award 
} from "lucide-react"

const coreValues = [
  {
    title: "Innovation",
    description: "Always exploring new technologies",
    icon: Zap
  },
  {
    title: "Creativity", 
    description: "Unique solutions to complex problems",
    icon: Lightbulb
  },
  {
    title: "Resilience",
    description: "Never giving up on challenges",
    icon: Target
  },
  {
    title: "Excellence",
    description: "Committed to quality in every project",
    icon: Award
  }
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Who Am <span className="text-gradient">I?</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>

          <div className="text-center space-y-6 animate-fade-up">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              I'm Ryan Waweru, a passionate full-stack developer and AI enthusiast with over 3 years of experience 
              building innovative digital solutions. My journey in technology is driven by an insatiable curiosity 
              and a commitment to creating meaningful impact through code.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              As a backend engineer, I specialize in building robust, scalable systems that power modern applications. 
              My expertise spans across multiple programming languages and frameworks, with a particular focus on 
              AI integration and machine learning solutions.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              What sets me apart is my unique blend of technical expertise and creative problem-solving. I believe 
              in the power of <span className="text-primary font-semibold">resilience</span>, 
              <span className="text-primary font-semibold"> creativity</span>, and 
              <span className="text-primary font-semibold"> innovation</span> to overcome any challenge and 
              deliver exceptional results.
            </p>
          </div>

          {/* Core Values */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={value.title}
                  className="card-gradient text-center p-6 rounded-xl hover-scale group transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:shadow-lg group-hover:shadow-primary/50 transition-shadow duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}