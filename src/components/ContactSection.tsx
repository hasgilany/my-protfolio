import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { profile } from "@/data/profile";

const EMAILJS_PUBLIC_KEY = "xIUo-4exqGSTj8O8y";
const EMAILJS_SERVICE_ID = "service_qly7949";
const EMAILJS_TEMPLATE_ID = "template_xkb12l9";

const emptyForm = { name: "", email: "", subject: "", message: "" };

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: profile.shortName,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
      setFormData(emptyForm);
    } catch (error) {
      console.error("Email sending failed:", error);
      toast({
        title: "Failed to send message",
        description: `Something went wrong. Please email me directly at ${profile.email}.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contacts = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref },
    { icon: MapPin, label: "Location", value: profile.location },
  ];

  return (
    <section id="contact" className="section relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden
      />
      <div className="container relative grid gap-14 lg:grid-cols-2">
        <div className="reveal">
          <p className="eyebrow">04 · Contact</p>
          <h2 className="section-title">
            Let's build something <span className="text-gradient-primary">together.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            I'm currently looking for software engineering internships and graduate roles. If you're hiring, or just want
            to chat about a project, my inbox is open.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 bg-gradient-primary px-6 text-primary-foreground shadow-glow-primary hover:opacity-90">
              <a href={`mailto:${profile.email}`}>
                <Mail size={18} /> Email me
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-6" onClick={copyEmail}>
              {copied ? <Check size={18} className="text-primary" /> : <Copy size={18} />}
              {copied ? "Copied!" : "Copy email"}
            </Button>
          </div>

          <ul className="mt-10 space-y-5">
            {contacts.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-primary">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">{label}</p>
                  {href ? (
                    <a href={href} className="font-medium transition-colors hover:text-primary">
                      {value}
                    </a>
                  ) : (
                    <p className="font-medium">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex gap-3">
            {[
              { label: "GitHub", href: profile.github, icon: Github },
              { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
            ].map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Icon size={16} /> {label}
              </a>
            ))}
          </div>
        </div>

        <div className="reveal surface p-6 sm:p-8" style={{ transitionDelay: "100ms" }}>
          <h3 className="text-xl font-semibold">Send a message</h3>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-1.5 text-sm">
                <span className="text-muted-foreground">Name</span>
                <Input name="name" autoComplete="name" value={formData.name} onChange={handleChange} required className="h-11 bg-background/60" />
              </label>
              <label className="space-y-1.5 text-sm">
                <span className="text-muted-foreground">Email</span>
                <Input name="email" type="email" autoComplete="email" value={formData.email} onChange={handleChange} required className="h-11 bg-background/60" />
              </label>
            </div>
            <label className="block space-y-1.5 text-sm">
              <span className="text-muted-foreground">Subject</span>
              <Input name="subject" value={formData.subject} onChange={handleChange} required className="h-11 bg-background/60" />
            </label>
            <label className="block space-y-1.5 text-sm">
              <span className="text-muted-foreground">Message</span>
              <Textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="resize-none bg-background/60" />
            </label>
            <Button type="submit" disabled={isSubmitting} className="h-12 w-full bg-gradient-primary text-base text-primary-foreground hover:opacity-90">
              {isSubmitting ? "Sending…" : (
                <>
                  Send message <Send size={16} />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
