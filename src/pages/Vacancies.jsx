import { Link } from 'react-router-dom';
import { vacancies } from '../data/vacancies';
import Button from '../components/Button';

export default function Vacancies() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-10">Вакансии</h1>
            <div className="space-y-4">
                {vacancies.map(v => (
                <div key={v.id} className="glass-card p-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <h3 className="text-xl font-semibold text-white">{v.title}</h3>
                        <p className="text-gray-400 mt-1">{v.salary} · {v.format}</p>
                    </div>
                    <Link to={`/vacancies/${v.id}`}><Button variant="outline">Подробнее</Button></Link>
                </div>
                ))}
            </div>
        </div>
    );
}