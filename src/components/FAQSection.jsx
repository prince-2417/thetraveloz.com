import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, Sparkles } from 'lucide-react';
import { FAQS } from '../data/travelData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        {/* Header */}
        <div className="section-header center-text">
          <div className="section-badge">
            <Sparkles className="icon-xs" /> NEED HELP?
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-description">
            Find answers to common questions about booking flights, holiday packages, phone discounts, and visa requirements.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-accordion-wrapper">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`}>
                <button 
                  className="faq-question-btn"
                  onClick={() => toggleAccordion(idx)}
                >
                  <span className="question-text">
                    <HelpCircle className="icon-sm text-cyan flex-shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown className={`chevron-icon ${isOpen ? 'rotate' : ''}`} />
                </button>

                {isOpen && (
                  <div className="faq-answer-body">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="faq-contact-box">
          <div className="box-left">
            <h4>Still Have Questions About Your Trip?</h4>
            <p>Speak to our senior destination consultants right now. Free consultation with zero obligation!</p>
          </div>
          <div className="box-right">
            <a href="tel:+18885550199" className="box-phone-btn">
              <PhoneCall className="icon-sm" /> Call +1-888-555-0199
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
