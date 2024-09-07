// pages/index.tsx
import React, { useState, useMemo } from 'react';
import { useFetchCountries } from '../../src/app/hooks/useFetchCountries';
import CountryGrid from '../../src/app/components/CountryGrid';
import FilterBar from '../../src/app/components/FilterBar';
import { Country } from '../../src/app/types';
import { filterCountriesByRegion, searchCountries, sortCountriesByPopulation } from '../../src/app/utils';
import ThemeToggle, { ToggleOptionsType } from '@/app/components/ThemeToggle';

const HomePage: React.FC = () => {
  const { countries, loading, error } = useFetchCountries();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
   const [selected, setSelected] = useState<ToggleOptionsType>("light");

  const regions = useMemo(() => {
    const regionSet = new Set(countries.map((country) => country.region));
    return Array.from(regionSet);
  }, [countries]);

  const filteredCountries = useMemo(() => {
    let filtered: Country[] = countries;

    if (searchQuery) {
      filtered = searchCountries(filtered, searchQuery);
    }

    if (selectedRegion) {
      filtered = filterCountriesByRegion(filtered, selectedRegion);
    }

    filtered = sortCountriesByPopulation(filtered, sortOrder);

    return filtered;
  }, [countries, searchQuery, selectedRegion, sortOrder]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;


  return (
    <div className='px-4 py-2 dark:bg-black dark:text-white'>
      <div className='flex items-center justify-center'
    >
      <ThemeToggle selected={selected} setSelected={setSelected}/>
    </div>
      <FilterBar
        regions={regions}
        selectedRegion={selectedRegion}
        onRegionChange={setSelectedRegion}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
        Sort by Population ({sortOrder})
      </button>
      <CountryGrid countries={filteredCountries} />
    </div>
  );
};

export default HomePage;
