import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { experience } from "@/data/profile";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section border-y border-border bg-card/30">
      <div className="container">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">02 · Experience</p>
          <h2 className="section-title">Where I've worked and studied.</h2>
        </div>

        <ol className="relative mt-14 space-y-8 before:absolute before:bottom-2 before:left-[19px] before:top-2 before:w-px before:bg-border">
          {experience.map((item, i) => {
            const Icon = item.kind === "work" ? Briefcase : GraduationCap;
            return (
              <li key={item.title} className="reveal relative pl-14" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-background text-primary">
                  <Icon size={18} />
                </span>
                <div className="surface p-6 transition-colors hover:border-primary/30">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-primary">{item.org}</p>
                    </div>
                    <div className="text-sm text-muted-foreground sm:text-right">
                      {item.period && <p className="font-mono">{item.period}</p>}
                      {item.location && (
                        <p className="inline-flex items-center gap-1">
                          <MapPin size={13} /> {item.location}
                        </p>
                      )}
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  {item.tags && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((t) => (
                        <li key={t} className="chip">{t}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default ExperienceSection;
