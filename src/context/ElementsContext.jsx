import { createContext, useCallback, useContext, useState } from 'react';

// Créer le context (vide)
export const ElementsContext = createContext();

// Provider: composant qui va distribuer les données et foncitons CRUD
export function ElementsContextProvider({ children }) {
  // Etats pour stocker tous les éléments de la liturgie
  const [elements, setElements] = useState([]);

  // =============================================
  // MEMOIZATION #1 : addElement avec useCallback
  // =============================================
  // POURQUOI useCallback ?
  // - Cette fonction est passée à ElementRender comme prop
  // - Sans useCallback, une nouvelle fonction est créée à chaque render
  // - Cela force ElementRender à re-render même si elle n'a pas changé
  const addElement = useCallback((element) => {
    setElements((prev) => [...prev, element]);
  }, []); // ← Pas de dépendances = fonction jamais recréée

  // =============================================
  // MEMOIZATION #2 : removeElement avec useCallback
  // =============================================
  // POURQUOI useCallback ?
  // - Même raison que addElement
  // - Cette fonction est utilisée par les enfants
  // - Avec useCallback, elle reste stable
  const removeElement = useCallback((id) => {
    setElements((prev) => prev.filter((e) => e.id !== id)); // filter() parcours tous les éléments (avant) et supprimer celui avec l'id selscitonner
  }, []);

  const updateElement = (id, data) => {
    setElements((prev) =>
      prev.map((e) =>
        e.id === id
          ? { ...e, ...data } // créer un nouvel objet
          : e,
      ),
    );
  };

  // =============================================
  // MEMOIZATION #4 : setAllElements avec useCallback
  // =============================================
  // POURQUOI useCallback ?
  // - Cette fonction est appelée depuis useLiturgieInitializer
  // - Avec useCallback, elle reste stable
  const setAllElements = useCallback(
    // Fonction poiur rénitialiser
    (newElements) => {
      setElements(newElements);
    },
    [],
  );

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
