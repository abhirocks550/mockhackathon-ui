import React from 'react';
import classnames from 'classnames';
import './InputBox.css';

export const InputBox = (props) => {
    let { name, label, type, value, placeholder, onChange, errors, required} = props;
    return (
        <div className='form-group'>
            <label htmlFor={name}>{label}</label>
            <div>
                <input type={type}
                    required={required}
                    value={value}
                    name={name}
                    className={classnames('form-control', { 'hasError': errors })}
                    placeholder={placeholder}
                    onChange={onChange} />
                {errors && <span className='errorMsg'>{errors}</span>}
            </div>
        </div>
    );
  };
