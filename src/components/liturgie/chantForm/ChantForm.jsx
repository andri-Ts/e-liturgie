import React from 'react';

function ChantForm({ element }) {
  return (
    <div className="item">
      <label htmlFor="">{element.label}</label>
      <input type="text" value={element.data.titre} />
      <input type="number" placeholder="150" value={element.data.page} />
    </div>
  );
}

export default ChantForm;
