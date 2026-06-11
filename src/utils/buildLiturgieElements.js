import { createChantElements } from './createChantElements';
import { createLectureElements } from './createLectureElements';

export function buildLiturgieElements(lecturesData) {
  const chants = createChantElements();
  const lectures = createLectureElements(lecturesData);

  return [
    chants[0],
    chants[1],
    chants[2],

    lectures[0],
    lectures[1],
    lectures[2],

    chants[3],

    lectures[3],
    lectures[4],

    ...chants.slice(4),
  ];
}
