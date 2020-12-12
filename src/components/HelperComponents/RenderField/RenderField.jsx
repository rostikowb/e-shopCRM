import React from 'react';
import './RenderField.css';

const RenderField = ({field, form, ...props }) => {
    return (
        <div className="wrapper-field">
            <label htmlFor="#">{props.placeholder}</label>
            <input {...field} {...props} />
            {/* <div className="error"></div> */}
        </div>
    )
}

export default RenderField;
