import React, { useState, useEffect } from 'react';
import s from './WeatherCard.module.css'

export const WeatherCard = ({ card }) => {
    const [checked, setChecked] = useState(true)
    const [temp, setTemp] = useState('')
    console.log(card)

    useEffect(() => {
        setTemp(checked ? `${card.weather.current.temp_c} °C` : `${card.weather.current.temp_f} °F`)
    }, [checked])


    return (
        <div className={temp > '16' ? `${s.container} ${s.sun}` : `${s.container} ${s.cold}`}>
            <h1>{card.weather.location.name}</h1>
            <p onClick={() => setChecked(!checked)}>{card.weather.current.condition.text} - {temp}</p>
            <p>Air condition - {Math.round(card.weather.current.air_quality.no2)}</p>
            <p>Wind speed - {Math.round(card.weather.current.wind_kph)}</p>
        </div>
    )
}
