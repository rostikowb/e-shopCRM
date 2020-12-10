import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import './infoUser.css';

class infoUser extends Component {

    render() {
        const { match: {params} } = this.props;
        return (
            <div className="wrapper-info-user">
                <div className="container__info-user">
                    <h2>Id: {params.id}</h2>
                    <ul className="list__info-user">
                       <div className="item__user-info">
                           <li className="label__user-info">Имя</li>
                           <li>Ростислав</li>
                       </div>
                       <div className="item__user-info">
                           <li className="label__user-info">Фамилия</li>
                           <li>Криворучко</li>
                       </div>
                       <div className="item__user-info">
                           <li className="label__user-info">Отчество</li>
                           <li>Миколайович</li>
                       </div>
                       <div className="item__user-info">
                           <li className="label__user-info">Email</li>
                           <li>rostikowb132@gmail.com</li>
                       </div>
                       <div className="item__user-info">
                           <li className="label__user-info">Телефон</li>
                           <li></li>
                       </div>
                       <div className="item__user-info">
                           <li className="label__user-info">Город</li>
                           <li></li>
                       </div>
                       <div className="item__user-info">
                           <li className="label__user-info">Отделение</li>
                           <li></li>
                       </div>
                       <div className="item__user-info">
                           <li className="label__user-info">Купоны</li>
                           <li>Нету</li>
                       </div>
                       <div className="item__user-info">
                           <li className="label__user-info">Заказы</li>
                           <li></li>
                       </div>
                    </ul>
                    <Button variant="outlined" color="primary">Изменить</Button>
                </div>
            </div>
        );
    }
}

export default infoUser;
