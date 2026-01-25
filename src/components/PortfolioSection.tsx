import { useState } from "react";
import { ExternalLink, Github, Flame, Layout, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectFireSensing from "@/assets/fire-sensing-dashboard.jpg";
import projectTennisScoreboard from "@/assets/tennis-scoreboard.jpg";
import projectScadaSystem from "@/assets/Scada-System.png";
import DragAndDropBuilder from "@/assets/drag-and-drop.png";
import MedicineTracker from "@/assets/medicine_tracker.png";


const categories = ["All", "Web Development", "IoT", "Mobile App"];

const projects = [
  {
    id: 1,
    title: "Fire Sensing System",
    category: "IoT",
    description:
      "Smart fire detection system that shows the shortest exit route and tracks people count via camera to assist firefighters during emergencies.",
    image: projectFireSensing,
    technologies: ["Arduino", "Python", "Mobile App"],
    icon: Flame,
    color: "secondary",
    liveUrl: "https://himaya71.vercel.app/",
  },
  {
    id: 2,
    title: "Tennis Scoreboard",
    category: "IoT",
    description:
      "Real-time tennis scoreboard with live score updates, player statistics, and match tracking for tournaments.",
    image: projectTennisScoreboard,
    technologies: ["Arduino", "JavaScript", "Website"],
    icon: Flame,
    color: "secondary",
    liveUrl: "https://tennis-scoreboard-livid.vercel.app/",
    liveGithub: "https://github.com/hasgilany/Tennis-Scoreboard",
  },
  {
    id: 3,
    title: "Scada System ",
    category: "IoT",
    description:
      "Smart fire detection system that shows the shortest exit route and tracks people count via camera to assist firefighters during emergencies.",
    image: projectScadaSystem,
    technologies: ["Arduino", "JavaScript", "Website"],
    icon: Flame,
    color: "secondary",
    liveUrl: "https://scada-system.vercel.app/",
    liveGithub: "https://github.com/hasgilany/Scada-System",

  },

  {
    id: 4,
    title: "Drag and Drop Website Builder",
    category: "Web Development",
    description:
      "User-friendly drag-and-drop website builder enabling users to create responsive websites without coding knowledge.",
    image: DragAndDropBuilder,
    technologies: ["Prisma", "React", "TypeScript", "Tailwind CSS"],
    icon: Users,
    color: "primary",
    liveGithub: "https://github.com/hasgilany/ddwb",
  },

  {
    id: 5,
    title: "Medicine Tracker and Notifications App",
    category: "Mobile App",
    description:
      "Mobile app that helps users track their medication schedules and sends timely notifications for better health management.",
    image: MedicineTracker,
    technologies: ["flutter", "Dart", "Firebase"],
    icon: Users,
    color: "primary",
    liveGithub: "https://github.com/hasgilany/medicine_tracker",
  },

];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 blob blur-3xl opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">PORTFOLIO</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Digital Product
            <span className="text-gradient-primary"> Showcases</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent projects spanning web development, IoT integration, and admin dashboards.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-primary text-primary-foreground shadow-glow-primary"
                  : "bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const IconComponent = project.icon;
            const colorClass =
              project.color === "primary"
                ? "text-primary"
                : project.color === "secondary"
                ? "text-secondary"
                : "text-accent";

            return (
              <div
                key={project.id}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink size={18} />
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(project.liveGithub, '_blank')}
                    >
                      <Github size={18} />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <IconComponent className={colorClass} size={18} />
                    <span className={`text-xs font-medium ${colorClass}`}>
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
