export function createLectureElements(data) {
  console.log('createLectureElements', data);
  return [
    {
      id: crypto.randomUUID(),
      type: 'lecture',
      label: 'Vakiteny 1',
      data: {
        reference: data.andininy1,
      },
    },

    {
      id: crypto.randomUUID(),
      type: 'psaume',
      label: 'Salamo',
      data: {
        reference: data.setriny,
      },
    },

    {
      id: crypto.randomUUID(),
      type: 'lecture',
      label: 'Vakiteny 2',
      data: {
        reference: data.andininy2,
      },
    },
    {
      id: crypto.randomUUID(),
      type: 'lecture',
      label: 'Andininy Aleloia',
      data: {
        reference: '',
      },
    },

    {
      id: crypto.randomUUID(),
      type: 'lecture',
      label: 'Evanjely',
      data: {
        reference: data.andininy3,
      },
    },
  ];
}
