import { Link } from 'react-router-dom';
import Button from './Button';

export default function Header() {
  const links = [
    { to: '/', label: 'Главная' },
    { to: '/about', label: 'О компании' },
    { to: '/work', label: 'Работа у нас' },
    { to: '/vacancies', label: 'Вакансии' },
    { to: '/career', label: 'Карьера' },
  ];
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black text-dark tracking-tighter">
          HEAD<span className="text-primary">LINE</span>
        </Link>
        
        <nav className="hidden md:flex gap-8">
          {links.map(l => (
            <Link key={l.to} to={l.to} className="text-sm font-medium text-dark hover:text-primary transition uppercase tracking-wide">
              {l.label}
            </Link>
          ))}
        </nav>
        
        <Link to="/apply">
          <Button variant="primary">Отправить резюме</Button>
        </Link>
      </div>
    </header>
  );
}