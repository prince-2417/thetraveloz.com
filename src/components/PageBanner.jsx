import { Compass, ChevronRight } from 'lucide-react';

export default function PageBanner({ eyebrow, title, description }) {
  return (
    <section className="page-banner">
      <div className="container page-banner-inner">
        <div>
          <span className="page-eyebrow"><Compass className="icon-xs" /> {eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <a href="/" className="breadcrumb-home">Home <ChevronRight className="icon-xs" /> {eyebrow}</a>
      </div>
    </section>
  );
}
