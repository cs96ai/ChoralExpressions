function Events() {
  return (
    <>
      <section className="service-hero" style={{
        background: "linear-gradient(135deg, rgba(26, 5, 5, 0.9), rgba(13, 13, 13, 0.95)), url('https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=2000&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '120px 0 60px',
        minHeight: 'auto'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-10 mx-auto text-center">
              <h1 className="display-3 fw-bold text-white mb-3">
                <i className="bi bi-calendar-event text-gold me-3"></i>Upcoming Events
              </h1>
              <p className="lead text-gold fs-4 mb-4">Join Us for Our Next Performance</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center mb-5">
                <h2 className="section-title text-white">April Concert</h2>
                <p className="section-subtitle">Mark your calendars for an unforgettable evening</p>
              </div>

              <div className="donation-card text-center">
                <div className="mb-4">
                  <i className="bi bi-music-note-beamed fs-1 text-gold mb-3 d-block"></i>
                  <h3 className="text-white mb-3">Spring Concert 2026</h3>
                  <p className="text-light-muted fs-5 mb-4">
                    Join Choral Expressions for an evening of inspiring music featuring classical masterworks, 
                    spirituals, and contemporary arrangements.
                  </p>
                </div>

                <div className="row g-4 mb-4">
                  <div className="col-md-4">
                    <div className="p-3 rounded" style={{background: 'rgba(212, 175, 55, 0.1)'}}>
                      <i className="bi bi-calendar3 text-gold fs-3 mb-2 d-block"></i>
                      <h5 className="text-white mb-1">Date</h5>
                      <p className="text-light-muted mb-0">April 2026</p>
                      <p className="text-light-muted small mb-0">(Specific date TBA)</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-3 rounded" style={{background: 'rgba(212, 175, 55, 0.1)'}}>
                      <i className="bi bi-clock text-gold fs-3 mb-2 d-block"></i>
                      <h5 className="text-white mb-1">Time</h5>
                      <p className="text-light-muted mb-0">7:00 PM</p>
                      <p className="text-light-muted small mb-0">(Doors open at 6:30 PM)</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-3 rounded" style={{background: 'rgba(212, 175, 55, 0.1)'}}>
                      <i className="bi bi-geo-alt text-gold fs-3 mb-2 d-block"></i>
                      <h5 className="text-white mb-1">Venue</h5>
                      <p className="text-light-muted mb-0">TBA</p>
                      <p className="text-light-muted small mb-0">Toronto, Ontario</p>
                    </div>
                  </div>
                </div>

                <div className="alert alert-info border-0 mb-4" style={{background: 'rgba(212, 175, 55, 0.15)'}}>
                  <i className="bi bi-info-circle text-gold me-2"></i>
                  <span className="text-light">More details coming soon! Check back for updates on venue and ticketing information.</span>
                </div>

                <a href="/#contact" className="btn btn-gold btn-lg rounded-pill px-5">
                  <i className="bi bi-envelope me-2"></i>Contact Us for More Information
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-burgundy text-center py-5">
        <div className="container">
          <h2 className="text-white mb-3">Stay Connected</h2>
          <p className="text-light-muted mb-4">Follow us on social media for the latest updates on upcoming events and performances.</p>
          <div className="d-flex justify-content-center gap-3">
            <a href="https://www.instagram.com/choraleexpressions" target="_blank" rel="noopener noreferrer" className="btn btn-outline-gold rounded-pill px-4">
              <i className="bi bi-instagram me-2"></i>Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Events;
