export function getLecturesFallBackUrl(date) {
  if (!date) return null;

  const isoDate = new Date(date).toISOString().split('T')[0];

  return `https://www.aelf.org/${isoDate}/romain/messe`;
}
