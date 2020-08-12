import React from 'react';
import {Acordeon} from "../../dopComp/acardeon/acardeon";
import {FilterContent} from "./filterContent";


export const FilterBox = () => {

    return (
        <Acordeon
            info={{
                title: 'Фильтры',
                content: <FilterContent/>
            }}/>
    )
};
