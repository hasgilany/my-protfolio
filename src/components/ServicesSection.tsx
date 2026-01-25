import { Code, Cpu, Layout, Server } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building responsive, interactive, and modern websites using React, TypeScript, and Tailwind CSS. From landing pages to full-stack applications.",
    color: "primary",
  },
  {
    icon: Cpu,
    title: "IoT Integration",
    description:
      "Developing connected systems with Arduino and IoT platforms for real-world applications. Sensor integration, data collection, and smart automation.",
    color: "secondary",
  },
  {
    icon: Layout,
    title: "Frontend Design",
    description:
      "Creating beautiful, user-friendly interfaces with attention to detail. Modern UI/UX principles with smooth animations and accessibility.",
    color: "accent",
  },
  {
    icon: Server,
    title: "Backend Solutions",
    description:
      "Building robust backend systems with PHP, MySQL, and Python. Database design, API development, and server-side logic.",
    color: "primary",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 blob blur-3xl opacity-40" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 blob blur-3xl opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">SERVICES</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Expertise Service!
            <span className="text-gradient-primary"> Let's check it out</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I offer a range of services to help bring your ideas to life, from web development to IoT integration and beyond.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const colorClass =
              service.color === "primary"
                ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                : service.color === "secondary"
                ? "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground"
                : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground";

            return (
              <div
                key={service.title}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${colorClass}`}
                >
                  <IconComponent size={28} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Working Process */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <p className="text-secondary font-medium mb-2">PROCESS</p>
            <h3 className="font-display text-2xl md:text-3xl font-bold">
              My Working Process
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Planning & Research",
                description:
                  "Understanding your requirements, researching solutions, and creating a detailed project roadmap.",
              },
              {
                step: "02",
                title: "Design & Development",
                description:
                  "Crafting intuitive interfaces and building robust, scalable solutions with clean code.",
              },
              {
                step: "03",
                title: "Testing & Launch",
                description:
                  "Rigorous testing, optimization, and deployment to ensure everything works perfectly.",
              },
            ].map((process, index) => (
              <div key={process.step} className="text-center relative">
                {/* Connector line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
                <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="font-display text-2xl font-bold text-primary-foreground">
                    {process.step}
                  </span>
                </div>
                <h4 className="font-display text-lg font-semibold mb-2">
                  {process.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
