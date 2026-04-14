import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AIChatBot from "@/components/ui/AIChatBot";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

import { lazy, Suspense } from "react";

// Lazy loaded pages
const Home = lazy(() => import("@/pages/Home"));
const ServicesIndex = lazy(() => import("@/pages/ServicesIndex"));
const ServiceDetail = lazy(() => import("@/pages/ServiceDetail"));
const LocationsIndex = lazy(() => import("@/pages/LocationsIndex"));
const LocationDetail = lazy(() => import("@/pages/LocationDetail"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const PillarPost = lazy(() => import("@/pages/PillarPost"));
const PillarPage = lazy(() => import("@/pages/PillarPage"));
const PillarsIndex = lazy(() => import("@/pages/PillarsIndex"));
const BlogPage = lazy(() => import("@/pages/BlogPage"));
const ITADPillarPage = lazy(() => import("@/pages/ITADPillarPage"));
const MasterGuide = lazy(() => import("@/pages/MasterGuide"));
const DPDPAct = lazy(() => import("@/pages/DPDPAct"));
const SellElectronics = lazy(() => import("@/pages/SellElectronics"));
const CashifyComparison = lazy(() => import("@/pages/CashifyComparison"));
const HardDriveDestruction = lazy(() => import("@/pages/HardDriveDestruction"));

import { SITE_NAME, SITE_URL } from "@/constants/content";

// SEO Component for global meta
function SEO() {
  return (
    <Helmet>
      <html lang="en" />
      <title>{SITE_NAME} | Certified ITAD & E-Waste Recycling Kerala</title>
      <meta name="description" content="KSPCB-Authorized e-waste collection in Kochi. NIST-certified hard drive shredding, laptop buyback & ITAD services. Avoid DPDP Act penalties up to ₹250Cr." />
      <meta name="keywords" content="e-waste recycling kochi, ITAD kochi, data destruction kochi, hard drive shredding kochi, sell old laptop kochi, e-waste pickup kochi, certified e-waste recycler kerala" />
      <link rel="canonical" href={SITE_URL} />
      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:title" content={`${SITE_NAME} - Certified ITAD & E-Waste Recycling Kerala`} />
      <meta property="og:description" content="KSPCB-Authorized e-waste collection in Kochi. NIST-certified hard drive shredding, laptop buyback & ITAD services." />
      <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:locale:alternate" content="ml_IN" />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ewastekochi" />
      <meta name="twitter:title" content={`${SITE_NAME} | E-Waste Recycling Kochi`} />
      <meta name="twitter:description" content="KSPCB-Authorized e-waste collection in Kochi. NIST-certified hard drive shredding, laptop buyback & ITAD services." />
      <meta name="twitter:image" content={`${SITE_URL}/og-image.jpg`} />
      {/* hreflang */}
      <link rel="alternate" hreflang="en-in" href={SITE_URL} />
      <link rel="alternate" hreflang="ml" href={`${SITE_URL}?lang=ml`} />
      <link rel="alternate" hreflang="ta" href={`${SITE_URL}?lang=ta`} />
      <link rel="alternate" hreflang="hi" href={`${SITE_URL}?lang=hi`} />
      <link rel="alternate" hreflang="x-default" href={SITE_URL} />
      {/* Sitemap */}
      <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
      {/* Resource Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://picsum.photos" />
    </Helmet>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <SEO />
        <div className="min-h-screen flex flex-col font-sans antialiased">
          <Header />
          <Breadcrumbs />
          <div className="flex-grow">
            <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><div className="animate-spin h-8 w-8 border-4 border-green-600 border-t-transparent rounded-full"></div></div>}>
              <Routes>
                {/* Homepage */}
                <Route path="/" element={<Home />} />

                {/* Services */}
                <Route path="/services" element={<ServicesIndex />} />
                <Route path="/services/:service" element={<ServiceDetail />} />

                {/* Locations */}
                <Route path="/locations" element={<LocationsIndex />} />
                <Route path="/locations/:slug" element={<LocationDetail />} />
                <Route path="/locations/:slug/:service" element={<LocationDetail />} />

                {/* Blog System */}
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPost />} />

                {/* Pillar System */}
                <Route path="/pillars" element={<PillarsIndex />} />
                <Route path="/:pillar" element={<PillarPage />} />
                <Route path="/:pillar/:cluster" element={<PillarPage />} />
                <Route path="/:pillar/:cluster/:post" element={<PillarPost />} />

                {/* Static Content Pages */}
                <Route path="/itad-kochi" element={<ITADPillarPage />} />
                <Route path="/itad-kochi-guide" element={<ITADPillarPage />} />
                <Route path="/master-guide" element={<MasterGuide />} />
                <Route path="/dpdp-act-kochi" element={<DPDPAct />} />
                <Route path="/sell-electronics-kochi" element={<SellElectronics />} />
                <Route path="/cashify-vs-ewastekochi" element={<CashifyComparison />} />
                <Route path="/hard-drive-destruction-kochi" element={<HardDriveDestruction />} />

                {/* Fallback to home */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </div>
          <Footer />
          <AIChatBot />
        </div>
      </Router>
    </HelmetProvider>
  );
}