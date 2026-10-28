import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) setShow(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 animate-fade-in">
      <div className="glass-card bg-surface/95 p-6 rounded-2xl shadow-2xl">
        <h3 className="text-white font-bold mb-2">🍪 Мы используем cookie</h3>
        <p className="text-gray-text text-sm mb-4 leading-relaxed">
          Оставаясь на сайте, вы принимаете условия{' '}
          <a href="https://hlcompany.ru/consent" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Положения об обработке персональных данных
          </a>{' '}
          и даете согласие на работу метрических программ.
        </p>
        <button
          onClick={handleAccept}
          className="w-full bg-primary hover:bg-primary-light text-white py-2.5 rounded-lg font-semibold transition-all shadow-glow"
        >
          Принять и продолжить
        </button>
      </div>
    </div>
  );
}