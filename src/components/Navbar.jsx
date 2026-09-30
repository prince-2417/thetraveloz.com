import React, { useState } from 'react';
import { Compass, Globe, Menu, X, Sparkles, ChevronDown } from 'lucide-react';
import { CURRENCIES } from '../data/travelData';

export default function Navbar({ currency, setCurrency, onOpenQuoteModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'Flights', href: '/flights' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Holiday Deals', href: '/holiday-deals' },
    { name: 'Airlines', href: '/airlines' },
    { name: 'Car Rentals', href: '/car-rentals' },
    { name: 'Why Us', href: '/why-us' },
    { name: 'Travel Guides', href: '/travel-guides' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <header className="navbar-header">
      {/* Top Banner Bar */}
      <div className="top-banner">
        <div className="container banner-inner">
          <div className="banner-left">
            <span className="badge-live"><Sparkles className="icon-sm" /> 24/7 EXCLUSIVE CONCIERGE</span>
            <span className="banner-text">Save up to 30% on Unpublished Fares & Phone-Only Specials</span>
          </div>
          <div className="banner-right">
            {/* Currency Selector */}
            <div className="currency-selector">
              <button 
                className="currency-btn"
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                aria-label="Select currency"
              >
                <Globe className="icon-xs" />
                <span>{currency.code} ({currency.symbol})</span>
                <ChevronDown className="icon-xs opacity-75" />
              </button>
              {currencyDropdownOpen && (
                <div className="currency-dropdown">
                  {Object.values(CURRENCIES).map((curr) => (
                    <button
                      key={curr.code}
                      className={`currency-option ${curr.code === currency.code ? 'active' : ''}`}
                      onClick={() => {
                        setCurrency(curr);
                        setCurrencyDropdownOpen(false);
                      }}
                    >
                      {curr.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="main-nav">
        <div className="container nav-inner">
          {/* Brand Logo */}
          <a href="/" className="brand-logo">
            <div className="logo-icon-wrapper">
              <Compass className="logo-compass" />
            </div>
            <div className="logo-text">
              <span className="logo-main">TheTravelOz</span>
              <span className="logo-sub">AUSTRALIA TRAVEL IDEAS</span>
            </div>
          </a>

          {/* Nav Links Desktop */}
          <nav className="desktop-menu">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`nav-link ${window.location.pathname === link.href ? 'active' : ''}`}>
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="nav-actions">
            <button className="quote-cta-btn" onClick={onOpenQuoteModal}>
              <span className="quote-label-desktop">Request Free Quote</span>
              <span className="quote-label-mobile">Get Quote</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button 
              className="hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="icon-md" /> : <Menu className="icon-md" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-inner">
            <nav className="mobile-nav-links">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="mobile-drawer-footer">
              <button 
                className="mobile-quote-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
              >
                Request Custom Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
