import { Link, useLocation } from "wouter";
import { handleSmoothScroll } from "@/lib/scroll-utils";

export function Footer() {
  const [location] = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate there first
    if (location !== "/") {
      window.location.href = "/" + hash;
      return;
    }
    
    // Otherwise use the smooth scroll utility
    handleSmoothScroll(e, hash);
  };

  return (
    <footer className="border-t border-white/5 bg-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold font-display tracking-tight text-white">
              HQAI Technologies
            </Link>
            <p className="mt-4 max-w-sm text-muted-foreground text-sm leading-relaxed">
              Building the future with high-quality AI solutions and modern web technologies. Fast, custom, and scalable.
            </p>
          </div> */}
          
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#about" onClick={(e) => handleNavClick(e, "#about")} className="hover:text-white transition-colors cursor-pointer">About</a></li>
              {/* <li><a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-white transition-colors cursor-pointer">Services</a></li> */}
              <li><a href="#products" onClick={(e) => handleNavClick(e, "#products")} className="hover:text-white transition-colors cursor-pointer">Current Projects</a></li>
              {/* <li><a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="hover:text-white transition-colors cursor-pointer">Contact</a></li> */}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</Link></li>
              {/* <li><Link href="/terms-of-service" className="hover:text-white transition-colors cursor-pointer">Terms of Service</Link></li> */}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-white/5 pt-8">
          <div className="text-center md:text-left space-y-3">
            <p className="text-xs text-muted-foreground/60">
              © {new Date().getFullYear()} HQAI Technologies. All Rights Reserved.
            </p>
            <p className="text-xs text-muted-foreground/60">
              HQAI Technologies is a registered proprietorship firm in India. 
              Registered Office: H.NO 149/1 Macklem Macasana Salcete Goa 403709
              <br />
              Contact Us:{" "}
              <a href="mailto:admin@hqai.site" className="text-white/70 hover:text-white transition-colors">
                admin@hqai.site
              </a>
              {" "}| +91 9657712718.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
