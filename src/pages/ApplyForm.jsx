import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { vacancies } from '../data/vacancies'; 
import Button from '../components/Button';

export default function ApplyForm() {
  const [params] = useSearchParams();
  const vacancyId = params.get('vacancy');
  const vacancy = vacancies?.find(v => v.id === vacancyId);
  const [form, setForm] = useState({ name: '', phone: '', email: '', link: '', cover: '', consent: false });
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.consent) {
      alert('Необходимо дать согласие на обработку персональных данных');
      return;
    }
    console.log('Отклик:', { ...form, file, vacancy: vacancy?.title });
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="max-w-xl mx-auto px-6 py-20 text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-3xl font-bold mb-4">Резюме отправлено!</h2>
        <p className="text-gray-600">Мы свяжемся с тобой в течение 2 дней.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-2">Отклик на вакансию в Headline</h1>
      {vacancy && <p className="text-gray-600 mb-8">Вакансия: <b>{vacancy.title}</b></p>}
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md space-y-4">
        <input
          required
          placeholder="Имя и Фамилия"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          className="w-full p-3 border rounded-lg"
        />
        <input
          required
          type="tel"
          placeholder="Телефон"
          value={form.phone}
          onChange={e => setForm({ ...form, phone: e.target.value })}
          className="w-full p-3 border rounded-lg"
        />
        <input
          required
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          className="w-full p-3 border rounded-lg"
        />
        <input
          placeholder="Ссылка на HH / Портфолио"
          value={form.link}
          onChange={e => setForm({ ...form, link: e.target.value })}
          className="w-full p-3 border rounded-lg"
        />
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={e => setFile(e.target.files[0])}
          className="w-full p-3 border rounded-lg"
        />
        <textarea
          placeholder="Сопроводительное письмо"
          rows="4"
          value={form.cover}
          onChange={e => setForm({ ...form, cover: e.target.value })}
          className="w-full p-3 border rounded-lg"
        />
        
        <div className="flex items-start gap-3 pt-2">
          <input
            type="checkbox"
            id="consent"
            required
            checked={form.consent}
            onChange={e => setForm({ ...form, consent: e.target.checked })}
            className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
          />
          <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
            Я принимаю условия{' '}
            <a href="https://hlcompany.ru/user-agreement" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Пользовательского соглашения
            </a>{' '}
            и даю согласие на обработку моих персональных данных в целях обработки заявки и обратной связи в соответствии с{' '}
            <a href="https://hlcompany.ru/consent" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Политикой обработки персональных данных
            </a>.
          </label>
        </div>

        <Button type="submit" className="w-full">Отправить отклик</Button>
      </form>
    </div>
  );
}