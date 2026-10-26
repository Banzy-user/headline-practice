export default function WorkWithUs() {
  const blocks = [
    { title: 'Культура', text: 'Открытость, доверие и свобода действий.' },
    { title: 'Ценности', text: 'Клиент в центре. Качество. Команда.' },
    { title: 'Преимущества', text: 'ДМС, обучение, гибкий график, современный офис.' },
  ];
  
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">Работа у нас</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {blocks.map((b, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-3">{b.title}</h2>
            <p className="text-gray-700">{b.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}