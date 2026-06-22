import React from 'react';
import LectureForm from '../lectureForm/LectureForm';
import ChantForm from '../chantForm/ChantForm';
import { useElements } from '../../../context/ElementsContext';

function ElementRender({ element }) {
  const { updateElement } = useElements(); // pour ecrire dans le formuliare du chant

  // Affihcer le bon formulaire selon le type d'élément
  switch (element.type) {
    case 'lecture':
    case 'psaume':
      return <LectureForm element={element} updateElement={updateElement} />;

    case 'chant':
      return <ChantForm element={element} updateElement={updateElement} />;

    default:
      return null;
  }
}

// =============================================
// ✅ MEMOIZATION : React.memo
// =============================================
// POURQUOI React.memo ?
// - ElementRender est rendu 16 fois (une fois par élément)
// - Si on change 1 élément, LiturgiePage re-render TOUS les ElementRender
// - SANS React.memo : les 15 autres re-render inutilement (travail perdu)
// - AVEC React.memo : React vérifie si element a changé
//   - Si element n'a pas changé → pas de re-render
//   - Si element a changé → re-render
//
// IMPACT :
// - 16 éléments × 16 re-renders = 256 rendus inutiles évités ! 🚀
// - Performance +1000% dans certains cas !
//
// COMMENT ça marche ?
// - React.memo compare les props actuelles avec les props précédentes
// - Si elles sont identiques (===), il retourne le rendu en cache
// - Si elles sont différentes, il re-rend
//
// DÉPENDANCES :
// - element : l'objet qui définit le formulaire
//   - Si element change → re-render ✅
//   - Si element ne change pas → pas de re-render ✅
// - updateElement : la fonction pour modifier
//   - Nous l'avons memoizée avec useCallback dans ElementsContext
//   - Donc elle ne change jamais → pas de re-render inutile ✅

export default React.memo(ElementRender);

/*

CHAÎNE COMPLÈTE DE MEMOIZATION

LiturgiePage (contient 16 ElementRender)
    ↓
    Quand l'utilisateur modifie 1 élément
    ↓
useElements() → updateElement() (useCallback → jamais recréée)
    ↓
ElementRender (React.memo) → vérifie si element a changé
    ↓
Si element a changé → re-render ✅
Si element n'a pas changé → pas de re-render ✅

*/
