import React from 'react';
import CountUp from 'react-countup';

const ConsultationCounter = () => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl text-center font-bold">
          На сегодня осталось{' '}
          <span className="text-red-500 inline-block">
            <CountUp end={14} duration={2} /> консультаций
          </span>
          . Успейте задать вопрос!
        </h2>
      </div>
    </section>
  );
};

export default ConsultationCounter;