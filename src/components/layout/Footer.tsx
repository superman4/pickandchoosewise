
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-12 mt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="text-leaf-600 text-2xl">🥕</span>
              <span className="font-display font-bold text-xl">
                PickPerfect<span className="text-leaf-600">.org</span>
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Helping consumers make better choices, reduce food waste, and enjoy the best quality produce possible.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/fruits" className="text-muted-foreground hover:text-foreground transition-colors">
                  Fruits
                </Link>
              </li>
              <li>
                <Link to="/vegetables" className="text-muted-foreground hover:text-foreground transition-colors">
                  Vegetables
                </Link>
              </li>
              <li>
                <Link to="/pantry" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pantry Items
                </Link>
              </li>
              <li>
                <Link to="/herbs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Herbs & Spices
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/guides" className="text-muted-foreground hover:text-foreground transition-colors">
                  Seasonal Guides
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-muted-foreground hover:text-foreground transition-colors">
                  Interactive Tools
                </Link>
              </li>
              <li>
                <Link to="/printables" className="text-muted-foreground hover:text-foreground transition-colors">
                  Printable Guides
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-10 pt-6 text-center text-muted-foreground">
          <p>© {currentYear} PickPerfect.org. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
