export default function Career() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold mb-10">Карьера в Headline</h1>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h2 className="text-2xl font-semibold mb-3">📚 Обучение</h2>
                    <p className="text-gray-700">Внутренние курсы, менторство, оплата конференций.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h2 className="text-2xl font-semibold mb-3">📈 Рост</h2>
                    <p className="text-gray-700">Прозрачная грейдовая система и ИПР.</p>
                </div>
            </div>
        </div>
    );
}