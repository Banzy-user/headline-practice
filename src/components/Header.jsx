import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/about', label: 'О компании' },
    { path: '/work', label: 'Работа у нас' },
    { path: '/vacancies', label: 'Вакансии' },
    { path: '/career', label: 'Карьера' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="text-3xl font-black tracking-tighter">
              HEAD<span className="text-primary group-hover:text-primary-light transition-colors">LINE</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-all hover:text-primary ${
                  location.pathname === item.path ? 'text-primary' : 'text-gray-text'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link to="/apply">
              <button className="bg-primary hover:bg-primary-light text-white px-6 py-2.5 rounded-lg font-semibold transition-all hover:shadow-glow">
                Отправить резюме
              </button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden py-4 border-t border-surface-border">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 text-sm font-medium ${
                  location.pathname === item.path ? 'text-primary' : 'text-gray-text'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/apply" onClick={() => setIsOpen(false)}>
              <button className="mt-4 w-full bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-lg font-semibold">
                Отправить резюме
              </button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}