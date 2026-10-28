import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent.jsx';
import Home from './pages/Home';
import About from './pages/About';
import WorkWithUs from './pages/WorkWithUs';
import Vacancies from './pages/Vacancies';
import VacancyDetail from './pages/VacancyDetail';
import Career from './pages/Career';
import ApplyForm from './pages/ApplyForm';

export default function App() {
  return (
    <BrowserRouter basename="/headline-practice">
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<WorkWithUs />} />
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/vacancies/:id" element={<VacancyDetail />} />
          <Route path="/career" element={<Career />} />
          <Route path="/apply" element={<ApplyForm />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </BrowserRouter>
  );
}