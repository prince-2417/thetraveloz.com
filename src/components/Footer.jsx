import React, { useState } from 'react';
import { Compass, Phone, Mail, MapPin, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="site-footer">
      {/* Newsletter Sub-Banner */}
      <div className="footer-newsletter-banner">
        <div className="container newsletter-inner">
          <div className="newsletter-text">
            <h3>Subscribe to Secret Flight & Island Deals</h3>
            <p>Get exclusive error-fares, seasonal price drops, and Seychelles resort promotions delivered to your inbox.</p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            {subscribed ? (
              <div className="newsletter-success">
                <CheckCircle2 className="icon-sm text-emerald" /> Subscribed! Welcome to TheTravelOz VIP list.
              </div>
            ) : (
              <>
                <input 
                  type="email" 
                  required 
                  placeholder="Enter your email address"
                  className="newsletter-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="newsletter-btn">
                  <span>Subscribe</span>
                  <Send className="icon-xs" />
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <a href="#" className="brand-logo footer-logo">
              <div className="logo-icon-wrapper">
                <Compass className="logo-compass" />
              </div>
              <div className="logo-text">
                <span className="logo-main">TheTravelOz</span>
                <span className="logo-sub">GLOBAL GETAWAYS & SEYCHELLES</span>
              </div>
            </a>
            <p className="footer-about">
              TheTravelOz.com is your premier gateway for luxury island getaways, cheap international airfares, and customized vacation packages across Seychelles, Australia, and worldwide tropical destinations.
            </p>

            <div className="footer-hotlines">
              <div className="hotline-card">
                <Phone className="icon-sm text-cyan" />
                <div>
                  <span className="hl-label">US / Global Toll Free</span>
                  <a href="tel:+18885550199" className="hl-num">+1-888-555-0199</a>
                </div>
              </div>
              <div className="hotline-card">
                <Phone className="icon-sm text-cyan" />
                <div>
                  <span className="hl-label">Australia Direct Line</span>
                  <a href="tel:+61280000199" className="hl-num">+61-2-8000-0199</a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Top Destinations</h4>
            <ul className="footer-links-list">
              <li><a href="#destinations">Mahé Island, Seychelles</a></li>
              <li><a href="#destinations">Praslin & Anse Lazio</a></li>
              <li><a href="#destinations">La Digue Beach</a></li>
              <li><a href="#destinations">Sydney Harbour, Australia</a></li>
              <li><a href="#destinations">Great Barrier Reef</a></li>
              <li><a href="#destinations">Maldives Overwater Villas</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading">Travel Services</h4>
            <ul className="footer-links-list">
              <li><a href="#search">Cheap Flight Search</a></li>
              <li><a href="#search">Luxury Hotel Booking</a></li>
              <li><a href="#packages">All-Inclusive Packages</a></li>
              <li><a href="#airlines">Partner Airlines</a></li>
              <li><a href="#search">Cat Cocos Ferry Tickets</a></li>
              <li><a href="#search">Car Rentals</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading">Support & Trust</h4>
            <ul className="footer-links-list">
              <li><a href="#why-us">Why Choose Us</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
              <li><a href="#blog">Travel Guides & Blog</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Contact Concierge</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Trust Seals */}
      <div className="footer-bottom">
        <div className="container bottom-inner">
          <p className="copyright-text">
            © {new Date().getFullYear()} TheTravelOz.com. All Rights Reserved. Certified Independent Travel Agency.
          </p>

          <div className="trust-seals">
            <span className="trust-pill"><ShieldCheck className="icon-xs text-emerald" /> 256-Bit SSL Encrypted</span>
            <span className="trust-pill">IATA Accredited</span>
            <span className="trust-pill">ATOL Protected</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
