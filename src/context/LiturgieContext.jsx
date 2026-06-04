import React, { createContext, useState } from 'react';

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

  // Composant qui redistribuera les variables et data dans l'applicaiton
  return (
    <LiturgieContext.Provider
      value={{
        infosLiturgie,
        setInfosLiturgie,
        lecturesDuJour,
        setLecturesDuJour,
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
