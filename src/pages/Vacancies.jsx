import { Link } from 'react-router-dom';
import { vacancies } from '../data/vacancies';
import Button from '../components/Button';

export default function Vacancies() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold mb-10">Вакансии</h1>
            <div className="space-y-4">
                {vacancies.map(v => (
                <div key={v.id} className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-semibold">{v.title}</h3>
                        <p className="text-gray-500">{v.salary} · {v.format}</p>
                    </div>
                    <Link to={`/vacancies/${v.id}`}><Button>Подробнее</Button></Link>
                </div>
                ))}
            </div>
        </div>
    );
}