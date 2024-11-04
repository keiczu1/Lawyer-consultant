import React from 'react';
import { CheckSquare } from 'lucide-react';
import ConsultationForm from './ConsultationForm';

const Hero = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Бесплатная консультация юриста по телефону по РФ
            </h1>
            
            <a href="tel:88003508328" className="text-4xl font-bold text-red-500 block mb-4 hover:text-red-600">
              8 (800) 350-83-28
            </a>
            
            <p className="text-gray-600 mb-8">
              Прием заявок на сайте ведется круглосуточно.<br />
              Обработка заявок юристами с 9:00 до 20:00.
            </p>
            
            <ul className="space-y-4">
              {[
                'Основные категории права и споры',
                'Устная и письменная консультации',
                'Разъяснение законов и правоприменительных норм',
                'Анализ сложившейся ситуации и перспектив дела',
                'Юрист обработает заявку в течении 30 минут'
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckSquare className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">ЗАДАТЬ ВОПРОС ЮРИСТУ</h2>
            <p className="text-gray-600 mb-6">Юрист подготовит ответ и перезвонит через 30 минут. Ожидайте!</p>
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;