import { GraduationCap, Briefcase, Code, Cpu } from "lucide-react";

const skills = [
  { name: "JavaScript", level: 85 },
  { name: "React / TypeScript", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "PHP / MySQL", level: 75 },
  { name: "Flutter / Dart", level: 70 },
  { name: "Arduino / IoT", level: 80 },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 blob blur-3xl opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">ABOUT ME</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Designing Solutions,
            <span className="text-gradient-primary"> Not Just Visuals</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio & Experience */}
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a Computer Science student specializing in Software Engineering at Universiti Malaysia Pahang Al-Sultan Abdullah. I am passionate about building modern web applications and SaaS platforms that solve real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With experience in IoT integration and frontend development, I focus on creating seamless digital experiences that bridge hardware and software. My approach combines technical expertise with user-centered design principles.
            </p>

            {/* Experience Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <h4 className="font-display font-semibold text-lg mb-2">Education</h4>
                <p className="text-sm text-muted-foreground">
                  Computer Science, Software Engineering at UMP Al-Sultan Abdullah
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:border-secondary/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Briefcase className="text-secondary" size={24} />
                </div>
                <h4 className="font-display font-semibold text-lg mb-2">Internship</h4>
                <p className="text-sm text-muted-foreground">
                  Smart Five Dimension, Abu Dhabi — IoT & Frontend Development
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-gradient-primary">5+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-gradient-secondary">1+</p>
                <p className="text-sm text-muted-foreground">Years Exp.</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Dedication</p>
              </div>
            </div>
          </div>

          {/* Right: Skills */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
              <Code className="text-primary" size={20} />
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-primary rounded-full transition-all duration-1000"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Icons */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Technologies I work with:</p>
              <div className="flex flex-wrap gap-3">
                {["JavaScript", "React", "Tailwind", "PHP", "MySQL", "flutter", "Arduino"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
