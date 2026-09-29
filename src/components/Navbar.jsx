import React, { useState } from 'react';
import { Compass, Phone, Globe, Menu, X, Sparkles, ChevronDown } from 'lucide-react';
import { CURRENCIES } from '../data/travelData';

export default function Navbar({ currency, setCurrency, onOpenQuoteModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'Flight & Hotel Search', href: '#search' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Holiday Deals', href: '#packages' },
    { name: 'Airlines', href: '#airlines' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Travel Guides', href: '#blog' },
    { name: 'FAQ', href: '#faq' },
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

            <a href="tel:+18885550199" className="top-phone-link">
              <Phone className="icon-xs" />
              <span>US Toll Free: +1-888-555-0199</span>
            </a>
            <a href="tel:+61280000199" className="top-phone-link hide-mobile">
              <Phone className="icon-xs" />
              <span>AU Direct: +61-2-8000-0199</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="main-nav">
        <div className="container nav-inner">
          {/* Brand Logo */}
          <a href="#" className="brand-logo">
            <div className="logo-icon-wrapper">
              <Compass className="logo-compass" />
            </div>
            <div className="logo-text">
              <span className="logo-main">TheTravelOz</span>
              <span className="logo-sub">GLOBAL GETAWAYS & SEYCHELLES</span>
            </div>
          </a>

          {/* Nav Links Desktop */}
          <nav className="desktop-menu">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="nav-actions">
            <a href="tel:+18885550199" className="call-cta-btn">
              <div className="call-icon-bg">
                <Phone className="icon-sm pulse-anim" />
              </div>
              <div className="call-text-col">
                <span className="call-lbl">24/7 AGENT LINE</span>
                <span className="call-num">+1-888-555-0199</span>
              </div>
            </a>

            <button className="quote-cta-btn" onClick={onOpenQuoteModal}>
              Request Free Quote
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
              <a href="tel:+18885550199" className="mobile-phone-btn">
                <Phone className="icon-sm" /> Call Toll Free: +1-888-555-0199
              </a>
              <a href="tel:+61280000199" className="mobile-phone-btn secondary">
                <Phone className="icon-sm" /> Call AU Desk: +61-2-8000-0199
              </a>
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
