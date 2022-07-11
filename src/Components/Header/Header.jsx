import React from 'react';
import s from './Header.module.css'

export const Header = ({title}) => {
    return (
    <header className={s.container}>
        {title}
    </header>
  )
}
