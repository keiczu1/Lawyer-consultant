import React from 'react';
import { Map, Users, Clock, Scale } from 'lucide-react';
import CountUp from 'react-countup';

const stats = [
  {
    icon: Map,
    title: 'Консультации',
    value: '85+',
    description: 'по всем регионам России'
  },
  {
    icon: Users,
    title: 'Юристы',
    value: '10+',
    description: 'с многолетним опытом'
  },
  {
    icon: Clock,
    title: 'Скорость ответа',
    value: '30',
    description: 'не превышает 30 минут'
  },
  {
    icon: Scale,
    title: '70% вопросов',
    value: '70',
    description: 'решено без суда'
  }
];

const Statistics = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-red-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <stat.icon className="w-8 h-8 text-red-500" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">{stat.title}</h3>
                <div className="text-3xl font-bold text-red-500">
                  <CountUp
                    end={parseInt(stat.value)}
                    suffix={stat.value.includes('+') ? '+' : ''}
                    duration={2.5}
                  />
                </div>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;