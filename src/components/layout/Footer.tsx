import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">N</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">NGO Tools Hub</h3>
                <p className="text-sm text-secondary-foreground/70">Simple Tools for Indian NGOs</p>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80 max-w-md">
              Empowering Indian NGOs, Samitis, and Trusts with simple, ready-to-use document generation tools. No coding required.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li><Link to="/tools" className="hover:text-primary transition-colors">All Tools</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-semibold mb-4">Popular Tools</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li><Link to="/tools/donation-receipt" className="hover:text-primary transition-colors">Donation Receipt</Link></li>
              <li><Link to="/tools/member-registration" className="hover:text-primary transition-colors">Member Registration</Link></li>
              <li><Link to="/tools/meeting-minutes" className="hover:text-primary transition-colors">Meeting Minutes</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/70">
          <p>© {new Date().getFullYear()} NGO Tools Hub. Made with ❤️ for Indian Social Organizations.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
