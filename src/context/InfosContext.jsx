import { createContext, useContext, useState } from 'react';

export const InfosContext = createContext();

export function InfosContextProvider({ children }) {
  const [infosLiturgie, setInfosLiturgie] = useState({
    dateMesse: '',
    jourLiturgique: '',
    entite: '',
  });

  return (
    <InfosContext.Provider value={{ infosLiturgie, setInfosLiturgie }}>
      {children}
    </InfosContext.Provider>
  );
}

export function useInfos() {
  const context = useContext(InfosContext);
  if (!context) {
    throw new Error('useInfos doit être utilisé dans InfosContextProvider');
  }

  return context;
}
