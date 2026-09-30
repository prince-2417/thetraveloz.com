export const CURRENCIES = {
  AUD: { code: 'AUD', symbol: 'A$', rate: 1, label: 'AUD (A$)' },
  USD: { code: 'USD', symbol: '$', rate: 0.66, label: 'USD ($)' },
  EUR: { code: 'EUR', symbol: '€', rate: 0.60, label: 'EUR (€)' },
  GBP: { code: 'GBP', symbol: '£', rate: 0.51, label: 'GBP (£)' },
};

export const POPULAR_AIRPORTS = [
  { code: 'SYD', city: 'Sydney', name: 'Sydney Airport', country: 'Australia' },
  { code: 'MEL', city: 'Melbourne', name: 'Melbourne Airport', country: 'Australia' },
  { code: 'BNE', city: 'Brisbane', name: 'Brisbane Airport', country: 'Australia' },
  { code: 'CNS', city: 'Cairns', name: 'Cairns Airport', country: 'Australia' },
  { code: 'PER', city: 'Perth', name: 'Perth Airport', country: 'Australia' },
  { code: 'ADL', city: 'Adelaide', name: 'Adelaide Airport', country: 'Australia' },
  { code: 'HBA', city: 'Hobart', name: 'Hobart Airport', country: 'Australia' },
  { code: 'OOL', city: 'Gold Coast', name: 'Gold Coast Airport', country: 'Australia' },
];

