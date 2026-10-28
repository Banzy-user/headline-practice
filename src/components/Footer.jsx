import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16 mt-16 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
          <div className="text-2xl font-black tracking-tighter mb-4">
            HEAD<span className="text-primary">LINE</span>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            © 2026 Headline. Автоматизация бизнеса.
          </p>
          <p className="text-sm text-gray-500">
            Ижевск, ул. 50 лет Пионерии, д. 18, БЦ «Alfa», 4 этаж<br />
            sale@hlcompany.ru | +7 (3412) 601-303
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Разделы</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link to="/about" className="hover:text-primary transition">О компании</Link></li>
            <li><Link to="/work" className="hover:text-primary transition">Работа у нас</Link></li>
            <li><Link to="/vacancies" className="hover:text-primary transition">Вакансии</Link></li>
            <li><Link to="/career" className="hover:text-primary transition">Карьера</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Правовая информация</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <a href="https://hlcompany.ru/consent" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                Согласие на обработку персональных данных
              </a>
            </li>
            <li>
              <a href="https://market.hlcompany.ru/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                Политика обработки персональных данных
              </a>
            </li>
            <li>
              <a href="https://hlcompany.ru/user-agreement" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                Пользовательское соглашение
              </a>
            </li>
            <li>
              <a href="https://hlcompany.ru/cookie" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                Политика использования cookie
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}