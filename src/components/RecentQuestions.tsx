import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const questions = [
  {
    category: 'Автомобильное право',
    question: 'Утиль сбор 5200₽ на физ лицо. Он продал ее другому который поставил на учёт ее 4.10. Теперь я хочу ее купить сейчас. То есть год не прошел не с момента растоможки не с момента постановки на учёт. Смогу я ее поставить на учёт на себя и кто будет платить утилизационный сбор повышенный?',
    author: 'Виталий',
    city: 'Хабаровск'
  },
  {
    category: 'Семейное право',
    question: 'После развода бывший муж отказывается платить алименты и скрывает свои доходы. Как можно установить его реальный заработок и добиться выплат?',
    author: 'Елена',
    city: 'Москва'
  },
  {
    category: 'Недвижимость',
    question: 'Купил квартиру, при осмотре обнаружились скрытые дефекты, которые продавец не указал. Как вернуть часть денег или расторгнуть договор?',
    author: 'Андрей',
    city: 'Санкт-Петербург'
  },
  {
    category: 'Трудовое право',
    question: 'Работодатель не выплачивает зарплату уже 2 месяца, ссылаясь на финансовые трудности. Какие меры можно предпринять?',
    author: 'Михаил',
    city: 'Екатеринбург'
  },
  {
    category: 'Защита прав потребителей',
    question: 'Купил телефон, через неделю он перестал работать. В магазине отказываются принимать претензию. Как защитить свои права?',
    author: 'Ирина',
    city: 'Казань'
  }
];

const RecentQuestions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      // Генерируем случайное смещение от 4 до 7 часов назад
      const hoursOffset = Math.floor(Math.random() * (7 - 4 + 1) + 4);
      const questionTime = new Date(now.getTime() - (hoursOffset * 60 * 60 * 1000));
      
      const formatter = new Intl.DateTimeFormat('ru-RU', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
      
      setCurrentDate(formatter.format(questionTime)
        .replace(' г.', '') // Убираем "г." из даты
        .replace(',', '') // Убираем запятую
      );
    };

    // Обновляем дату и время при монтировании компонента
    updateDateTime();

    // Устанавливаем интервал для обновления даты каждый день в полночь
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const timeUntilMidnight = tomorrow.getTime() - now.getTime();

    // Первый таймер для обновления в следующую полночь
    const midnightTimer = setTimeout(() => {
      updateDateTime();
      // Затем устанавливаем интервал для ежедневного обновления
      const dailyInterval = setInterval(updateDateTime, 24 * 60 * 60 * 1000);
      return () => clearInterval(dailyInterval);
    }, timeUntilMidnight);

    return () => clearTimeout(midnightTimer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % questions.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + questions.length) % questions.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Последние вопросы юристам
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative px-12">
            <div className="bg-white rounded-xl shadow-lg p-8 min-h-[300px]">
              <div className="text-sm font-medium text-red-500 mb-3">
                {questions[currentIndex].category}
              </div>

              <p className="text-gray-800 text-lg mb-6">
                {questions[currentIndex].question}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div>
                  {questions[currentIndex].author}, г. {questions[currentIndex].city}
                </div>
                <div>{currentDate}</div>
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-red-100 text-red-500 hover:bg-red-200 transition-colors"
              aria-label="Previous question"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-red-100 text-red-500 hover:bg-red-200 transition-colors"
              aria-label="Next question"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-red-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to question ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentQuestions;