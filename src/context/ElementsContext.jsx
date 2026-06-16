import { createContext, useContext, useState } from 'react';

// Créer le context (vide)
export const ElementsContext = createContext();

// Provider: composant qui va distribuer les données et foncitons CRUD
export function ElementsContextProvider({ children }) {
  // Etats pour stocker tous les éléments de la liturgie
  const [elements, setElements] = useState([]);

  // ===================================
  // FONCTIONS : CRUD élément
  // ===================================
  const addElement = (element) => {
    setElements((prev) => [...prev, element]);
  };

  // Supprimer un élélment avec l'ID
  const removeElement = (id) => {
    setElements((prev) => prev.filter((e) => e.id !== id)); // filter() parcours tous les éléments (avant) et supprimer celui avec l'id selscitonner
  };

  const updateElement = (id, data) => {
    setElements((prev) =>
      prev.map((e) =>
        e.id === id
          ? { ...e, ...data } // créer un nouvel objet
          : e,
      ),
    );
  };

  // ===================================
  // Fonction poiur rénitialiser
  // ===================================
  const setAllElements = (newElements) => {
    setElements(newElements);
  };

  return (
    <ElementsContext.Provider
      value={{
        // État
        elements,

        // Fonctions CRUD
        addElement,
        removeElement,
        updateElement,
        setAllElements,
      }}
    >
      {children}
    </ElementsContext.Provider>
  );
}

export function useElements() {
  const context = useContext(ElementsContext);
  if (!context) {
    throw new Error(
      'useElements doit être utilisé dans ElementsContextProvider',
    );
  }

  return context;
}
