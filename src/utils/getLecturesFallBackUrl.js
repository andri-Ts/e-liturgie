/**
 * Génère le lien vers les lectures du jour sur Katolika.org
 * lorsque l'API ne retourne pas les textes.
 */

export function getLecturesFallBackUrl(date) {
  if (!date) return null;

  const isoDate = new Date(date).toISOString().split('T')[0];

  return `https://katolika.org/katolika/soronamasina/daty/${isoDate}`;
}
