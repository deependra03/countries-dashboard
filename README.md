# Country Dashboard

This is a **Next.js** application built with **TypeScript** that fetches country data from the REST API at [https://restcountries.com/v3.1/all](https://restcountries.com/v3.1/all) and displays it in an interactive, responsive dashboard. Users can search for countries, sort them by population, and filter by region, as well as compare two countries side-by-side.

![image](https://github.com/user-attachments/assets/69b29c40-79e6-409c-9964-c90eb2e2c3e7)
![image](https://github.com/user-attachments/assets/49d6cefb-978a-40da-a4bf-5f664ef95c5b)
![image](https://github.com/user-attachments/assets/0aec7778-005c-4f72-b3a8-c198665bbde8)
![image](https://github.com/user-attachments/assets/28f545e6-8405-4e4c-bdc2-9c0515218716)
![image](https://github.com/user-attachments/assets/4927063a-10d9-49d5-a40b-d47dc56c359b)


## Features

- Fetches country data from a REST API.
- Sorts countries by population (ascending/descending).
- Filters countries by region.
- Search functionality to find countries by name or capital.
- Responsive grid layout for country cards.
- Lazy loading for improved performance.
- Displays detailed country information on card click (flag, name, population, capital, region, currency, languages, time zones).
- Dark mode toggle with persistent user preference.
- Compare two countries side by side.
- Map or chart visualization for additional insights.
- Server-Side Rendering (SSR) for faster initial load.
- Custom hooks for data fetching and caching.
- Performance optimization using **Next.js** image optimization and lazy loading.

## Advanced Features

- Compare two countries side by side.
- A visualization (map/chart) for comparing countries.
- Unit tests for utility functions using Jest.
- Component and integration tests using React Testing Library.

## Technologies Used

- **Next.js** for server-side rendering and static generation.
- **TypeScript** for static type checking.
- **Tailwind CSS** for styling and dark mode.
- **React Hooks** for local state management.
- **React Context API** for global state management.
- **Jest** for unit testing.
- **React Testing Library** for component and integration tests.
- **Chart.js** (or another visualization library) for country data visualization.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/deependra03/countries-dashboard.git
   cd country-dashboard


## Getting Started

```bash
npm run dev: Starts the application in development mode.
npm run build: Builds the app for production.
npm run start: Starts the production server.
npm run lint: Lints the TypeScript codebase.
npm run test: Runs all unit, component, and integration tests.
npm run test:watch: Runs tests in watch mode
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing
This project uses Jest for unit testing and React Testing Library for component and integration testing.

## Running Tests

```bash
npm run test
npm run test:watch
```
