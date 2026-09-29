import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSearch from './components/HeroSearch';
import Destinations from './components/Destinations';
import HolidayPackages from './components/HolidayPackages';
import AirlinePartners from './components/AirlinePartners';
import CarRentalDeals from './components/CarRentalDeals';
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
  const [currency, setCurrency] = useState(CURRENCIES.USD);
  
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
      toAirport: 'SEZ',
      departDate: '2026-10-15',
      returnDate: '2026-10-25',
      passengers: 2,
      cabinClass: 'Economy',
      airline: airline.name
    });
    setFlightModalOpen(true);
  };

  // Generic Quote opener
  const handleOpenGeneralQuote = () => {
    setSelectedQuoteData(null);
    setQuoteModalOpen(true);
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
        {/* Hero Section & Search Engine */}
        <HeroSearch 
          onSearchFlights={handleSearchFlights} 
        />

        {/* Value Pillars & Concierge Banner */}
        <WhyChooseUs 
          onOpenQuoteModal={handleOpenGeneralQuote} 
        />

        {/* Partner Airlines & Cheap Routes */}
        <AirlinePartners 
          currency={currency} 
          onSearchAirline={handleSearchAirline} 
        />

        <CarRentalDeals onOpenQuoteModal={handleOpenGeneralQuote} />

        {/* All-Inclusive Holiday Deals */}
        <HolidayPackages 
          currency={currency} 
          onSelectPackage={handleSelectPackage} 
        />

        {/* Featured Destinations */}
        <Destinations 
          currency={currency} 
          onSelectDestination={handleSelectDestination} 
        />

        {/* Traveler Reviews */}
        <Testimonials />

        {/* Travel Journal & Guides */}
        <BlogSection 
          onOpenQuoteModal={handleOpenGeneralQuote} 
        />

        {/* Accordion FAQ */}
        <FAQSection />
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
