import React, { createContext, useContext, useEffect, useState } from 'react';

export const LiturgieContext = createContext(); // creation du context qu'on va propager

export function LiturgieContextProvider({ children }) {
  // =====================================
  // CHARGEMENT depuis localStorage
  // =====================================
  const savedLocalStorage = JSON.parse(localStorage.getItem('liturgie'));

  // =====================================
  // Variable INFOS LITURGIES
  // =====================================
  const [infosLiturgie, setInfosLiturgie] = useState({
    dateMesse: '',
    jourLiturgique: '',
    entite: '',
  });

  // =====================================
  // Variable LECTURES API
  // =====================================
  const [lecturesDuJour, setLecturesDuJour] = useState(null);

  // =====================================
  // Variable ELEMENTS DE LA LITURGIE
  // =====================================
  const [elements, setElements] = useState([]);

  // =====================================
  // SAUVEGARDE AUTOMATIQUE
  // =====================================
  useEffect(() => {
    localStorage.setItem(
      'liturgie',
      JSON.stringify({ infosLiturgie, elements }),
    );
  }, [infosLiturgie, lecturesDuJour, elements]);

  // FONCTIONS pour les éléments
  const addElement = (element) => {
    setElements((prev) => [...prev, element]);
  };

  const removeElement = (id) => {
    setElements((prev) => prev.filter((e) => e.id !== id));
  };

  const updateElement = (id, data) => {
    // prev = ancien tableau elements[]
    setElements((prev) =>
      // on parcourt tous les éléments
      prev.map(
        (e) =>
          e.id === id // si c'est l'élément qu'on veut modifier
            ? { ...e, ...data } // on crée un nouvel objet : // - on garde toutes les anciennes propriétés de e, // - on écrase avec les nouvelles données (data)
            : e, // sinon on laisse l'élément inchangé
      ),
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
        setElements,
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
