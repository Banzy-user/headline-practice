import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-dark text-white py-16 mt-16 border-t-4 border-primary">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
                <div>
                    <div className="text-2xl font-black tracking-tighter mb-4">
                        HEAD<span className="text-primary">LINE</span>
                    </div>
                    <p className="text-sm text-gray-500">© 2026 Headline. Автоматизация бизнеса.</p>
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
                    <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Контакты HR</h4>
                    <p className="text-sm text-gray-400 mb-1">hr@headline.ru</p>
                    <p className="text-sm text-gray-400 mb-4">+7 (495) 000-00-00</p>
                    <div className="flex gap-4">
                        <a href="#" className="text-sm text-gray-400 hover:text-primary transition uppercase font-bold">Telegram</a>
                        <a href="#" className="text-sm text-gray-400 hover:text-primary transition uppercase font-bold">VK</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}