import React from 'react';
import { ClipboardList, Phone, MessageSquare, Scale } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    title: 'Заявка',
    description: 'Вы оставляете заявку через форму на сайте или звоните по телефону горячей линии'
  },
  {
    icon: Phone,
    title: 'Обратный звонок',
    description: 'Юрист связывается с вами в течение 30 минут для уточнения деталей вашей ситуации'
  },
  {
    icon: MessageSquare,
    title: 'Консультация',
    description: 'Получаете развернутую консультацию по вашему вопросу с анализом ситуации'
  },
  {
    icon: Scale,
    title: 'Решение',
    description: 'Юрист предлагает варианты решения вашей проблемы и план дальнейших действий'
  }
];

const ConsultationSteps = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Как проходит консультация юриста
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-red-100">
                  <div className="animate-pulse absolute inset-0 bg-gradient-to-r from-red-500 to-red-100" 
                       style={{animation: `pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite ${index * 0.5}s`}} />
                </div>
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultationSteps;