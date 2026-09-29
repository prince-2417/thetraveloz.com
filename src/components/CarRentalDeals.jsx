import { MapPin, DollarSign, Layers, Search, Sparkles } from 'lucide-react';

const benefits = [
  { icon: MapPin, title: 'Flexible Pick-up & Drop-off', text: 'Choose convenient terminals, city hubs, or hotel delivery.' },
  { icon: DollarSign, title: 'Clear Pricing, No Hidden Fees', text: 'All taxes and standard insurance are shown upfront.' },
  { icon: Layers, title: 'Vehicles for Every Journey', text: 'From compact cars to premium SUVs and family vans.' },
];

export default function CarRentalDeals({ onOpenQuoteModal }) {
  return (
    <section className="car-deals-section">
      <div className="container">
        <div className="section-header center-text">
          <div className="section-badge"><Sparkles className="icon-xs" /> ON-DEMAND BOOKING MOBILITY</div>
          <h2 className="section-title">Car Rental Deals to <span className="gradient-text">Match Your Itinerary</span></h2>
          <p className="section-description">Rent a car from global providers at competitive rates with transparent terms and flexible pick-up locations.</p>
        </div>
        <div className="car-benefits-grid">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article className="car-benefit-card" key={title}>
              <div className="pillar-icon-box"><Icon className="icon-md text-cyan" /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="custom-trip-banner">
          <div><span className="mini-label">TAILOR-MADE VACATIONS</span><h3>Want a Custom Island Hopping Itinerary?</h3><p>Tell us your travel dates and we'll shape the route around you.</p></div>
          <button onClick={onOpenQuoteModal}><Search className="icon-xs" /> Get special fare</button>
        </div>
      </div>
    </section>
  );
}
