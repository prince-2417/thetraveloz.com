import React from 'react';
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { BLOG_POSTS } from '../data/travelData';

export default function BlogSection({ onOpenQuoteModal }) {
  return (
    <section id="blog" className="blog-section">
      <div className="container">
        {/* Header */}
        <div className="section-header center-text">
          <div className="section-badge">
            <Sparkles className="icon-xs" /> ISLAND GUIDES & TRAVEL JOURNAL
          </div>
          <h2 className="section-title">
            Latest Travel Tips & <span className="gradient-text">Seychelles Insights</span>
          </h2>
          <p className="section-description">
            Expert insider advice on weather seasons, island hopping routes, luxury stay reviews, and airfare hacks.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image-wrapper">
                <img src={post.image} alt={post.title} className="blog-img" />
                <span className="blog-category-tag">{post.category}</span>
              </div>

              <div className="blog-content">
                <div className="blog-meta">
                  <span className="meta-item"><Calendar className="icon-xs text-cyan" /> {post.date}</span>
                  <span className="meta-item"><Clock className="icon-xs text-cyan" /> {post.readTime}</span>
                </div>

                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>

                <button 
                  className="read-more-btn"
                  onClick={onOpenQuoteModal}
                >
                  <span>Read Article & Plans</span>
                  <ArrowRight className="icon-xs" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
