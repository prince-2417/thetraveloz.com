import { useState } from 'react';
import { BedDouble, Ship, CheckCircle2, Mail, MapPin } from 'lucide-react';
import PageBanner from './PageBanner';

const servicePages = {
  hotels: { eyebrow: 'Stay ideas', title: 'Find a stay that suits your Australia trip', description: 'Explore ideas for city stays, beach escapes, road trips and nature breaks.', icon: BedDouble, cta: 'Request stay ideas', points: ['Options for different budgets and travel styles', 'Flexible dates and room preferences', 'Trip planning support'] },
  ferry: { eyebrow: 'Travel planning', title: 'Plan your Australian journey with ease', description: 'Build a route that connects your preferred destinations and travel style.', icon: Ship, cta: 'Plan my trip', points: ['Route and transfer suggestions', 'Help planning onward travel', 'Simple enquiry support'] },
};

const legalPages = {
  privacy: { eyebrow: 'Privacy policy', title: 'Your privacy matters to us', description: 'How TheTravelOz handles the information you share while browsing or making an enquiry.', sections: [['Information we collect', 'We collect the contact and trip details needed to answer an enquiry and provide requested travel information.'], ['How we use information', 'Your details are used to respond to your request and communicate relevant trip information. We do not sell personal information.'], ['Keeping data secure', 'We use appropriate safeguards and retain information only as needed for service, legal and accounting purposes.']] },
  terms: { eyebrow: 'Terms & conditions', title: 'Clear terms for better travel', description: 'The basic terms that apply when you request or purchase travel services through TheTravelOz.', sections: [['Quotes and availability', 'Prices and availability can change until a booking is confirmed. A quote does not reserve travel inventory unless we confirm it in writing.'], ['Changes and cancellations', 'Supplier conditions apply to changes, refunds and cancellations. Applicable conditions are shared before confirmation.'], ['Traveller responsibilities', 'Travellers are responsible for valid passports, visas, health requirements, insurance and arriving within supplier check-in times.']] },
};

function ContactPage() {
  const [sent, setSent] = useState(false);
  return <><PageBanner eyebrow="Contact TheTravelOz" title="Let’s plan your Australia journey" description="Share your plans and TheTravelOz will help you take the next step." /><section className="contact-page"><div className="container contact-grid"><div className="contact-details"><h2>Start your trip enquiry</h2><p>Tell us about flights, stays, destinations and the experiences you have in mind.</p><a href="mailto:hello@thetraveloz.com"><Mail className="icon-sm" /> hello@thetraveloz.com</a><span><MapPin className="icon-sm" /> Australia travel inspiration, wherever you are</span></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>{sent ? <div className="contact-success"><CheckCircle2 className="icon-lg text-emerald" /><h2>Thank you!</h2><p>Your enquiry has been received.</p></div> : <><label>Name<input required placeholder="Your name" /></label><label>Email<input type="email" required placeholder="you@example.com" /></label><label>How can we help?<textarea required rows="5" placeholder="Tell us about your ideal Australia trip" /></label><button type="submit">Send enquiry</button></>}</form></div></section></>;
}

export default function StaticPage({ type, onOpenQuoteModal }) {
  if (type === 'contact') return <ContactPage />;
  if (type === 'privacy' || type === 'terms') { const page = legalPages[type]; return <><PageBanner {...page} /><section className="legal-page"><div className="container legal-content">{page.sections.map(([heading, copy]) => <article key={heading}><h2>{heading}</h2><p>{copy}</p></article>)}</div></section></>; }
  const page = servicePages[type]; const Icon = page.icon;
  return <><PageBanner eyebrow={page.eyebrow} title={page.title} description={page.description} /><section className="service-page"><div className="container service-panel"><div className="service-icon"><Icon className="icon-xl" /></div><div><h2>Simple planning. More time to enjoy the journey.</h2><ul>{page.points.map((point) => <li key={point}><CheckCircle2 className="icon-sm" /> {point}</li>)}</ul><button onClick={onOpenQuoteModal}>{page.cta}</button></div></div></section></>;
}
