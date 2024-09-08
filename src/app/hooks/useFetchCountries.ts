import { useState, useEffect } from 'react';
import axios from 'axios';
import { Country } from '../types';

export const useFetchCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await axios.get<Country[]>('https://restcountries.com/v3.1/all');
        setCountries(res.data);
      } catch (err) {
        setError('Failed to fetch countries');
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { countries, loading, error };
};
export default useFetchCountries