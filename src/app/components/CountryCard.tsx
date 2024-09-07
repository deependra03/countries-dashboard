import React from 'react';
import Image from 'next/image';
import { Country } from '../types';

interface CountryCardProps {
  country: Country;
  onClick: () => void;
}

const CountryCard: React.FC<CountryCardProps> = ({ country, onClick }) => {
  return (
    <div className="country-card dark:bg-black dark:text-white shadow-md text-sm rounded-md " onClick={onClick}>
      <Image
        src={country.flags.png}
        alt={`${country.name.common} flag`}
        width={200}
        height={150}
        layout="responsive"
        className='max-h-24'
      />
      <h3 className='font-semibold my-3 text-lg'>{country.name.common}</h3>
      <p>Capital: {country.capital?.[0]}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Region: {country.region}</p>
    </div>
  );
};

export default CountryCard;
