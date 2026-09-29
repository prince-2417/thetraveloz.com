import React from 'react';
import { PhoneCall, DollarSign, Award, ShieldCheck, Users, HeartHandshake, Sparkles } from 'lucide-react';

export default function WhyChooseUs({ onOpenQuoteModal }) {
  const pillars = [
    {
      icon: PhoneCall,
      title: '24/7 Phone Concierge & Exclusive Fares',
      description: 'Our certified travel agents unlock private consolidator flight rates and resort upgrades that online booking algorithms cannot show.'
    },
    {
      icon: DollarSign,
      title: 'Best Price Match Guarantee',
      description: 'Found a lower flight or resort deal elsewhere? Bring it to us and we will match or beat the price with extra perks included.'
    },
    {
      icon: Award,
      title: '100% Handpicked Luxury & Budget Stays',
      description: 'Every hotel and island resort in our Seychelles & Australia catalog is personally vetted for hygiene, service excellence, and amenities.'
    },
    {
      icon: ShieldCheck,
      title: 'Zero Hidden Fees & Flexible Changes',
      description: 'Transparent pricing with no surprise surcharge fees at checkout. Easy flexible date change options on international bookings.'
    }
  ];

  return (
    <section id="why-us" className="why-us-section">
      <div className="container">
        {/* Header */}
        <div className="section-header center-text">
          <div className="section-badge">
            <Sparkles className="icon-xs" /> THE TRAVELOZ ADVANTAGE
          </div>
          <h2 className="section-title">
            Why Book Your Next Escape With <span className="gradient-text">TheTravelOz</span>?
          </h2>
          <p className="section-description">
            We combine high-speed digital flight comparison with traditional personalized 24/7 human concierge assistance.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="pillars-grid">
          {pillars.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <div key={idx} className="pillar-card">
                <div className="pillar-icon-box">
                  <IconComp className="icon-md text-cyan" />
                </div>
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-desc">{p.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Counter Bar */}
        <div className="stats-bar shadow-glow">
          <div className="stat-box">
            <span className="stat-number">15,000+</span>
            <span className="stat-label">Happy Travelers Served</span>
          </div>
          <div className="stat-box border-left">
            <span className="stat-number">99.4%</span>
            <span className="stat-label">5-Star Customer Reviews</span>
          </div>
          <div className="stat-box border-left">
            <span className="stat-number">$1.4M+</span>
            <span className="stat-label">Saved in Airfare Deals</span>
          </div>
          <div className="stat-box border-left">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Live Phone Hotline</span>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="concierge-cta-banner">
          <div className="cta-left">
            <h3>Ready to Plan Your Dream Seychelles or Australia Vacation?</h3>
            <p>Talk to our senior destination specialist right now and get a customized itinerary within 15 minutes.</p>
          </div>
          <div className="cta-right">
            <a href="tel:+18885550199" className="cta-phone-btn">
              <PhoneCall className="icon-sm" /> Call +1-888-555-0199
            </a>
            <button className="cta-quote-btn" onClick={onOpenQuoteModal}>
              Request Online Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
