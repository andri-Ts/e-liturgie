import React from 'react';

function ChantForm({ element }) {
  return (
    <div className="item">
      <label htmlFor="">{element.label}</label>
      <input type="text" placeholder="lohateny" />
    </div>
  );
}

export default ChantForm;
