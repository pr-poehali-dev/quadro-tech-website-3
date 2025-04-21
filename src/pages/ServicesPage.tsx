
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Check } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      title: "Поставка автосервисного оборудования",
      description: "Широкий выбор оборудования от ведущих производителей для автомастерских и СТО любого масштаба.",
      items: [
        "Диагностическое оборудование",
        "Подъемное оборудование",
        "Шиномонтажное оборудование",
        "Оборудование для кузовного ремонта",
        "Стенды сход-развала"
      ]
    },
    {
      title: "Проектирование автосервисов",
      description: "Полный цикл проектирования автосервисов с учетом всех технических требований и стандартов.",
      items: [
        "Разработка планировки",
        "Технологическое проектирование",
        "Подбор оборудования",
        "Оптимизация рабочих процессов",
        "Соблюдение отраслевых стандартов"
      ]
    },
    {
      title: "Обслуживание и ремонт",
      description: "Гарантийное и постгарантийное обслуживание оборудования для автосервисов.",
      items: [
        "Установка и наладка оборудования",
        "Периодическое техническое обслуживание",
        "Гарантийный ремонт",
        "Поставка запчастей и расходных материалов",
        "Обучение персонала"
      ]
    },
    {
      title: "Участие в государственных закупках",
      description: "Профессиональное сопровождение государственных закупок по 44-ФЗ и 223-ФЗ.",
      items: [
        "Подготовка документации",
        "Участие в тендерах и аукционах",
        "Поставка оборудования по гос. контрактам",
        "Соблюдение всех требований законодательства",
        "Оснащение учебных заведений"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Наши услуги</h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Индивидуальный подход</h2>
          <p className="text-lg">
            Мы предлагаем индивидуальные решения под потребности каждого клиента. 
            Свяжитесь с нашими специалистами для получения консультации и расчета стоимости.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
