import React, { useState } from 'react';
import { fetchData } from '../../services/api';
import { WeatherList } from './WeatherList/WeatherList';
import s from './WeatherForm.module.css'

export const WeatherForm = ({ create }) => {
    const [country, setCounty] = useState('')
    const [cards, setCards] = useState([]);

    const addNewCard = async () => {
        const weather = await fetchData(country)
        const card = {
            ...country,
            weather: weather,
            id: Date.now()
        }
        setCards([...cards, card])
        setCounty('')
    }

    return (
        <div className={s.container}>
            <input className={s.input}
                placeholder='Enter city'
                value={country}
                onChange={e => setCounty(e.target.value)}
            />
            <button className={s.button} onClick={addNewCard}>Add card</button>

            <WeatherList cards={cards} />


        </div>
    )
}
