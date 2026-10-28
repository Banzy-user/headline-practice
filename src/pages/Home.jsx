import { Link } from 'react-router-dom';
import Button from '../components/Button';
import WorkBenefits from '../components/WorkBenefits';
import CompanyLifeSlider from '../components/CompanyLifeSlider';

export default function Home() {
  const advantages = [
    { icon: '1', title: 'Работа в IT компании' },
    { icon: '2', title: 'Реальные проекты' },
    { icon: '3', title: 'Рост и обучение' },
    { icon: '4', title: 'Сильная команда' }
  ];

  const hiring = [
    { icon: '1', title: 'Отклик' },
    { icon: '2', title: 'Интервью' },
    { icon: '3', title: 'Тестовое задание' },
    { icon: '4', title: 'Оффер' }
  ];

  const vacancies = [
    { id: 'support-engineer', title: 'Инженер техподдержки' },
    { id: 'it-specialist', title: 'IT специалист' },
    { id: 'sales-manager', title: 'Менеджер по продажам' }
  ];

  return (
    <>
      <section className="bg-gray-900 py-24 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
              Работай в IT-команде, <br />
              которая <span className="text-red-600">автоматизирует</span> бизнес
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl font-medium">
              Разрабатываем и поддерживаем IT-решения для розницы и ресторанов
            </p>
            <Link to="/vacancies">
              <Button variant="primary" className="px-10 py-4 text-base bg-red-600 hover:bg-red-700 text-white">
                Смотреть вакансии
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-12 uppercase tracking-tight">Почему Headline?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {advantages.map((a, i) => (
              <div 
                key={i} 
                className="bg-white p-8 border border-gray-200 hover:border-red-600 hover:shadow-xl transition-all group"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{a.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 uppercase">{a.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WorkBenefits />

      <CompanyLifeSlider />

      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12">Открытые вакансии</h2>
          <div className="space-y-4">
            {vacancies.map(v => (
              <div key={v.id} className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">{v.title}</h3>
                <Link to={`/vacancies/${v.id}`}>
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg">
                    Откликнуться
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12">Как проходит найм</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {hiring.map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-white">{s.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-950 text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tight">
            Готов стать частью <span className="text-red-600">Headline</span>?
          </h2>
          <Link to="/apply">
            <Button variant="primary" className="px-12 py-4 text-base bg-red-600 hover:bg-red-700 text-white">
              Отправить резюме
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}