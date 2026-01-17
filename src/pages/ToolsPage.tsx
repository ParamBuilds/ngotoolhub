import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  UserPlus, 
  Receipt, 
  IdCard, 
  FileText, 
  ScrollText,
  ArrowRight 
} from "lucide-react";

const tools = [
  {
    id: "member-registration",
    name: "Member Registration Formatter",
    description: "Generate clean, formal membership entry text for your NGO records. Includes full name, father/husband name, DOB, mobile, address, ID number, and membership type.",
    icon: UserPlus,
    category: "Registration",
    free: true,
  },
  {
    id: "donation-receipt",
    name: "Donation Receipt Generator",
    description: "Create professional donation receipts with auto-generated receipt numbers. Perfect for 80G compliance and donor records.",
    icon: Receipt,
    category: "Finance",
    free: true,
  },
  {
    id: "volunteer-id",
    name: "Volunteer ID Card Generator",
    description: "Generate structured ID card details with volunteer name, role, validity, NGO name, and emergency contact. Ready for printing.",
    icon: IdCard,
    category: "Identity",
    free: false,
  },
  {
    id: "meeting-minutes",
    name: "Meeting Minutes Generator",
    description: "Create formal meeting minutes in legal-style language. Includes attendees, agenda, and decisions taken.",
    icon: FileText,
    category: "Documentation",
    free: true,
  },
  {
    id: "resolution",
    name: "Resolution Text Generator",
    description: "Generate official resolution formats suitable for registers and government submissions.",
    icon: ScrollText,
    category: "Legal",
    free: false,
  },
];

const ToolsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              NGO Document Tools
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional document generators for Indian NGOs, Samitis, Trusts, and Social Organizations. 
              Fill forms, preview output, and download ready-to-use formats.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {tools.map((tool) => (
              <Link
                key={tool.id}
                to={`/tools/${tool.id}`}
                className="tool-card group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <tool.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded">
                        {tool.category}
                      </span>
                      {tool.free ? (
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                          Free Preview
                        </span>
                      ) : (
                        <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-0.5 rounded">
                          Premium
                        </span>
                      )}
                    </div>
                    <h2 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {tool.name}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Use This Tool
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ToolsPage;
