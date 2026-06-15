export function buildLiturgiePayload(infosLiturgie, lecturesDuJour, elements) {
  return {
    dateMesse: infosLiturgie.dateMesse,
    jourLiturgique: lecturesDuJour?.androLitorjika || '',
    entite: infosLiturgie.entite || '',

    lecturesDuJour: {
      boky1: lecturesDuJour?.boky1 || '',
      andininy1: lecturesDuJour?.andininy1 || '',
      texte1: lecturesDuJour?.vakiteny1 || '',

      setriny: lecturesDuJour?.setriny || '',
      texteSalamo: lecturesDuJour?.salamo || '',

      boky2: lecturesDuJour?.boky2 || '',
      andininy2: lecturesDuJour?.andininy2 || '',
      texte2: lecturesDuJour?.vakiteny2 || '',

      boky3: lecturesDuJour?.boky3 || '',
      andininy3: lecturesDuJour?.andininy3 || '',
      texte3: lecturesDuJour?.vakiteny3 || '',
    },

    elements: elements.map((element) => ({
      type: element.type,
      label: element.label,

      data: {
        titre: element.data?.titre || '',
        page: element.data?.page || '',
        reference: element.data?.reference || '',
      },
    })),
  };
}
