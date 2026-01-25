import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-hasan.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary Blob */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 blob animate-blob opacity-60 blur-3xl" />
        {/* Secondary Blob */}
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 blob animate-blob opacity-40 blur-3xl" style={{ animationDelay: "2s" }} />
        {/* Accent Blob */}
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/15 blob animate-blob opacity-50 blur-3xl" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-primary font-medium mb-4 animate-fade-in">
              Hello, I'm
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Hasan Saleh
              <span className="block text-gradient-primary">Algailani</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Software Engineering Student & Web Developer
            </p>
            <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Building modern web applications and IoT solutions that solve real-world problems. Passionate about creating seamless digital experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button
                onClick={() => scrollToSection("#portfolio")}
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-glow-primary px-8 py-6 text-lg"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("#contact")}
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <a
                href="https://github.com/hasgilany"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/hasan-saleh-ali-algailani-6a3406373"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:hsgcr54@gmail.com"
                className="p-3 rounded-full bg-muted hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary p-1 animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-background" />
              </div>
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 animate-float">
                <img
                  src={profileImage}
                  alt="Hasan Saleh Algailani"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Experience badge */}
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-2xl px-6 py-3 shadow-lg">
                <p className="text-2xl font-bold text-primary">1+</p>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <button
            onClick={() => scrollToSection("#about")}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
