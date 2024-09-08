import { render, screen } from '@testing-library/react';
import CountryCard from '../components/CountryCard';

const country = {
  name: { common: 'Country A' },
  capital: ['Capital A'],
  population: 1000000,
  region: 'Europe',
  flags: { png: 'flag_url' },
};

describe('CountryCard', () => {
  it('should render country details correctly', () => {
    render(<CountryCard country={country} />);

    expect(screen.getByText('Country A')).toBeInTheDocument();
    expect(screen.getByText('Capital: Capital A')).toBeInTheDocument();
    expect(screen.getByText('Population: 1,000,000')).toBeInTheDocument();
    expect(screen.getByText('Region: Europe')).toBeInTheDocument();
  });

  it('should display the country flag', () => {
    render(<CountryCard country={country} />);
    expect(screen.getByAltText('Country A flag')).toBeInTheDocument();
  });
});
