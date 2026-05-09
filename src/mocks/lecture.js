// const mockLectures = [
//   {
//     id: 1,
//     label: 'Boky mitantara ny Asan’ny Apôstôly',
//     info: 'Asa 15, 22-31',
//     content:
//       'Taorian’ny fiaraha-midinika tao amin’ilay fivoriana lehibe tao Jerosalema, dia nankasitrahin’ny Apôstôly sy ny Pretra mbamin’ny Eglizy rehetra ny hevitry ny mpivory; ka nifidy ny sasany tamin’izy rehetra izy ireo, mba hirahina ho any Antiôkia hiaraka amin’i Paoly sy Barnabe: dia i Jodà izay natao hoe Barsabasy, sy i Silasy, lehilahy lohandohany tao amin’ny rahalahy, no laniny. Ka izao no taratasy nampitondrainy azy ireo: “Ny Apôstôly sy ny Pretra ary ny rahalahy avy miarahaba ny rahalahy any amin’ny Jentily, izay any Antiôkia sy Siria ary Silisia. Noho ny nandrenesanay fa nisy olona avy tatý aminay, izay tsy nahazo teny taminay velively, nampitabataba anareo tamin’ny teniny sy nampitebiteby ny sainareo, dia nivory izahay rehetra, ka nifanara-kevitra ny hifidy olona hirahina ho any aminareo, hiaraka amin’i Barnabe sy i Paoly malalanay, lehilahy nanao vy very ny ainy ho voninahitry ny Anaran’i Jesoa Kristy Tompontsika. Koa indreny i Jodà sy i Silasy nirahinay hilaza am-bava izany zavatra izany aminareo. Sitraky ny Fanahy Masina sy izahay ny tsy hampitondra entana anareo, afa-tsy izao zavatra tsy maintsy tandremana izao: dia ny hifadianareo hena natolotra tamin’ny sampy sy ny ra ary ny biby nokendaina, mbamin’ny fijangajangana; soa ho anareo ny mifady an’izany. Veloma.” Dia nalefany izy ireo ka lasa nankany Antiôkia; ary namory ny olona sy nanolotra ny taratasy tamin’izy ireo. Nony namaky izany ny olona, dia nifaly avokoa noho ny fanalana alahelo tao anatiny.',
//   },
//   {
//     id: 2,
//     label: 'Boky mitantara ny Asan’ny Apôstôly',
//     info: 'Asa 15, 22-31',
//     content:
//       'Taorian’ny fiaraha-midinika tao amin’ilay fivoriana lehibe tao Jerosalema, dia nankasitrahin’ny Apôstôly sy ny Pretra mbamin’ny Eglizy rehetra ny hevitry ny mpivory; ka nifidy ny sasany tamin’izy rehetra izy ireo, mba hirahina ho any Antiôkia hiaraka amin’i Paoly sy Barnabe: dia i Jodà izay natao hoe Barsabasy, sy i Silasy, lehilahy lohandohany tao amin’ny rahalahy, no laniny. Ka izao no taratasy nampitondrainy azy ireo: “Ny Apôstôly sy ny Pretra ary ny rahalahy avy miarahaba ny rahalahy any amin’ny Jentily, izay any Antiôkia sy Siria ary Silisia. Noho ny nandrenesanay fa nisy olona avy tatý aminay, izay tsy nahazo teny taminay velively, nampitabataba anareo tamin’ny teniny sy nampitebiteby ny sainareo, dia nivory izahay rehetra, ka nifanara-kevitra ny hifidy olona hirahina ho any aminareo, hiaraka amin’i Barnabe sy i Paoly malalanay, lehilahy nanao vy very ny ainy ho voninahitry ny Anaran’i Jesoa Kristy Tompontsika. Koa indreny i Jodà sy i Silasy nirahinay hilaza am-bava izany zavatra izany aminareo. Sitraky ny Fanahy Masina sy izahay ny tsy hampitondra entana anareo, afa-tsy izao zavatra tsy maintsy tandremana izao: dia ny hifadianareo hena natolotra tamin’ny sampy sy ny ra ary ny biby nokendaina, mbamin’ny fijangajangana; soa ho anareo ny mifady an’izany. Veloma.” Dia nalefany izy ireo ka lasa nankany Antiôkia; ary namory ny olona sy nanolotra ny taratasy tamin’izy ireo. Nony namaky izany ny olona, dia nifaly avokoa noho ny fanalana alahelo tao anatiny.',
//   },
// ];

// const mockLectures = [
//   {
//   boky1: "Boky mitantara ny Asan’ny Apôstôly",
//   andininy1: "Asa 8, 5-8. 14-17",
//   setriny: "Sal. 65, 1-3a. 4-5. 6-7a. 16 sy 20.",
//   boky2: "Taratasy voalohan’i Md. Piera Apôstôly",
//   andininy2: "1 Pi. 3, 15-18",
//   boky3: "Evanjely Masina nosoratan’i Md. Joany",
//   andininy3: "Jo. 14, 15-21",
//   }

// ]

const lecturesData = {
  boky1: 'Boky mitantara ny Asan’ny Apôstôly',
  andininy1: 'Asa 8, 5-8. 14-17',
  setriny: 'Sal. 65, 1-3a. 4-5. 6-7a. 16 sy 20.',
  boky2: 'Taratasy voalohan’i Md. Piera Apôstôly',
  andininy2: '1 Pi. 3, 15-18',
  boky3: 'Evanjely Masina nosoratan’i Md. Joany',
  andininy3: 'Jo. 14, 15-21',
};

export const mockLectures = [
  {
    id: 1,
    titre: lecturesData.boky1,
    ref: lecturesData.andininy1,
  },

  {
    id: 2,
    titre: 'Setriny',
    ref: lecturesData.setriny,
  },
  {
    id: 3,
    titre: lecturesData.boky3,
    ref: lecturesData.andininy3,
  },

  {
    id: 4,
    titre: lecturesData.boky2,
    ref: lecturesData.andininy2,
  },
];
