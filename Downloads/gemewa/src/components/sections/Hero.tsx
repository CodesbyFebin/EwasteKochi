import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Certified E-Waste Recycling
            <span className="text-green-600 block">in Kochi</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            KSPCB Authorised • Free Doorstep Pickup • NIST Certified Data Destruction.
            Professional e-waste recycling for homes and businesses across 569 locations in Kochi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://wa.me/917500555454"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg"
            >
              💬 Book Free Pickup Now
            </a>
            <a
              href="/services"
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors"
            >
              Explore Services
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>KSPCB Authorised</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Free Corporate Pickup</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Certificate of Destruction</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>569 Service Locations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;