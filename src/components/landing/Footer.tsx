import { Feather } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Feather className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">BlogEase AI</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Create, Optimize, and Grow — Smarter with AI.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/#tools" className="text-muted-foreground transition-colors hover:text-foreground">
                  Tools
                </Link>
              </li>
              <li>
                <Link to="/#pricing" className="text-muted-foreground transition-colors hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/#" className="text-muted-foreground transition-colors hover:text-foreground">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/#about" className="text-muted-foreground transition-colors hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link to="/#" className="text-muted-foreground transition-colors hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/#" className="text-muted-foreground transition-colors hover:text-foreground">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/#" className="text-muted-foreground transition-colors hover:text-foreground">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/#" className="text-muted-foreground transition-colors hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 BlogEase AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
