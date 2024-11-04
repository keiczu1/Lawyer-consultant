import React from 'react';
import { Star } from 'lucide-react';

const LawyerInfo = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=500"
              alt="Юрист"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Меденов Виктор Николаевич
            </h2>
            
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <p className="text-gray-600 mb-4">
              Сегодня дежурный юрист
            </p>
            
            <p className="text-gray-600 mb-6">
              Трудовой опыт — 5 лет
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">
                Устные консультации онлайн и по телефону:
              </h3>
              <p className="text-gray-600">
                Гражданское право, трудовое право, уголовное право, защита прав потребителей и др.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawyerInfo;