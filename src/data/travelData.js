export const CURRENCIES = {
  USD: { code: 'USD', symbol: '$', rate: 1.0, label: 'USD ($)' },
  AUD: { code: 'AUD', symbol: 'A$', rate: 1.52, label: 'AUD (A$)' },
  EUR: { code: 'EUR', symbol: '€', rate: 0.92, label: 'EUR (€)' },
  GBP: { code: 'GBP', symbol: '£', rate: 0.78, label: 'GBP (£)' },
};

export const POPULAR_AIRPORTS = [
  { code: 'SEZ', city: 'Mahé / Seychelles', name: 'Seychelles International Airport', country: 'Seychelles' },
  { code: 'SYD', city: 'Sydney', name: 'Sydney Kingsford Smith Airport', country: 'Australia' },
  { code: 'MEL', city: 'Melbourne', name: 'Melbourne Airport', country: 'Australia' },
  { code: 'BNE', city: 'Brisbane', name: 'Brisbane Airport', country: 'Australia' },
  { code: 'PER', city: 'Perth', name: 'Perth Airport', country: 'Australia' },
  { code: 'DXB', city: 'Dubai', name: 'Dubai International Airport', country: 'UAE' },
  { code: 'SIN', city: 'Singapore', name: 'Changi Airport', country: 'Singapore' },
  { code: 'LHR', city: 'London', name: 'Heathrow Airport', country: 'United Kingdom' },
  { code: 'JFK', city: 'New York', name: 'John F. Kennedy International Airport', country: 'United States' },
  { code: 'DPS', city: 'Bali', name: 'Ngurah Rai International Airport', country: 'Indonesia' },
  { code: 'MLE', city: 'Maldives', name: 'Velana International Airport', country: 'Maldives' },
];

export const DESTINATIONS = [
  {
    id: 'seychelles-mahe',
    title: 'Mahé Island, Seychelles',
    category: 'Seychelles & Islands',
    image: 'https://images.unsplash.com/photo-1589553460732-58ef7a11d986?auto=format&fit=crop&w=800&q=80',
    priceUSD: 890,
    originalPriceUSD: 1150,
    rating: 4.9,
    reviewsCount: 342,
    badge: 'Popular Choice',
    tagline: 'Granite cliffs, turquoise lagoons & lush botanical gardens',
    duration: '5 - 10 Days'
  },
  {
    id: 'seychelles-praslin',
    title: 'Praslin & Anse Lazio',
    category: 'Seychelles & Islands',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    priceUSD: 1050,
    originalPriceUSD: 1390,
    rating: 5.0,
    reviewsCount: 289,
    badge: 'Luxury Escape',
    tagline: 'Home of the rare Vallée de Mai & world-class white sand beaches',
    duration: '6 - 9 Days'
  },
  {
    id: 'seychelles-la-digue',
    title: 'La Digue & Anse Source d\'Argent',
    category: 'Seychelles & Islands',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    priceUSD: 980,
    originalPriceUSD: 1240,
    rating: 4.95,
    reviewsCount: 410,
    badge: 'Best Beaches',
    tagline: 'Bicycle paradise with famous giant granite boulders',
    duration: '5 - 8 Days'
  },
  {
    id: 'australia-sydney',
    title: 'Sydney & Harbour Riviera',
    category: 'Australia & Pacific',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
    priceUSD: 750,
    originalPriceUSD: 980,
    rating: 4.85,
    reviewsCount: 520,
    badge: 'Iconic City',
    tagline: 'Opera House, Bondi Beach & world-class dining',
    duration: '4 - 7 Days'
  },
  {
    id: 'australia-barrier-reef',
    title: 'Cairns & Great Barrier Reef',
    category: 'Australia & Pacific',
    image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=800&q=80',
    priceUSD: 1120,
    originalPriceUSD: 1450,
    rating: 4.98,
    reviewsCount: 615,
    badge: 'Wonder of Nature',
    tagline: 'Snorkel & dive the world’s largest coral reef ecosystem',
    duration: '5 - 9 Days'
  },
  {
    id: 'maldives-overwater',
    title: 'Maldives Private Villa Escape',
    category: 'Asia & Tropics',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
    priceUSD: 1490,
    originalPriceUSD: 1950,
    rating: 4.97,
    reviewsCount: 380,
    badge: 'Honeymoon Special',
    tagline: 'Direct ocean access, private infinity pool & butler service',
    duration: '5 - 8 Days'
  },
  {
    id: 'bali-luxury-resort',
    title: 'Ubud & Seminyak, Bali',
    category: 'Asia & Tropics',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    priceUSD: 620,
    originalPriceUSD: 850,
    rating: 4.88,
    reviewsCount: 490,
    badge: 'Best Value',
    tagline: 'Lush rainforest villas, ancient temples & beachside sunsets',
    duration: '6 - 10 Days'
  },
  {
    id: 'europe-greek-islands',
    title: 'Santorini & Mykonos, Greece',
    category: 'Europe Luxury',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
    priceUSD: 1350,
    originalPriceUSD: 1720,
    rating: 4.92,
    reviewsCount: 310,
    badge: 'Trending Now',
    tagline: 'Whitewashed cliffside suites, Aegean views & romantic sunsets',
    duration: '7 - 12 Days'
  }
];

export const HOLIDAY_PACKAGES = [
  {
    id: 'pkg-seychelles-paradise',
    title: '7-Day Seychelles Paradise Island Hop',
    destination: 'Mahé + Praslin + La Digue',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    priceUSD: 1499,
    originalPriceUSD: 1999,
    discountPercent: 25,
    rating: 4.96,
    nights: 7,
    days: 8,
    badge: 'HOT DEAL 🔥',
    inclusions: [
      'Return International Flights Included',
      '5★ Oceanfront Resort Accommodation',
      'Daily Gourmet Breakfast & Dinner',
      'Inter-Island Cat Cocos Ferry Transfers',
      'Guided Anse Source d\'Argent Beach Tour',
      '24/7 Dedicated Concierge Support'
    ],
    highlights: ['Catamaran Sunset Cruise', 'Vallée de Mai Nature Trail', 'Snorkeling at St. Anne Marine Park']
  },
  {
    id: 'pkg-australia-barrier-reef',
    title: '6-Day Barrier Reef & Daintree Luxury Escape',
    destination: 'Cairns & Port Douglas, Australia',
    image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=800&q=80',
    priceUSD: 1299,
    originalPriceUSD: 1699,
    discountPercent: 23,
    rating: 4.92,
    nights: 6,
    days: 7,
    badge: 'BEST SELLER ⭐',
    inclusions: [
      'Return Domestic / Regional Flights',
      '4★ Luxury Eco-Lodge Stay',
      'Outer Reef Helicopter + Snorkel Day Tour',
      'Daintree Rainforest Guided Expedition',
      'Daily Breakfast & Airport Transfers',
      'Zero Hidden Booking Fees'
    ],
    highlights: ['Helicopter Reef Overflight', 'Silky Oaks Spa Voucher', 'Indigenous Cultural Tour']
  },
  {
    id: 'pkg-maldives-overwater',
    title: '5-Nights Maldives All-Inclusive Overwater Villa',
    destination: 'North Malé Atoll, Maldives',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
    priceUSD: 1899,
    originalPriceUSD: 2499,
    discountPercent: 24,
    rating: 4.99,
    nights: 5,
    days: 6,
    badge: 'PHONE-ONLY EXCLUSIVE 📞',
    inclusions: [
      'Return Flights with Top Carrier',
      'Overwater Villa with Ocean Slide/Pool',
      'All-Inclusive Meals & Premium Drinks',
      'Speedboat / Seaplane Round-Trip Transfers',
      'Sunset Dolphin Cruise Included',
      'Complimentary Spa Massage Treatment'
    ],
    highlights: ['Floating Breakfast Experience', 'Undersea Dining Discount', 'Snorkeling Gear Included']
  },
  {
    id: 'pkg-bali-wellness',
    title: '7-Day Romantic Bali Spa & Villa Retreat',
    destination: 'Ubud & Seminyak, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    priceUSD: 799,
    originalPriceUSD: 1099,
    discountPercent: 27,
    rating: 4.89,
    nights: 7,
    days: 8,
    badge: 'LIMITED TIME ⚡',
    inclusions: [
      'Return Flights to Denpasar',
      'Private Pool Villa in Ubud (4 Nights)',
      'Beachfront Resort in Seminyak (3 Nights)',
      'Daily Organic Breakfast & Afternoon Tea',
      'Balinese 90-Min Couples Massage',
      'Private Driver for Airport Transfers'
    ],
    highlights: ['Tegallalang Rice Terrace Tour', 'Catching Uluwatu Sunset', 'Private Floating Breakfast']
  }
];

