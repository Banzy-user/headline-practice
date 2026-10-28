import { Link } from 'react-router-dom';
import Button from './Button';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const links = [
    { to: '/', label: 'Главная' },
    { to: '/about', label: 'О компании' },
    { to: '/work', label: 'Работа у нас' },
    { to: '/vacancies', label: 'Вакансии' },
    { to: '/career', label: 'Карьера' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-dark/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black tracking-tighter text-white">
          HEAD<span className="text-primary">LINE</span>
        </Link>
        
        <nav className="hidden lg:flex gap-8">
          {links.map(l => (
            <Link key={l.to} to={l.to} className="text-sm font-medium text-gray-400 hover:text-primary transition uppercase tracking-wide">
              {l.label}
            </Link>
          ))}
        </nav>
        
        <div className="hidden lg:block">
          <Link to="/apply">
            <Button variant="primary">Отправить резюме</Button>
          </Link>
        </div>

        <button className="lg:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface border-t border-white/10">
          <nav className="flex flex-col p-6 gap-4">
            {links.map(l => (
              <Link key={l.to} to={l.to} className="text-sm font-medium text-gray-400 hover:text-primary transition uppercase" onClick={() => setMobileMenuOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link to="/apply" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" className="w-full">Отправить резюме</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}