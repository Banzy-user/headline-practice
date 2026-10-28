export default function WorkBenefits() {
  const benefits = [
    { number: '1', title: 'Адекватное отношение', desc: 'Наши руководители сами когда-то были программистами. Честность и уважение — основа всего.' },
    { number: '2', title: 'Становись сильным профи', desc: 'Реальные задачи и обмен опытом помогают расти и становиться экспертом в своём деле.' },
    { number: '3', title: 'Инициатива приветствуется', desc: 'У нас инициатива не наказуема. Мы поддерживаем идеи и помогаем воплощать их в жизнь.' },
    { number: '4', title: 'Дружба и уважение', desc: 'Мы создаём атмосферу дружбы, взаимного уважения и общей команды, а не просто офис.' }
  ];

  return (
    <section className="py-24 bg-bg relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-hero-glow pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center md:text-left">
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Работа у нас</p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Хорошая работа <br />
            <span className="gradient-text">чувствуется в деталях.</span>
          </h2>
          <p className="text-gray-text max-w-xl text-lg">
            Четыре опоры нашего подхода — от задач, которые имеют смысл, до людей, с которыми хочется их решать.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.number} className="glass-card p-8 rounded-2xl group cursor-pointer">
              <span className="text-primary text-4xl font-black mb-6 block opacity-50 group-hover:opacity-100 transition-opacity">{b.number}</span>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{b.title}</h3>
              <p className="text-gray-text text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}