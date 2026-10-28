import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl p-4 md:p-6 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-700 text-center md:text-left">
          Мы используем файлы cookie. Оставаясь на сайте, вы подтверждаете, что ознакомлены и принимаете условия{' '}
          <a href="https://hlcompany.ru/consent" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
            «Положения об обработке персональных данных»
          </a>{' '}
          и даете согласие на обработку персональных данных метрическими программами.
        </p>
        <button
          onClick={handleAccept}
          className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition whitespace-nowrap"
        >
          Принять
        </button>
      </div>
    </div>
  );
}