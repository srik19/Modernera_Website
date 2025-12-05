import { Target, Users, Briefcase, Home } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Re-Entry Support",
    description: "Comprehensive guidance for transitioning back into society with dignity and purpose.",
  },
  {
    icon: Users,
    title: "Community Connection",
    description: "Building networks and relationships that foster long-term success and belonging.",
  },
  {
    icon: Briefcase,
    title: "Employment Assistance",
    description: "Job readiness training, resume building, and connections to employers.",
  },
  {
    icon: Home,
    title: "Housing Resources",
    description: "Help finding stable housing and navigating the challenges of starting fresh.",
  },
];

const MissionSection = () => {
  return (
    <section id="mission" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-body text-sm font-semibold text-primary uppercase tracking-wider mb-4">Our Mission</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Empowering Second Chances
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            To assist and equip men and women in transitioning back into society, who want to stay out of prison 
            and effectively re-enter the community as productive citizens crossing the bridge of life.
          </p>
        </div>

        {/* Mission Statement Card */}
        <div className="relative mb-20">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lift border border-border overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 max-w-4xl">
              <blockquote className="font-display text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed italic">
                "The organization is a re-entry program that provides services and resources to ex-offenders from 
                all walks of life. We are here to help ex-offenders that have been released from State or Federal 
                prison in Cincinnati, Ohio."
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-1 bg-primary rounded-full" />
                <p className="font-body font-semibold text-muted-foreground">Kathryn Betts Foundation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-lift hover:border-primary/20 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mb-5 shadow-gold group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
