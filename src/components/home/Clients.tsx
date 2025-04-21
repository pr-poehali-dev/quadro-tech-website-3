
const Clients = () => {
  // Будем использовать заглушки для логотипов клиентов
  const clients = [
    { name: "Клиент 1", logo: "/placeholder.svg" },
    { name: "Клиент 2", logo: "/placeholder.svg" },
    { name: "Клиент 3", logo: "/placeholder.svg" },
    { name: "Клиент 4", logo: "/placeholder.svg" },
    { name: "Клиент 5", logo: "/placeholder.svg" },
    { name: "Клиент 6", logo: "/placeholder.svg" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Нам доверяют
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Среди наших клиентов — ведущие автосервисы, дилерские центры и государственные учреждения
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center p-4">
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
