import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center shadow-gold">
                <span className="font-display text-xl font-bold text-primary-foreground">KB</span>
              </div>
              <div>
                <p className="font-display text-lg font-semibold leading-tight">Kathryn Betts</p>
                <p className="text-xs text-secondary-foreground/70 font-body">Foundation</p>
              </div>
            </div>
            <p className="font-body text-secondary-foreground/80 leading-relaxed">
              Empowering men and women transitioning back into society since 2017. 
              Based in Cincinnati, Ohio.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <a href="#mission" className="font-body text-secondary-foreground/80 hover:text-primary transition-colors">Our Mission</a>
              <a href="#founder" className="font-body text-secondary-foreground/80 hover:text-primary transition-colors">Our Founder</a>
              <a href="#help" className="font-body text-secondary-foreground/80 hover:text-primary transition-colors">How to Help</a>
              <a href="#contact" className="font-body text-secondary-foreground/80 hover:text-primary transition-colors">Contact Us</a>
            </nav>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Get Support</h4>
            <p className="font-body text-secondary-foreground/80 leading-relaxed mb-4">
              Are you or someone you know looking for help with re-entry? Reach out to us today.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 font-body font-semibold text-primary hover:text-gold-light transition-colors"
            >
              Contact Us →
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-secondary-foreground/20 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-secondary-foreground/60">
            © {currentYear} Kathryn Betts Foundation. All rights reserved.
          </p>
          <p className="font-body text-sm text-secondary-foreground/60 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for the community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
