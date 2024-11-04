import React from 'react';
import { Shield } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-4">
          <Shield className="w-12 h-12 text-red-500" />
          <div>
            <h1 className="text-xl font-bold text-gray-900">ЦЕНТР БЕСПЛАТНОЙ ЮРИДИЧЕСКОЙ КОНСУЛЬТАЦИИ</h1>
            <p className="text-sm text-gray-600">Бесплатная юридическая консультация для граждан Российской Федерации 24/7</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;