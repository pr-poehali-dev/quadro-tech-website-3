
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-900 to-primary opacity-90"
          style={{ 
            backgroundImage: `url('/placeholder.svg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'multiply'
          }}
        ></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Профессиональное оборудование для автосервиса
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-gray-300">
          Компания Quadro-Tech — эксперт в поставках оборудования для обслуживания легковых и грузовых автомобилей. 
          Более 10 лет опыта и 500+ реализованных проектов.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <Link to="/services">Наши услуги</Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
            <Link to="/contact">Связаться с нами</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
