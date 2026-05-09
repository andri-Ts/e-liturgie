import React from 'react';
import './formField.css';

function FormField(props) {
  return (
    <div className="form-field">
      <label htmlFor={props.name}>{props.label}</label>
      <input type={props.type} id={props.name} name={props.name} />
    </div>
  );
}

export default FormField;
