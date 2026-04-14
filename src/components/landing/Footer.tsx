import { Feather } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Feather className="h-5 w-5 text-primary" />
              <span className="font-display text-lg font-bold">BlogEase AI</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Create, optimize, and grow your blog — smarter with AI. Free for everyone.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold">Products</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/products/blog-writer" className="text-muted-foreground transition-colors hover:text-foreground">AI Blog Writer</Link></li>
              <li><Link to="/products/seo-optimizer" className="text-muted-foreground transition-colors hover:text-foreground">SEO Optimizer</Link></li>
              <li><Link to="/products/content-rewriter" className="text-muted-foreground transition-colors hover:text-foreground">Content Rewriter</Link></li>
              <li><Link to="/products/headline-generator" className="text-muted-foreground transition-colors hover:text-foreground">Headline Generator</Link></li>
              <li><Link to="/products/keyword-research" className="text-muted-foreground transition-colors hover:text-foreground">Keyword Research</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold">Company</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/#about" className="text-muted-foreground transition-colors hover:text-foreground">About</Link></li>
              <li><Link to="/#tools" className="text-muted-foreground transition-colors hover:text-foreground">Tools</Link></li>
              <li><a href="mailto:support@blogease.ai" className="text-muted-foreground transition-colors hover:text-foreground">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold">Legal</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/terms" className="text-muted-foreground transition-colors hover:text-foreground">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground transition-colors hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/refund" className="text-muted-foreground transition-colors hover:text-foreground">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} BlogEase AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
