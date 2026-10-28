export default function WorkWithUs() {
  const blocks = [
    { title: 'Культура', text: 'Открытость, доверие и свобода действий.' },
    { title: 'Ценности', text: 'Клиент в центре. Качество. Команда.' },
    { title: 'Преимущества', text: 'ДМС, обучение, гибкий график, современный офис.' },
  ];
  
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-10">Работа у нас</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {blocks.map((b, i) => (
          <div key={i} className="glass-card p-8 rounded-2xl">
            <h2 className="text-xl font-semibold text-white mb-3">{b.title}</h2>
            <p className="text-gray-400">{b.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}