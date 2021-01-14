import React from 'react'
import './contacts.css'

export default () => {
    return(
        <div className="mainWrapper contactPageBox">
            <h1 className="invisibleH1">Контакти</h1>
            <ul>
                <li><b>Посада:</b> Голова ПОАП</li>
                <li><b>ПІБ:</b> Середа Олексій Олексійович</li>
                <li><b>Телефон:</b> <a href="tel:+380665090487">+380665090487</a></li>
                <li><b>Email:</b> example@gmail.com</li>
            </ul>
            <ul>
                <li><b>Посада:</b> Заступник голови ПОАП</li>
                <li><b>ПІБ:</b> Криворучко Сергій Григорович</li>
                <li><b>Телефон:</b> <a href="tel:+380664493431">+380664493431</a></li>
                <li><b>Email:</b> example@gmail.com</li>
            </ul>
        </div>
    )
}