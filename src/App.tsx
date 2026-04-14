import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import ServicesPage from "@/pages/ServicesPage";
import BlogPage from "@/pages/BlogPage";
import LocationsPage from "@/pages/LocationsPage";
import MasterGuide from "@/pages/MasterGuide";
import SellElectronics from "@/pages/SellElectronics";
import CashifyComparison from "@/pages/CashifyComparison";
import HardDriveDestruction from "@/pages/HardDriveDestruction";
import DPDPAct from "@/pages/DPDPAct";
import { SITE_NAME } from "@/constants/content";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col font-sans antialiased">
          <Helmet>
            <title>{SITE_NAME} - Certified ITAD & E-Waste Recycling Kochi</title>
            <meta name="description" content="Kerala's #1 Certified ITAD facility. Professional e-waste recycling, data destruction, and IT asset disposition services in Kochi. DPDP Act 2023 compliant." />
            <meta name="keywords" content="e-waste recycling kochi, ITAD kochi, data destruction kochi, hard drive shredding kochi, sell old laptop kochi, sell old phone kochi, e-waste pickup kochi" />
          </Helmet>
          
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/locations" element={<LocationsPage />} />
              <Route path="/master-guide" element={<MasterGuide />} />
              <Route path="/sell-electronics-kochi" element={<SellElectronics />} />
              <Route path="/cashify-vs-ewastekochi" element={<CashifyComparison />} />
              <Route path="/hard-drive-destruction-kochi" element={<HardDriveDestruction />} />
              <Route path="/dpdp-act-kochi" element={<DPDPAct />} />
              {/* Fallback to home for other routes for now */}
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
