import s from './shortHaract.module.css'
import React from 'react';

export const ShortHaractBox = props => {
    // console.log(props);
    let i = 0;
    return <div className={s.shortHaractBox}>

        <ul>
            {props.param?.map(item => {
                i++;
                if(i >= 8){

                }else {
                    return (
                        <li key={Math.random()}>
                            <span>{item.name}: </span>
                            <span> {item.value}</span>
                        </li>
                    )
                }
            })}
        </ul>

    </div>;
};