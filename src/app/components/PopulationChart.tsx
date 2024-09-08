import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Country } from '../../../src/app/types';

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface PopulationChartProps {
  firstCountry: Country | null;
  secondCountry: Country | null;
}

const PopulationChart: React.FC<PopulationChartProps> = ({ firstCountry, secondCountry }) => {
  const countryNames = [
    firstCountry?.name.common || 'Unknown Country 1',
    secondCountry?.name.common || 'Unknown Country 2'
  ];

  const populations = [
    firstCountry?.population || 0,
    secondCountry?.population || 0
  ];

  const data = {
    labels: countryNames,
    datasets: [
      {
        label: 'Population',
        data: populations,
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || '';
            const value = context.raw as number;
            return `${label}: ${value.toLocaleString()}`;
          },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default PopulationChart;
