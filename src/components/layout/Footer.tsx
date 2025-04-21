
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quadro-Tech</h3>
            <p className="text-gray-300 mb-4">
              Компания с более чем 10-летним опытом поставок оборудования для обслуживания автомобилей и оснащения автомастерских.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">VK</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 16.611h-1.616c-.607 0-.802-.354-1.846-1.442-1.022-.958-1.372-1.088-1.607-1.088-.216 0-.268.063-.268.45v1.323c0 .271-.145.406-.145.406-.174 0-1.014 0-1.014 0-2.134 0-3.61-1.219-4.925-3.295 0 0-2.532-4.381-2.532-4.381-.094-.199-.13-.39-.13-.39 0-.199.13-.378.13-.378h2.403s.24.063.432.28c.161.18.224.407.224.407s.432 1.135.97 2.064c.882 1.53 1.359 1.91 1.67 1.91.474 0 .35-1.267.35-1.267v-2.532s-.068-1.23-.38-1.442c-.281-.188-.679-.244-.874-.26-.145-.012.094-.458.406-.65.469-.298 1.283-.34 2.27-.34.764 0 .97.057 1.258.13.883.232.881.697.881 2.064v1.159c0 .38.032.82.266.82.156 0 .458 0 1.372-1.428.517-.766.969-1.768.969-1.768.068-.125.198-.24.198-.24.125-.063.271-.063.271-.063h2.531c.381 0 .582.188.582.188.193.193.068.634.068.634-1.087 2.291-1.553 3.089-1.553 3.89z"/></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Telegram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.568 7.382c-.115.54-.412.674-.836.419l-2.308-1.7-1.112 1.074c-.125.125-.23.23-.468.23l.167-2.378 4.326-3.913c.188-.166-.04-.259-.291-.093L7.755 12.97l-2.309-.725c-.501-.155-.51-.501.104-.741l9.017-3.476c.415-.168.777.104.639.493z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Главная</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">О компании</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">Услуги</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">Контакты</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span className="text-gray-300">+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <span className="text-gray-300">info@quadro-tech.ru</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                <span className="text-gray-300">г. Москва, ул. Автосервисная, 10</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Quadro-Tech. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
