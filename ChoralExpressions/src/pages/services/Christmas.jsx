import { Link } from 'react-router-dom';

function Christmas() {
  return (
    <>
      <section className="service-hero" style={{
        background: "linear-gradient(135deg, rgba(26, 5, 5, 0.9), rgba(13, 13, 13, 0.95)), url('https://images.unsplash.com/photo-1512389142860-9c449e58a814?auto=format&fit=crop&w=2000&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '120px 0 80px',
        minHeight: '75vh'
      }}>
        <div className="container">
          <div className="row min-vh-75 align-items-center">
            <div className="col-lg-8">
              <Link to="/#services" className="btn btn-outline-gold btn-sm rounded-pill mb-4">
                <i className="bi bi-arrow-left me-2"></i>Back to Services
              </Link>
              <h1 className="display-3 fw-bold text-white mb-3">
                <i className="bi bi-star-fill text-gold me-3"></i>Christmas Concerts
              </h1>
              <p className="lead text-gold fs-4 mb-4">Experience the Magic of the Season</p>
              <p className="text-light-muted fs-5 mb-4">
                From the reverent strains of "O Holy Night" to the jubilant celebration of "Joy to the World," 
                our 33-voice ensemble brings the full majesty of Christmas to your venue.
              </p>
              <Link to="/?event=Christmas%20Concert#contact" className="btn btn-gold btn-lg rounded-pill px-5">
                <i className="bi bi-calendar-check me-2"></i>Book Your Christmas Event
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Christmas Repertoire</h2>
            <p className="section-subtitle">A tapestry of sacred and celebratory music</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card service-card h-100 text-white border-0">
                <div className="card-body text-center p-4">
                  <i className="bi bi-music-note-list fs-1 text-gold mb-3 d-block"></i>
                  <h4 className="card-title">Sacred Classics</h4>
                  <p className="card-text text-light-muted">
                    Handel's Messiah excerpts, Bach chorales, and traditional carols performed with 
                    reverence and artistry.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card service-card h-100 text-white border-0">
                <div className="card-body text-center p-4">
                  <i className="bi bi-globe fs-1 text-gold mb-3 d-block"></i>
                  <h4 className="card-title">World Carols</h4>
                  <p className="card-text text-light-muted">
                    Celebrate diversity with carols from around the globe—African, 
                    European, and Caribbean traditions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card service-card h-100 text-white border-0">
                <div className="card-body text-center p-4">
                  <i className="bi bi-heart fs-1 text-gold mb-3 d-block"></i>
                  <h4 className="card-title">Beloved Favorites</h4>
                  <p className="card-text text-light-muted">
                    "Silent Night," "The First Noel," "Hark! The Herald Angels Sing"—the songs 
                    that warm hearts and create memories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-burgundy">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="section-title text-white">Perfect For</h2>
              <ul className="list-unstyled mt-4">
                <li className="d-flex align-items-start mb-4">
                  <i className="bi bi-check-circle-fill text-gold fs-4 me-3 mt-1"></i>
                  <div>
                    <h5 className="text-white mb-1">Church Christmas Services</h5>
                    <p className="text-light-muted mb-0">Enhance your Christmas Eve or Christmas Day worship with professional choral music.</p>
                  </div>
                </li>
                <li className="d-flex align-items-start mb-4">
                  <i className="bi bi-check-circle-fill text-gold fs-4 me-3 mt-1"></i>
                  <div>
                    <h5 className="text-white mb-1">Corporate Holiday Galas</h5>
                    <p className="text-light-muted mb-0">Impress clients and celebrate your team with elegant musical entertainment.</p>
                  </div>
                </li>
                <li className="d-flex align-items-start mb-4">
                  <i className="bi bi-check-circle-fill text-gold fs-4 me-3 mt-1"></i>
                  <div>
                    <h5 className="text-white mb-1">Community Tree Lightings</h5>
                    <p className="text-light-muted mb-0">Create a magical atmosphere for your neighborhood or city celebration.</p>
                  </div>
                </li>
                <li className="d-flex align-items-start">
                  <i className="bi bi-check-circle-fill text-gold fs-4 me-3 mt-1"></i>
                  <div>
                    <h5 className="text-white mb-1">Private Holiday Parties</h5>
                    <p className="text-light-muted mb-0">Make your home celebration unforgettable with live choral performance.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="donation-card">
                <h3 className="text-gold mb-4"><i className="bi bi-calendar-event me-2"></i>Book Early</h3>
                <p className="text-light-muted mb-4">
                  Christmas is our most requested season. Secure your date early to ensure availability 
                  for your special event.
                </p>
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-clock text-gold fs-4 me-3"></i>
                  <span className="text-white">30-90 minute performances available</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-people text-gold fs-4 me-3"></i>
                  <span className="text-white">Full choir or smaller ensembles</span>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <i className="bi bi-geo-alt text-gold fs-4 me-3"></i>
                  <span className="text-white">Greater Toronto Area & beyond</span>
                </div>
                <a href="/#contact" className="btn btn-gold w-100 rounded-pill">
                  <i className="bi bi-envelope me-2"></i>Request a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark text-center py-5">
        <div className="container">
          <h2 className="text-white mb-3">Ready to Make This Christmas Unforgettable?</h2>
          <p className="text-light-muted mb-4">Contact us today to discuss your vision and reserve your date.</p>
          <a href="/#contact" className="btn btn-gold btn-lg rounded-pill px-5">
            <i className="bi bi-send me-2"></i>Get Started
          </a>
        </div>
      </section>
    </>
  );
}

export default Christmas;
