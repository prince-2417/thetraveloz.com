import React from 'react';
import { PhoneCall, DollarSign, Award, ShieldCheck, Users, HeartHandshake, Sparkles } from 'lucide-react';

export default function WhyChooseUs({ onOpenQuoteModal }) {
  const pillars = [
    {
      icon: PhoneCall,
      title: 'Australia travel inspiration',
      description: 'Find destination ideas for cities, coastlines, national parks and road trips across Australia.'
    },
    {
      icon: DollarSign,
      title: 'Clear trip planning',
      description: 'Build a request around your dates, budget, travel style and the places you want to see.'
    },
    {
      icon: Award,
      title: 'Flexible holiday ideas',
      description: 'Use our suggested routes as a starting point, then tailor the pace, stays and experiences to your trip.'
    },
    {
      icon: ShieldCheck,
      title: 'Helpful travel information',
      description: 'Review destination guides and booking conditions before you decide on your next journey.'
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
            TheTravelOz brings Australian travel ideas, destination guides and itinerary requests together in one place.
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
            <span className="stat-number">8</span>
            <span className="stat-label">Featured destinations</span>
          </div>
          <div className="stat-box border-left">
            <span className="stat-number">4</span>
            <span className="stat-label">Sample holiday packages</span>
          </div>
          <div className="stat-box border-left">
            <span className="stat-number">1</span>
            <span className="stat-label">Easy trip enquiry form</span>
          </div>
          <div className="stat-box border-left">
            <span className="stat-number">100%</span>
            <span className="stat-label">TheTravelOz content</span>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="concierge-cta-banner">
          <div className="cta-left">
            <h3>Ready to plan your Australia journey?</h3>
            <p>Share your travel dates and interests to begin building your ideal itinerary.</p>
          </div>
          <div className="cta-right">
            <button className="cta-quote-btn" onClick={onOpenQuoteModal}>
              Request Online Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
