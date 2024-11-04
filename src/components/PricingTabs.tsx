import React, { useState } from 'react';
import { Check } from 'lucide-react';

const tabs = [
  {
    id: 'consultations',
    title: 'Юридические консультации',
    content: {
      title: 'Юридическая консультация',
      subtitle: 'Время не ограничено',
      price: 'Бесплатно',
      features: [
        'Изучение деталей и материалов дела',
        'Расшифровка норм и статей действующего законодательства',
        'Анализ перспектив дела',
        'Рекомендации по алгоритму действий для успешного разрешения вопроса',
        'Составление плана линии защиты Ваших прав и интересов'
      ]
    }
  },
  {
    id: 'documents',
    title: 'Составление документов',
    content: {
      services: [
        { name: 'Составление исковых заявлений', price: 'от 1500 руб.' },
        { name: 'Составление возражений на исковое заявление', price: 'от 1000 руб.' },
        { name: 'Составление ходатайств', price: 'от 1500 руб.' },
        { name: 'Составление апелляционной жалобы', price: 'от 2500 руб.' },
        { name: 'Составление кассационной жалобы', price: 'от 2500 руб.' },
        { name: 'Составление надзорной жалобы', price: 'от 2500 руб.' },
        { name: 'Составление жалобы в прокуратуру', price: 'от 2500 руб.' },
        { name: 'Составление заявлений, претензий', price: 'от 800 руб.' },
        { name: 'Составление договоров', price: 'от 2000 руб.' },
        { name: 'Составление соглашений', price: 'от 3500 руб.' },
        { name: 'Составление доверенностей', price: 'от 800 руб.' },
        { name: 'Составление завещаний', price: 'от 800 руб.' },
        { name: 'Проверка документов и договоров', price: 'от 1300 руб.' },
        { name: 'Проверка документов при покупке недвижимости', price: 'от 1600 руб.' },
        { name: 'Проверка договора аренды', price: 'от 1600 руб.' },
        { name: 'Проверка нотариальных документов', price: 'от 2000 руб.' },
        { name: 'Проверка учредительных документов', price: 'от 2000 руб.' },
        { name: 'Проверка хозяйственных договоров', price: 'от 1600 руб.' },
        { name: 'Проверка подлинности документов', price: 'от 1800 руб.' },
        { name: 'Экспертиза договоров', price: 'от 2500 руб.' },
        { name: 'Экспертиза подделки документов', price: 'от 4300 руб.' }
      ]
    }
  }
];

const PricingTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Цены на услуги юристов
        </h2>

        <div className="max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-6 py-3 text-lg font-medium rounded-lg transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-red-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            {activeTab === 'consultations' && (
              <div className="space-y-6">
                <div className="text-center pb-6 border-b border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tabs[0].content.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{tabs[0].content.subtitle}</p>
                  <p className="text-3xl font-bold text-red-500">{tabs[0].content.price}</p>
                </div>
                <ul className="space-y-4">
                  {tabs[0].content.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'documents' && (
              <div className="space-y-4">
                {tabs[1].content.services.map((service, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-gray-100 hover:bg-gray-50 px-4 rounded-lg transition-colors"
                  >
                    <span className="text-gray-700">{service.name}</span>
                    <span className="font-semibold text-red-500">{service.price}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTabs;