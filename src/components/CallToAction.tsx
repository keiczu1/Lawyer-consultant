import React from 'react';
import { Phone } from 'lucide-react';

const CallToAction = () => {
  const onlineJurists = [
    '/avatars/jurist1.jpg',
    '/avatars/jurist2.jpg',
    '/avatars/jurist3.jpg',
    '/avatars/jurist4.jpg',
    '/avatars/jurist5.jpg',
    '/avatars/jurist6.jpg'
  ];

  return (
    <section className="bg-emerald-700 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side with image */}
          <div className="w-full md:w-1/4">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300"
              alt="Юрист"
              className="rounded-full w-48 h-48 object-cover mx-auto"
            />
          </div>

          {/* Middle section with phone */}
          <div className="w-full md:w-2/4 text-center md:text-left text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Звоните, мы работаем 24/7
            </h2>
            <a 
              href="tel:88003029270" 
              className="text-4xl md:text-5xl font-bold hover:text-emerald-100 transition-colors block mb-2"
            >
              8 800-302-92-70
            </a>
            <p className="text-emerald-100 text-lg">Звонок бесплатный</p>
          </div>

          {/* Right side with online count */}
          <div className="w-full md:w-1/4 text-white">
            <div className="text-center">
              <p className="text-lg mb-4">88 юристов сейчас онлайн</p>
              <div className="flex justify-center items-center">
                <div className="flex -space-x-3">
                  {onlineJurists.map((avatar, index) => (
                    <div 
                      key={index} 
                      className="w-10 h-10 rounded-full border-2 border-emerald-700 overflow-hidden bg-emerald-600"
                    >
                      <div className="w-full h-full bg-emerald-500 flex items-center justify-center">
                        {index === onlineJurists.length - 1 ? (
                          <span className="text-sm font-medium">+82</span>
                        ) : (
                          <div className="w-full h-full bg-gray-300 animate-pulse" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;