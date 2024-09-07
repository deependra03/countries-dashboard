// __tests__/utils.test.ts
import { sortCountriesByPopulation, filterCountriesByRegion, searchCountries } from '../utils';
import { Country } from '../types';

const mockCountries: Country[] = [
  {
    name: { common: 'Country A', official: 'Country A' },
    capital: ['Capital A'],
    population: 1000000,
    region: 'Europe',
    flags: { png: '', svg: '' },
    currencies: {},
    languages: {},
    timezones: [],
  },
  {
    name: { common: 'Country B', official: 'Country B' },
    capital: ['Capital B'],
    population: 500000,
    region: 'Asia',
    flags: { png: '', svg: '' },
    currencies: {},
    languages: {},
    timezones: [],
  },
];

test('sortCountriesByPopulation sorts countries in ascending order', () => {
  const sorted = sortCountriesByPopulation(mockCountries, 'asc');
  expect(sorted[0].population).toBeLessThanOrEqual(sorted[1].population);
});

test('sortCountriesByPopulation sorts countries in descending order', () => {
  const sorted = sortCountriesByPopulation(mockCountries, 'desc');
  expect(sorted[0].population).toBeGreaterThanOrEqual(sorted[1].population);
});

test('filterCountriesByRegion filters countries by region', () => {
  const filtered = filterCountriesByRegion(mockCountries, 'Asia');
  expect(filtered.length).toBe(1);
  expect(filtered[0].region).toBe('Asia');
});

test('searchCountries searches countries by name or capital', () => {
  const searchedByName = searchCountries(mockCountries, 'Country A');
  expect(searchedByName.length).toBe(1);
  expect(searchedByName[0].name.common).toBe('Country A');

  const searchedByCapital = searchCountries(mockCountries, 'Capital B');
  expect(searchedByCapital.length).toBe(1);
  expect(searchedByCapital[0].capital[0]).toBe('Capital B');
});
