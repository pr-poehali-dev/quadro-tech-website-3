
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Связаться с нами</h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-6">Отправить сообщение</h2>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Ваше имя
                  </label>
                  <Input id="name" placeholder="Иван Иванов" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-1">
                    Компания
                  </label>
                  <Input id="company" placeholder="ООО Компания" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Электронная почта
                </label>
                <Input id="email" type="email" placeholder="example@mail.ru" />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Телефон
                </label>
                <Input id="phone" placeholder="+7 (XXX) XXX-XX-XX" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Сообщение
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Расскажите о вашем проекте или вопросе..." 
                  rows={5}
                />
              </div>
              
              <Button type="submit" className="w-full">Отправить сообщение</Button>
            </form>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold mb-6">Контактная информация</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Адрес</h3>
                    <p className="text-gray-600">г. Москва, ул. Примерная, д. 123</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Телефон</h3>
                    <p className="text-gray-600">+7 (XXX) XXX-XX-XX</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">info@quadro-tech.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Режим работы</h3>
                    <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-gray-600">Сб-Вс: выходной</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold mb-4">Реквизиты компании</h2>
              <div className="space-y-2">
                <p><span className="font-medium">ООО "Квадро-тех"</span></p>
                <p><span className="font-medium">ИНН:</span> XXXXXXXXXX</p>
                <p><span className="font-medium">КПП:</span> XXXXXXXXX</p>
                <p><span className="font-medium">ОГРН:</span> XXXXXXXXXXXXX</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Как нас найти</h2>
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Карта будет загружена здесь</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
