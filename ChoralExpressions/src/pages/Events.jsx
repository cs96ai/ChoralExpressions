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
              <div className="donation-card">
                <div className="row">
                  <div className="col-lg-5 mb-4 mb-lg-0">
                    <img 
                      src="/events/June13th2026.jpeg" 
                      alt="Drinking from the Well Concert" 
                      className="img-fluid rounded shadow-lg w-100"
                      style={{maxHeight: '560px', objectFit: 'cover'}}
                    />
                  </div>
                  <div className="col-lg-7">
                    <div className="mb-3">
                      <h2 className="text-white mb-2">Drinking from the Well</h2>
                      <p className="text-gold fs-5 mb-3">
                        Come and experience an evening of praise to refresh the soul
                      </p>
                    </div>

                    <div className="row g-2 mb-3">
                      <div className="col-md-6">
                        <div className="p-2 rounded" style={{background: 'rgba(212, 175, 55, 0.1)'}}>
                          <i className="bi bi-calendar3 text-gold fs-3 mb-1 d-block"></i>
                          <h5 className="text-white mb-1">Date</h5>
                          <p className="text-light-muted mb-0">Saturday, June 13, 2026</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="p-2 rounded" style={{background: 'rgba(212, 175, 55, 0.1)'}}>
                          <i className="bi bi-clock text-gold fs-3 mb-1 d-block"></i>
                          <h5 className="text-white mb-1">Time</h5>
                          <p className="text-light-muted mb-0">6:30 PM</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-2 rounded mb-3" style={{background: 'rgba(212, 175, 55, 0.1)'}}>
                      <i className="bi bi-geo-alt text-gold fs-3 mb-1 d-block"></i>
                      <h5 className="text-white mb-1">Venue</h5>
                      <p className="text-light-muted mb-0">Kingsview Village Seventh-day Adventist Church</p>
                      <p className="text-light-muted mb-0">70 Kingsview Boulevard</p>
                      <p className="text-light-muted mb-0">Etobicoke, Ontario M9R IT9</p>
                    </div>

                    <div className="alert alert-info border-0 mb-0" style={{background: 'rgba(212, 175, 55, 0.15)'}}>
                      <i className="bi bi-info-circle text-gold me-2"></i>
                      <span className="text-light">FREEWILL OFFERING WILL BE COLLECTED</span>
                    </div>
                  </div>
                </div>
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
