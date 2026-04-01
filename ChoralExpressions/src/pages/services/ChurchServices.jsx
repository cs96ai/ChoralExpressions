import { Link } from 'react-router-dom';

function ChurchServices() {
  return (
    <>
      <section className="service-hero" style={{
        background: "linear-gradient(135deg, rgba(26, 5, 5, 0.9), rgba(13, 13, 13, 0.95)), url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=2000&q=80')",
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
                <i className="bi bi-house-heart text-gold me-3"></i> Church Services
              </h1>
              <p className="lead text-gold fs-4 mb-4">Uplifting Worship Through Song</p>
              <p className="text-light-muted fs-5 mb-4">
                Enhance your worship services and faith celebrations with inspiring choral music that uplifts congregations and glorifies God.
              </p>
              <Link to="/?event=Church%20Service#contact" className="btn btn-gold btn-lg rounded-pill px-5">
                <i className="bi bi-calendar-check me-2"></i>Book Your Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Ministry</h2>
            <p className="section-subtitle">Music that enriches worship and inspires faith</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card service-card h-100 text-white border-0">
                <div className="card-body text-center p-4">
                  <i className="bi bi-music-note-beamed fs-1 text-gold mb-3 d-block"></i>
                  <h4 className="card-title">Sunday Services</h4>
                  <p className="card-text text-light-muted">
                    Regular worship services enhanced with powerful anthems, hymns, and spirituals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card service-card h-100 text-white border-0">
                <div className="card-body text-center p-4">
                  <i className="bi bi-droplet-fill fs-1 text-gold mb-3 d-block"></i>
                  <h4 className="card-title">Special Ceremonies</h4>
                  <p className="card-text text-light-muted">
                    Baptisms, confirmations, dedications, and other sacred milestones.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card service-card h-100 text-white border-0">
                <div className="card-body text-center p-4">
                  <i className="bi bi-heart-fill fs-1 text-gold mb-3 d-block"></i>
                  <h4 className="card-title">Revivals & Conferences</h4>
                  <p className="card-text text-light-muted">
                    Multi-day events, camp meetings, and spiritual gatherings that inspire renewal.
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
              <h2 className="section-title text-white">Our Repertoire</h2>
              <p className="text-light-muted fs-5 mb-4">
                Drawing from our vast collection of sacred music, we offer selections that complement 
                your worship theme and enhance the spiritual atmosphere of your service.
              </p>
              <ul className="list-unstyled mt-4">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-check-circle-fill text-gold fs-5 me-3 mt-1"></i>
                  <div>
                    <h5 className="text-white mb-1">Traditional Hymns</h5>
                    <p className="text-light-muted mb-0">Beloved classics that unite congregations in worship</p>
                  </div>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-check-circle-fill text-gold fs-5 me-3 mt-1"></i>
                  <div>
                    <h5 className="text-white mb-1">Gospel & Spirituals</h5>
                    <p className="text-light-muted mb-0">Powerful arrangements that celebrate faith and heritage</p>
                  </div>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-check-circle-fill text-gold fs-5 me-3 mt-1"></i>
                  <div>
                    <h5 className="text-white mb-1">Contemporary Worship</h5>
                    <p className="text-light-muted mb-0">Modern compositions arranged for choral excellence</p>
                  </div>
                </li>
                <li className="d-flex align-items-start">
                  <i className="bi bi-check-circle-fill text-gold fs-5 me-3 mt-1"></i>
                  <div>
                    <h5 className="text-white mb-1">Sacred Classics</h5>
                    <p className="text-light-muted mb-0">Timeless masterworks from the great composers</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="donation-card">
                <h3 className="text-gold mb-4"><i className="bi bi-info-circle me-2"></i>What to Expect</h3>
                <p className="text-light-muted mb-4">
                  We work closely with pastors and worship leaders to select music that aligns with 
                  your service theme and enhances the worship experience.
                </p>
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-people text-gold fs-4 me-3"></i>
                  <span className="text-white">Full choir or smaller ensembles available</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-clock text-gold fs-4 me-3"></i>
                  <span className="text-white">Flexible performance lengths</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-music-note-list text-gold fs-4 me-3"></i>
                  <span className="text-white">Custom repertoire selection</span>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <i className="bi bi-heart-pulse text-gold fs-4 me-3"></i>
                  <span className="text-white">Professional and spirit-filled ministry</span>
                </div>
                <a href="/#contact" className="btn btn-gold w-100 rounded-pill">
                  <i className="bi bi-envelope me-2"></i>Discuss Your Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark text-center py-5">
        <div className="container">
          <h2 className="text-white mb-3">Bring the Gift of Music to Your Congregation</h2>
          <p className="text-light-muted mb-4">Let us partner with you in creating a meaningful worship experience.</p>
          <a href="/#contact" className="btn btn-gold btn-lg rounded-pill px-5">
            <i className="bi bi-send me-2"></i>Contact Us Today
          </a>
        </div>
      </section>
    </>
  );
}

export default ChurchServices;
