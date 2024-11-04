import React from 'react';
import { Star, Award } from 'lucide-react';

const lawyers = [
  {
    name: 'Григорьев Михаил',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200',
    location: 'г. Санкт-Петербург',
    specializations: 5,
    reviews: 2603,
    rating: 9.4,
    isExpert: true,
    motto: 'Уважаю и соблюдаю профессионализм, человечность, порядочность и ответственность'
  },
  {
    name: 'Кураев Геннадий',
    photo: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=200',
    location: 'г. Новосибирск',
    specializations: 22,
    reviews: 6460,
    rating: 9.4,
    isExpert: true
  },
  {
    name: 'Феофанов Олег',
    photo: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200',
    location: 'г. Одинцово',
    specializations: 12,
    reviews: 12968,
    rating: 10,
    isExpert: true
  },
  {
    name: 'Беляев Евгений',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    location: 'г. Барнаул',
    specializations: 14,
    reviews: 4120,
    rating: 10,
    isExpert: true
  },
  {
    name: 'Смирнова Елена',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    location: 'г. Москва',
    specializations: 18,
    reviews: 8340,
    rating: 9.8,
    isExpert: true
  },
  {
    name: 'Петров Андрей',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
    location: 'г. Екатеринбург',
    specializations: 16,
    reviews: 5280,
    rating: 9.6,
    isExpert: true
  }
];

const LawyersGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Консультации от 43 640 юристов и адвокатов
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Наши юристы — профессионалы, которые обладают знаниями законодательной
            базы и богатой судебной практикой. Поэтому, обращаясь за бесплатной юридической
            консультацией, вы получите грамотный и обоснованный ответ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {lawyers.map((lawyer, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 relative mx-auto">
                {/* Круглая аватарка */}
                <div className="w-32 h-32 mx-auto">
                  <img
                    src={lawyer.photo}
                    alt={lawyer.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                {/* Плашка "Онлайн" */}
                <div className="absolute -top-2 right-1/2 transform translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                  Онлайн
                </div>
                
                {/* Бейдж эксперта */}
                {lawyer.isExpert && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-md">
                    <Award className="w-3 h-3" />
                    <span>Эксперт</span>
                  </div>
                )}
              </div>
              
              <h3 className="font-semibold text-gray-900 text-lg mb-1">{lawyer.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{lawyer.location}</p>
              
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{lawyer.rating}</span>
                </div>
              </div>
              
              <div className="space-y-1 text-sm text-gray-600">
                <p>{lawyer.specializations} специализаций</p>
                <p>{lawyer.reviews} отзывов</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LawyersGrid;