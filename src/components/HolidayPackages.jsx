import React from 'react';
import { CheckCircle, Flame, Star, ArrowRight, Sparkles, Tag } from 'lucide-react';
import { HOLIDAY_PACKAGES } from '../data/travelData';

export default function HolidayPackages({ currency, onSelectPackage }) {
  return (
    <section id="packages" className="packages-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header center-text">
          <div className="section-badge badge-flame">
            <Flame className="icon-xs" /> SPECIAL ALL-INCLUSIVE DEALS
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Holiday & Getaway Packages</span>
          </h2>
          <p className="section-description">
            Complete hassle-free vacation packages combining luxury resort stays, international flights, transfers & daily meals.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="packages-grid">
          {HOLIDAY_PACKAGES.map((pkg) => {
            const price = Math.round(pkg.priceUSD * currency.rate);
            const origPrice = Math.round(pkg.originalPriceUSD * currency.rate);

            return (
              <div key={pkg.id} className="package-card">
                {/* Image Section */}
                <div className="pkg-image-wrapper">
                  <img src={pkg.image} alt={pkg.title} className="pkg-img" />
                  <div className="pkg-overlay"></div>
                  
                  <div className="pkg-badge-top">
                    <span className="badge-deal-hot">{pkg.badge}</span>
                    <span className="badge-discount">{pkg.discountPercent}% OFF</span>
                  </div>

                  <div className="pkg-duration-pill">
                    {pkg.nights} Nights / {pkg.days} Days
                  </div>
                </div>

                {/* Body Content */}
                <div className="pkg-content">
                  <div className="pkg-header">
                    <div className="pkg-destination-tag">{pkg.destination}</div>
                    <div className="pkg-rating">
                      <Star className="icon-xs fill-gold text-gold" /> {pkg.rating}
                    </div>
                  </div>

                  <h3 className="pkg-title">{pkg.title}</h3>

                  {/* Included Perks List */}
                  <div className="pkg-inclusions">
                    <h4 className="inclusions-label">Package Inclusions:</h4>
                    <ul className="inclusions-list">
                      {pkg.inclusions.slice(0, 4).map((inc, idx) => (
                        <li key={idx} className="inclusion-item">
                          <CheckCircle className="icon-xs text-emerald flex-shrink-0" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlights Tags */}
                  <div className="pkg-highlights">
                    {pkg.highlights.map((high, idx) => (
                      <span key={idx} className="highlight-pill">
                        <Tag className="icon-xs" /> {high}
                      </span>
                    ))}
                  </div>

                  {/* Pricing & CTA */}
                  <div className="pkg-footer">
                    <div className="pkg-price-col">
                      <span className="price-lbl">Starting from</span>
                      <div className="price-row">
                        <span className="price-main">{currency.symbol}{price}</span>
                        <span className="price-strike">{currency.symbol}{origPrice}</span>
                      </div>
                      <span className="price-per">Per person (Flights Included)</span>
                    </div>

                    <button 
                      className="pkg-btn"
                      onClick={() => onSelectPackage(pkg)}
                    >
                      <span>Book Package</span>
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
