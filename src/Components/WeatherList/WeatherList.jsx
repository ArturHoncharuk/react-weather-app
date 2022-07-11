import React from 'react'
import { WeatherCard } from '../WeatherCard/WeatherCard';
import s from './WeatherList.module.css'

export const WeatherList = ({ cards }) => {
    return (
        <div className={s.container}>
            {cards.map((card) => (
                <WeatherCard key={card.id} card={card} />
            ))}
        </div>
    )
}
