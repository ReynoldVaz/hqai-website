import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Current Projects", href: "#products" },
    // { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // If we're not on the home page, navigate there first
    if (location !== "/") {
      window.location.href = "/" + id;
      return;
    }
    
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "glass-nav py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="z-50 relative">
          <img src="/hqai_web_logo_2.png" alt="HQAI Technologies" className="h-8 md:h-12 w-auto" />
        </Link>
        {/* <Link href="/" className="text-xl md:text-2xl font-bold font-display tracking-tight text-white z-50 relative">
          HQAI<span className="text-white"> Technologies</span>
        </Link> */}

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          {/* <a
            href="/api/download-code"
            download="hqai-website.zip"
            className="p-2.5 text-muted-foreground hover:text-white transition-colors"
            data-testid="button-download-code"
            title="Download source code"
          >
            <Download size={20} />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-white text-black hover:bg-white/90 transition-colors"
          >
            Start Project
          </a> */}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 bg-background border-b border-white/10 p-6 pt-24 md:hidden flex flex-col gap-6 shadow-2xl"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-lg font-medium text-muted-foreground hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              {/* <a
                href="/api/download-code"
                download="hqai-website.zip"
                className="flex items-center gap-2 px-4 py-3 text-center font-semibold rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10"
                data-testid="button-download-code-mobile"
              >
                <Download size={18} />
                Download Code
              </a> */}
              {/* <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "#contact")}
                className="px-5 py-3 text-center font-semibold rounded-lg bg-white text-black hover:bg-white/90"
              >
                Start Project
              </a> */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
