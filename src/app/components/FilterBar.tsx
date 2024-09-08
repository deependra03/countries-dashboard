// components/FilterBar.tsx
import React from 'react';
import Select from 'react-select';
import { useDarkMode } from "../context/DarkModeContext";

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
  const {  darkMode } = useDarkMode();
  
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: darkMode ? '#000' : "#FFF", // Black background
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#666', // Lighter border color on hover
      },
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: darkMode ? '#000' : "#fff", // Black background
      color: darkMode ? '#fff' : "#000"
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#444' : darkMode ?  "#000" : "#fff" , 
      color: state.isSelected ? darkMode ?  "#000" : "#fff"  : '#aaa', 
      '&:hover': {
        backgroundColor: '#333', // Slightly lighter on hover
      },
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color:  darkMode ? '#fff' : "#000"
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: '#aaa', 
    }),
  };
  const regionOptions = regions.map((region) => ({ value: region, label: region }));

  return (
    <div className="filter-bar dark:bg-black text-sm flex items-center justify-center space-x-4 m-2">
      <input
        type="text"
        placeholder="Search by country"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className='dark:bg-black focus:none text-sm border border-gray-300 p-2 placeholder:text-gray-500'
      />
      <Select
        className='dark text-sm w-36'
        options={regionOptions}
        value={{ value: selectedRegion, label: selectedRegion }}
        onChange={(option) => onRegionChange(option?.value || '')}
        placeholder="Filter by Region"
        styles={customStyles} 
      />
    </div>
  );
};

export default FilterBar;
