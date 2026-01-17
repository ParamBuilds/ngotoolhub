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
    description: "Generate clean, formal membership entry text for your NGO records.",
    icon: UserPlus,
    category: "Registration",
    free: true,
  },
  {
    id: "donation-receipt",
    name: "Donation Receipt Generator",
    description: "Create professional donation receipts with auto-generated receipt numbers.",
    icon: Receipt,
    category: "Finance",
    free: true,
  },
  {
    id: "volunteer-id",
    name: "Volunteer ID Card Generator",
    description: "Generate structured ID card details ready for printing.",
    icon: IdCard,
    category: "Identity",
    free: false,
  },
  {
    id: "meeting-minutes",
    name: "Meeting Minutes Generator",
    description: "Create formal meeting minutes in legal-style language.",
    icon: FileText,
    category: "Documentation",
    free: true,
  },
  {
    id: "resolution",
    name: "Resolution Text Generator",
    description: "Generate official resolution formats for registers and submissions.",
    icon: ScrollText,
    category: "Legal",
    free: false,
  },
];

const ToolsGrid = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            All-in-One NGO Document Tools
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our collection of ready-to-use document generators. 
            Fill the form, preview, and download. It's that simple.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.id}
              to={`/tools/${tool.id}`}
              className="tool-card group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <tool.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded">
                      {tool.category}
                    </span>
                    {tool.free && (
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                        Free Preview
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {tool.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Use Tool
                </span>
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/tools">
            <Button variant="outline" size="lg">
              View All Tools
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ToolsGrid;
