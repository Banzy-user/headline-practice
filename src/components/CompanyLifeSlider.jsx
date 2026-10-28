import { useState, useEffect } from 'react';

export default function CompanyLifeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/team-1.jpg',
      title: 'Наша команда',
      description: 'Работаем вместе, растём вместе'
    },
    {
      image: '/images/office-1.jpg',
      title: 'Современный офис',
      description: 'Комфортное рабочее пространство'
    },
    {
      image: '/images/events-1.jpg',
      title: 'Корпоративные мероприятия',
      description: 'Отмечаем успехи и праздники'
    },
    {
      image: '/images/work-1.jpg',
      title: 'Рабочий процесс',
      description: 'Решаем интересные задачи'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-red-600 text-sm font-bold uppercase tracking-wider mb-3">Жизнь компании</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Как мы работаем и отдыхаем
          </h2>
        </div>

        <div className="relative">
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl bg-gray-800">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="w-full h-full flex items-center justify-center bg-gray-800">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📷</div>
                    <p className="text-gray-400 font-medium">{slide.image}</p>
                    <p className="text-gray-500 text-sm mt-2">Здесь будет фото</p>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 md:p-12">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{slide.title}</h3>
                  <p className="text-gray-200 text-lg">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="flex justify-center gap-3 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-red-600 w-8' : 'bg-gray-600 w-3'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}