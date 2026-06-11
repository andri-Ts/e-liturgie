export function buildLectures(data) {
  if (!data) return [];

  return [
    {
      titre: data.boky1,
      ref: data.andininy1,
      texte: data.vakiteny1,
    },
    {
      titre: data.setriny,
      ref: data.setriny,
      texte: data.salamo,
    },
    {
      titre: data.boky3,
      ref: data.andininy3,
      texte: data.vakiteny3,
    },
    {
      titre: data.boky2,
      ref: data.andininy2,
      texte: data.vakiteny2,
    },
  ];
}
