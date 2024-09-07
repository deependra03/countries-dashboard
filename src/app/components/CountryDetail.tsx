// components/CountryDetail.tsx
import React from 'react';
import { Country } from '../types';

interface CountryDetailProps {
  country: Country;
  onClose: () => void;
}

const CountryDetail: React.FC<CountryDetailProps> = ({ country, onClose }) => {

  const flagImageUrl = country.flags?.png || '/path/to/default/flag.png';

  return (
    <div className="country-detail-modal z-10" >
      <button className='bg-blue-500 text-white px-6' onClick={onClose}>Close</button>
      <div className='bg-white text-black my-4 py-4 px-8 h-[90%]'  
      style={{
      backgroundImage: `url(${flagImageUrl})`,
      backgroundSize: 'cover',  // Ensure the image covers the entire element
      backgroundPosition: 'center', // Center the image
      backgroundRepeat: 'no-repeat' // Prevent the image from repeating
     }}>
      <div className='bg-white text-black px-4 py-2 w-96 border-2 border-black shadow'>
      <h2>{country.name.common}</h2>
      <p>Official Name: {country.name.official}</p>
      <p>Capital: {country.capital?.[0]}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Region: {country.region}</p>
      <p>Currencies: {Object.values(country.currencies || {})
        .map((currency) => currency.name)
        .join(', ')}</p>
      <p>Languages: {Object.values(country.languages || {}).join(', ')}</p>
      <p>Timezones: {country.timezones.join(', ')}</p>
      </div>
      </div>
    </div>
  );
};

export default CountryDetail;
