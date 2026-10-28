import { useState, useEffect } from 'react';

export default function CompanyLifeSlider() {
  const [current, setCurrent] = useState(0);
  
  const slides = [
    { 
      title: 'Наша команда', 
      desc: 'Работаем вместе, растём вместе', 
      img: '/images/team.jpg' 
    },
    { 
      title: 'Современный офис', 
      desc: 'Комфортное рабочее пространство в Ижевске', 
      img: '/images/office.jpg' 
    },
    { 
      title: 'Корпоративы', 
      desc: 'Отмечаем успехи и праздники', 
      img: '/images/corp.jpg' 
    },
    { 
      title: 'Рабочий процесс', 
      desc: 'Решаем интересные и сложные задачи', 
      img: '/images/job.jpg' 
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Жизнь компании</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Как мы работаем и отдыхаем</h2>
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-surface-border bg-bg h-[400px] md:h-[500px]">
          {slides.map((slide, i) => (
            <div 
              key={i} 
              className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
            >
              <img 
                src={slide.img} 
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                  {slide.title}
                </h3>
                <p className="text-gray-200 text-lg drop-shadow-md">
                  {slide.desc}
                </p>
              </div>
            </div>
          ))}
          
          <button
            onClick={() => setCurrent((p) => (p - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transition-all"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrent((p) => (p + 1) % slides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transition-all"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-8 right-8 flex gap-3">
            {slides.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrent(i)} 
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-primary w-8' : 'bg-white/40 w-2 hover:bg-white/70'
                }`} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}