import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-8">
              ЦЕНТР ПРАВОВОЙ ПОМОЩИ<br />
              БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ ЮРИСТА
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-red-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Наш адрес:</h3>
                  <p className="text-gray-400">Москва, проспект Мира, 68с3</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-red-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Телефон горячей линии:</h3>
                  <a href="tel:88003508328" className="text-gray-400 hover:text-white">
                    8 (800) 350-83-28
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-red-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Режим работы:</h3>
                  <p className="text-gray-400">круглосуточно, 24/7</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <img
              src="https://maps.googleapis.com/maps/api/staticmap?center=Moscow,Russia&zoom=15&size=600x400&key=YOUR_API_KEY"
              alt="Карта"
              className="w-full rounded-lg"
            />
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© 2024 Внимание! Настоящий сайт не является официальным сайтом Государственных органов РФ!</p>
          <p>Ресурс предоставляет исключительно информационные услуги.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;