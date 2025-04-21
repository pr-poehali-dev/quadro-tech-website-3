
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Свяжитесь с нами
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Оставьте заявку, и наши специалисты свяжутся с вами в ближайшее время для консультации и подбора оптимального решения.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Телефон</p>
                  <p className="text-lg font-medium">+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-lg font-medium">info@quadro-tech.ru</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Адрес</p>
                  <p className="text-lg font-medium">г. Москва, ул. Автосервисная, 10</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-6">Оставить заявку</h3>
            <form className="space-y-4">
              <div>
                <Input placeholder="Ваше имя" />
              </div>
              <div>
                <Input placeholder="Телефон" type="tel" />
              </div>
              <div>
                <Input placeholder="Email" type="email" />
              </div>
              <div>
                <Textarea placeholder="Сообщение" rows={4} />
              </div>
              <Button className="w-full">Отправить</Button>
              <p className="text-xs text-gray-500 mt-2">
                Нажимая кнопку "Отправить", вы соглашаетесь с политикой конфиденциальности.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
