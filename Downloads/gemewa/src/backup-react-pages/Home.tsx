import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { locations } from '../data/locations';
import { blogs, getRecentBlogs } from '../data/blogs';
import { pillars } from '../data/pillars';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Process from '../components/sections/Process';
import TrustBar from '../components/sections/TrustBar';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import CaseStudies from '../components/sections/CaseStudies';
import SEOContentHub from '../components/sections/SEOContentHub';
import Schema from '../components/seo/Schema';
import Breadcrumbs from '../components/seo/Breadcrumbs';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '../constants/content';

const Home: React.FC = () => {
  // Get featured content
  const featuredServices = services.slice(0, 6);
  const featuredLocations = locations.slice(0, 12);
  const recentBlogs = getRecentBlogs(6);
  const featuredPillars = pillars.slice(0, 3);

  // Homepage structured data
  const homeSchema = {
    '@type': 'Organization',
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-7500555454',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
    sameAs: [
      'https://wa.me/917500555454',
    ],
    serviceArea: {
      '@type': 'City',
      name: 'Kochi',
      addressRegion: 'Kerala',
      addressCountry: 'IN',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'E-Waste Services',
      itemListElement: services.slice(0, 3).map(service => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
        }
      }))
    }
  };

  return (
    <>
      <Helmet>
        <title>{SITE_NAME} | Certified E-Waste Recycling Kochi | Free Pickup</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="keywords" content="e-waste recycling kochi, electronic waste disposal kochi, e-waste pickup kerala, ewaste kochi, electronic recycling kochi, kspcb authorised" />
        <meta property="og:title" content={`${SITE_NAME} | Certified E-Waste Recycling Kochi`} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${SITE_NAME} | Certified E-Waste Recycling Kochi`} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.jpg`} />
        <link rel="canonical" href={SITE_URL} />
      </Helmet>

      <Schema data={homeSchema} />

      {/* Hero Section */}
      <Hero />

      {/* Trust Indicators */}
      <TrustBar />

      {/* Services Overview */}
      <Services services={featuredServices} />

      {/* Process Section */}
      <Process />

      {/* Testimonials */}
      <Testimonials />

      {/* Case Studies */}
      <CaseStudies />

      {/* FAQ Section */}
      <FAQ />

      {/* SEO Content Hub */}
      <SEOContentHub pageTitle="E-Waste Management" category="General" />

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Schedule Your E-Waste Pickup?
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers. Free doorstep collection, KSPCB authorised, and certificate included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917500555454"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              💬 WhatsApp Us Now
            </a>
            <a
              href="tel:+917500555454"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              📞 Call +91 7500555454
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;