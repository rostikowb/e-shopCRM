import React from 'react';
import {NavLink} from 'react-router-dom';
import './CardTicket.css';

const CardTicket = ({ color, ticket }) => {
    console.log(ticket);
    return (
        <div className="wrapper-card-ticket" >
            <div className="card-ticket__color" style={{ background: `${color}` }}></div>
            <div className="card-ticket__content">
                <div className="card-ticket__header">
                    <p className="user">
                        {ticket.userId ? (
                            <NavLink to={`/users/${ticket?.userId}`}>
                                userId
                            </NavLink>
                        ) : (
                                "Аноним"
                            )}
                    </p>
                    <p className="date">
                        {ticket.date
                            ? new Date(ticket.date).toLocaleString("ru-RU", {
                                year: "numeric",
                                month: "numeric",
                                day: "numeric",
                                hour: "numeric",
                                minute: "numeric",
                            })
                            : null}</p>
                </div>
                <div className="card-ticket__body">
                    <ul className="body-list">
                        <div className="body-list__item">
                            <li className="body-list__label">Тема</li>
                            <li>{ticket.question}</li>
                        </div>
                        <div className="body-list__item">
                            <li className="body-list__label">Связь</li>
                            <li>{ticket.comm}</li>
                        </div>
                        <div className="body-list__item">
                            <li className="body-list__label">Адресс</li>
                            <li>{ticket.email || ticket.tel || ticket.telegram}</li>
                        </div>
                    </ul>
                </div>
                <div className="card-ticket__footer">
                    {ticket.msg}
                </div>
            </div>
        </div>
    )
}

export default CardTicket
