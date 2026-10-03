import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSearch from './components/HeroSearch';
import Destinations from './components/Destinations';
import HolidayPackages from './components/HolidayPackages';
import AirlinePartners from './components/AirlinePartners';
import CarRentalDeals from './components/CarRentalDeals';
import PageBanner from './components/PageBanner';
import StaticPage from './components/StaticPage';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import BlogSection from './components/BlogSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

// Modals
import FlightSearchResultsModal from './components/FlightSearchResultsModal';
import BookingModal from './components/BookingModal';

import { CURRENCIES } from './data/travelData';
import './App.css';

export default function App() {
  const [currency, setCurrency] = useState(CURRENCIES.AUD);
  
  // Search Results Modal State
  const [flightModalOpen, setFlightModalOpen] = useState(false);
  const [searchParams, setSearchParams] = useState(null);

  // Quote / Booking Inquiry Modal State
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedQuoteData, setSelectedQuoteData] = useState(null);

  // Handle Flight Search trigger from Hero Widget
  const handleSearchFlights = (params) => {
    setSearchParams(params);
    setFlightModalOpen(true);
  };

  // Handle Flight Selection from search results
  const handleSelectFlight = (flight) => {
    setFlightModalOpen(false);
    setSelectedQuoteData(flight);
    setQuoteModalOpen(true);
  };

  // Handle Destination card click
  const handleSelectDestination = (destination) => {
    setSelectedQuoteData({ title: destination.title, type: 'destination' });
    setQuoteModalOpen(true);
  };

  // Handle Package card click
  const handleSelectPackage = (pkg) => {
    setSelectedQuoteData({ title: pkg.title, type: 'package' });
    setQuoteModalOpen(true);
  };

  // Handle Airline card search click
  const handleSearchAirline = (airline) => {
    setSearchParams({
      fromAirport: 'SYD',
      toAirport: 'MEL',
      departDate: '2026-10-15',
      returnDate: '2026-10-25',
      passengers: 2,
      cabinClass: 'Economy',
      fareType: airline.name
    });
    setFlightModalOpen(true);
  };

  // Generic Quote opener
  const handleOpenGeneralQuote = () => {
    setSelectedQuoteData(null);
    setQuoteModalOpen(true);
  };

  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const routeInfo = {
    '/flights': ['Flight search', 'Find the best flight for your journey', 'Compare route options, travel dates and cabin classes before booking.'],
    '/destinations': ['Destinations', 'Discover places worth travelling for', 'Handpicked tropical escapes, cities and island adventures.'],
    '/holiday-deals': ['Holiday deals', 'Curated packages with more included', 'Explore complete flight and stay packages created for effortless getaways.'],
    '/airlines': ['Airline partners', 'Fly with confidence worldwide', 'Flexible routes and competitive fares from trusted global airline partners.'],
    '/car-rentals': ['Car rentals', 'Freedom to explore on your terms', 'Flexible vehicles, transparent pricing and convenient collection options.'],
    '/why-us': ['Why TheTravelOz', 'Travel planning made personal', 'Good value, genuine support and expert local knowledge from first search to return.'],
    '/travel-guides': ['Travel guides', 'Make every journey feel effortless', 'Practical guides, destination inspiration and insider tips from travel experts.'],
    '/faq': ['Help centre', 'Answers before you book', 'Everything you need to know about fares, packages, changes and travel support.'],
  };
  const routeContent = {
    '/flights': <HeroSearch onSearchFlights={handleSearchFlights} />,
    '/destinations': <Destinations currency={currency} onSelectDestination={handleSelectDestination} />,
    '/holiday-deals': <HolidayPackages currency={currency} onSelectPackage={handleSelectPackage} />,
    '/airlines': <AirlinePartners currency={currency} onSearchAirline={handleSearchAirline} />,
    '/car-rentals': <CarRentalDeals onOpenQuoteModal={handleOpenGeneralQuote} />,
    '/why-us': <WhyChooseUs onOpenQuoteModal={handleOpenGeneralQuote} />,
    '/travel-guides': <BlogSection onOpenQuoteModal={handleOpenGeneralQuote} />,
    '/faq': <FAQSection />,
  };

  return (
    <div className="app-main-wrapper">
      {/* Navbar */}
      <Navbar 
        currency={currency} 
        setCurrency={setCurrency} 
        onOpenQuoteModal={handleOpenGeneralQuote} 
      />

      <main>
        {path === '/' ? (
          <>
            <HeroSearch onSearchFlights={handleSearchFlights} />
            <WhyChooseUs onOpenQuoteModal={handleOpenGeneralQuote} />
            <AirlinePartners currency={currency} onSearchAirline={handleSearchAirline} />
            <CarRentalDeals onOpenQuoteModal={handleOpenGeneralQuote} />
            <HolidayPackages currency={currency} onSelectPackage={handleSelectPackage} />
            <Destinations currency={currency} onSelectDestination={handleSelectDestination} />
            <Testimonials />
            <BlogSection onOpenQuoteModal={handleOpenGeneralQuote} />
            <FAQSection />
          </>
        ) : routeContent[path] ? (
          <>
            <PageBanner eyebrow={routeInfo[path][0]} title={routeInfo[path][1]} description={routeInfo[path][2]} />
            {routeContent[path]}
          </>
        ) : path === '/hotels' ? (
          <StaticPage type="hotels" onOpenQuoteModal={handleOpenGeneralQuote} />
        ) : path === '/ferry-tickets' ? (
          <StaticPage type="ferry" onOpenQuoteModal={handleOpenGeneralQuote} />
        ) : path === '/privacy-policy' ? (
          <StaticPage type="privacy" />
        ) : path === '/terms-and-conditions' ? (
          <StaticPage type="terms" />
        ) : path === '/ccpa' ? (
          <StaticPage type="ccpa" />
        ) : path === '/gdpr' ? (
          <StaticPage type="gdpr" />
        ) : path === '/advertiser-policy' ? (
          <StaticPage type="advertiser" />
        ) : path === '/taxes-and-fee' ? (
          <StaticPage type="taxesFees" />
        ) : path === '/cookie-policy' ? (
          <StaticPage type="cookies" />
        ) : path === '/cancellation-policy' ? (
          <StaticPage type="cancellation" />
        ) : path === '/refund-policy' ? (
          <StaticPage type="refund" />
        ) : path === '/contact' ? (
          <StaticPage type="contact" />
        ) : (
          <section className="not-found-page"><div className="container"><span>404</span><h1>That page isn't available.</h1><p>Choose a destination or return to the home page.</p><a href="/">Back to home</a></div></section>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <FlightSearchResultsModal 
        isOpen={flightModalOpen} 
        onClose={() => setFlightModalOpen(false)} 
        searchParams={searchParams} 
        currency={currency} 
        onSelectFlight={handleSelectFlight} 
      />

      <BookingModal 
        isOpen={quoteModalOpen} 
        onClose={() => setQuoteModalOpen(false)} 
        initialData={selectedQuoteData} 
      />
    </div>
  );
}

