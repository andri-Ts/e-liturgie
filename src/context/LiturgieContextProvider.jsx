// Ce composant combine les 3 contextes. On importe juste celui-ci

import { ElementsContextProvider } from './ElementsContext';
import { InfosContextProvider } from './InfosContext';
import { LecturesContextProvider } from './LecturesContext';

export function LiturgieContextProvider({ children }) {
  return (
    // l'ordre n'est pas important
    <InfosContextProvider>
      <LecturesContextProvider>
        <ElementsContextProvider>{children}</ElementsContextProvider>
      </LecturesContextProvider>
    </InfosContextProvider>
  );
}
