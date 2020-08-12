import s from './logo.module.css';
import React from 'react';
import logo from '../../../assets/img/logo4.svg'

export const Logo = () => {
    return (
        <div className={s.menuLogoBox}>

            <img src={logo} alt=""/>
        </div>

    )
};
