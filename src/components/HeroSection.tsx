import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Hands united together symbolizing hope and community support"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-32 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-soft hidden lg:block" />
      <div className="absolute bottom-32 left-10 w-48 h-48 bg-accent/30 rounded-full blur-2xl animate-float hidden lg:block" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary font-body">Non-Profit for Ex-Offender Rehabilitation</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Bridging the Path to a{" "}
            <span className="text-gradient-gold">New Beginning</span>
          </h1>

          {/* Subheading */}
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            The Kathryn Betts Foundation empowers men and women transitioning back into society, 
            providing resources, support, and hope for a brighter future in Cincinnati, Ohio.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Get Support
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Learn About Our Mission
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">500+</p>
              <p className="font-body text-sm text-muted-foreground mt-1">Lives Changed</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">2017</p>
              <p className="font-body text-sm text-muted-foreground mt-1">Est. Year</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">Ohio</p>
              <p className="font-body text-sm text-muted-foreground mt-1">Cincinnati Based</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
