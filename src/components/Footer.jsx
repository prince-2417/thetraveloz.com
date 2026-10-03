import React, { useState } from 'react';
import { Compass, Send, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (event) => {
    event.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="site-footer">
      <div className="footer-newsletter-banner">
        <div className="container newsletter-inner">
          <div className="newsletter-text">
            <h3>Australia travel ideas, straight to your inbox</h3>
            <p>Get destination inspiration, seasonal ideas and new TheTravelOz guides.</p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            {subscribed ? <div className="newsletter-success"><CheckCircle2 className="icon-sm text-emerald" /> You are subscribed to TheTravelOz updates.</div> : <><input type="email" required placeholder="Enter your email address" className="newsletter-input" value={email} onChange={(event) => setEmail(event.target.value)} /><button type="submit" className="newsletter-btn">Subscribe <Send className="icon-xs" /></button></>}
          </form>
        </div>
      </div>
      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-brand-col">
            <a href="/" className="brand-logo footer-logo"><div className="logo-icon-wrapper"><Compass className="logo-compass" /></div><div className="logo-text"><span className="logo-main">TheTravelOz</span></div></a>
            <p className="footer-about">TheTravelOz.com helps you discover Australia through destination guides, holiday ideas and personalised trip enquiries.</p>
          </div>
          <div className="footer-links-col"><h4 className="footer-heading">Top Destinations</h4><ul className="footer-links-list"><li><a href="/destinations">Sydney Harbour</a></li><li><a href="/destinations">Great Barrier Reef</a></li><li><a href="/destinations">Uluru & Red Centre</a></li><li><a href="/destinations">Melbourne & Great Ocean Road</a></li><li><a href="/destinations">Tasmania Wilderness</a></li></ul></div>
          <div className="footer-links-col"><h4 className="footer-heading">Travel Planning</h4><ul className="footer-links-list"><li><a href="/flights">Flight Options</a></li><li><a href="/hotels">Stay Ideas</a></li><li><a href="/holiday-deals">Holiday Packages</a></li><li><a href="/car-rentals">Road Trip Planning</a></li><li><a href="/travel-guides">Travel Guides</a></li></ul></div>
          <div className="footer-links-col"><h4 className="footer-heading">TheTravelOz</h4><ul className="footer-links-list"><li><a href="/why-us">Why TheTravelOz</a></li><li><a href="/faq">Frequently Asked Questions</a></li><li><a href="/privacy-policy">Privacy Policy</a></li><li><a href="/terms-and-conditions">Terms & Conditions</a></li><li><a href="/contact">Contact Us</a></li></ul></div>
          <div className="footer-links-col"><h4 className="footer-heading">Policies</h4><ul className="footer-links-list"><li><a href="/ccpa">CCPA</a></li><li><a href="/gdpr">GDPR</a></li><li><a href="/advertiser-policy">Advertiser Policy</a></li><li><a href="/taxes-and-fee">Taxes & Fees</a></li><li><a href="/cookie-policy">Cookie Policy</a></li><li><a href="/cancellation-policy">Cancellation Policy</a></li><li><a href="/refund-policy">Refund Policy</a></li></ul></div>
        </div>
      </div>
      <div className="footer-bottom"><div className="container bottom-inner"><p className="copyright-text">© {new Date().getFullYear()} TheTravelOz.com. All rights reserved.</p><div className="trust-seals"><span className="trust-pill">Australia travel inspiration</span><span className="trust-pill">Plan your next journey</span></div></div></div>
    </footer>
  );
}

