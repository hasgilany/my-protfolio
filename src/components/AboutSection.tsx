import { about, highlights, skillGroups } from "@/data/profile";

const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div className="reveal">
            <p className="eyebrow">01 · About</p>
            <h2 className="section-title">
              Bridging hardware <span className="text-gradient-primary">and software.</span>
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              {about.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <dl className="mt-10 grid grid-cols-3 divide-x divide-border rounded-2xl border border-border">
              {highlights.map((h) => (
                <div key={h.label} className="px-4 py-5 text-center">
                  <dt className="sr-only">{h.label}</dt>
                  <dd className="font-display text-3xl font-bold text-foreground">{h.value}</dd>
                  <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{h.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="reveal surface p-6 sm:p-8" style={{ transitionDelay: "100ms" }}>
            <h3 className="text-xl font-semibold">Technical skills</h3>
            <p className="mt-1 text-sm text-muted-foreground">Tools I've used to ship real projects.</p>
            <div className="mt-6 space-y-6">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h4 className="mb-2.5 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {group.title}
                  </h4>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-border bg-background/60 px-3 py-1.5 text-sm transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
