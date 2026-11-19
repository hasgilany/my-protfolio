import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, type Project } from "@/data/profile";
import { cn } from "@/lib/utils";

const categories = ["All", "IoT", "Web", "Mobile"] as const;

const ProjectLinks = ({ project }: { project: Project }) => (
  <div className="flex flex-wrap gap-3">
    {project.liveUrl && (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        Live demo <ArrowUpRight size={15} />
      </a>
    )}
    {project.codeUrl && (
      <a
        href={project.codeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
      >
        <Github size={15} /> Source
      </a>
    )}
  </div>
);

const FeaturedProject = ({ project, flip }: { project: Project; flip: boolean }) => {
  const Icon = project.icon;
  return (
    <article className="reveal group grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
      <a
        href={project.liveUrl ?? project.codeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "relative block overflow-hidden rounded-2xl border border-border bg-muted",
          flip && "lg:order-2",
        )}
        aria-label={`Open ${project.title}`}
      >
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </a>
      <div>
        <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
          <Icon size={14} /> Featured · {project.category}
        </p>
        <h3 className="mt-3 text-2xl font-bold md:text-3xl">{project.title}</h3>
        <p className="mt-4 leading-relaxed text-muted-foreground">{project.summary}</p>
        <ul className="mt-5 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-sm text-foreground/90">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
              {h}
            </li>
          ))}
        </ul>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <li key={t} className="chip">{t}</li>
          ))}
        </ul>
        <div className="mt-6">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const Icon = project.icon;
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-black/40">
      <div className="overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          <Icon size={14} className="text-primary" /> {project.category}
        </p>
        <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <li key={t} className="chip">{t}</li>
          ))}
        </ul>
        <div className="mt-5">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
};

const PortfolioSection = () => {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const featured = projects.filter((p) => p.featured);
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">03 · Projects</p>
          <h2 className="section-title">Things I've built.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From a production e-commerce store with real payments to IoT systems and mobile apps, most of them live.
          </p>
        </div>

        <div className="mt-16 space-y-24">
          {featured.map((p, i) => (
            <FeaturedProject key={p.title} project={p} flip={i % 2 === 1} />
          ))}
        </div>

        <div className="reveal mt-28">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="text-2xl font-bold">All projects</h3>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
              {categories.map((c) => (
                <button
                  key={c}
                  role="tab"
                  aria-selected={active === c}
                  onClick={() => setActive(c)}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                    active === c
                      ? "bg-foreground text-background"
                      : "border border-border text-muted-foreground hover:text-foreground",
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://github.com/hasgilany"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <Github size={16} /> More on GitHub <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
