import { createContext, useContext, useState } from 'react';

// Création du contexte (vide au départ)
export const LecturesContext = createContext();

// Provider: composant qui va distribuer les donnés
export function LecturesContextProvider({ children }) {
  const [lecturesDuJour, setLecturesDuJour] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // état de loading (pour afficher un spinner)
  const [error, setError] = useState(null);

  return (
    <LecturesContext.Provider
      value={{
        // Données
        lecturesDuJour,
        setLecturesDuJour,

        // Etats async
        isLoading,
        setIsLoading,
        error,
        setError,
      }}
    >
      {children}
    </LecturesContext.Provider>
  );
}

// Custom hook pour consommer le context facilement
export function useLectures() {
  const context = useContext(LecturesContext);
  // msg d'erreur clair si on oublie de provider
  if (!context) {
    throw new Error(
      'useLectures, doit être utilisé dans LecturesContextProvider',
    );
  }

  return context;
}
