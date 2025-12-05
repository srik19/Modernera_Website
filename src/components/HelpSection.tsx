import { Button } from "@/components/ui/button";
import { Heart, HandHeart, Calendar, ArrowRight } from "lucide-react";

const helpOptions = [
  {
    icon: Heart,
    title: "Make a Donation",
    description: "Your financial contribution directly supports individuals on their journey to rebuild their lives.",
    cta: "Donate Now",
    featured: true,
  },
  {
    icon: HandHeart,
    title: "Volunteer",
    description: "Share your time and skills to mentor, teach, or provide support to those in need.",
    cta: "Get Involved",
    featured: false,
  },
  {
    icon: Calendar,
    title: "Join Our Events",
    description: "Participate in community events, fundraisers, and awareness campaigns.",
    cta: "View Events",
    featured: false,
  },
];

const HelpSection = () => {
  return (
    <section id="help" className="py-24 lg:py-32 gradient-navy text-secondary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-body text-sm font-semibold text-primary uppercase tracking-wider mb-4">Get Involved</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Not an Ex-Offender but Want to Help?
          </h2>
          <p className="font-body text-lg text-secondary-foreground/80 leading-relaxed">
            There are many ways you can contribute to our mission and make a real difference 
            in someone's journey toward a better life.
          </p>
        </div>

        {/* Help Options Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {helpOptions.map((option, index) => (
            <div
              key={option.title}
              className={`rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                option.featured
                  ? "bg-primary text-primary-foreground shadow-gold"
                  : "bg-secondary-foreground/10 backdrop-blur-sm border border-secondary-foreground/20"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  option.featured ? "bg-primary-foreground/20" : "gradient-gold shadow-gold"
                }`}
              >
                <option.icon className={`w-8 h-8 ${option.featured ? "text-primary-foreground" : "text-primary-foreground"}`} />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">{option.title}</h3>
              <p className={`font-body leading-relaxed mb-6 ${option.featured ? "text-primary-foreground/90" : "text-secondary-foreground/80"}`}>
                {option.description}
              </p>
              <Button
                variant={option.featured ? "secondary" : "hero"}
                size="lg"
                className="w-full"
              >
                {option.cta}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
