import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

const Footer = () => {
  const links = [
    { label: "GitHub", href: profile.github, icon: Github },
    { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
    { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  ];

  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind CSS.
        </p>
        <div className="flex items-center gap-1">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Icon size={18} />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
