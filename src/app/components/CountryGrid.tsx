// components/CountryGrid.tsx
import React, { useState } from 'react';
import CountryCard from './CountryCard';
import CountryDetail from './CountryDetail';
import { Country } from '../types';

interface CountryGridProps {
  countries: Country[];
}

const CountryGrid: React.FC<CountryGridProps> = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  return (
    <div className="country-grid">
      {countries.map((country) => (
        <CountryCard
          key={country.name.common}
          country={country}
          onClick={() => setSelectedCountry(country)}
        />
      ))}
      {selectedCountry && (
        <CountryDetail country={selectedCountry} onClose={() => setSelectedCountry(null)} />
      )}
    </div>
  );
};

export default CountryGrid;
