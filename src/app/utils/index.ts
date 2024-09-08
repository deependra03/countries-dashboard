import { Country } from '../types';

export const sortCountriesByPopulation = (
  countries: Country[],
  order: 'asc' | 'desc'
): Country[] => {
  return [...countries].sort((a, b) =>
    order === 'asc' ? a.population - b.population : b.population - a.population
  );
};

export const filterCountriesByRegion = (countries: Country[], region: string): Country[] => {
  return countries.filter((country) => country.region.toLowerCase() === region.toLowerCase());
};

export const searchCountries = (countries: Country[], query: string): Country[] => {
  return countries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase()) ||
      (country.capital && country.capital[0].toLowerCase().includes(query.toLowerCase()))
  );
};
