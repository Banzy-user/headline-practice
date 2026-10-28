export default function WorkBenefits() {
  const benefits = [
    {
      number: '1',
      title: 'Адекватное отношение к сотрудникам',
      description: 'Наши руководители сами когда-то были программистами. Для нас важны честность, уважение и нормальное человеческое общение.'
    },
    {
      number: '2',
      title: 'Становись сильным профи',
      description: 'Реальные задачи и обмен опытом помогают расти, расширять знания и становиться экспертом в своём деле.'
    },
    {
      number: '3',
      title: 'Инициатива приветствуется',
      description: 'У нас инициатива не наказуема. Мы поддерживаем идеи и помогаем воплощать их в жизнь.'
    },
    {
      number: '4',
      title: 'Дружба и уважение',
      description: 'Мы не просто ходим на работу: создаём атмосферу дружбы, взаимного уважения и общей команды.'
    }
  ];

  return (
    <section className="bg-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-red-600 text-sm font-bold uppercase tracking-wider mb-3">Работа у нас</p>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Хорошая работа<br />
            <span className="text-gray-500">чувствуется в деталях.</span>
          </h2>
          <p className="text-gray-400 max-w-md ml-auto">
            Четыре опоры нашего подхода — от задач, которые имеют смысл, до людей, с которыми хочется их решать.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div 
              key={benefit.number} 
              className="bg-gray-900 p-8 border border-gray-800 hover:border-red-600/50 transition-all group cursor-pointer"
            >
              <span className="text-red-600 text-sm font-bold mb-4 block">{benefit.number}</span>
              <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              <div className="mt-6 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}