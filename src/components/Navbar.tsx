import { useEffect, useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/use-reveal";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useActiveSection(["home", ...navLinks.map((l) => l.id)], setActive);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || isOpen
          ? "border-b border-border bg-background/80 backdrop-blur-lg"
          : "border-b border-transparent",
      )}
    >
      <nav className="container flex h-16 items-center justify-between" aria-label="Main">
        <a href="#home" className="font-display text-xl font-bold" onClick={() => setIsOpen(false)}>
          {profile.shortName}
          <span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active === link.id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          {profile.resumeUrl ? (
            <Button asChild size="sm" variant="outline" className="border-primary/40 hover:bg-primary/10 hover:text-primary">
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                <FileText size={16} /> Résumé
              </a>
            </Button>
          ) : (
            <Button asChild size="sm" className="bg-gradient-primary text-primary-foreground">
              <a href="#contact">Let's talk</a>
            </Button>
          )}
        </div>

        <button
          className="text-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="container pb-6 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-3 py-3 font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          {profile.resumeUrl && (
            <Button asChild className="mt-4 w-full bg-gradient-primary text-primary-foreground">
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                <FileText size={16} /> Download résumé
              </a>
            </Button>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
