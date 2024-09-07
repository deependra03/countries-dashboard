// components/FilterBar.tsx
import React from 'react';
import Select from 'react-select';

interface FilterBarProps {
  regions: string[];
  selectedRegion: string;
  onRegionChange: (region: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  regions,
  selectedRegion,
  onRegionChange,
  searchQuery,
  onSearchChange,
}) => {
  const regionOptions = regions.map((region) => ({ value: region, label: region }));

  return (
    <div className="filter-bar dark:bg-black text-sm">
      <input
        type="text"
        placeholder="Search by country"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className='dark:bg-black focus:none'
      />
      <Select
       className='dark:bg-black text-sm'
        options={regionOptions}
        value={{ value: selectedRegion, label: selectedRegion }}
        onChange={(option) => onRegionChange(option?.value || '')}
        placeholder="Filter by Region"
      />
    </div>
  );
};

export default FilterBar;
