import React from 'react';
import { Plane, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { AIRLINE_PARTNERS } from '../data/travelData';

export default function AirlinePartners({ currency, onSearchAirline }) {
  return (
    <section id="airlines" className="airlines-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header center-text">
          <div className="section-badge">
            <Sparkles className="icon-xs" /> CERTIFIED AIRLINE PARTNERS
          </div>
          <h2 className="section-title">
            Fly with World-Class <span className="gradient-text">Airlines & Direct Routes</span>
          </h2>
          <p className="section-description">
            We partner directly with leading global carriers to guarantee competitive airfares, baggage allowances, and flexible flight changes.
          </p>
        </div>

        {/* Airline Grid */}
        <div className="airlines-grid">
          {AIRLINE_PARTNERS.map((airline) => {
            const fare = Math.round(airline.fareFromUSD * currency.rate);

            return (
              <div key={airline.name} className="airline-card">
                <div className="airline-card-top">
                  <div className="airline-flag">{airline.logo}</div>
                  <div className="airline-info">
                    <h3 className="airline-name">{airline.name}</h3>
                    <span className="airline-code">Carrier Code: {airline.code}</span>
                  </div>
                </div>

                <div className="airline-routes">
                  <span className="routes-label">Popular Routes:</span>
                  <p className="routes-text">{airline.directRoutes}</p>
                </div>

                <div className="airline-card-footer">
                  <div className="airline-fare">
                    <span className="fare-label">One-Way From</span>
                    <span className="fare-price">{currency.symbol}{fare}</span>
                  </div>

                  <button 
                    className="airline-search-btn"
                    onClick={() => onSearchAirline(airline)}
                  >
                    <span>Fares</span>
                    <ArrowRight className="icon-xs" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Banner */}
        <div className="airline-trust-banner">
          <div className="trust-item">
            <ShieldCheck className="icon-md text-cyan" />
            <div>
              <h4>Official Airline Ticketing Agent</h4>
              <p>Direct API integration with GDS for real-time seat availability</p>
            </div>
          </div>
          <div className="trust-item">
            <Plane className="icon-md text-cyan" />
            <div>
              <h4>Flexible Baggage & Seat Selection</h4>
              <p>Add extra luggage or select seat preferences free over the phone</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
