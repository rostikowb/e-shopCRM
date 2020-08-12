import React from 'react';
import s from './info.module.css'

export const InfoContent = () => {
    return (
        <div className={s.menuInfoBox}>
            <span>Контакты</span>
            <span>Ответы на вопросы</span>
            <span>Возврат товара</span>
            <span>О нас</span>
            <span>Чото там</span>
        </div>
    )
};