import { useParams, Link } from 'react-router-dom';

function SingerDetail() {
  const { id } = useParams();

  const singers = [
    { id: 2451, name: "Marjorie Dunkley", part: "Soprano", sectionLeader: false, gender: "F" },
    { id: 2461, name: "Dorreth Ingleton", part: "Soprano", sectionLeader: false, gender: "F" },
    { id: 2499, name: "Rose Heavens-Worrell", part: "Soprano", sectionLeader: true, gender: "F" },
    { id: 2509, name: "Curtis Ambrose", part: "Tenor", sectionLeader: false, gender: "M" },
    { id: 2520, name: "Nigel Worrell", part: "Baritone", sectionLeader: false, gender: "M" },
    { id: 2537, name: "Michelle Hanson", part: "Alto", sectionLeader: false, gender: "F" },
    { id: 2551, name: "Brenda Knight", part: "Alto", sectionLeader: false, gender: "F" },
    { id: 2558, name: "Andrew Stewart", part: "Baritone", sectionLeader: false, gender: "M" },
    { id: 2559, name: "Vanessa Burton", part: "Soprano", sectionLeader: false, gender: "F" },
    { id: 2567, name: "Eslyn Blair", part: "Tenor", sectionLeader: false, gender: "F" },
    { id: 2574, name: "Margaret Simpson", part: "Soprano", sectionLeader: false, gender: "F" },
    { id: 2586, name: "June Smith", part: "Alto", sectionLeader: false, gender: "F" },
    { id: 2589, name: "Molly St. Hillarie", part: "Tenor", sectionLeader: false, gender: "F" },
    { id: 2602, name: "Mable MacIntosh", part: "Soprano", sectionLeader: false, gender: "F" },
    { id: 2622, name: "Annette Radelin", part: "Soprano", sectionLeader: false, gender: "F" },
    { id: 2627, name: "Claudia Stewart-Philip", part: "Soprano", sectionLeader: false, gender: "F" },
    { id: 2643, name: "Colleen Phillips", part: "Alto", sectionLeader: true, gender: "F" },
    { id: 2650, name: "Farrell Hall", part: "Baritone", sectionLeader: true, gender: "M" },
    { id: 2657, name: "Mark Dunkley", part: "Tenor", sectionLeader: false, gender: "M" },
    { id: 2677, name: "Linda Oppong", part: "Alto", sectionLeader: false, gender: "F" },
    { id: 2685, name: "Pam Tolson", part: "Soprano", sectionLeader: true, gender: "F" },
    { id: 2711, name: "Jewel Scott", part: "Soprano", sectionLeader: false, gender: "F" },
    { id: 2719, name: "Sydney Ambrose", part: "Alto", sectionLeader: true, gender: "F" },
    { id: 2727, name: "Sanjay Gibson", part: "Bass", sectionLeader: false, gender: "M" },
    { id: 2729, name: "Ayinde Roberts", part: "Bass", sectionLeader: false, gender: "M" },
    { id: 2738, name: "Shelley Patrick", part: "Alto", sectionLeader: false, gender: "F" },
    { id: 2748, name: "Winston Simpson", part: "Tenor", sectionLeader: false, gender: "M" },
    { id: 2763, name: "Chris Thompson", part: "Bass", sectionLeader: false, gender: "M" },
    { id: 2770, name: "Lloyd English", part: "Bass", sectionLeader: false, gender: "M" },
    { id: 2779, name: "Audrey Mitchell", part: "Tenor", sectionLeader: true, gender: "F" },
    { id: 2811, name: "Claudia Mitchell", part: "Tenor", sectionLeader: true, gender: "F" }
  ];

  const singer = singers.find(s => s.id === parseInt(id));

  if (!singer) {
    return (
      <section className="section-dark" style={{ minHeight: '80vh', paddingTop: '120px' }}>
        <div className="container text-center">
          <h2 className="text-white mb-4">Singer Not Found</h2>
          <Link to="/members" className="btn btn-gold rounded-pill px-5">
            <i className="bi bi-arrow-left me-2"></i>Back to Members
          </Link>
        </div>
      </section>
    );
  }

  const getPartColor = (part) => {
    switch(part) {
      case 'Soprano': return 'text-warning';
      case 'Alto': return 'text-info';
      case 'Tenor': return 'text-success';
      case 'Baritone': return 'text-warning';
      case 'Bass': return 'text-danger';
      case 'Director': return 'text-gold';
      default: return 'text-light';
    }
  };

  const getPartDescription = (part) => {
    switch(part) {
      case 'Soprano': return 'The highest vocal range, known for its bright and soaring quality.';
      case 'Alto': return 'A lower vocal range, providing rich harmonies and depth to the ensemble.';
      case 'Tenor': return 'Known for a bright, resonant timbre and powerful high notes, it is essential in opera, classical, and popular music. Tenors often sing melodic lines or high-tenor harmonies.';
      case 'Baritone': return 'The most common male singing voice, positioned in the middle range between the higher tenor and lower bass. Characterized by a warm, rich, and powerful tone.';
      case 'Bass': return 'The lowest vocal range, providing the foundation and strength of the choir.';
      case 'Director': return 'Leading Choral Expressions with vision, artistry, and dedication.';
      default: return '';
    }
  };

  return (
    <>
      <section className="service-hero" style={{
        background: `linear-gradient(135deg, rgba(26, 5, 5, 0.85), rgba(13, 13, 13, 0.9)), url('/images/Highlights/Highlights/DSC0${singer.id}.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '120px 0 80px',
        minHeight: '60vh'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <Link to="/members" className="btn btn-outline-gold btn-sm rounded-pill mb-4">
                <i className="bi bi-arrow-left me-2"></i>Back to All Members
              </Link>
              <h1 className="display-3 fw-bold text-white mb-3">
                {singer.name}
              </h1>
              <p className={`lead fs-3 mb-3 ${getPartColor(singer.part)}`}>
                <i className="bi bi-music-note-beamed me-2"></i>{singer.part}
              </p>
              {singer.sectionLeader && (
                <div className="mb-3">
                  <span className="badge bg-gold text-dark fs-6 px-3 py-2">
                    <i className="bi bi-star-fill me-2"></i>Section Leader
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="position-relative">
                <img 
                  src={`/images/Highlights/Highlights/DSC0${singer.id}.jpg`}
                  alt={singer.name}
                  className="img-fluid rounded shadow-lg"
                  style={{ width: '100%', maxHeight: '600px', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x600/1a1a1a/d4af37?text=' + singer.name.split(' ').map(n => n[0]).join('');
                  }}
                />
                <div className="position-absolute top-0 start-0 p-3">
                  <span className={`badge ${getPartColor(singer.part)} bg-dark bg-opacity-75 fs-6 px-3 py-2`}>
                    {singer.part}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="section-title text-white mb-4">About {singer.name.split(' ')[0]}</h2>
              <p className="text-light-muted fs-5 mb-4">
                {singer.name} is a valued member of Choral Expressions, contributing {singer.gender === 'M' ? 'his' : 'her'} voice to the {singer.part} section.
              </p>
              
              <div className="donation-card mb-4">
                <h4 className="text-gold mb-3">
                  <i className="bi bi-music-note-list me-2"></i>Voice Part: {singer.part}
                </h4>
                <p className="text-light-muted">
                  {getPartDescription(singer.part)}
                </p>
              </div>

              {singer.sectionLeader && (
                <div className="donation-card" style={{ background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(212, 175, 55, 0.05))' }}>
                  <h4 className="text-gold mb-3">
                    <i className="bi bi-star-fill me-2"></i>Section Leader
                  </h4>
                  <p className="text-light-muted mb-0">
                    As a section leader, {singer.name.split(' ')[0]} provides guidance and support to {singer.gender === 'M' ? 'his' : 'her'} fellow {singer.part} singers, helping to maintain the excellence and unity of the section.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-burgundy text-center py-5">
        <div className="container">
          <h2 className="text-white mb-3">Meet More of Our Choir</h2>
          <p className="text-light-muted mb-4">Discover the other talented voices of Choral Expressions</p>
          <Link to="/members" className="btn btn-gold btn-lg rounded-pill px-5">
            <i className="bi bi-people me-2"></i>View All Members
          </Link>
        </div>
      </section>
    </>
  );
}

export default SingerDetail;
