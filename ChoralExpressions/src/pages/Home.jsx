import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    venueLocation: '',
    details: ''
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
    if (!formData.eventType) newErrors.eventType = 'Please select an event type';
    if (!formData.eventDate) newErrors.eventDate = 'Please select a preferred date';
    if (!formData.venueLocation.trim()) newErrors.venueLocation = 'Venue location is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setShowSuccess(false);
    setErrorMessage('');

    try {
      // Using Web3Forms - free form backend service
      // You can get your access key from https://web3forms.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'b2ba2588-3029-4025-a711-54602d90e3e2', // Replace with actual key from web3forms.com
          subject: `New Booking Inquiry: ${formData.eventType} - ${formData.name}`,
          from_name: 'Choral Expressions Website',
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          event_type: formData.eventType,
          event_date: formData.eventDate,
          venue_location: formData.venueLocation,
          message: `
BOOKING INQUIRY DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Contact Information:
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone || 'Not provided'}

Event Details:
• Event Type: ${formData.eventType}
• Preferred Date: ${formData.eventDate}
• Venue Location: ${formData.venueLocation}

Additional Details:
${formData.details || 'No additional details provided.'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted: ${new Date().toLocaleString()}
          `,
          to_email: 'cexpressionevents@gmail.com'
        })
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          eventDate: '',
          venueLocation: '',
          details: ''
        });
      } else {
        throw new Error(data.message || 'Failed to send email');
      }
    } catch (error) {
      setErrorMessage('Failed to send message. Please try again or contact us directly at cexpressionevents@gmail.com.');
      console.error('Email error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="hero-section">
        <div className="hero-content container">
          <h1 className="hero-title animate-fade-in-up">33 Voices. Infinite Spirit.</h1>
          <p className="hero-subtitle animate-fade-in-up animate-delay-1">Classical Mastery & Soulful Celebration</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap animate-fade-in-up animate-delay-2">
            <a href="#services" className="btn btn-gold btn-lg rounded-pill px-5">
              <i className="bi bi-calendar-event me-2"></i>Hire Us
            </a>
            <a href="#donate" className="btn btn-outline-gold btn-lg rounded-pill px-5">
              <i className="bi bi-heart me-2"></i>Support Our Mission
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="section-dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title text-white">Celebrate With Us</h2>
            <p className="section-subtitle">Elevate your event with the power of 33 voices</p>
          </div>

          <div className="row g-4 mb-4">
            <div className="col-md-6 col-lg-3">
              <Link to="/services/black-history-month" className="text-decoration-none">
                <div className="card service-card h-100 text-white border-0">
                  <div className="card-body text-center">
                    <i className="bi bi-music-note-beamed fs-1 text-gold mb-3 d-block"></i>
                    <h4 className="card-title">Black History Month</h4>
                    <p className="card-text text-light-muted">
                      Deeply moving spirituals, gospel, and historical works celebrating heritage and resilience.
                    </p>
                    <span className="btn btn-outline-gold btn-sm rounded-pill mt-2">Learn More</span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-3">
              <Link to="/services/christmas" className="text-decoration-none">
                <div className="card service-card h-100 text-white border-0">
                  <div className="card-body text-center">
                    <i className="bi bi-star-fill fs-1 text-gold mb-3 d-block"></i>
                    <h4 className="card-title">Christmas & Holidays</h4>
                    <p className="card-text text-light-muted">
                      From Silent Night to Joy to the World, we bring the majesty of the season to your venue.
                    </p>
                    <span className="btn btn-outline-gold btn-sm rounded-pill mt-2">Learn More</span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-3">
              <Link to="/services/easter" className="text-decoration-none">
                <div className="card service-card h-100 text-white border-0">
                  <div className="card-body text-center">
                    <i className="bi bi-brightness-high-fill fs-1 text-gold mb-3 d-block"></i>
                    <h4 className="card-title">Easter & Lent</h4>
                    <p className="card-text text-light-muted">
                      Sacred classical pieces that reflect the solemnity and glory of the Easter season.
                    </p>
                    <span className="btn btn-outline-gold btn-sm rounded-pill mt-2">Learn More</span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-3">
              <Link to="/services/wedding" className="text-decoration-none">
                <div className="card service-card h-100 text-white border-0">
                  <div className="card-body text-center">
                    <i className="bi bi-heart-fill fs-1 text-gold mb-3 d-block"></i>
                    <h4 className="card-title">Weddings</h4>
                    <p className="card-text text-light-muted">
                      Make your special day unforgettable with the breathtaking sound of 33 voices.
                    </p>
                    <span className="btn btn-outline-gold btn-sm rounded-pill mt-2">Learn More</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <Link to="/services/celebration-of-life" className="text-decoration-none">
                <div className="card service-card h-100 text-white border-0">
                  <div className="card-body text-center">
                    <i className="bi bi-flower1 fs-1 text-gold mb-3 d-block"></i>
                    <h4 className="card-title">Celebration of Life</h4>
                    <p className="card-text text-light-muted">
                      Honor loved ones with music that comforts, uplifts, and celebrates a life well lived.
                    </p>
                    <span className="btn btn-outline-gold btn-sm rounded-pill mt-2">Learn More</span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-3">
              <Link to="/services/corporate" className="text-decoration-none">
                <div className="card service-card h-100 text-white border-0">
                  <div className="card-body text-center">
                    <i className="bi bi-building fs-1 text-gold mb-3 d-block"></i>
                    <h4 className="card-title">Corporate Events</h4>
                    <p className="card-text text-light-muted">
                      Galas, conferences, and client appreciation events elevated with live choral music.
                    </p>
                    <span className="btn btn-outline-gold btn-sm rounded-pill mt-2">Learn More</span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-3">
              <Link to="/services/store-opening" className="text-decoration-none">
                <div className="card service-card h-100 text-white border-0">
                  <div className="card-body text-center">
                    <i className="bi bi-shop fs-1 text-gold mb-3 d-block"></i>
                    <h4 className="card-title">Store Openings</h4>
                    <p className="card-text text-light-muted">
                      Launch your business with impact—draw crowds and create unforgettable buzz.
                    </p>
                    <span className="btn btn-outline-gold btn-sm rounded-pill mt-2">Learn More</span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-6 col-lg-3">
              <a href="#contact" className="text-decoration-none">
                <div className="card service-card h-100 text-white border-0">
                  <div className="card-body text-center">
                    <i className="bi bi-calendar-check-fill fs-1 text-gold mb-3 d-block"></i>
                    <h4 className="card-title">Your Celebration</h4>
                    <p className="card-text text-light-muted">
                      Anniversaries, graduations, or any special occasion—tell us your vision.
                    </p>
                    <span className="btn btn-outline-gold btn-sm rounded-pill mt-2">Contact Us</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="#contact" className="btn btn-gold btn-lg px-5 rounded-pill shadow-lg">
              <i className="bi bi-envelope me-2"></i>Book Us for Your Event
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section-burgundy">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="section-title text-white">The Choir</h2>
              <p className="section-subtitle mb-4">A Legacy of Excellence</p>
              <p className="text-light-muted fs-5">
                <strong className="text-white">Choral Expressions</strong> is a 33-member mixed-voice choral ensemble 
                dedicated to the highest standards of choral artistry. Our repertoire spans centuries—from 
                Renaissance motets to contemporary gospel—united by a commitment to musical excellence 
                and spiritual depth.
              </p>
              <p className="text-light-muted">
                Under the direction of our artistic leadership, we have performed at prestigious venues, 
                community celebrations, and sacred services throughout the region. Each performance is 
                an invitation to experience the transformative power of choral music.
              </p>
              <div className="d-flex gap-4 mt-4">
                <div className="text-center">
                  <h3 className="text-gold mb-0">33</h3>
                  <small className="text-light-muted">Voices</small>
                </div>
                <div className="text-center">
                  <h3 className="text-gold mb-0">15+</h3>
                  <small className="text-light-muted">Years</small>
                </div>
                <div className="text-center">
                  <h3 className="text-gold mb-0">200+</h3>
                  <small className="text-light-muted">Performances</small>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="donation-card" id="donate">
                <h3 className="text-gold mb-3">
                  <i className="bi bi-heart-fill me-2"></i>Support Our Mission
                </h3>
                <p className="text-light-muted mb-4">
                  Your generous contributions help us purchase new sheet music, fund musical education 
                  programs for young singers, and bring the gift of choral music to underserved communities.
                </p>
                <h5 className="text-white mb-3">Choose Your Impact</h5>
                <div className="mb-4">
                  <span className="donation-amount">$25</span>
                  <span className="donation-amount">$50</span>
                  <span className="donation-amount">$100</span>
                  <span className="donation-amount">$250</span>
                  <span className="donation-amount">Other</span>
                </div>
                <button className="btn btn-gold w-100 rounded-pill">
                  <i className="bi bi-gift me-2"></i>Make a Donation
                </button>
                <p className="text-light-muted small mt-3 mb-0 text-center">
                  <i className="bi bi-shield-check me-1"></i>Secure, tax-deductible contribution
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <h2 className="section-title text-white">Book Your Event</h2>
                <p className="section-subtitle">Let us bring the gift of music to your celebration</p>
              </div>
              <div className="donation-card">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label text-light-muted">Your Name <span className="text-gold">*</span></label>
                      <input 
                        type="text" 
                        className="form-control form-control-dark" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name" 
                      />
                      {errors.name && <div className="validation-message">{errors.name}</div>}
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-light-muted">Email Address <span className="text-gold">*</span></label>
                      <input 
                        type="email" 
                        className="form-control form-control-dark" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@example.com" 
                      />
                      {errors.email && <div className="validation-message">{errors.email}</div>}
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-light-muted">Phone Number</label>
                      <input 
                        type="tel" 
                        className="form-control form-control-dark" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(416) 555-1234" 
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-light-muted">Event Type <span className="text-gold">*</span></label>
                      <select 
                        className="form-control form-control-dark" 
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                      >
                        <option value="">Select Event Type</option>
                        <option value="Christmas Concert">Christmas Concert</option>
                        <option value="Easter/Lenten Service">Easter/Lenten Service</option>
                        <option value="Black History Month">Black History Month</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Celebration of Life">Celebration of Life</option>
                        <option value="Corporate Event">Corporate Event</option>
                        <option value="Store Opening">Store Opening</option>
                        <option value="Other">Other Celebration</option>
                      </select>
                      {errors.eventType && <div className="validation-message">{errors.eventType}</div>}
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-light-muted">Preferred Date <span className="text-gold">*</span></label>
                      <input 
                        type="date" 
                        className="form-control form-control-dark" 
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                      />
                      {errors.eventDate && <div className="validation-message">{errors.eventDate}</div>}
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-light-muted">Venue Location <span className="text-gold">*</span></label>
                      <input 
                        type="text" 
                        className="form-control form-control-dark" 
                        name="venueLocation"
                        value={formData.venueLocation}
                        onChange={handleChange}
                        placeholder="City, Province" 
                      />
                      {errors.venueLocation && <div className="validation-message">{errors.venueLocation}</div>}
                    </div>
                    <div className="col-12">
                      <label className="form-label text-light-muted">Additional Details</label>
                      <textarea 
                        className="form-control form-control-dark" 
                        rows="4" 
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        placeholder="Tell us about your event, expected audience size, and any special requests..."
                      ></textarea>
                    </div>
                    <div className="col-12 text-center mt-4">
                      <button type="submit" className="btn btn-gold btn-lg px-5 rounded-pill" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <i className="bi bi-send me-2"></i>
                            <span>Submit Inquiry</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
                
                {showSuccess && (
                  <div className="alert alert-success mt-4 border-0" role="alert">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    <strong>Thank you!</strong> Your booking inquiry has been sent successfully. We'll respond within one business day.
                  </div>
                )}
                
                {errorMessage && (
                  <div className="alert alert-danger mt-4 border-0" role="alert">
                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                    <strong>Error:</strong> {errorMessage}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
