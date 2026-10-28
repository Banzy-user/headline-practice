export default function About() {
  return (
    <div className="pt-32 pb-24 bg-bg">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">О компании</p>
        <h1 className="text-5xl md:text-6xl font-black text-white mb-12 leading-tight">
          Headline — это про <span className="gradient-text-primary">бизнес</span>
        </h1>
        
        <div className="space-y-8 text-lg text-gray-text leading-relaxed">
          <p>
            <strong className="text-white">Headline</strong> — российский разработчик программных решений для retail, fmcg и e-commerce. 
            Мы предлагаем полный набор готовых решений для автоматизации бизнеса в рознице и ресторанном сегменте.
          </p>
          <p>
            При создании продуктов мы ориентируемся на наших клиентов: мы не делаем продукты, которые не нужны рынку. 
            Наша идея в том, что любой продукт должен выполнять четко сформулированную работу, а наш клиент «нанимает» 
            его на выполнение этой работы.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 my-16">
          {[
            { val: '16+', label: 'лет на рынке' },
            { val: '1000+', label: 'довольных клиентов' },
            { val: '№1', label: 'цель в автоматизации' }
          ].map((stat, i) => (
            <div key={i} className="glass-card p-8 rounded-2xl text-center">
              <div className="text-5xl font-black gradient-text-primary mb-2">{stat.val}</div>
              <div className="text-gray-text font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 md:p-12 rounded-3xl border-l-4 border-l-primary mt-12">
          <p className="text-xl md:text-2xl text-white italic leading-relaxed mb-6">
            «Я хочу, чтобы предприниматели малого бизнеса смогли нанимать на работу лучшие сервисы, 
            которые сделают их бизнес сильнее, прибыльнее и конкурентоспособнее.»
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">МК</div>
            <div>
              <div className="text-white font-bold">Климов Михаил</div>
              <div className="text-gray-text text-sm">Директор Headline</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}