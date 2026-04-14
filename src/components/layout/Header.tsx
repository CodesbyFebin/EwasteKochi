import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_NAME, CONTACT_PHONE } from "@/constants/content";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            ♻️
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl leading-none">{SITE_NAME}</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Certified ITAD · Kerala</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/services" className="text-sm font-medium hover:text-green-600 transition-colors">Services</Link>
          <Link to="/sell-electronics-kochi" className="text-sm font-medium hover:text-green-600 transition-colors">Sell Electronics</Link>
          <Link to="/hard-drive-destruction-kochi" className="text-sm font-medium hover:text-green-600 transition-colors">Data Destruction</Link>
          <Link to="/master-guide" className="text-sm font-medium hover:text-green-600 transition-colors">Master Guide</Link>
          <Link to="/blog" className="text-sm font-medium hover:text-green-600 transition-colors">Resources</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href={`tel:${CONTACT_PHONE}`} className="flex items-center gap-2 text-sm font-semibold">
            <Phone className="w-4 h-4 text-green-600" />
            {CONTACT_PHONE}
          </a>
          <Button className="bg-green-600 hover:bg-green-700 text-white gap-2">
            Get Free Quote <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t p-4 flex flex-col gap-4 shadow-xl animate-in fade-in slide-in-from-top-5">
          <Link to="/services" className="text-lg font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link to="/locations" className="text-lg font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Locations</Link>
          <Link to="/blog" className="text-lg font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Resources</Link>
          <Link to="/about" className="text-lg font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <div className="pt-4 border-t flex flex-col gap-4">
            <a href={`tel:${CONTACT_PHONE}`} className="flex items-center gap-2 font-bold text-lg">
              <Phone className="w-5 h-5 text-green-600" />
              {CONTACT_PHONE}
            </a>
            <Button className="bg-green-600 hover:bg-green-700 text-white w-full py-6 text-lg">
              Get Free Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
