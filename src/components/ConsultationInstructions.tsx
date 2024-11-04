import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';

const ConsultationInstructions = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Как получить консультацию?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <MessageSquare className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <p className="text-gray-700 mb-2">
                <strong>1. Задайте текстовый вопрос в чате или форме (круглосуточно):</strong>
              </p>
              <p className="text-gray-600">
                оператор примет вопрос и передаст его юристу, в случае необходимости перезвонит 
                для уточнения деталей, юрист подготовит ответ и проконсультирует в ходе устной консультации.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <Phone className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <p className="text-gray-700 mb-2">
                <strong>2. Позвоните <a href="tel:88003508328" className="text-red-500 hover:text-red-600">8 (800) 350-83-28</a> с 9:00 до 20:00.</strong>
              </p>
              <p className="text-gray-600">
                Все жители РФ могут бесплатно позвонить по номеру горячей линии и получить устную консультацию.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationInstructions;