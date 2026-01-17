import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Users, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient opacity-95" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Award className="w-4 h-4" />
            Trusted by 500+ Indian NGOs
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in leading-tight">
            Simple Tools for <br className="hidden sm:block" />
            <span className="text-primary-foreground/90">Indian NGOs</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 max-w-2xl mx-auto animate-fade-in">
            Generate donation receipts, meeting minutes, member registrations, and more. 
            No manual drafting. Ready-to-use formats in seconds.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/tools">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                Explore All Tools
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/tools/donation-receipt">
              <Button variant="hero" size="xl" className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Try Donation Receipt Free
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/20 max-w-lg mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-primary-foreground mb-1">
                <FileText className="w-5 h-5" />
                <span className="text-2xl font-bold">5+</span>
              </div>
              <p className="text-sm text-primary-foreground/70">Free Tools</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-primary-foreground mb-1">
                <Users className="w-5 h-5" />
                <span className="text-2xl font-bold">500+</span>
              </div>
              <p className="text-sm text-primary-foreground/70">NGOs Served</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-primary-foreground mb-1">
                <Award className="w-5 h-5" />
                <span className="text-2xl font-bold">₹29</span>
              </div>
              <p className="text-sm text-primary-foreground/70">Per Document</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
