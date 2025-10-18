import { Button } from "@/components/ui/button";
import { Feather } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <Feather className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">BlogEase AI</span>
        </Link>
        
        <div className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Home
          </Link>
          <Link to="/#tools" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Tools
          </Link>
          <Link to="/pricing" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Pricing
          </Link>
          <Link to="/#about" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            About
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" asChild>
            <Link to="/auth">Login</Link>
          </Button>
          <Button asChild>
            <Link to="/auth">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