export const AIRLINE_PARTNERS = [
  { name: 'Air Seychelles', logo: '🇸🇨', code: 'HM', directRoutes: 'Mahé, Praslin, Johannesburg, Mumbai', fareFromUSD: 399 },
  { name: 'Qantas Airways', logo: '🇦🇺', code: 'QF', directRoutes: 'Sydney, Melbourne, Perth, Brisbane, London', fareFromUSD: 450 },
  { name: 'Emirates', logo: '🇦🇪', code: 'EK', directRoutes: 'Dubai, Seychelles, Sydney, London, New York', fareFromUSD: 520 },
  { name: 'Singapore Airlines', logo: '🇸🇬', code: 'SQ', directRoutes: 'Singapore, Sydney, Bali, Maldives, Perth', fareFromUSD: 480 },
  { name: 'Qatar Airways', logo: '🇶🇦', code: 'QR', directRoutes: 'Doha, Seychelles, Sydney, Paris, London', fareFromUSD: 510 },
  { name: 'Etihad Airways', logo: '🇦🇪', code: 'EY', directRoutes: 'Abu Dhabi, Seychelles, Sydney, Frankfurt', fareFromUSD: 490 },
  { name: 'Virgin Australia', logo: '🇦🇺', code: 'VA', directRoutes: 'Sydney, Brisbane, Melbourne, Fiji, Bali', fareFromUSD: 320 }
];

export const MOCK_FLIGHT_RESULTS = [
  {
    id: 'fl-1',
    airline: 'Air Seychelles',
    flightNo: 'HM 077',
    logo: '🇸🇨',
    fromCode: 'SYD',
    fromCity: 'Sydney',
    toCode: 'SEZ',
    toCity: 'Mahé, Seychelles',
    deptTime: '08:30 AM',
    arrTime: '04:15 PM',
    duration: '11h 45m',
    stops: '1 Stop (DXB)',
    cabin: 'Economy',
    priceUSD: 640,
    dealBadge: 'Cheapest Option',
    seatsRemaining: 4
  },
  {
    id: 'fl-2',
    airline: 'Emirates',
    flightNo: 'EK 415',
    logo: '🇦🇪',
    fromCode: 'SYD',
    fromCity: 'Sydney',
    toCode: 'SEZ',
    toCity: 'Mahé, Seychelles',
    deptTime: '06:00 PM',
    arrTime: '06:45 AM (+1)',
    duration: '14h 45m',
    stops: '1 Stop (DXB)',
    cabin: 'Economy / Flex',
    priceUSD: 720,
    dealBadge: 'Top Rated',
    seatsRemaining: 7
  },
  {
    id: 'fl-3',
    airline: 'Qatar Airways',
    flightNo: 'QR 909',
    logo: '🇶🇦',
    fromCode: 'SYD',
    fromCity: 'Sydney',
    toCode: 'SEZ',
    toCity: 'Mahé, Seychelles',
    deptTime: '10:15 PM',
    arrTime: '08:50 AM (+1)',
    duration: '13h 35m',
    stops: '1 Stop (DOH)',
    cabin: 'Premium Business',
    priceUSD: 1850,
    dealBadge: 'Business Luxury',
    seatsRemaining: 2
  },
  {
    id: 'fl-4',
    airline: 'Qantas Airways',
    flightNo: 'QF 001',
    logo: '🇦🇺',
    fromCode: 'SYD',
    fromCity: 'Sydney',
    toCode: 'LHR',
    toCity: 'London Heathrow',
    deptTime: '03:45 PM',
    arrTime: '06:20 AM (+1)',
    duration: '21h 35m',
    stops: '1 Stop (SIN)',
    cabin: 'Economy',
    priceUSD: 890,
    dealBadge: 'Direct Express',
    seatsRemaining: 5
  }
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    name: 'Sarah & Mark Jenkins',
    location: 'Sydney, Australia',
    trip: '7-Day Seychelles Honeymoon',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    comment: 'TheTravelOz booked our entire Seychelles honeymoon smoothly! The phone agent gave us a fare $350 cheaper than online engines. The resort at Praslin was heavenly!'
  },
  {
    id: 't-2',
    name: 'David & Family',
    location: 'Melbourne, Australia',
    trip: 'Great Barrier Reef & Cairns Family Trip',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    comment: 'Impeccable service! We needed custom flights for 5 people with hotel transfers. The customer support team handled everything in 10 minutes.'
  },
  {
    id: 't-3',
    name: 'Elena Rostova',
    location: 'London, UK',
    trip: 'Maldives Overwater Villa Package',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    comment: 'I was hesitant about booking over the phone, but TheTravelOz proved 100% genuine, responsive, and saved us hundreds of pounds. 10/10 recommendation!'
  }
];

