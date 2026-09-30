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
            <Sparkles className="icon-xs" /> FLIGHT IDEAS FOR AUSTRALIA
          </div>
          <h2 className="section-title">
            Explore Flexible <span className="gradient-text">Flight Options & Routes</span>
          </h2>
          <p className="section-description">
            Start with an Australian route idea, then send an enquiry for options that fit your dates and travel preferences.
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
                    <span className="airline-code">Travel type: {airline.code}</span>
                  </div>
                </div>

                <div className="airline-routes">
                  <span className="routes-label">Popular places:</span>
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
                    <span>Explore</span>
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
              <h4>Travel options for your dates</h4>
              <p>Send an enquiry and tell us where and when you would like to travel.</p>
            </div>
          </div>
          <div className="trust-item">
            <Plane className="icon-md text-cyan" />
            <div>
              <h4>Plan the whole journey</h4>
              <p>Combine flights, stays, road trips and activities in one itinerary request.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
