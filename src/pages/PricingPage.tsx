import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that works best for your NGO. No hidden fees, no surprises.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {/* Free */}
            <div className="bg-card rounded-2xl p-8 border border-border card-shadow">
              <h3 className="font-bold text-xl mb-2">Free</h3>
              <p className="text-muted-foreground text-sm mb-6">Try all tools for free</p>
              <div className="mb-8">
                <span className="text-4xl font-bold">₹0</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span>Preview all documents</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span>Copy text (limited)</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span>3 exports per day</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <X className="w-5 h-5 shrink-0" />
                  <span>PDF download</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <X className="w-5 h-5 shrink-0" />
                  <span>Unlimited access</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full" size="lg">
                Get Started Free
              </Button>
            </div>

            {/* Monthly */}
            <div className="bg-card rounded-2xl p-8 border-2 border-primary card-shadow relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full">
                Best Value
              </div>
              <h3 className="font-bold text-xl mb-2">Monthly Plan</h3>
              <p className="text-muted-foreground text-sm mb-6">For regular users</p>
              <div className="mb-8">
                <span className="text-4xl font-bold">₹199</span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span>Unlimited documents</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span>All tools included</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span>PDF download</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span>Email support</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span>Cancel anytime</span>
                </li>
              </ul>
              <Button className="w-full" size="lg">
                Subscribe Now
              </Button>
            </div>

            {/* Lifetime */}
            <div className="bg-secondary text-secondary-foreground rounded-2xl p-8 card-shadow">
              <h3 className="font-bold text-xl mb-2">Lifetime Access</h3>
              <p className="text-secondary-foreground/80 text-sm mb-6">Pay once, use forever</p>
              <div className="mb-8">
                <span className="text-4xl font-bold">₹499</span>
                <span className="text-secondary-foreground/80 text-sm"> one-time</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-secondary-foreground/90">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span>Everything in Monthly</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-secondary-foreground/90">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span>Lifetime updates</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-secondary-foreground/90">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-secondary-foreground/90">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span>Early access to new tools</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-secondary-foreground/90">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span>No recurring payments</span>
                </li>
              </ul>
              <Button variant="hero" className="w-full" size="lg">
                Get Lifetime Access
              </Button>
            </div>
          </div>

          {/* Pay Per Document */}
          <div className="max-w-2xl mx-auto text-center bg-muted/50 rounded-2xl p-8">
            <h3 className="font-bold text-xl mb-2">Need Just One Document?</h3>
            <p className="text-muted-foreground mb-4">
              Pay ₹29 per document. Perfect for occasional use with no commitment.
            </p>
            <Button variant="outline" size="lg">
              Pay Per Document - ₹29
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
