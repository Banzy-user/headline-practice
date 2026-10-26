import { useParams, Link } from 'react-router-dom';
import { vacancies } from '../data/vacancies';
import Button from '../components/Button';

export default function VacancyDetail() {
    const { id } = useParams();
    const vacancy = vacancies.find(v => v.id === id);
    if (!vacancy) return <div className="p-10">Вакансия не найдена</div>;

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <nav className="text-sm text-gray-500 mb-6">
                <Link to="/" className="hover:text-primary">Главная</Link>
                <Link to="/vacancies" className="hover:text-primary ml-1">Вакансии</Link>
                <span className="ml-1 text-gray-800">{vacancy.title}</span>
            </nav>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <h1 className="text-4xl font-bold mb-6">{vacancy.title}</h1>
                    <p className="text-lg text-gray-700 mb-8">{vacancy.description}</p>
                    <h2 className="text-2xl font-semibold mb-4">Требования</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                        {vacancy.requirements.map((r, i) => <li key={i}>{r}</li>)}
                    </ul>
                </div>

                <aside className="bg-white p-6 rounded-xl shadow-md h-fit sticky top-24">
                    <div className="mb-4">
                        <div className="text-sm text-gray-500">Зарплата</div>
                        <div className="text-2xl font-bold text-primary">{vacancy.salary}</div>
                    </div>
                    <div className="mb-6">
                        <div className="text-sm text-gray-500">Формат</div>
                        <div className="text-lg font-semibold">{vacancy.format}</div>
                    </div>
                    <Link to={`/apply?vacancy=${vacancy.id}`} className="block">
                        <Button className="w-full">Откликнуться</Button>
                    </Link>
                </aside>
            </div>
        </div>
    );
}