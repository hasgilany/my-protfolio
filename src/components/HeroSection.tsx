import { ArrowRight, Github, Linkedin, Mail, MapPin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-hasan.jpg";
import { profile } from "@/data/profile";

const socials = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-16">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden
      />

      <div className="container relative grid items-center gap-14 py-16 lg:grid-cols-[1.4fr_1fr]">
        <div className="text-center lg:text-left">
          {profile.openToWork && (
            <div className="mb-6 inline-flex animate-fade-up items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {profile.availability}
            </div>
          )}

          <h1
            className="animate-fade-up text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            {profile.name.split(" ").slice(0, 2).join(" ")}
            <span className="block text-gradient-primary">{profile.role}.</span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-muted-foreground lg:mx-0"
            style={{ animationDelay: "160ms" }}
          >
            {profile.summary}
          </p>

          <p
            className="mt-4 inline-flex animate-fade-up items-center gap-1.5 text-sm text-muted-foreground"
            style={{ animationDelay: "200ms" }}
          >
            <MapPin size={14} /> {profile.location}
          </p>

          <div
            className="mt-8 flex animate-fade-up flex-col justify-center gap-3 sm:flex-row lg:justify-start"
            style={{ animationDelay: "240ms" }}
          >
            <Button asChild size="lg" className="group h-12 bg-gradient-primary px-7 text-base text-primary-foreground shadow-glow-primary hover:opacity-90">
              <a href="#projects">
                View my work
                <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
              </a>
            </Button>
            {profile.resumeUrl ? (
              <Button asChild size="lg" variant="outline" className="h-12 px-7 text-base hover:border-primary/50 hover:bg-primary/10 hover:text-primary">
                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                  <FileText size={18} /> Download résumé
                </a>
              </Button>
            ) : (
              <Button asChild size="lg" variant="outline" className="h-12 px-7 text-base">
                <a href="#contact">Get in touch</a>
              </Button>
            )}
          </div>

          <ul
            className="mt-8 flex animate-fade-up justify-center gap-2 lg:justify-start"
            style={{ animationDelay: "320ms" }}
          >
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Icon size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex animate-fade-up justify-center" style={{ animationDelay: "120ms" }}>
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-primary opacity-25 blur-2xl" aria-hidden />
            <div className="relative h-72 w-64 overflow-hidden rounded-[2rem] border border-border sm:h-96 sm:w-80">
              <img
                src={profileImage}
                alt={`Portrait of ${profile.name}`}
                className="h-full w-full object-cover"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
