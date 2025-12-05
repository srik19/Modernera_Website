import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <p className="font-body text-sm font-semibold text-primary uppercase tracking-wider mb-4">Contact Us</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Seeking Support? We're Here to Help
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10">
              Whether you're looking for assistance with re-entry, want to volunteer, or have questions about 
              our programs, we'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center shadow-gold flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">Location</h3>
                  <p className="font-body text-muted-foreground">Cincinnati, Ohio</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center shadow-gold flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">Phone</h3>
                  <p className="font-body text-muted-foreground">Contact us for phone details</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center shadow-gold flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">Email</h3>
                  <p className="font-body text-muted-foreground">Send us a message through the form</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-lift border border-border">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-2 block">First Name</label>
                  <Input
                    type="text"
                    placeholder="John"
                    required
                    className="h-12 rounded-xl"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-2 block">Last Name</label>
                  <Input
                    type="text"
                    placeholder="Doe"
                    required
                    className="h-12 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-2 block">Email</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="h-12 rounded-xl"
                />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea
                  placeholder="How can we help you?"
                  required
                  className="min-h-32 rounded-xl resize-none"
                />
              </div>
              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
