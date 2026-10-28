import { useParams, Link } from 'react-router-dom';
import { vacancies } from '../data/vacancies';
import Button from '../components/Button';

export default function VacancyDetail() {
    const { id } = useParams();
    const vacancy = vacancies.find(v => v.id === id);
    if (!vacancy) return <div className="p-10 text-white">Вакансия не найдена</div>;

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <nav className="text-sm text-gray-500 mb-6 flex flex-wrap gap-2">
                <Link to="/" className="hover:text-primary transition">Главная</Link>
                <span>/</span>
                <Link to="/vacancies" className="hover:text-primary transition">Вакансии</Link>
                <span>/</span>
                <span className="text-gray-300">{vacancy.title}</span>
            </nav>

            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{vacancy.title}</h1>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">{vacancy.description}</p>
                    <h2 className="text-2xl font-semibold text-white mb-4">Требования</h2>
                    <ul className="list-disc list-inside space-y-3 text-gray-300 mb-8 marker:text-primary">
                        {vacancy.requirements.map((r, i) => <li key={i}>{r}</li>)}
                    </ul>
                </div>

                <aside className="glass-card p-6 rounded-2xl h-fit sticky top-24">
                    <div className="mb-6">
                        <div className="text-sm text-gray-500 mb-1">Зарплата</div>
                        <div className="text-2xl font-bold text-primary">{vacancy.salary}</div>
                    </div>
                    <div className="mb-8">
                        <div className="text-sm text-gray-500 mb-1">Формат</div>
                        <div className="text-lg font-semibold text-white">{vacancy.format}</div>
                    </div>
                    <Link to={`/apply?vacancy=${vacancy.id}`} className="block">
                        <Button className="w-full">Откликнуться</Button>
                    </Link>
                </aside>
            </div>
        </div>
    );
}