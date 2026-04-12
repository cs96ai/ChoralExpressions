import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Wedding from './pages/services/Wedding';
import Christmas from './pages/services/Christmas';
import Easter from './pages/services/Easter';
import BlackHistoryMonth from './pages/services/BlackHistoryMonth';
import CelebrationOfLife from './pages/services/CelebrationOfLife';
import Corporate from './pages/services/Corporate';
import StoreOpening from './pages/services/StoreOpening';
import ChurchServices from './pages/services/ChurchServices';
import AboutChoir from './pages/AboutChoir';
import AboutDirector from './pages/AboutDirector';
import Events from './pages/Events';
import Members from './pages/Members';
import Highlights from './pages/Highlights';
import SingerDetail from './pages/SingerDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/wedding" element={<Wedding />} />
          <Route path="/services/christmas" element={<Christmas />} />
          <Route path="/services/easter" element={<Easter />} />
          <Route path="/services/black-history-month" element={<BlackHistoryMonth />} />
          <Route path="/services/celebration-of-life" element={<CelebrationOfLife />} />
          <Route path="/services/corporate" element={<Corporate />} />
          <Route path="/services/store-opening" element={<StoreOpening />} />
          <Route path="/services/church-services" element={<ChurchServices />} />
          <Route path="/about-choir" element={<AboutChoir />} />
          <Route path="/about-director" element={<AboutDirector />} />
          <Route path="/events" element={<Events />} />
          <Route path="/members" element={<Members />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/highlights/:id" element={<SingerDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
