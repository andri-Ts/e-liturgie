import { createDefaultElements } from '../data/defautlLiturgie';
import { createLectureElements } from './createLectureElements';

export function buildLiturgieElements(data) {
  const lectures = createLectureElements(data);
  const chants = createDefaultElements();

  return [
    chants[0],
    chants[0],
    chants[0],

    lectures[0],
    lectures[0],
    lectures[0],

    chants[3],

    lectures[3],

    ...chants.slice(4),
  ];
}
