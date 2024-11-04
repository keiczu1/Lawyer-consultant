import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Сколько стоит консультация юриста?',
    answer: 'Первичная консультация предоставляется бесплатно в рамках государственной программы юридической помощи населению. Это позволяет вам получить квалифицированную оценку вашей ситуации без финансовых затрат.'
  },
  {
    question: 'Как быстро я получу ответ на свой вопрос?',
    answer: 'Среднее время ожидания ответа составляет 30 минут. После оставления заявки наш юрист свяжется с вами для уточнения деталей и предоставления консультации.'
  },
  {
    question: 'Какие документы нужны для консультации?',
    answer: 'Для первичной консультации документы не требуются. Достаточно подробно описать вашу ситуацию. Однако для более детального анализа юрист может попросить предоставить определенные документы в зависимости от вашего случая.'
  },
  {
    question: 'Кто будет консультировать меня по моему вопросу?',
    answer: 'Консультацию проводят квалифицированные юристы с опытом работы от 5 лет в различных отраслях права. Каждый специалист имеет профильное образование и регулярно проходит повышение квалификации.'
  },
  {
    question: 'Является ли консультация конфиденциальной?',
    answer: 'Да, все консультации проводятся в режиме полной конфиденциальности. Мы гарантируем неразглашение полученной информации и защиту ваших персональных данных в соответствии с законодательством.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Часто задаваемые вопросы
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 py-4' : 'max-h-0'
              }`}>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;