import React, { useState } from 'react';
import { 
  Plane, Hotel, Package, Car, Ship, 
  MapPin, Calendar, Users, ArrowRightLeft, Search, 
  CheckCircle2, Sparkles, ShieldCheck
} from 'lucide-react';
import { POPULAR_AIRPORTS } from '../data/travelData';

export default function HeroSearch({ onSearchFlights }) {
  const [activeTab, setActiveTab] = useState('flights'); // 'flights' | 'hotels' | 'packages' | 'cars' | 'ferries'
  const [tripType, setTripType] = useState('roundtrip'); // 'oneway' | 'roundtrip'
  
  // Search Form State
  const [fromAirport, setFromAirport] = useState('SYD');
  const [toAirport, setToAirport] = useState('MEL');
  const [departDate, setDepartDate] = useState('2026-10-15');
  const [returnDate, setReturnDate] = useState('2026-10-25');
  const [passengers, setPassengers] = useState(2);
  const [cabinClass, setCabinClass] = useState('Economy');

  const handleSwapAirports = () => {
    const temp = fromAirport;
    setFromAirport(toAirport);
    setToAirport(temp);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearchFlights({
      fromAirport,
      toAirport,
      departDate,
      returnDate,
      passengers,
      cabinClass,
      tripType
    });
  };

  return (
    <section id="search" className="hero-search-section">
      {/* Overlay Backdrop */}
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <div className="hero-grid">
          {/* Hero Left Intro */}
          <div className="hero-text-col">
            <div className="hero-badge">
              <Sparkles className="icon-sm" /> AUSTRALIA TRAVEL, MADE SIMPLE
            </div>
            <h1 className="hero-title">
              Explore Australia with <span className="gradient-text">TheTravelOz</span>
            </h1>
            <p className="hero-description">
              Explore Australian city breaks, coastal escapes, road trips and custom holiday ideas in one easy place.
            </p>

            <div className="hero-highlights-list">
              <div className="highlight-item">
                <CheckCircle2 className="icon-sm text-cyan" />
                <span>Australia travel inspiration</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 className="icon-sm text-cyan" />
                <span>Flexible trip planning</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 className="icon-sm text-cyan" />
                <span>Clear enquiry process</span>
              </div>
            </div>
          </div>

          {/* Hero Right: Search Engine Shell */}
          <div className="hero-search-card">
            {/* Search Engine Header Tabs */}
            <div className="search-tabs-row">
              <button 
                className={`search-tab-btn ${activeTab === 'flights' ? 'active' : ''}`}
                onClick={() => setActiveTab('flights')}
              >
                <Plane className="icon-sm" />
                <span>Flights</span>
              </button>
              <button 
                className={`search-tab-btn ${activeTab === 'hotels' ? 'active' : ''}`}
                onClick={() => setActiveTab('hotels')}
              >
                <Hotel className="icon-sm" />
                <span>Hotels</span>
              </button>
              <button 
                className={`search-tab-btn ${activeTab === 'packages' ? 'active' : ''}`}
                onClick={() => setActiveTab('packages')}
              >
                <Package className="icon-sm" />
                <span>Packages</span>
              </button>
              <button 
                className={`search-tab-btn ${activeTab === 'cars' ? 'active' : ''}`}
                onClick={() => setActiveTab('cars')}
              >
                <Car className="icon-sm" />
                <span>Cars</span>
              </button>
              <button 
                className={`search-tab-btn ${activeTab === 'ferries' ? 'active' : ''}`}
                onClick={() => setActiveTab('ferries')}
              >
                <Ship className="icon-sm" />
                <span>Ferries</span>
              </button>
            </div>

            {/* Search Body Form */}
            <form className="search-form-body" onSubmit={handleSearchSubmit}>
              {/* Trip Type Toggle for Flights */}
              {activeTab === 'flights' && (
                <div className="trip-mode-radios">
                  <label className={`radio-pill ${tripType === 'oneway' ? 'active' : ''}`}>
                    <input 
                      type="radio" 
                      name="tripType" 
                      checked={tripType === 'oneway'} 
                      onChange={() => setTripType('oneway')}
                    />
                    <span>One-Way</span>
                  </label>
                  <label className={`radio-pill ${tripType === 'roundtrip' ? 'active' : ''}`}>
                    <input 
                      type="radio" 
                      name="tripType" 
                      checked={tripType === 'roundtrip'} 
                      onChange={() => setTripType('roundtrip')}
                    />
                    <span>Round-Trip</span>
                  </label>
                </div>
              )}

              {/* Input Fields Grid */}
              <div className="form-fields-grid">
                {/* From Field */}
                <div className="input-group-card">
                  <label className="input-label">
                    <MapPin className="icon-xs text-cyan" /> Origin City / Airport
                  </label>
                  <select 
                    className="custom-select"
                    value={fromAirport}
                    onChange={(e) => setFromAirport(e.target.value)}
                  >
                    {POPULAR_AIRPORTS.map((apt) => (
                      <option key={apt.code} value={apt.code}>
                        {apt.city} ({apt.code}) - {apt.country}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Swap Airports Button */}
                <button 
                  type="button" 
                  className="swap-btn"
                  onClick={handleSwapAirports}
                  title="Swap Origin & Destination"
                >
                  <ArrowRightLeft className="icon-sm" />
                </button>

                {/* To Field */}
                <div className="input-group-card">
                  <label className="input-label">
                    <MapPin className="icon-xs text-cyan" /> Destination City
                  </label>
                  <select 
                    className="custom-select"
                    value={toAirport}
                    onChange={(e) => setToAirport(e.target.value)}
                  >
                    {POPULAR_AIRPORTS.map((apt) => (
                      <option key={apt.code} value={apt.code}>
                        {apt.city} ({apt.code}) - {apt.country}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Departure Date */}
                <div className="input-group-card">
                  <label className="input-label">
                    <Calendar className="icon-xs text-cyan" /> Departure Date
                  </label>
                  <input 
                    type="date" 
                    className="custom-date-input"
                    value={departDate}
                    onChange={(e) => setDepartDate(e.target.value)}
                  />
                </div>

                {/* Return Date */}
                {tripType === 'roundtrip' && (
                  <div className="input-group-card">
                    <label className="input-label">
                      <Calendar className="icon-xs text-cyan" /> Return Date
                    </label>
                    <input 
                      type="date" 
                      className="custom-date-input"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                    />
                  </div>
                )}

                {/* Passengers */}
                <div className="input-group-card">
                  <label className="input-label">
                    <Users className="icon-xs text-cyan" /> Passengers
                  </label>
                  <select 
                    className="custom-select"
                    value={passengers}
                    onChange={(e) => setPassengers(Number(e.target.value))}
                  >
                    <option value={1}>1 Traveler</option>
                    <option value={2}>2 Travelers</option>
                    <option value={3}>3 Travelers</option>
                    <option value={4}>4 Travelers</option>
                    <option value={5}>5+ Family Group</option>
                  </select>
                </div>

                {/* Cabin Class */}
                <div className="input-group-card">
                  <label className="input-label">
                    <Plane className="icon-xs text-cyan" /> Class
                  </label>
                  <select 
                    className="custom-select"
                    value={cabinClass}
                    onChange={(e) => setCabinClass(e.target.value)}
                  >
                    <option value="Economy">Economy</option>
                    <option value="Premium Economy">Premium Economy</option>
                    <option value="Business">Business Class</option>
                    <option value="First">First Class</option>
                  </select>
                </div>
              </div>

              {/* Submit Search CTA Button */}
              <div className="search-submit-row">
                <button type="submit" className="hero-search-submit-btn">
                  <Search className="icon-md" />
                  <span>EXPLORE FLIGHT OPTIONS</span>
                </button>
              </div>

              <div className="search-guarantee-note">
                <ShieldCheck className="icon-xs text-emerald" />
                <span>Price Match Promise • 100% Verified Airlines & Resorts</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
