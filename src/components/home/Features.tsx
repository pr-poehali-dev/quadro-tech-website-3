
import { CheckCircle, Truck, Settings, Award, Users, Clock } from "lucide-react";

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Почему выбирают нас?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Компания Quadro-Tech — это проверенный временем партнёр для оснащения любых автомастерских современным оборудованием.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">10+ лет опыта</h3>
            <p className="text-gray-600">
              Более десятилетия успешной работы на рынке автосервисного оборудования.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">500+ проектов</h3>
            <p className="text-gray-600">
              Успешно реализовали более 500 проектов различной сложности и масштаба.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Госзаказчики</h3>
            <p className="text-gray-600">
              Сотрудничаем с государственными заказчиками по 44-ФЗ и 223-ФЗ.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">WorldSkills</h3>
            <p className="text-gray-600">
              Участвуем в программе WorldSkills, оснащая мастерские для подготовки специалистов мирового уровня.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Settings className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Профессионалитет</h3>
            <p className="text-gray-600">
              Участник федеральной программы "Профессионалитет" по развитию профессионального образования.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Truck className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Комплексные поставки</h3>
            <p className="text-gray-600">
              Осуществляем полный цикл поставок от подбора до монтажа и обслуживания оборудования.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