export const DESTINATIONS = [
  { id: 'sydney', title: 'Sydney Harbour', category: 'New South Wales', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80', priceUSD: 699, originalPriceUSD: 849, rating: 4.9, reviewsCount: 0, badge: 'City Escape', tagline: 'Harbour views, iconic beaches and vibrant dining', duration: '3 - 5 Days' },
  { id: 'great-barrier-reef', title: 'Great Barrier Reef', category: 'Queensland', image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=800&q=80', priceUSD: 1049, originalPriceUSD: 1299, rating: 4.9, reviewsCount: 0, badge: 'Nature Escape', tagline: 'Reef adventures, tropical islands and clear blue water', duration: '4 - 7 Days' },
  { id: 'uluru', title: 'Uluru & Red Centre', category: 'Northern Territory', image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=800&q=80', priceUSD: 899, originalPriceUSD: 1099, rating: 4.8, reviewsCount: 0, badge: 'Outback Journey', tagline: 'Ancient landscapes, desert skies and cultural discovery', duration: '3 - 5 Days' },
  { id: 'melbourne', title: 'Melbourne & Great Ocean Road', category: 'Victoria', image: 'https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&w=800&q=80', priceUSD: 759, originalPriceUSD: 929, rating: 4.8, reviewsCount: 0, badge: 'Road Trip', tagline: 'Laneways, coastal cliffs and unforgettable drives', duration: '4 - 6 Days' },
  { id: 'tasmania', title: 'Tasmania Wilderness', category: 'Tasmania', image: 'https://images.unsplash.com/photo-1496497243327-9dccd845c35f?auto=format&fit=crop&w=800&q=80', priceUSD: 940, originalPriceUSD: 1160, rating: 4.9, reviewsCount: 0, badge: 'Wild Escape', tagline: 'Mountain trails, pristine coastlines and local produce', duration: '5 - 8 Days' },
  { id: 'perth', title: 'Perth & Coral Coast', category: 'Western Australia', image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800&q=80', priceUSD: 829, originalPriceUSD: 1010, rating: 4.8, reviewsCount: 0, badge: 'Coastal Break', tagline: 'Sunshine, beaches and wide-open western landscapes', duration: '4 - 7 Days' },
  { id: 'gold-coast', title: 'Gold Coast', category: 'Queensland', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80', priceUSD: 650, originalPriceUSD: 790, rating: 4.7, reviewsCount: 0, badge: 'Family Favourite', tagline: 'Golden beaches, rainforest walks and easy fun', duration: '3 - 6 Days' },
  { id: 'kangaroo-island', title: 'Kangaroo Island', category: 'South Australia', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80', priceUSD: 780, originalPriceUSD: 960, rating: 4.8, reviewsCount: 0, badge: 'Island Retreat', tagline: 'Native wildlife, quiet beaches and wild coastlines', duration: '3 - 5 Days' },
];

export const HOLIDAY_PACKAGES = [
  { id: 'pkg-sydney', title: 'Sydney City & Coast Escape', destination: 'Sydney, New South Wales', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80', priceUSD: 1199, originalPriceUSD: 1450, discountPercent: 17, rating: 4.8, nights: 4, days: 5, badge: 'POPULAR', inclusions: ['Accommodation options tailored to you', 'Airport transfer planning', 'Flexible sightseeing suggestions', 'Personal itinerary support'], highlights: ['Harbour cruise ideas', 'Beach day recommendations', 'City dining guide'] },
  { id: 'pkg-reef', title: 'Cairns & Reef Adventure', destination: 'Cairns, Queensland', image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=800&q=80', priceUSD: 1499, originalPriceUSD: 1790, discountPercent: 16, rating: 4.9, nights: 5, days: 6, badge: 'TOP PICK', inclusions: ['Stay and transfer options', 'Reef tour planning', 'Flexible day-trip suggestions', 'Personal itinerary support'], highlights: ['Reef day experience', 'Rainforest discovery', 'Tropical stay options'] },
  { id: 'pkg-red-centre', title: 'Uluru & Outback Discovery', destination: 'Red Centre, Northern Territory', image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=800&q=80', priceUSD: 1399, originalPriceUSD: 1680, discountPercent: 17, rating: 4.8, nights: 4, days: 5, badge: 'OUTBACK ESCAPE', inclusions: ['Stay options for every budget', 'Arrival and departure planning', 'Guided experience suggestions', 'Personal itinerary support'], highlights: ['Sunrise viewing', 'Desert walks', 'Stargazing ideas'] },
  { id: 'pkg-tasmania', title: 'Tasmania Scenic Road Trip', destination: 'Hobart & Tasmania', image: 'https://images.unsplash.com/photo-1496497243327-9dccd845c35f?auto=format&fit=crop&w=800&q=80', priceUSD: 1599, originalPriceUSD: 1920, discountPercent: 17, rating: 4.9, nights: 6, days: 7, badge: 'SCENIC ROUTE', inclusions: ['Flexible stay options', 'Car-hire planning support', 'Route and stop recommendations', 'Personal itinerary support'], highlights: ['Hobart highlights', 'National park ideas', 'Coastal drive'] },
];

export const AIRLINE_PARTNERS = [
  { name: 'Flexible domestic fares', logo: '✈️', code: 'FLEX', directRoutes: 'Sydney, Melbourne, Brisbane and more', fareFromUSD: 129 },
  { name: 'Weekend city breaks', logo: '🏙️', code: 'CITY', directRoutes: 'Australia’s favourite city escapes', fareFromUSD: 159 },
  { name: 'Tropical north routes', logo: '🌴', code: 'NORTH', directRoutes: 'Cairns, Gold Coast and Queensland', fareFromUSD: 189 },
  { name: 'Western escapes', logo: '🌅', code: 'WEST', directRoutes: 'Perth and Coral Coast journeys', fareFromUSD: 199 },
];

export const MOCK_FLIGHT_RESULTS = [
  { id: 'fl-1', airline: 'TheTravelOz flexible fare', flightNo: 'FLEX 101', logo: '✈️', fromCode: 'SYD', fromCity: 'Sydney', toCode: 'MEL', toCity: 'Melbourne', deptTime: '08:30 AM', arrTime: '10:05 AM', duration: '1h 35m', stops: 'Non-stop', cabin: 'Economy', priceUSD: 129, dealBadge: 'Flexible option', seatsRemaining: 0 },
  { id: 'fl-2', airline: 'TheTravelOz value fare', flightNo: 'VALUE 202', logo: '✈️', fromCode: 'SYD', fromCity: 'Sydney', toCode: 'CNS', toCity: 'Cairns', deptTime: '10:15 AM', arrTime: '01:20 PM', duration: '3h 05m', stops: 'Non-stop', cabin: 'Economy', priceUSD: 189, dealBadge: 'Value choice', seatsRemaining: 0 },
  { id: 'fl-3', airline: 'TheTravelOz premium fare', flightNo: 'PREM 303', logo: '✈️', fromCode: 'MEL', fromCity: 'Melbourne', toCode: 'PER', toCity: 'Perth', deptTime: '01:00 PM', arrTime: '03:15 PM', duration: '4h 15m', stops: 'Non-stop', cabin: 'Premium', priceUSD: 269, dealBadge: 'Premium comfort', seatsRemaining: 0 },
];

export const TESTIMONIALS = [];

export const BLOG_POSTS = [
  { id: 'blog-1', title: 'How to Plan a First-Time Australia Holiday', category: 'Australia Guide', date: 'Travel planning', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80', excerpt: 'Choose the right regions, allow enough travel time and create an itinerary that balances cities, coast and nature.' },
  { id: 'blog-2', title: 'When to Visit Queensland’s Tropical Coast', category: 'Travel Tips', date: 'Travel planning', readTime: '4 min read', image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=800&q=80', excerpt: 'A practical guide to seasons, reef conditions and planning a relaxed tropical north escape.' },
  { id: 'blog-3', title: 'Australia Road Trip Planning Checklist', category: 'Road Trips', date: 'Travel planning', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1496497243327-9dccd845c35f?auto=format&fit=crop&w=800&q=80', excerpt: 'Build a safer, smoother road trip with sensible driving days, accommodation stops and time to explore.' },
];

export const FAQS = [
  { question: 'How do I request a trip quote?', answer: 'Choose a destination or package and submit the enquiry form. TheTravelOz will use the details you share to prepare travel options for your request.' },
  { question: 'Are displayed prices final?', answer: 'Prices are guide prices and can change with dates, availability, traveller numbers and selected inclusions. Your final price is confirmed before you book.' },
  { question: 'Can I change or cancel a booking?', answer: 'Change and cancellation conditions vary by the selected travel service. These conditions will be shared with you before confirmation.' },
  { question: 'How is my enquiry information used?', answer: 'TheTravelOz uses the information you provide to respond to your enquiry and arrange requested travel services. Please read our Privacy Policy for more details.' },
  { question: 'Do I need travel insurance?', answer: 'Travel insurance can help protect against unexpected changes. Consider your needs and arrange suitable cover before you travel.' },
];
