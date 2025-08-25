import Preloader from "@/components/Preloader"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Blog from "@/components/Blog"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <>
      <Preloader />
      <div className="relative">
        <Header />
        <main className="pt-16 md:pt-20">
          <Hero />
          <About />
          <Services />
          <Skills />
          <Projects />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
