import { Link } from 'react-router-dom';

function Wedding() {
  return (
    <>
      <section className="service-hero" style={{
        background: "linear-gradient(135deg, rgba(26, 5, 5, 0.9), rgba(13, 13, 13, 0.95)), url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80')",
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
                <i className="bi bi-heart-fill text-gold me-3"></i>Wedding Ceremonies
              </h1>
              <p className="lead text-gold fs-4 mb-4">Your Love Story, Set to Music</p>
              <p className="text-light-muted fs-5 mb-4">
                Make your wedding day truly unforgettable with the breathtaking sound of 33 voices 
                celebrating your love. From the processional to the recessional, we create moments 
                that will be treasured forever.
              </p>
              <Link to="/?event=Wedding#contact" className="btn btn-gold btn-lg rounded-pill px-5">
                <i className="bi bi-calendar-check me-2"></i>Book Your Wedding
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Every Moment, Perfectly Scored</h2>
            <p className="section-subtitle">Music that enhances each precious moment</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card service-card h-100 text-white border-0">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{width: '80px', height: '80px', background: 'linear-gradient(145deg, #2b1111, #1a0505)'}}>
                    <i className="bi bi-door-open fs-2 text-gold"></i>
                  </div>
                  <h5 className="card-title">Prelude</h5>
                  <p className="card-text text-light-muted small">
                    Set the tone as guests arrive with elegant choral music that builds anticipation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card service-card h-100 text-white border-0">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{width: '80px', height: '80px', background: 'linear-gradient(145deg, #2b1111, #1a0505)'}}>
                    <i className="bi bi-arrow-right fs-2 text-gold"></i>
                  </div>
                  <h5 className="card-title">Processional</h5>
                  <p className="card-text text-light-muted small">
                    The moment everyone waits for—your entrance, accompanied by breathtaking harmonies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card service-card h-100 text-white border-0">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{width: '80px', height: '80px', background: 'linear-gradient(145deg, #2b1111, #1a0505)'}}>
                    <i className="bi bi-heart fs-2 text-gold"></i>
                  </div>
                  <h5 className="card-title">Ceremony</h5>
                  <p className="card-text text-light-muted small">
                    Special selections during unity ceremonies, readings, or quiet reflection.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card service-card h-100 text-white border-0">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{width: '80px', height: '80px', background: 'linear-gradient(145deg, #2b1111, #1a0505)'}}>
                    <i className="bi bi-emoji-smile fs-2 text-gold"></i>
                  </div>
                  <h5 className="card-title">Recessional</h5>
                  <p className="card-text text-light-muted small">
                    Celebrate your new beginning with joyful music as you walk out as newlyweds.
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
              <h2 className="section-title text-white">Popular Wedding Selections</h2>
              <p className="section-subtitle mb-4">Timeless classics and modern favorites</p>
              
              <div className="row g-3">
                {[
                  { title: '"Ave Maria"', composer: 'Schubert / Bach-Gounod' },
                  { title: '"Canon in D"', composer: 'Pachelbel (choral arrangement)' },
                  { title: '"The Prayer"', composer: 'Bocelli & Dion' },
                  { title: '"A Thousand Years"', composer: 'Christina Perri' }
                ].map((song, idx) => (
                  <div className="col-12" key={idx}>
                    <div className="p-3 bg-dark-surface rounded d-flex align-items-center">
                      <i className="bi bi-music-note-beamed text-gold fs-4 me-3"></i>
                      <div>
                        <h6 className="text-white mb-0">{song.title}</h6>
                        <small className="text-light-muted">{song.composer}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="donation-card">
                <h3 className="text-gold mb-4"><i className="bi bi-gem me-2"></i>Wedding Packages</h3>
                
                <div className="mb-4 pb-4 border-bottom border-gold">
                  <h5 className="text-white">Ceremony Package</h5>
                  <p className="text-light-muted small mb-2">Perfect for the ceremony itself</p>
                  <ul className="list-unstyled text-light-muted small">
                    <li><i className="bi bi-check text-gold me-2"></i>Prelude (15-20 min)</li>
                    <li><i className="bi bi-check text-gold me-2"></i>Processional</li>
                    <li><i className="bi bi-check text-gold me-2"></i>1-2 ceremony selections</li>
                    <li><i className="bi bi-check text-gold me-2"></i>Recessional</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h5 className="text-white">Full Celebration Package</h5>
                  <p className="text-light-muted small mb-2">Ceremony + cocktail hour</p>
                  <ul className="list-unstyled text-light-muted small">
                    <li><i className="bi bi-check text-gold me-2"></i>Everything in Ceremony Package</li>
                    <li><i className="bi bi-check text-gold me-2"></i>Cocktail hour performance</li>
                    <li><i className="bi bi-check text-gold me-2"></i>Custom song requests</li>
                  </ul>
                </div>
                
                <a href="/#contact" className="btn btn-gold w-100 rounded-pill">
                  <i className="bi bi-envelope me-2"></i>Get a Custom Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <i className="bi bi-quote fs-1 text-gold mb-3 d-block"></i>
              <blockquote className="fs-4 text-white fst-italic mb-4">
                "When the choir began to sing as I walked down the aisle, there wasn't a dry eye 
                in the church. It was the most magical moment of our entire wedding."
              </blockquote>
              <p className="text-gold">— Sarah & Michael, Toronto</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-burgundy text-center py-5">
        <div className="container">
          <h2 className="text-white mb-3">Begin Your Forever with Beautiful Music</h2>
          <p className="text-light-muted mb-4">Let us help you create the wedding of your dreams.</p>
          <a href="/#contact" className="btn btn-gold btn-lg rounded-pill px-5">
            <i className="bi bi-send me-2"></i>Start Planning
          </a>
        </div>
      </section>
    </>
  );
}

export default Wedding;
