export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6 text-white">О компании Headline</h1>
      
      <div className="space-y-6 text-lg leading-relaxed">
        <p className="text-gray-300">
          <strong className="text-white">Headline</strong> — российский разработчик программных решений для retail, fmcg и e-commerce. 
          Мы предлагаем полный набор готовых решений для автоматизации бизнеса в рознице и ресторанном сегменте.
        </p>
        <p className="text-gray-300">
          При создании продуктов мы ориентируемся на наших клиентов: мы не делаем продукты, которые не нужны рынку. 
          Наша идея в том, что любой продукт должен выполнять четко сформулированную работу, а наш клиент «нанимает» 
          его на выполнение этой работы, чтобы сделать свой бизнес сильнее, прибыльнее и конкурентоспособнее.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 my-10">
          <div className="bg-white p-6 rounded-xl text-center">
            <div className="text-4xl font-black text-primary mb-2">16+</div>
            <div className="text-sm font-medium text-gray-700">лет на рынке</div>
          </div>
          <div className="bg-white p-6 rounded-xl text-center">
            <div className="text-4xl font-black text-primary mb-2">1000+</div>
            <div className="text-sm font-medium text-gray-700">довольных клиентов</div>
          </div>
          <div className="bg-white p-6 rounded-xl text-center">
            <div className="text-4xl font-black text-primary mb-2">№1</div>
            <div className="text-sm font-medium text-gray-700">цель в автоматизации розницы</div>
          </div>
        </div>

        <p className="text-gray-300">
          За это время мы стали не просто хорошими разработчиками продуктов, но и сильными экспертами в сфере 
          автоматизации розничного бизнеса. Мы делимся этим опытом с нашими клиентами, обеспечивая адекватное 
          и честное отношение на всех этапах взаимодействия.
        </p>

        <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl mt-8">
          <p className="italic text-gray-300">
            «Я хочу, чтобы предприниматели малого бизнеса смогли нанимать на работу лучшие сервисы, 
            которые сделают их бизнес сильнее, прибыльнее и конкурентоспособнее.»
          </p>
          <p className="mt-3 font-bold text-white">— Климов Михаил, Директор Headline</p>
        </div>
      </div>
    </div>
  );
}