import React from 'react';
import { Star, Quote, CheckCircle, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/travelData';

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        {/* Header */}
        <div className="section-header center-text">
          <div className="section-badge">
            <Sparkles className="icon-xs" /> VERIFIED TRAVEL STORIES
          </div>
          <h2 className="section-title">
            Loved By Thousands Of <span className="gradient-text">Global Travelers</span>
          </h2>
          <p className="section-description">
            Read real feedback from honeymooners, families, and solo travelers who booked their island getaways with us.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="testimonial-card">
              <Quote className="quote-icon" />

              <div className="rating-stars">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="icon-xs fill-gold text-gold" />
                ))}
              </div>

              <p className="testimonial-comment">"{t.comment}"</p>

              <div className="testimonial-author">
                <img src={t.avatar} alt={t.name} className="author-avatar" />
                <div className="author-info">
                  <h4 className="author-name">{t.name}</h4>
                  <span className="author-loc">{t.location}</span>
                  <span className="author-trip">
                    <CheckCircle className="icon-xs text-emerald inline-block" /> {t.trip}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
