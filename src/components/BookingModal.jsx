import React, { useState } from 'react';
import { X, Send, PhoneCall, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialData }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    travelDate: '',
    travelers: '2',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCloseModal = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container booking-modal">
        <button className="modal-close-btn" onClick={handleCloseModal}>
          <X className="icon-md" />
        </button>

        {submitted ? (
          <div className="modal-success-state">
            <div className="success-icon-wrapper">
              <CheckCircle2 className="icon-xl text-emerald" />
            </div>
            <h2>Quote Request Received!</h2>
            <p>
              Thank you, <strong>{formData.fullName || 'Valued Traveler'}</strong>. Our travel specialist is reviewing unpublished rates for <strong>{initialData?.title || initialData?.airline || 'your requested destination'}</strong>.
            </p>
            <div className="success-info-box">
              <PhoneCall className="icon-md text-gold" />
              <div>
                <strong>Expect a call within 15 minutes</strong>
                <p>For urgent flight changes or immediate locking, call us at +1-888-555-0199.</p>
              </div>
            </div>
            <button className="modal-done-btn" onClick={handleCloseModal}>
              Done & Return to Site
            </button>
          </div>
        ) : (
          <div className="modal-form-wrapper">
            <div className="modal-form-header">
              <div className="modal-badge">
                <Sparkles className="icon-xs" /> FREE CUSTOM QUOTE
              </div>
              <h2>
                {initialData?.title 
                  ? `Inquire about: ${initialData.title}` 
                  : initialData?.airline 
                  ? `Lock Flight Fare: ${initialData.airline} (${initialData.flightNo})` 
                  : 'Request Custom Travel Quote'}
              </h2>
              <p>Lock in phone-only discounts, resort upgrades, and zero booking fee options.</p>
            </div>

            <form onSubmit={handleSubmit} className="quote-form-grid">
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input 
                  type="text" 
                  required 
                  className="form-input" 
                  placeholder="John Smith"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number (For Instant Callback) *</label>
                <input 
                  type="tel" 
                  required 
                  className="form-input" 
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input 
                  type="email" 
                  required 
                  className="form-input" 
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Approximate Travel Date</label>
                <input 
                  type="date" 
                  className="form-input" 
                  value={formData.travelDate}
                  onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                />
              </div>

              <div className="form-group full-width">
                <label className="form-label">Number of Passengers</label>
                <select 
                  className="form-input"
                  value={formData.travelers}
                  onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                >
                  <option value="1">1 Person (Solo Traveler)</option>
                  <option value="2">2 Persons (Couple / Honeymoon)</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons (Family / Friends)</option>
                  <option value="5+">5+ Group Travel</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label className="form-label">Special Preferences / Requests</label>
                <textarea 
                  className="form-textarea" 
                  rows="3"
                  placeholder="E.g., Overwater villa, vegetarian meal preference, ocean view, flexible dates..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                ></textarea>
              </div>

              <div className="form-group full-width">
                <button type="submit" className="submit-quote-btn">
                  <Send className="icon-sm" /> Send Quote Request
                </button>
              </div>

              <div className="form-trust-note">
                <ShieldCheck className="icon-xs text-emerald" /> Your contact details are 100% confidential. No spam guaranteed.
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
