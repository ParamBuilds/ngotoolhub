import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const PricingPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Start free, upgrade when you need more. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Free */}
          <div className="bg-card rounded-xl p-6 border border-border card-shadow">
            <h3 className="font-bold text-lg mb-2">Free</h3>
            <p className="text-muted-foreground text-sm mb-4">Try before you buy</p>
            <div className="mb-6">
              <span className="text-3xl font-bold">₹0</span>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary" />
                Preview all documents
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary" />
                Copy text (limited)
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary" />
                3 exports per day
              </li>
            </ul>
            <Button variant="outline" className="w-full">Get Started</Button>
          </div>

          {/* Per Document */}
          <div className="bg-card rounded-xl p-6 border-2 border-primary card-shadow relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
              Most Popular
            </div>
            <h3 className="font-bold text-lg mb-2">Pay Per Document</h3>
            <p className="text-muted-foreground text-sm mb-4">Perfect for occasional use</p>
            <div className="mb-6">
              <span className="text-3xl font-bold">₹29</span>
              <span className="text-muted-foreground text-sm">/document</span>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary" />
                Full copy access
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary" />
                PDF download
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary" />
                No expiry
              </li>
            </ul>
            <Button className="w-full">Buy Now</Button>
          </div>

          {/* Lifetime */}
          <div className="bg-secondary text-secondary-foreground rounded-xl p-6 card-shadow">
            <h3 className="font-bold text-lg mb-2">Lifetime Access</h3>
            <p className="text-secondary-foreground/80 text-sm mb-4">Best value for NGOs</p>
            <div className="mb-6">
              <span className="text-3xl font-bold">₹499</span>
              <span className="text-secondary-foreground/80 text-sm"> one-time</span>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/90">
                <Check className="w-4 h-4 text-primary" />
                Unlimited documents
              </li>
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/90">
                <Check className="w-4 h-4 text-primary" />
                All tools included
              </li>
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/90">
                <Check className="w-4 h-4 text-primary" />
                Priority support
              </li>
            </ul>
            <Button variant="hero" className="w-full">Get Lifetime Access</Button>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link to="/pricing" className="text-primary hover:underline text-sm font-medium">
            View detailed pricing →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
