'use client';

import { useState } from 'react';
import { cities } from '../data/cities';

export default function CitySelector() {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');

  return (
    <section className="max-w-md mx-auto space-y-4">
      <div>
        <label className="block mb-2 font-medium">Аз кадом шаҳр?</label>
        <select
          value={fromCity}
          onChange={(e) => setFromCity(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg"
        >
          <option value="">Интихоб кунед</option>
          {cities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-2 font-medium">Ба кадом шаҳр?</label>
        <select
          value={toCity}
          onChange={(e) => setToCity(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg"
        >
          <option value="">Интихоб кунед</option>
          {cities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>
    </section>
  );
}