import React from 'react';
import { WeatherForm } from './Components/WeatherForm/WeatherForm';
import s from './App.module.css'
import { Header } from './Components/Header/Header';

function App() {
  return (
    <div className={s.container}>
      <Header title='Weather APP' />
      <WeatherForm />
    </div>
  );
}

export default App;