export const BLOG_POSTS = [
  {
    id: 'blog-1',
    title: 'Best Time to Visit Seychelles: Weather, Islands & Snorkeling Guide',
    category: 'Island Guides',
    date: 'Sep 24, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Planning your trip to Mahé, Praslin or La Digue? Here is everything you need to know about weather monsoons, ocean clarity, and island-hopping itineraries.'
  },
  {
    id: 'blog-2',
    title: '10 Secret Hacks to Find Cheap International Flights from Australia',
    category: 'Travel Tips',
    date: 'Sep 20, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Discover how travel concierges unlock unpublished airline fares, flight stopover perks, and zero fee date changes.'
  },
  {
    id: 'blog-3',
    title: 'Top 5 Luxury Overwater Resorts in Seychelles & Maldives for 2026',
    category: 'Luxury Travel',
    date: 'Sep 15, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
    excerpt: 'From glass-floor villas to private butler Service: take a peek inside the world\'s most exclusive tropical sanctuaries.'
  }
];

export const FAQS = [
  {
    question: 'Why are phone booking rates often lower than online travel engines?',
    answer: 'Airlines and luxury resorts provide special unpublished "consolidator fares" exclusively to licensed travel specialists like TheTravelOz.com. These rates cannot be listed publicly on aggregator engines due to carrier price agreements, saving you up to 30% when speaking directly to our agents.'
  },
  {
    question: 'What is included in your Seychelles & Australia holiday packages?',
    answer: 'Our holiday packages typically combine round-trip international/regional flights, handpicked 4★ or 5★ accommodation, airport/ferry transfers, daily breakfast, and curated island activities. Every itinerary is fully customizable to your preferences.'
  },
  {
    question: 'How do I modify or cancel my flight or hotel reservation?',
    answer: 'You can modify or cancel your booking by calling our 24/7 dedicated support team at +1-888-555-0199 or emailing support@thetraveloz.com. Most of our fares include flexible date change options.'
  },
  {
    question: 'Are payments on TheTravelOz.com secure?',
    answer: 'Yes, 100%. All transactions use 256-bit SSL encryption and are processed through IATA-certified payment gateways supporting major credit cards (Visa, MasterCard, Amex) and bank transfers.'
  },
  {
    question: 'Do I need a visa for Seychelles or Australia?',
    answer: 'Seychelles is a visa-free country for all passport holders (requires valid passport, return ticket, and accommodation proof). For Australia, most visitors need an Electronic Travel Authority (ETA) or eVisitor visa, which our concierge team can assist you with.'
  }
];
