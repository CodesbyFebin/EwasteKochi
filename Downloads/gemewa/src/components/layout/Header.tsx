import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">EK</span>
            </div>
            <span className="text-xl font-bold text-gray-900">EWaste Kochi</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-green-600 transition-colors">
              Services
            </Link>
            <Link to="/locations" className="text-gray-700 hover:text-green-600 transition-colors">
              Locations
            </Link>
            <Link to="/pillars" className="text-gray-700 hover:text-green-600 transition-colors">
              Knowledge Hub
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-green-600 transition-colors">
              Blog
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/917500555454"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              💬 WhatsApp
            </a>
            <a
              href="tel:+917500555454"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              📞 Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/locations"
                className="text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Locations
              </Link>
              <Link
                to="/pillars"
                className="text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Knowledge Hub
              </Link>
              <Link
                to="/blog"
                className="text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <a
                  href="https://wa.me/917500555454"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  💬 WhatsApp
                </a>
                <a
                  href="tel:+917500555454"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium text-center"
                >
                  📞 Call Now
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;