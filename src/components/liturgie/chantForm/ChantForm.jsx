import React from 'react';

function ChantForm({ element, updateElement }) {
  // Récupère le titre du chant
  const handleChangeTitre = (e) => {
    const newValue = e.target.value; // valeur tapée dans l'input
    updateElement(element.id, {
      // on modifie uniquement "data"
      data: {
        ...element.data, // on garde les anciennes valeurs de data (page, etc)
        titre: newValue,
      },
    });
  };

  // Récupère la page du chant
  const handleChangePage = (e) => {
    const newValue = e.target.value;
    updateElement(element.id, {
      data: {
        ...element.data,
        page: newValue,
      },
    });
  };

  return (
    <div className="item">
      <label htmlFor="">{element.label}</label>
      <input
        type="text"
        value={element.data.titre}
        onChange={handleChangeTitre}
      />
      {element.data.page !== undefined && (
        <input
          type="number"
          placeholder="150"
          value={element.data.page}
          onChange={handleChangePage}
        />
      )}
    </div>
  );
}

export default ChantForm;
