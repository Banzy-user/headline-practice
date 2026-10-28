export default function Career() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10 text-white">Карьера в Headline</h1>
      
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Как проходит наш найм</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
            <div>
              <h3 className="text-xl font-semibold mb-1 text-white">Отклик</h3>
              <p className="text-gray-300">Присылай ссылку на свой GitHub или живое резюме на почту hr@hlcompany.ru или откликайся на вакансию через форму на сайте.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
            <div>
              <h3 className="text-xl font-semibold mb-1 text-white">Знакомство с HR</h3>
              <p className="text-gray-300">Короткий созвон или встреча, чтобы обсудить твой опыт, ожидания и рассказать подробнее о задачах и культуре компании.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
            <div>
              <h3 className="text-xl font-semibold mb-1 text-white">Техническое интервью</h3>
              <p className="text-gray-300">Общение с будущим руководителем или командой. Мы ценим системное мышление, желание учиться и адекватность больше, чем заученные ответы.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">4</div>
            <div>
              <h3 className="text-xl font-semibold mb-1 text-white">Оффер и онбординг</h3>
              <p className="text-gray-300">Мы делаем предложение, обсуждаем детали и помогаем быстро влиться в процессы. У нас есть менторство, внутренние курсы и дружеская атмосфера.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">Обучение</h2>
          <p className="text-gray-700">Внутренние курсы, менторство, оплата профильных конференций и помощь в подготовке к сертификациям (например, 1С:Специалист).</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">Рост</h2>
          <p className="text-gray-700">Прозрачная грейдовая система и индивидуальный план развития (ИПР). Инициатива у нас поощряется: те, кто проявляет активность, быстро растут в компании.</p>
        </div>
      </div>

      <div className="mt-10 p-6 bg-primary/10 rounded-xl text-center">
        <p className="text-lg text-gray-300 mb-4">
          Не нашел подходящей вакансии? Прояви инициативу! Мы всегда рады талантливым людям.
        </p>
        <a href="/apply" className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
          Отправить резюме
        </a>
      </div>
    </div>
  );
}