import React, { useState } from 'react';
import { Star, MapPin, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { DESTINATIONS } from '../data/travelData';

export default function Destinations({ currency, onSelectDestination }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'New South Wales',
    'Queensland',
    'Victoria',
    'Tasmania',
    'Western Australia',
    'Northern Territory',
    'South Australia'
  ];

  const filteredDestinations = activeCategory === 'All' 
    ? DESTINATIONS 
    : DESTINATIONS.filter(d => d.category === activeCategory);

  return (
    <section id="destinations" className="destinations-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header center-text">
          <div className="section-badge">
            <Sparkles className="icon-xs" /> HANDPICKED DESTINATIONS
          </div>
          <h2 className="section-title">
            Explore Iconic <span className="gradient-text">Australia Escapes</span>
          </h2>
          <p className="section-description">
            From city harbours and tropical reefs to the outback and wild coastlines, choose your next Australia journey.
          </p>

          {/* Filter Pills */}
          <div className="category-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="destinations-grid">
          {filteredDestinations.map((dest) => {
            const price = Math.round(dest.priceUSD * currency.rate);
            const origPrice = Math.round(dest.originalPriceUSD * currency.rate);

            return (
              <div key={dest.id} className="destination-card">
                {/* Image & Badges */}
                <div className="card-image-wrapper">
                  <img src={dest.image} alt={dest.title} className="card-img" />
                  <div className="card-top-badges">
                    <span className="badge-highlight">{dest.badge}</span>
                    <span className="badge-rating">
                      <Star className="icon-xs fill-gold text-gold" /> {dest.rating} ({dest.reviewsCount})
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="card-content">
                  <div className="card-meta">
                    <span className="meta-item">
                      <MapPin className="icon-xs text-cyan" /> {dest.category}
                    </span>
                    <span className="meta-item">
                      <Clock className="icon-xs text-cyan" /> {dest.duration}
                    </span>
                  </div>

                  <h3 className="card-title">{dest.title}</h3>
                  <p className="card-tagline">{dest.tagline}</p>

                  {/* Pricing & CTA */}
                  <div className="card-footer">
                    <div className="price-wrapper">
                      <span className="price-prefix">From</span>
                      <span className="price-amount">{currency.symbol}{price}</span>
                      <span className="original-price">{currency.symbol}{origPrice}</span>
                    </div>

                    <button 
                      className="card-cta-btn"
                      onClick={() => onSelectDestination(dest)}
                    >
                      <span>Explore</span>
                      <ArrowRight className="icon-xs" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
