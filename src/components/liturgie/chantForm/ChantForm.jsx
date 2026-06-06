import React from 'react';
import '../elementRender/elementGlobal.css';

function ChantForm({ element, updateElement }) {
  const handleChangeTitre = (e) => {
    updateElement(element.id, {
      data: {
        ...element.data,
        titre: e.target.value,
      },
    });
  };

  const handleChangePage = (e) => {
    updateElement(element.id, {
      data: {
        ...element.data,
        page: e.target.value,
      },
    });
  };

  return (
    <div className="element-card">
      <div className="element-label">{element.label}</div>

      <div className="element-input">
        <input
          type="text"
          value={element.data.titre}
          onChange={handleChangeTitre}
        />
      </div>

      {/* PAGE TOUJOURS PRESENTE */}
      <div className="element-input page-hasina">
        {element.data.page !== undefined ? (
          <input
            type="number"
            value={element.data.page}
            onChange={handleChangePage}
            placeholder="Page"
          />
        ) : (
          <span style={{ opacity: 0.3 }}>—</span>
        )}
      </div>
    </div>
  );
}

export default ChantForm;
