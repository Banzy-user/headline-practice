import { useParams, Link, useNavigate } from 'react-router-dom';
import { vacancies } from '../data/vacancies';
import Button from '../components/Button';

export default function VacancyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const vacancy = vacancies.find(v => v.id === id);

  if (!vacancy) {
    return (
      <div className="pt-32 pb-24 bg-bg min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <h1 className="text-6xl font-black text-primary mb-4">404</h1>
          <h2 className="text-2xl font-bold text-white mb-4">Вакансия не найдена</h2>
          <p className="text-gray-text mb-8">Возможно, она была закрыта или вы перешли по неверной ссылке.</p>
          <Button variant="primary" onClick={() => navigate('/vacancies')}>
            К списку вакансий
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-bg min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <Link to="/vacancies" className="text-gray-text hover:text-primary transition-colors mb-8 inline-flex items-center gap-2 group">
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Назад к вакансиям
        </Link>
        
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-surface-light text-sm font-semibold text-gray-text border border-surface-border">
              {vacancy.department}
            </span>
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-sm font-semibold text-primary border border-primary/20">
              {vacancy.format}
            </span>
            <span className="px-4 py-1.5 rounded-full bg-green-500/10 text-sm font-semibold text-green-400 border border-green-500/20">
              {vacancy.salary}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            {vacancy.title}
          </h1>
          <p className="text-xl text-gray-text leading-relaxed max-w-3xl">
            {vacancy.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="glass-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary" /> 
              Чем предстоит заниматься
            </h2>
            <ul className="space-y-4">
              {vacancy.tasks.map((task, i) => (
                <li key={i} className="text-gray-text flex items-start gap-3 leading-relaxed">
                  <span className="text-primary mt-1.5 flex-shrink-0">•</span> 
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary" /> 
              Наши ожидания
            </h2>
            <ul className="space-y-4">
              {vacancy.requirements.map((req, i) => (
                <li key={i} className="text-gray-text flex items-start gap-3 leading-relaxed">
                  <span className="text-primary mt-1.5 flex-shrink-0">•</span> 
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-3xl text-center border-primary/20 bg-primary/5">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Тебе понравилась эта вакансия?
          </h3>
          <p className="text-gray-text mb-8 max-w-xl mx-auto">
            Отправь нам свое резюме, и мы обязательно рассмотрим твою кандидатуру. Мы ценим каждого, кто хочет развиваться вместе с нами.
          </p>
          <Link to={`/apply?vacancy=${vacancy.id}`}>
            <Button variant="primary" className="px-10 py-4 text-lg shadow-glow">
              Откликнуться на вакансию
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}