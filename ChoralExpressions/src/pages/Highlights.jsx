import { Link } from 'react-router-dom';

function Highlights() {
  const singersData = [
    { id: 2451, name: "Marjorie Dunkley", part: "Soprano", sectionLeader: false },
    { id: 2461, name: "Dorreth Ingleton", part: "Soprano", sectionLeader: false },
    { id: 2499, name: "Rose Heavens-Worrell", part: "Soprano", sectionLeader: true },
    { id: 2509, name: "Curtis Ambrose", part: "Tenor", sectionLeader: false },
    { id: 2520, name: "Nigel Worrell", part: "Baritone", sectionLeader: false },
    { id: 2537, name: "Michelle Hanson", part: "Alto", sectionLeader: false },
    { id: 2551, name: "Brenda Knight", part: "Alto", sectionLeader: false },
    { id: 2558, name: "Andrew Stewart", part: "Baritone", sectionLeader: false },
    { id: 2559, name: "Vanessa Burton", part: "Soprano", sectionLeader: false },
    { id: 2567, name: "Eslyn Blair", part: "Tenor", sectionLeader: false },
    { id: 2574, name: "Margaret Simpson", part: "Soprano", sectionLeader: false },
    { id: 2586, name: "June Smith", part: "Alto", sectionLeader: false },
    { id: 2589, name: "Molly St. Hillarie", part: "Tenor", sectionLeader: false },
    { id: 2602, name: "Mable MacIntosh", part: "Soprano", sectionLeader: false },
    { id: 2622, name: "Annette Radelin", part: "Soprano", sectionLeader: false },
    { id: 2627, name: "Claudia Stewart-Philip", part: "Soprano", sectionLeader: false },
    { id: 2643, name: "Colleen Phillips", part: "Alto", sectionLeader: true },
    { id: 2650, name: "Farrell Hall", part: "Baritone", sectionLeader: true },
    { id: 2657, name: "Mark Dunkley", part: "Tenor", sectionLeader: false },
    { id: 2677, name: "Linda Oppong", part: "Alto", sectionLeader: false },
    { id: 2685, name: "Pam Tolson", part: "Soprano", sectionLeader: true },
    { id: 2711, name: "Jewel Scott", part: "Soprano", sectionLeader: false },
    { id: 2719, name: "Sydney Ambrose", part: "Alto", sectionLeader: true },
    { id: 2727, name: "Sanjay Gibson", part: "Bass", sectionLeader: false },
    { id: 2729, name: "Ayinde Roberts", part: "Bass", sectionLeader: false },
    { id: 2738, name: "Shelley Patrick", part: "Alto", sectionLeader: false },
    { id: 2748, name: "Winston Simpson", part: "Tenor", sectionLeader: false },
    { id: 2763, name: "Chris Thompson", part: "Bass", sectionLeader: false },
    { id: 2770, name: "Lloyd English", part: "Bass", sectionLeader: false },
    { id: 2779, name: "Audrey Mitchell", part: "Tenor", sectionLeader: true },
    { id: 2811, name: "Claudia Mitchell", part: "Tenor", sectionLeader: true },
        { id: null, name: "Christine Thompson", part: "Alto", sectionLeader: false }
  ];

  // Sort singers by section: Soprano, Alto, Tenor, Baritone, Bass, Director
  // Then alphabetically by last name within each section
  const sectionOrder = { 'Soprano': 1, 'Alto': 2, 'Tenor': 3, 'Baritone': 4, 'Bass': 5, 'Director': 6 };
  const singers = [...singersData].sort((a, b) => {
    // First sort by section
    const sectionDiff = sectionOrder[a.part] - sectionOrder[b.part];
    if (sectionDiff !== 0) return sectionDiff;
    
    // Then sort alphabetically by last name within the same section
    const aLastName = a.name.split(' ').pop();
    const bLastName = b.name.split(' ').pop();
    return aLastName.localeCompare(bLastName);
  });

  const getPartColor = (part) => {
    switch(part) {
      case 'Soprano': return 'text-gold';
      case 'Alto': return 'text-info';
      case 'Tenor': return 'text-success';
      case 'Baritone': return 'text-warning';
      case 'Bass': return 'text-danger';
      case 'Director': return 'text-gold';
      default: return 'text-light';
    }
  };

  const getPartBadge = (part) => {
    switch(part) {
      case 'Soprano': return 'badge bg-warning text-dark';
      case 'Alto': return 'badge bg-info text-dark';
      case 'Tenor': return 'badge bg-success text-dark';
      case 'Baritone': return 'badge bg-warning text-dark';
      case 'Bass': return 'badge bg-danger text-dark';
      case 'Director': return 'badge bg-gold text-dark';
      default: return 'badge bg-secondary text-dark';
    }
  };

  return (
    <>
      <section className="hero-section" style={{ minHeight: '40vh', padding: '120px 0 60px' }}>
        <div className="hero-content container">
          <h1 className="hero-title animate-fade-in-up">
            <i className="bi bi-people-fill text-gold me-3"></i>Our Members
          </h1>
          <p className="hero-subtitle animate-fade-in-up animate-delay-1">
            33 Voices United in Faith and Song
          </p>
        </div>
      </section>

      <section className="section-dark py-5">
        <div className="container">
          <div className="row g-4">
            {singers.map((singer, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-3">
                {/* <Link 
                  to={singer.id ? `/members/${singer.id}` : '#'} 
                  className="text-decoration-none"
                  style={{ pointerEvents: singer.id ? 'auto' : 'none' }}
                > */}
                  <div className="card service-card h-100 text-white border-0 position-relative" style={{ overflow: 'hidden' }}>
                    {singer.id ? (
                      <img 
                        src={`/images/Highlights/Highlights/DSC0${singer.id}.jpg`}
                        alt={singer.name}
                        className="card-img-top"
                        style={{ 
                          height: '250px', 
                          objectFit: 'cover',
                          filter: 'brightness(0.9)'
                        }}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/250x250/1a1a1a/d4af37?text=' + singer.name.split(' ').map(n => n[0]).join('');
                        }}
                      />
                    ) : (
                      <div 
                        className="card-img-top d-flex align-items-center justify-content-center bg-dark"
                        style={{ height: '250px' }}
                      >
                        <i className="bi bi-person-circle fs-1 text-gold"></i>
                      </div>
                    )}
                    <div className="card-body text-center py-3">
                      <h6 className="card-title mb-1 text-white fw-bold">{singer.name}</h6>
                      <span className={getPartBadge(singer.part)}>{singer.part}</span>
                      {singer.sectionLeader && (
                        <div className="mt-2">
                          <span className="badge text-gold" style={{backgroundColor: 'transparent'}}>
                            <i className="bi bi-star-fill me-1"></i>Section Leader
                          </span>
                        </div>
                      )}
                    </div>
                    {singer.id && (
                      <div className="position-absolute top-0 end-0 p-2">
                        <span className="badge bg-dark bg-opacity-75">
                          <i className="bi bi-eye"></i>
                        </span>
                      </div>
                    )}
                  </div>
                {/* </Link> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-burgundy text-center py-5">
        <div className="container">
          <h2 className="text-white mb-3">Join Our Choir</h2>
          <p className="text-light-muted mb-4">Interested in becoming part of Choral Expressions?</p>
          <Link to="/join-us" className="btn btn-gold btn-lg rounded-pill px-5">
            <i className="bi bi-music-note-list me-2"></i>Join Us
          </Link>
        </div>
      </section>
    </>
  );
}

export default Highlights;
