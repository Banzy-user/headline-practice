import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Vacancies() {
  const vacancies = [
    { id: 'support', title: 'Специалист технической поддержки', dept: 'Поддержка', type: 'Офис' },
    { id: 'dotnet', title: 'Программист .NET', dept: 'Разработка', type: 'Офис/Гибрид' },
    { id: '1c', title: 'Программист 1С', dept: 'Разработка', type: 'Офис' },
    { id: 'sales', title: 'Менеджер по продажам', dept: 'Продажи', type: 'Офис' }
  ];

  return (
    <div className="pt-32 pb-24 bg-bg min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Вакансии</p>
        <h1 className="text-5xl md:text-6xl font-black text-white mb-12">Открытые позиции</h1>
        
        <div className="space-y-4">
          {vacancies.map(v => (
            <Link key={v.id} to={`/vacancies/${v.id}`} className="glass-card p-6 md:p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 group block">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 rounded-full bg-surface-light text-xs font-semibold text-gray-text border border-surface-border">{v.dept}</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-xs font-semibold text-primary border border-primary/20">{v.type}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">{v.title}</h3>
              </div>
              <Button variant="secondary" className="md:w-auto w-full">Подробнее</Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}