import React, { useState } from 'react';
import { Phone, Send } from 'lucide-react';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    phone: '',
    message: '',
    policy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.policy) {
      alert('Пожалуйста, подтвердите согласие с политикой обработки данных');
      return;
    }
    
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Спасибо! Ваша заявка принята. Юрист свяжется с вами в течение 30 минут.');
      setFormData({ phone: '', message: '', policy: false });
    } catch (error) {
      alert('Произошла ошибка. Пожалуйста, попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Укажите Ваш номер телефона:
        </label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="tel"
            id="phone"
            required
            placeholder="+7 (___) ___-__-__"
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Опишите Вашу проблему:
        </label>
        <textarea
          id="message"
          required
          rows={4}
          placeholder="Например, Соседи затопили квартиру, что можно сделать? Как взыскать компенсацию?"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="policy"
          className="mt-1.5"
          checked={formData.policy}
          onChange={(e) => setFormData(prev => ({ ...prev, policy: e.target.checked }))}
        />
        <label htmlFor="policy" className="text-sm text-gray-500">
          Нажимая кнопку «Отправить», я подтверждаю своё согласие с{' '}
          <a href="/policy.pdf" target="_blank" className="text-red-500 hover:text-red-600 underline">
            политикой обработки и передачи персональных данных
          </a>
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !formData.policy}
        className={`w-full flex items-center justify-center gap-2 bg-red-500 text-white py-4 px-6 rounded-lg font-medium 
          hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 
          disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200
          ${!isSubmitting ? 'btn-glow' : ''}`}
      >
        {isSubmitting ? (
          'Отправка...'
        ) : (
          <>
            <Send className="w-5 h-5" />
            ОТПРАВИТЬ
          </>
        )}
      </button>

      <p className="text-sm text-gray-500 text-center">
        Среднее время обработки: 25 минут
      </p>
    </form>
  );
};

export default ConsultationForm;