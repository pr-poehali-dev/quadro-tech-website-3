
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const serviceItems = [
    {
      title: "Оборудование для легковых автомобилей",
      description: "Поставка и монтаж подъемников, шиномонтажного оборудования, стендов сход-развала и диагностики.",
      image: "/placeholder.svg",
      link: "/services#light-vehicles"
    },
    {
      title: "Оборудование для грузовых автомобилей",
      description: "Решения для обслуживания и ремонта коммерческого транспорта и тяжелой техники.",
      image: "/placeholder.svg",
      link: "/services#heavy-vehicles"
    },
    {
      title: "Оснащение автомастерских под ключ",
      description: "Комплексное проектирование и оборудование СТО с учетом всех требований и особенностей объекта.",
      image: "/placeholder.svg",
      link: "/services#workshops"
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Наши услуги
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Предлагаем полный спектр услуг по поставке и монтажу оборудования для автосервисов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link 
                  to={service.link} 
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Подробнее <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/services">Все услуги</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
