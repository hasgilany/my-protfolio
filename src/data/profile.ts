import type { LucideIcon } from "lucide-react";
import { Flame, Trophy, Factory, LayoutTemplate, Pill, ShoppingBag } from "lucide-react";
import projectFireSensing from "@/assets/fire-sensing-dashboard.jpg";
import projectTennisScoreboard from "@/assets/tennis-scoreboard.jpg";
import projectDragAndDrop from "@/assets/drag-and-drop.png";
import projectMedicineTracker from "@/assets/medicine_tracker.png";
import projectScadaSystem from "@/assets/Scada-System.png";
import projectNajdMill from "@/assets/najd-mill.jpg";

/**
 * All personal content lives here. Edit this file to update the site.
 * Fields marked TODO are optional: anything left empty is simply hidden.
 */

export const profile = {
  name: "Hasan Saleh Algailani",
  shortName: "Hasan",
  role: "Software Engineer",
  tagline: "Full-stack & IoT developer",
  summary:
    "Software Engineering student at UMPSA who ships real products: from a live e-commerce platform with online payments to IoT systems that connect sensors to the dashboards people act on.",
  location: "Malaysia / UAE",
  openToWork: true,
  availability: "Open to internships & graduate roles",
  email: "hsgcr50@gmail.com",
  phone: "+971 50 319 1958",
  phoneHref: "tel:+971503191958",
  github: "https://github.com/hasgilany",
  linkedin: "https://www.linkedin.com/in/hasan-saleh-ali-algailani-6a3406373",
  /** TODO: put your CV at public/resume.pdf, then set this to "/resume.pdf" to show the résumé buttons. */
  resumeUrl: "",
};

export const about = [
  "I'm a Computer Science student specialising in Software Engineering at Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA). I like problems where software meets the physical world, which is why most of my projects connect hardware to the web.",
  "During my internship at Smart Five Dimension in Abu Dhabi I worked on IoT integrations and frontend development, shipping interfaces that turn raw sensor data into something operators can act on.",
];

export const highlights = [
  { value: "6", label: "Shipped projects" },
  { value: "4", label: "Live deployments" },
  { value: "1", label: "Industry internship" },
];

export type ExperienceItem = {
  kind: "work" | "education";
  title: string;
  org: string;
  location?: string;
  /** e.g. "Jun 2025 – Sep 2025". TODO: fill in your real dates. */
  period?: string;
  points: string[];
  tags?: string[];
};

export const experience: ExperienceItem[] = [
  {
    kind: "work",
    title: "IoT & Frontend Developer Intern",
    org: "Smart Five Dimension",
    location: "Abu Dhabi, UAE",
    period: "", // TODO
    points: [
      // TODO: replace with 2–4 concrete achievements (ideally with numbers).
      "Integrated IoT devices with web dashboards for real-time monitoring.",
      "Built responsive frontend interfaces for the team's products.",
    ],
    tags: ["IoT", "Arduino", "JavaScript", "React"],
  },
  {
    kind: "education",
    title: "B.Sc. Computer Science (Software Engineering)",
    org: "Universiti Malaysia Pahang Al-Sultan Abdullah",
    location: "Pahang, Malaysia",
    period: "", // TODO
    points: [
      "Coursework in software engineering, data structures, databases and web technologies.",
    ],
  },
];

export const skillGroups = [
  { title: "Languages", items: ["JavaScript", "TypeScript", "Python", "PHP", "Dart", "C++ (Arduino)", "SQL"] },
  { title: "Frontend", items: ["React", "Tailwind CSS", "HTML & CSS", "Responsive design"] },
  { title: "Backend & Data", items: ["Supabase", "PostgreSQL", "Stripe payments", "Prisma", "MySQL", "Firebase", "REST APIs"] },
  { title: "Mobile & IoT", items: ["Flutter", "Arduino", "Sensors & actuators", "SCADA"] },
  { title: "Tools", items: ["Git & GitHub", "Vercel", "VS Code"] },
];

export type Project = {
  title: string;
  category: "IoT" | "Web" | "Mobile";
  summary: string;
  highlights: string[];
  image: string;
  stack: string[];
  icon: LucideIcon;
  liveUrl?: string;
  codeUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Najd Mill: E-commerce Store",
    category: "Web",
    summary:
      "Production e-commerce platform for an Emirati spice, coffee and herbs mill in Abu Dhabi, live at najdmill.com with real customers, online payments and a full admin back office.",
    highlights: [
      "Secure checkout with Stripe (cards & Apple Pay) plus cash on delivery",
      "Supabase Postgres database with Edge Functions for checkout sessions, payment webhooks and order-confirmation emails",
      "Admin dashboard: products, orders, customers, coupons, offers, analytics and reports",
      "Arabic (RTL) storefront with cart, favourites, user accounts, order history and SEO sitemap",
    ],
    image: projectNajdMill,
    stack: ["JavaScript", "Supabase", "PostgreSQL", "Stripe", "Edge Functions", "Vercel"],
    icon: ShoppingBag,
    liveUrl: "https://www.najdmill.com/",
    featured: true,
  },
  {
    title: "Fire Sensing System",
    category: "IoT",
    summary:
      "Smart fire-detection system that guides people to the shortest safe exit and counts occupants via camera to help firefighters during emergencies.",
    highlights: [
      "Detects fire and shows the shortest exit route",
      "Camera-based people counting for rescue teams",
      "Deployed live dashboard",
    ],
    image: projectFireSensing,
    stack: ["Arduino", "Python", "Mobile App"],
    icon: Flame,
    liveUrl: "https://himaya71.vercel.app/",
    featured: true,
  },
  {
    title: "SCADA System",
    category: "IoT",
    summary:
      "Industrial SCADA dashboard for monitoring and controlling processes in real time.",
    highlights: ["Real-time monitoring and control"],
    image: projectScadaSystem,
    stack: ["Arduino", "JavaScript", "Web"],
    icon: Factory,
    liveUrl: "https://scada-system.vercel.app/",
    codeUrl: "https://github.com/hasgilany/Scada-System",
  },
  {
    title: "Tennis Scoreboard",
    category: "IoT",
    summary:
      "Real-time tennis scoreboard with live score updates, player statistics and match tracking for tournaments.",
    highlights: ["Live score updates and player statistics"],
    image: projectTennisScoreboard,
    stack: ["Arduino", "JavaScript", "Web"],
    icon: Trophy,
    liveUrl: "https://tennis-scoreboard-livid.vercel.app/",
    codeUrl: "https://github.com/hasgilany/Tennis-Scoreboard",
  },
  {
    title: "Drag & Drop Website Builder",
    category: "Web",
    summary:
      "No-code website builder that lets users compose responsive pages visually and publish them without writing code.",
    highlights: ["Visual, no-code page building"],
    image: projectDragAndDrop,
    stack: ["React", "TypeScript", "Prisma", "Tailwind CSS"],
    icon: LayoutTemplate,
    codeUrl: "https://github.com/hasgilany/ddwb",
  },
  {
    title: "Medicine Tracker",
    category: "Mobile",
    summary:
      "Mobile app that tracks medication schedules and sends timely reminders for better health management.",
    highlights: ["Medication reminders", "Firebase backend"],
    image: projectMedicineTracker,
    stack: ["Flutter", "Dart", "Firebase"],
    icon: Pill,
    codeUrl: "https://github.com/hasgilany/medicine_tracker",
  },
];
