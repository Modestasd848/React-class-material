import React, { useState } from 'react';
import './App.css';
import CityForm from './components/CityFrom/CityForm';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';

function App() {
  const [temp, setTemp] = useState({});
  const [lastUpdated, setLastUpdated] = useState('');
  const [lastServerUpdate, setLastServerUpdate] = useState('');
  return (
    <div>
      <CityForm
        setTemp={setTemp}
        setLastUpdated={setLastUpdated}
        setLastServerUpdate={setLastServerUpdate}
      />
      <WeatherDisplay temp={temp} date={lastUpdated} lastServerUpdate={lastServerUpdate} />
    </div>
  );
}

export default App;
