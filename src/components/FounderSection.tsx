import { Quote } from "lucide-react";
import founderImage from "@/assets/founder-portrait.jpg";

const FounderSection = () => {
  return (
    <section id="founder" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={founderImage}
                alt="Majorie Underwood, Founder and CEO of Kathryn Betts Foundation"
                className="w-full max-w-md mx-auto rounded-3xl shadow-lift"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-primary/20 rounded-3xl -z-10" />
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/30 rounded-full blur-2xl" />
          </div>

          {/* Content Column */}
          <div>
            <p className="font-body text-sm font-semibold text-primary uppercase tracking-wider mb-4">Our Founder</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Majorie Underwood
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-2">
              CEO of the Kathryn Betts Foundation
            </p>

            <div className="my-8 h-px bg-border" />

            <div className="space-y-6">
              <p className="font-body text-lg text-foreground leading-relaxed">
                Majorie Underwood is an ex-offender who served 4 years in Federal Prison. After her release, 
                she struggled to find the support and resources needed to rebuild her life.
              </p>
              <p className="font-body text-lg text-foreground leading-relaxed">
                She founded this foundation to shine a light for those walking the path she once travelled on, 
                turning her challenges into a beacon of hope for others.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-10 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary" />
              </div>
              <blockquote className="bg-muted/50 rounded-2xl p-6 pl-10 border-l-4 border-primary">
                <p className="font-body text-lg text-foreground italic leading-relaxed">
                  "During my time, I wanted to come home and become a productive citizen and be able to give 
                  back to our community and help others in their journey to do the same."
                </p>
                <footer className="mt-4 font-body font-semibold text-primary">
                  — Majorie Underwood
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
