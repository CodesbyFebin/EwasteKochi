import { Link } from "react-router-dom";
import { SITE_NAME, CONTACT_PHONE, CONTACT_EMAIL, ADDRESS } from "@/constants/content";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                ♻️
              </div>
              <span className="font-bold text-xl text-white">{SITE_NAME}</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Kerala's #1 certified e-waste recycling and ITAD company. NIST/DoD hard drive shredding, data destruction, and EPR-compliant recycling across Kochi and Ernakulam.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-green-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-green-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-green-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-green-500 transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6">Our Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">All Services</Link></li>
              <li><Link to="/sell-electronics-kochi" className="hover:text-white transition-colors">Sell Old Laptop Kochi</Link></li>
              <li><Link to="/hard-drive-destruction-kochi" className="hover:text-white transition-colors">Hard Drive Shredding</Link></li>
              <li><Link to="/cashify-vs-ewastekochi" className="hover:text-white transition-colors">Cashify vs EWaste Kochi</Link></li>
              <li><Link to="/dpdp-act-kochi" className="hover:text-white transition-colors">DPDP Act Compliance</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Resources</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/master-guide" className="hover:text-white transition-colors">E-Waste Master Guide</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">E-Waste Rules Kerala</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">DPDP Act 2023 Guide</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Certifications</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-green-600 shrink-0" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-green-600 shrink-0" />
                <a href={`tel:${CONTACT_PHONE}`} className="hover:text-white">{CONTACT_PHONE}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-green-600 shrink-0" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">{CONTACT_EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2025 {SITE_NAME} — All rights reserved. EPR Authorized · KSPCB Approved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
