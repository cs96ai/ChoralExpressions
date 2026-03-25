import { Link } from 'react-router-dom';

function Corporate() {
  return (
    <>
      <section className="service-hero" style={{
        background: "linear-gradient(135deg, rgba(26, 5, 5, 0.9), rgba(13, 13, 13, 0.95)), url('https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2000&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '120px 0 80px',
        minHeight: '75vh'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <Link to="/#services" className="btn btn-outline-gold btn-sm rounded-pill mb-4">
                <i className="bi bi-arrow-left me-2"></i>Back to Services
              </Link>
              <h1 className="display-3 fw-bold text-white mb-3">
                <i className="bi bi-building text-gold me-3"></i>Corporate Events
              </h1>
              <p className="lead text-gold fs-4 mb-4">Elevate Your Business Gatherings</p>
              <p className="text-light-muted fs-5 mb-4">
                Galas, conferences, and client appreciation events elevated with live choral music.
              </p>
              <Link to="/?event=Corporate%20Event#contact" className="btn btn-gold btn-lg rounded-pill px-5">
                <i className="bi bi-calendar-check me-2"></i>Book Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Perfect For</h2>
            <p className="section-subtitle">Professional entertainment for your corporate events</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card service-card h-100 text-white border-0">
                <div className="card-body text-center p-4">
                  <i className="bi bi-trophy fs-1 text-gold mb-3 d-block"></i>
                  <h4 className="card-title">Award Galas</h4>
                  <p className="card-text text-light-muted">
                    Add prestige and elegance to your awards ceremony.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card service-card h-100 text-white border-0">
                <div className="card-body text-center p-4">
                  <i className="bi bi-people fs-1 text-gold mb-3 d-block"></i>
                  <h4 className="card-title">Client Events</h4>
                  <p className="card-text text-light-muted">
                    Impress clients with sophisticated live entertainment.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card service-card h-100 text-white border-0">
                <div className="card-body text-center p-4">
                  <i className="bi bi-calendar-event fs-1 text-gold mb-3 d-block"></i>
                  <h4 className="card-title">Holiday Parties</h4>
                  <p className="card-text text-light-muted">
                    Make your company celebration truly memorable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-burgundy text-center py-5">
        <div className="container">
          <h2 className="text-white mb-3">Make Your Event Unforgettable</h2>
          <p className="text-light-muted mb-4">Professional choral entertainment for discerning corporate clients.</p>
          <a href="/#contact" className="btn btn-gold btn-lg rounded-pill px-5">
            <i className="bi bi-send me-2"></i>Request a Quote
          </a>
        </div>
      </section>
    </>
  );
}

export default Corporate;
