import React, { useState } from 'react';
import { 
  X, Plane, SlidersHorizontal, ArrowRight, ShieldCheck, 
  Clock, PhoneCall, Check, Sparkles 
} from 'lucide-react';
import { MOCK_FLIGHT_RESULTS } from '../data/travelData';

export default function FlightSearchResultsModal({ 
  isOpen, 
  onClose, 
  searchParams, 
  currency, 
  onSelectFlight 
}) {
  const [maxPriceFilter, setMaxPriceFilter] = useState(2000);
  const [selectedStop, setSelectedStop] = useState('all');
  const [sortBy, setSortBy] = useState('cheapest');

  if (!isOpen) return null;

  // Filter & Sort Logic
  let flights = MOCK_FLIGHT_RESULTS.filter((flight) => {
    const convertedPrice = Math.round(flight.priceUSD * currency.rate);
    if (convertedPrice > maxPriceFilter) return false;
    if (selectedStop === 'direct' && !flight.stops.toLowerCase().includes('direct')) return false;
    if (selectedStop === '1stop' && !flight.stops.toLowerCase().includes('1 stop')) return false;
    return true;
  });

  if (sortBy === 'cheapest') {
    flights.sort((a, b) => a.priceUSD - b.priceUSD);
  } else if (sortBy === 'fastest') {
    flights.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
  }

  return (
    <div className="modal-overlay">
      <div className="modal-container flight-results-modal">
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-info">
            <div className="modal-badge">
              <Sparkles className="icon-xs" /> LIVE FLIGHT SEARCH
            </div>
            <h2 className="modal-title">
              Available Flights: {searchParams?.fromAirport || 'SYD'} <ArrowRight className="icon-xs inline-block" /> {searchParams?.toAirport || 'SEZ'}
            </h2>
            <p className="modal-subtitle">
              {searchParams?.departDate || 'Oct 15'} • {searchParams?.passengers || 2} Passengers • {searchParams?.cabinClass || 'Economy'}
            </p>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X className="icon-md" />
          </button>
        </div>

        {/* Modal Body with Filter Sidebar & Results List */}
        <div className="modal-body modal-grid-layout">
          {/* Sidebar Filters */}
          <div className="filter-sidebar">
            <div className="filter-card">
              <h3 className="filter-title">
                <SlidersHorizontal className="icon-sm text-cyan" /> Filter & Sort
              </h3>

              {/* Sort selector */}
              <div className="filter-group">
                <label className="filter-label">Sort Flights By</label>
                <select 
                  className="filter-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="cheapest">Cheapest Fares First</option>
                  <option value="fastest">Shortest Duration First</option>
                </select>
              </div>

              {/* Stop filter */}
              <div className="filter-group">
                <label className="filter-label">Stops</label>
                <div className="filter-pills">
                  <button 
                    className={`filter-pill ${selectedStop === 'all' ? 'active' : ''}`}
                    onClick={() => setSelectedStop('all')}
                  >
                    All Stops
                  </button>
                  <button 
                    className={`filter-pill ${selectedStop === '1stop' ? 'active' : ''}`}
                    onClick={() => setSelectedStop('1stop')}
                  >
                    1 Stop
                  </button>
                  <button 
                    className={`filter-pill ${selectedStop === 'direct' ? 'active' : ''}`}
                    onClick={() => setSelectedStop('direct')}
                  >
                    Direct
                  </button>
                </div>
              </div>

              {/* Phone Discount Banner */}
              <div className="phone-discount-card">
                <div className="pd-icon">
                  <PhoneCall className="icon-md text-gold" />
                </div>
                <h4>Looking for Lower Fares?</h4>
                <p>Call our hotline to unlock hidden airline seat inventory not available online!</p>
                <a href="tel:+18885550199" className="pd-call-btn">
                  Call +1-888-555-0199
                </a>
              </div>
            </div>
          </div>

          {/* Results List */}
          <div className="results-list">
            {flights.length === 0 ? (
              <div className="no-results-box">
                <Plane className="icon-lg opacity-40" />
                <h3>No flights matched your filter range</h3>
                <p>Try clearing your filters or changing search parameters.</p>
                <button 
                  className="reset-filter-btn"
                  onClick={() => {
                    setMaxPriceFilter(2000);
                    setSelectedStop('all');
                  }}
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              flights.map((flight) => {
                const price = Math.round(flight.priceUSD * currency.rate);
                return (
                  <div key={flight.id} className="flight-card">
                    {/* Top Deal Tag */}
                    <div className="flight-card-header">
                      <span className="airline-badge">{flight.logo} {flight.airline}</span>
                      <span className="flight-number">{flight.flightNo}</span>
                      {flight.dealBadge && (
                        <span className="deal-tag">{flight.dealBadge}</span>
                      )}
                    </div>

                    {/* Flight Segment Details */}
                    <div className="flight-segment">
                      <div className="time-col">
                        <span className="time-text">{flight.deptTime}</span>
                        <span className="code-text">{flight.fromCode}</span>
                        <span className="city-text">{flight.fromCity}</span>
                      </div>

                      <div className="duration-col">
                        <span className="duration-text">{flight.duration}</span>
                        <div className="flight-line">
                          <span className="line-dot"></span>
                          <Plane className="line-plane-icon" />
                          <span className="line-dot"></span>
                        </div>
                        <span className="stops-text">{flight.stops}</span>
                      </div>

                      <div className="time-col">
                        <span className="time-text">{flight.arrTime}</span>
                        <span className="code-text">{flight.toCode}</span>
                        <span className="city-text">{flight.toCity}</span>
                      </div>
                    </div>

                    {/* Card Footer Price & Action */}
                    <div className="flight-card-footer">
                      <div className="price-col">
                        <span className="price-lbl">Total per traveler</span>
                        <span className="price-val">
                          {currency.symbol}{price}
                        </span>
                        <span className="seats-lbl">
                          <Clock className="icon-xs inline-block" /> Only {flight.seatsRemaining} seats left at this price
                        </span>
                      </div>

                      <button 
                        className="select-flight-btn"
                        onClick={() => onSelectFlight(flight)}
                      >
                        <Check className="icon-sm" /> Lock Fare & Book
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
