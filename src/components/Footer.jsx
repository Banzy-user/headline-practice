import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-surface-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="text-2xl font-black tracking-tighter mb-4">
              HEAD<span className="text-primary">LINE</span>
            </div>
            <p className="text-gray-text text-sm leading-relaxed mb-6">
              Российский разработчик программных решений для retail, fmcg и e-commerce
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-surface-light flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-surface-light flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Разделы</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-gray-text hover:text-primary transition">О компании</Link></li>
              <li><Link to="/work" className="text-gray-text hover:text-primary transition">Работа у нас</Link></li>
              <li><Link to="/vacancies" className="text-gray-text hover:text-primary transition">Вакансии</Link></li>
              <li><Link to="/career" className="text-gray-text hover:text-primary transition">Карьера</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Контакты</h4>
            <ul className="space-y-3 text-sm text-gray-text">
              <li>sale@hlcompany.ru</li>
              <li>+7 (3412) 601-303</li>
              <li>Ижевск, ул. 50 лет Пионерии, д. 18</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Правовая информация</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://hlcompany.ru/consent" target="_blank" rel="noopener noreferrer" className="text-gray-text hover:text-primary transition">
                  Согласие на обработку ПД
                </a>
              </li>
              <li>
                <a href="https://market.hlcompany.ru/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gray-text hover:text-primary transition">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="https://hlcompany.ru/user-agreement" target="_blank" rel="noopener noreferrer" className="text-gray-text hover:text-primary transition">
                  Пользовательское соглашение
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-surface-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-text text-sm">
            © 2026 Headline. Все права защищены.
          </p>
          <p className="text-gray-text text-sm">
            ООО «Хэдлайн-Ижевск» | ИНН 1841037410
          </p>
        </div>
      </div>
    </footer>
  );
}