
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">О компании</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Quadro-tech — компания с более чем 10-летним опытом поставок оборудования для обслуживания 
            легковых/грузовых автомобилей и оснащения автомастерских.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Наш опыт</h2>
          <p>
            За время работы мы реализовали более 500 проектов различной сложности. Наша команда состоит 
            из профессионалов, которые готовы решить задачи любой сложности в сфере оснащения автомастерских.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Сотрудничество с государственными заказчиками</h2>
          <p>
            Мы имеем богатый опыт сотрудничества с госзаказчиками в рамках федеральных законов 44-ФЗ и 223-ФЗ.
            Это позволяет нам эффективно участвовать в тендерах и обеспечивать государственные организации
            качественным оборудованием.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Образовательные программы</h2>
          <p>
            Компания Quadro-tech активно участвует в образовательных программах "Профессионалитет" и "WorldSkills",
            содействуя подготовке высококвалифицированных специалистов для автомобильной отрасли.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
