import { useState } from 'react';
import { Country } from '../../../src/app/types';
import PopulationChart from './PopulationChart';

interface CountryComparisonProps {
  countries: Country[];
}

const CountryComparison: React.FC<CountryComparisonProps> = ({ countries }) => {
  const [firstCountry, setFirstCountry] = useState<Country | null>(null);
  const [secondCountry, setSecondCountry] = useState<Country | null>(null);

  return (
    <div>
      <div className="flex justify-center space-x-4 text-sm">
        <select
          className="border border-gray-300 rounded-md p-2 dark:bg-gray-700 dark:text-white"
          onChange={(e) =>
            setFirstCountry(countries.find((country) => country.name.common === e.target.value) || null)
          }
        >
          <option>Select First Country</option>
          {countries.map((country) => (
            <option key={country.cca3} value={country.name.common}>
              {country.name.common}
            </option>
          ))}
        </select>

        {/* Dropdown to select the second country */}
        <select
          className="border border-gray-300 rounded-md p-2 dark:bg-gray-700 dark:text-white"
          onChange={(e) =>
            setSecondCountry(countries.find((country) => country.name.common === e.target.value) || null)
          }
        >
          <option>Select Second Country</option>
          {countries.map((country) => (
            <option key={country.cca3} value={country.name.common}>
              {country.name.common}
            </option>
          ))}
        </select>
      </div>

      {/* Display country comparison */}
      <div className="flex mt-6 space-x-8 px-8">
        {firstCountry && (
          <div className="w-1/2 p-4 bg-white shadow-md rounded-md dark:bg-gray-800 text-sm" style={{
            backgroundImage: `url(${firstCountry?.flags.png})`,
            backgroundSize: 'cover',  // Ensure the image covers the entire element
            backgroundPosition: 'center', // Center the image
            backgroundRepeat: 'no-repeat' // Prevent the image from repeating
           }}> 
           <div className='bg-white dark:text-black w-48 p-2 border shadow-sm rounded-md'>
            <h2 className="font-bold text-lg">{firstCountry.name.common}</h2>
            <p>Capital: {firstCountry.capital?.[0] ?? 'N/A'}</p>
            <p>Population: {firstCountry.population.toLocaleString()}</p>
            <p>Region: {firstCountry.region}</p>
            <p>Currencies: {Object.keys(firstCountry.currencies || {}).join(', ')}</p>
            <p>Languages: {Object.values(firstCountry.languages || {}).join(', ')}</p>
            </div>
          </div>
        )}

        {secondCountry && (
           <div className="w-1/2 p-4 bg-white shadow-md rounded-md dark:bg-gray-800 text-sm" style={{
            backgroundImage: `url(${firstCountry?.flags.png})`,
            backgroundSize: 'cover',  // Ensure the image covers the entire element
            backgroundPosition: 'center', // Center the image
            backgroundRepeat: 'no-repeat' // Prevent the image from repeating
           }}> 
            <div className='bg-white dark:text-black  w-48 p-2 border shadow-sm rounded-md min-h-48'>
            <h2 className="font-bold text-lg">{secondCountry.name.common}</h2>
            <p>Capital: {secondCountry.capital?.[0] ?? 'N/A'}</p>
            <p>Population: {secondCountry.population.toLocaleString()}</p>
            <p>Region: {secondCountry.region}</p>
            <p>Currencies: {Object.keys(secondCountry.currencies || {}).join(', ')}</p>
            <p>Languages: {Object.values(secondCountry.languages || {}).join(', ')}</p>
          </div>
          </div>
        )}
      </div>
      <div className='dark:bg-black'>
      {firstCountry && secondCountry &&<PopulationChart firstCountry={firstCountry} secondCountry={secondCountry}/>}
      </div>
    </div>
  );
};

export default CountryComparison;
