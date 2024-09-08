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
 
  if(countries.length === 0){
    return <div className='flex items-center justify-center h-screen w-full text-xl text-gray-400'>Sorry, No result found for searched criteria. Please try with other combination.</div>
  }

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
