import React, { createContext, useContext, useState } from 'react';

export const LiturgieContext = createContext(); // creation du context qu'on va propager

export function LiturgieContextProvider({ children }) {
  // Variables infos globals sur la liturgie
  const [infosLiturgie, setInfosLiturgie] = useState({
    dateMesse: '',
    jourLiturgique: '',
    entite: '',
  });

  // Variable des réferences de lectures
  const [lecturesDuJour, setLecturesDuJour] = useState(null);

  // Variables types d'élements
  const [elements, setElements] = useState([]);

  // FONCTIONS pour les éléments
  const addElement = (element) => {
    setElements((prev) => [...prev, element]);
  };

  const removeElement = (id) => {
    setElements((prev) => prev.filter((e) => e.id !== id));
  };

  const updateElement = (id, data) => {
    setElements((prev) =>
      prev.map((e) => (e.id === id ? { ...e, ...data } : e)),
    );
  };

  // Composant qui redistribuera les variables et data dans l'applicaiton
  return (
    <LiturgieContext.Provider
      value={{
        infosLiturgie,
        setInfosLiturgie,

        lecturesDuJour,
        setLecturesDuJour,

        elements,
        addElement,
        removeElement,
        updateElement,
      }}
    >
      {/* children = tous les composants enfants qui pourront accéder à user et setUser sans props */}
      {children}
    </LiturgieContext.Provider>
  );
}

export function useLiturgie() {
  return useContext(LiturgieContext);
}
