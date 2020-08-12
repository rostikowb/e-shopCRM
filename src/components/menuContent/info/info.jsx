// import s from './info.module.css';
import React from 'react';
import {Acordeon} from '../../dopComp/acardeon/acardeon'
import {InfoContent} from './infoContent'


export const Info = () => {
    return (
        <Acordeon
            info={{
            title: 'Полезная информация',
            content: <InfoContent/>
        }}/>

    )
};
