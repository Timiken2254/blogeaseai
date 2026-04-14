import { Button } from "@/components/ui/button";
import { Feather, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const productLinks = [
  {
    title: "AI Blog Writer",
    description: "Generate full blog posts from a topic",
    href: "/products/blog-writer",
  },
  {
    title: "SEO Optimizer",
    description: "Boost rankings with smart SEO tools",
    href: "/products/seo-optimizer",
  },
  {
    title: "Content Rewriter",
    description: "Refresh & improve existing content",
    href: "/products/content-rewriter",
  },
  {
    title: "Headline Generator",
    description: "Craft click-worthy titles instantly",
    href: "/products/headline-generator",
  },
  {
    title: "Keyword Research",
    description: "Discover high-impact keywords",
    href: "/products/keyword-research",
  },
  {
    title: "Social Media Converter",
    description: "Turn blogs into social posts",
    href: "/products/social-converter",
  },
];

const Navbar = () => {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
          <Feather className="h-6 w-6 text-primary" />
          <span className="font-display text-xl font-bold tracking-tight">BlogEase AI</span>
        </Link>
        
        <div className="hidden items-center gap-1 md:flex">
          <Link to="/" className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground">
            Home
          </Link>
          
          {/* Products Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
            >
              Products
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
            </button>
            
            {productsOpen && (
              <div className="absolute left-1/2 top-full mt-2 w-[520px] -translate-x-1/2 animate-scale-in rounded-xl border bg-card p-4 shadow-lg">
                <div className="grid grid-cols-2 gap-1">
                  {productLinks.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setProductsOpen(false)}
                      className="rounded-lg p-3 transition-colors hover:bg-muted"
                    >
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{item.description}</p>
                    </Link>
                  ))}
                </div>
                <div className="mt-3 border-t pt-3">
                  <Link
                    to="/auth"
                    onClick={() => setProductsOpen(false)}
                    className="flex items-center gap-2 rounded-lg p-3 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
                  >
                    View all tools →
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          <Link to="/#about" className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground">
            About
          </Link>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/auth">Log in</Link>
          </Button>
          <Button size="sm" className="rounded-full px-5" asChild>
            <Link to="/auth">Get Started Free</Link>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden rounded-lg p-2 text-foreground/70 hover:bg-muted"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t bg-card px-4 pb-4 pt-2 md:hidden animate-fade-in">
          <div className="space-y-1">
            <Link to="/" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted">Home</Link>
            <p className="px-3 pt-3 pb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Products</p>
            {productLinks.map((item) => (
              <Link key={item.href} to={item.href} onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2 text-sm hover:bg-muted">
                {item.title}
              </Link>
            ))}
            <Link to="/#about" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted">About</Link>
          </div>
          <div className="mt-4 space-y-2">
            <Button variant="outline" className="w-full" asChild>
              <Link to="/auth" onClick={() => setMobileOpen(false)}>Log in</Link>
            </Button>
            <Button className="w-full rounded-full" asChild>
              <Link to="/auth" onClick={() => setMobileOpen(false)}>Get Started Free</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
