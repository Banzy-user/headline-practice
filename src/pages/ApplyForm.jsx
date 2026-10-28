import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Button from '../components/Button';

export default function ApplyForm() {
  const [params] = useSearchParams();
  const vacancyId = params.get('vacancy');
  const [form, setForm] = useState({ name: '', phone: '', email: '', link: '', cover: '', consent: false });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.consent) {
      alert('Необходимо дать согласие на обработку персональных данных');
      return;
    }
    console.log('Отклик:', form);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="pt-32 pb-24 bg-bg min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">🎉</div>
          <h2 className="text-3xl font-black text-white mb-4">Резюме отправлено!</h2>
          <p className="text-gray-text mb-8">Мы внимательно изучим твой отклик и свяжемся с тобой в течение 2 рабочих дней.</p>
          <Link to="/"><Button variant="primary">На главную</Button></Link>
        </div>
      </div>
    );
  }

  const inputClass = "w-full bg-surface-light border border-surface-border rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all";

  return (
    <div className="pt-32 pb-24 bg-bg min-h-screen">
      <div className="max-w-2xl mx-auto px-6">
        <Link to="/vacancies" className="text-gray-text hover:text-primary transition-colors mb-8 inline-flex items-center gap-2">
          ← Назад к вакансиям
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Отклик на вакансию</h1>
        <p className="text-gray-text mb-10">Заполни форму ниже, и мы обязательно рассмотрим твою кандидатуру.</p>

        <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 rounded-3xl space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input required placeholder="Имя и Фамилия" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className={inputClass} />
            <input required type="tel" placeholder="Телефон" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className={inputClass} />
          </div>
          <input required type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className={inputClass} />
          <input placeholder="Ссылка на HH.ru / GitHub / Портфолио" value={form.link} onChange={e => setForm({...form, link: e.target.value})} className={inputClass} />
          <textarea required placeholder="Сопроводительное письмо (расскажи о себе)" rows="4" value={form.cover} onChange={e => setForm({...form, cover: e.target.value})} className={`${inputClass} resize-none`} />
          
          <div className="flex items-start gap-4 pt-2">
            <input
              type="checkbox"
              id="consent"
              required
              checked={form.consent}
              onChange={e => setForm({...form, consent: e.target.checked})}
              className="mt-1 w-5 h-5 rounded border-surface-border bg-surface-light text-primary focus:ring-primary focus:ring-offset-0"
            />
            <label htmlFor="consent" className="text-sm text-gray-text leading-relaxed cursor-pointer">
              Я принимаю условия{' '}
              <a href="https://hlcompany.ru/user-agreement" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Пользовательского соглашения</a>{' '}
              и даю согласие на обработку моих персональных данных в соответствии с{' '}
              <a href="https://hlcompany.ru/consent" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Политикой конфиденциальности</a>.
            </label>
          </div>

          <Button type="submit" variant="primary" className="w-full py-4 text-lg mt-4">Отправить отклик</Button>
        </form>
      </div>
    </div>
  );
}