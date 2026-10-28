export default function Career() {
  return (
    <div className="pt-32 pb-24 bg-bg">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Карьера</p>
        <h1 className="text-5xl md:text-6xl font-black text-white mb-16">Рост и развитие в <span className="gradient-text-primary">Headline</span></h1>
        
        <div className="space-y-8 mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Как проходит наш найм</h2>
          {[
            { step: '01', title: 'Отклик', desc: 'Присылай ссылку на GitHub или резюме на hr@hlcompany.ru' },
            { step: '02', title: 'Знакомство с HR', desc: 'Короткий созвон, чтобы обсудить опыт, ожидания и рассказать о культуре компании' },
            { step: '03', title: 'Техническое интервью', desc: 'Общение с будущим руководителем. Мы ценим системное мышление и желание учиться' },
            { step: '04', title: 'Оффер и онбординг', desc: 'Делаем предложение, обсуждаем детали и помогаем быстро влиться в процессы' }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 group">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-surface-light border border-surface-border flex items-center justify-center text-2xl font-black text-primary group-hover:border-primary/50 group-hover:shadow-glow transition-all">
                {item.step}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-gray-text">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">📚 Обучение</h3>
            <p className="text-gray-text">Внутренние курсы, менторство, оплата профильных конференций и помощь в подготовке к сертификациям (например, 1С:Специалист).</p>
          </div>
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">📈 Рост</h3>
            <p className="text-gray-text">Прозрачная грейдовая система и индивидуальный план развития (ИПР). Инициатива у нас поощряется.</p>
          </div>
        </div>
      </div>
    </div>
  );
}