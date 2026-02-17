# Weather Forecast Dashboard

A responsive weather forecast application built with React that allows users to search for a city and view multi-period forecast data. The app integrates with the OpenWeather API to display detailed weather information in a clean, modern interface inspired by real-world web applications.

---

## Features

- Search for a city using the format: `City,State,Country` (e.g. `Corvallis,OR,US`)
- Fetch multi-period forecast data from the OpenWeather API
- Display forecast cards including:
  - Date and time
  - High and low temperatures
  - Probability of precipitation
  - Weather description
  - Weather condition icon
- Responsive design that adapts to mobile and desktop layouts
- Styled using Emotion (or TailwindCSS if applicable)
- Data fetching handled with TanStack Query and/or React Router data loaders

---

## Tech Stack

- React
- Vite
- TanStack Query and/or React Router
- Emotion (or TailwindCSS)
- OpenWeather API

---

## Installation

### Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/weather-forecast-dashboard.git
cd weather-forecast-dashboard
```

### Install dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory and add your OpenWeather API key:

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

You can obtain an API key from:

https://openweathermap.org/appid

> Note: Environment variables are used for development purposes only and are not secure for production applications.

---

## Running the Application

```bash
npm run dev
```

Then open your browser and visit:

```
http://localhost:5173
```

---

## Project Highlights

- Demonstrates asynchronous data fetching from an external HTTP API
- Implements client-side data management using modern React tooling
- Applies component-based styling to mimic a published web application
- Builds responsive UI patterns similar to production applications

---

## Future Improvements

- Add geolocation support
- Integrate an interactive map to display city location
- Improve error handling and loading states
- Deploy live version via Vercel or Netlify
