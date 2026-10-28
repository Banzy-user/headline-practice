import { Link } from 'react-router-dom';
import Button from '../components/Button';
import WorkBenefits from '../components/WorkBenefits';
import CompanyLifeSlider from '../components/CompanyLifeSlider';

export default function Home() {
  const vacancies = [
    { id: 'support', title: 'Инженер техподдержки', tag: 'Офис' },
    { id: 'dotnet', title: 'Программист .NET', tag: 'Офис/Гибрид' },
    { id: '1c', title: 'Программист 1С', tag: 'Офис' }
  ];

  return (
    <>
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-bg overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-hero-glow pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
            Набор в команду 2026
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tight">
            Работай в IT-команде, <br />
            которая <span className="gradient-text-primary">автоматизирует</span> бизнес
          </h1>
          <p className="text-xl text-gray-text mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Разрабатываем и поддерживаем IT-решения для розницы и ресторанов. 
            Помогаем бизнесу работать быстрее, эффективнее и современнее.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/vacancies"><Button variant="primary">Смотреть вакансии</Button></Link>
            <Link to="/about"><Button variant="secondary">О компании</Button></Link>
          </div>
        </div>
      </section>

      <WorkBenefits />
      <CompanyLifeSlider />

      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Вакансии</p>
              <h2 className="text-4xl md:text-5xl font-black text-white">Открытые позиции</h2>
            </div>
            <Link to="/vacancies" className="text-gray-text hover:text-primary transition-colors font-semibold flex items-center gap-2">
              Все вакансии 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {vacancies.map(v => (
              <Link key={v.id} to={`/vacancies/${v.id}`} className="glass-card p-8 rounded-2xl group block">
                <span className="inline-block px-3 py-1 rounded-full bg-surface-light text-xs font-semibold text-gray-text mb-4 border border-surface-border">{v.tag}</span>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{v.title}</h3>
                <div className="flex items-center text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                  Откликнуться <span className="ml-2">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface border-y border-surface-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-16">Как проходит найм</h2>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            {[
              { icon: '📩', title: 'Отклик', desc: 'Отправь резюме или ссылку на GitHub' },
              { icon: '💬', title: 'Интервью с HR', desc: 'Знакомство, обсуждение ожиданий' },
              { icon: '💻', title: 'Тех. собеседование', desc: 'Общение с будущим руководителем' },
              { icon: '🎉', title: 'Оффер', desc: 'Предложение и быстрый онбординг' }
            ].map((step, i) => (
              <div key={i} className="relative text-center group">
                <div className="w-24 h-24 mx-auto bg-surface-light border border-surface-border rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:border-primary/50 group-hover:shadow-glow transition-all duration-300 relative z-10">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-text text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow opacity-50" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            Готов стать частью <span className="gradient-text-primary">Headline</span>?
          </h2>
          <p className="text-gray-text text-lg mb-10 max-w-2xl mx-auto">
            Присоединяйся к умной, сильной и творческой команде. Мы всегда рады талантливым людям.
          </p>
          <Link to="/apply"><Button variant="primary" className="px-10 py-4 text-lg">Отправить резюме</Button></Link>
        </div>
      </section>
    </>
  );
}