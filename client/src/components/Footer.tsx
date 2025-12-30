import { Link } from "wouter";
import { handleSmoothScroll } from "@/lib/scroll-utils";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold font-display tracking-tight text-white">
              HQAI<span className="text-white/40">.TECH</span>
            </Link>
            <p className="mt-4 max-w-sm text-muted-foreground text-sm leading-relaxed">
              Building the future with high-quality AI solutions and modern web technologies. Fast, custom, and scalable.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#about" onClick={(e) => handleSmoothScroll(e, "#about")} className="hover:text-white transition-colors cursor-pointer">About</a></li>
              <li><a href="#services" onClick={(e) => handleSmoothScroll(e, "#services")} className="hover:text-white transition-colors cursor-pointer">Services</a></li>
              <li><a href="#products" onClick={(e) => handleSmoothScroll(e, "#products")} className="hover:text-white transition-colors cursor-pointer">Products</a></li>
              <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")} className="hover:text-white transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-white/5 pt-8 text-center md:text-left">
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} HQAI Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
