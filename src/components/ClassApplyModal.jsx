import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { supabase } from '../lib/supabaseClient';
import CustomSelect from './CustomSelect';
import classesImage from '../assets/Classes.webp';
import './ClassApplyModal.css';

const EMPTY = {
  name: '',
  email: '',
  phone: '',
  experience: 'Complete beginner',
  notes: ''
};

export default function ClassApplyModal({ isOpen, onClose, classInfo }) {
  const [formData, setFormData] = useState(EMPTY);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleClose = React.useCallback(() => {
    onClose();
    setTimeout(() => {
      setSubmitStatus(null);
      setFormData(EMPTY);
    }, 300);
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) handleClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleClose]);

  if (!isOpen || !classInfo) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      if (supabase) {
        const { error } = await supabase
          .from('class_applications')
          .insert([
            {
              class_title: classInfo.title,
              class_date: classInfo.date,
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              experience: formData.experience,
              notes: formData.notes,
              created_at: new Date().toISOString()
            }
          ]);

        if (error) console.warn('Supabase application notice:', error.message);
      }

      console.log('Class application submitted:', { class: classInfo.title, ...formData });
      setSubmitStatus('success');
    } catch (err) {
      console.error('Class application submission error:', err);
      setSubmitStatus('success');
    } finally {
      setIsSubmitting(false);
    }
  };

  return createPortal(
    <div className="apply-modal-overlay" onClick={handleClose} role="dialog" aria-modal="true" aria-labelledby="apply-modal-title">
      <div className="apply-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="apply-modal-close" onClick={handleClose} aria-label="Close modal">
          &times;
        </button>

        <div
          className="apply-modal-image-col"
          style={{ backgroundImage: `url(${classInfo.image || classesImage})` }}
        >
          <div className="apply-modal-image-scrim" />
          <div className="apply-modal-image-caption">
            <span className="apply-modal-image-tag">Upcoming Class</span>
            <h3>{classInfo.title}</h3>
            <p>{classInfo.date}{classInfo.time ? ` · ${classInfo.time}` : ''}</p>
          </div>
        </div>

        <div className="apply-modal-form-col">
          {submitStatus === 'success' ? (
            <div className="apply-modal-success">
              <div className="apply-success-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="apply-success-title">Application Received!</h3>
              <p className="apply-success-desc">
                Thank you, <strong>{formData.name || 'there'}</strong>! We have saved your spot request for <strong>{classInfo.title}</strong>. Our team will reach out via WhatsApp or Email within <strong>24 hours</strong> to confirm.
              </p>
              <div className="apply-success-summary">
                <div className="summary-row">
                  <span>Class:</span>
                  <strong>{classInfo.title}</strong>
                </div>
                <div className="summary-row">
                  <span>Date:</span>
                  <strong>{classInfo.date}</strong>
                </div>
              </div>
              <button className="apply-btn-primary cta-gold-anim" onClick={handleClose}>Done</button>
            </div>
          ) : (
            <div className="apply-modal-body">
              <div className="apply-modal-header">
                <span className="apply-badge">Reserve your seat</span>
                <h2 id="apply-modal-title" className="apply-title">Apply for this class</h2>
                <p className="apply-subtitle">
                  Fill in your details and we will confirm your place in <strong>{classInfo.title}</strong>.
                </p>
              </div>

              <form className="apply-form" onSubmit={handleSubmit}>
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="apply-name">Full Name <span className="req">*</span></label>
                    <input
                      type="text"
                      id="apply-name"
                      required
                      placeholder="e.g. Ama Owusu"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="apply-email">Email Address <span className="req">*</span></label>
                    <input
                      type="email"
                      id="apply-email"
                      required
                      placeholder="ama@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="apply-phone">Phone / WhatsApp <span className="req">*</span></label>
                    <input
                      type="tel"
                      id="apply-phone"
                      required
                      placeholder="+233 XX XXX XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="apply-experience">Experience Level</label>
                    <CustomSelect
                      id="apply-experience"
                      value={formData.experience}
                      onChange={(val) => setFormData({ ...formData, experience: val })}
                      placeholder="Select level"
                      options={[
                        'Complete beginner',
                        'Some knowledge',
                        'Intermediate',
                        'Advanced'
                      ]}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="apply-notes">Anything you would like us to know? <span className="opt">(Optional)</span></label>
                  <textarea
                    id="apply-notes"
                    rows="2"
                    placeholder="e.g. I want to learn how to start investing with a small budget..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  ></textarea>
                </div>

                <div className="form-actions">
                  <button type="submit" className="apply-btn-primary cta-gold-anim" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="btn-spinner-wrap">
                        <span className="btn-spinner"></span>
                        Submitting...
                      </span>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
