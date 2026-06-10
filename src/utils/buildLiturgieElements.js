import { createDefaultElements } from '../data/defautlLiturgie';
import { createLectureElements } from './createLectureElements';

export function buildLiturgieElements(data) {
  const chants = createDefaultElements();

  // pour empêcher l'erreur au cas où il n'y a pas de données lectures de l'api
  if (!data) {
    return chants;
  }

  const lectures = createLectureElements(data);

  return [
    chants[0],
    chants[1],
    chants[2],

    lectures[0],
    lectures[1],
    lectures[2],

    chants[3],

    lectures[3],

    ...chants.slice(4),
  ];
}
