import { useState } from 'react';
import { Link } from 'react-router-dom';

function JoinUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    voicePart: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Your name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please tell us about yourself';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        voicePart: '',
        message: ''
      });
      setErrors({});
    } catch (error) {
      setErrorMessage('There was an error submitting your inquiry. Please try emailing us directly at cexpressionevents@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="hero-section" style={{ minHeight: '50vh', padding: '120px 0 60px' }}>
        <div className="hero-content container">
          <h1 className="hero-title animate-fade-in-up">
            <i className="bi bi-music-note-list text-gold me-3"></i>Join Our Choir
          </h1>
          <p className="hero-subtitle animate-fade-in-up animate-delay-1">
            Become Part of Choral Expressions
          </p>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <h2 className="section-title text-white mb-4">We'd Love to Hear From You</h2>
                <p className="text-light-muted fs-5">
                  Interested in joining Choral Expressions? We welcome singers of all backgrounds who share our passion for choral music and faith-based performance. Fill out the form below and we'll be in touch!
                </p>
              </div>

              {showSuccess && (
                <div className="alert alert-success mb-4" role="alert">
                  <i className="bi bi-check-circle me-2"></i>
                  Thank you for your interest! We'll be in touch soon.
                </div>
              )}

              {errorMessage && (
                <div className="alert alert-danger mb-4" role="alert">
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="donation-card">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label text-white">
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label text-white">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label text-white">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="voicePart" className="form-label text-white">
                      Voice Part (if known)
                    </label>
                    <select
                      className="form-select"
                      id="voicePart"
                      name="voicePart"
                      value={formData.voicePart}
                      onChange={handleChange}
                    >
                      <option value="">Select your voice part</option>
                      <option value="Soprano">Soprano</option>
                      <option value="Alto">Alto</option>
                      <option value="Tenor">Tenor</option>
                      <option value="Baritone">Baritone</option>
                      <option value="Bass">Bass</option>
                      <option value="Not Sure">Not Sure</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label htmlFor="message" className="form-label text-white">
                      Tell Us About Yourself <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your singing experience, why you'd like to join, and any questions you may have..."
                    ></textarea>
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                  </div>

                  <div className="col-12">
                    <button 
                      type="submit" 
                      className="btn btn-gold btn-lg w-100 rounded-pill"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-send me-2"></i>Submit Inquiry
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>

              <div className="text-center mt-4">
                <p className="text-light-muted">
                  Or email us directly at{' '}
                  <a href="mailto:cexpressionevents@gmail.com" className="text-gold">
                    cexpressionevents@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-burgundy text-center py-5">
        <div className="container">
          <h2 className="text-white mb-3">Meet Our Current Members</h2>
          <p className="text-light-muted mb-4">See the talented voices that make up Choral Expressions</p>
          <Link to="/members" className="btn btn-gold btn-lg rounded-pill px-5">
            <i className="bi bi-people me-2"></i>View Members
          </Link>
        </div>
      </section>
    </>
  );
}

export default JoinUs;
