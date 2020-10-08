const feedFixture = [
  {
    title: 'Kindred',
    author: 'Octavia E. Butler',
    image_url:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1339423248l/60931._SX98_.jpg',
    publication_year: '1979',
    avg_rating: '4.26',
  },
  {
    title: 'Parable of the Sower (Earthseed, #1)',
    author: 'Octavia E. Butler',
    image_url:
      'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
    publication_year: '1993',
    avg_rating: '4.16',
  },
  {
    title: 'Dawn (Xenogenesis, #1)',
    author: 'Octavia E. Butler',
    image_url:
      'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
    publication_year: '1987',
    avg_rating: '4.13',
  },
  {
    title: 'Parable of the Talents (Earthseed, #2)',
    author: 'Octavia E. Butler',
    image_url:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1170553715l/60932._SX98_.jpg',
    publication_year: '1998',
    avg_rating: '4.27',
  },
  {
    title: 'Fledgling',
    author: 'Octavia E. Butler',
    image_url:
      'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
    publication_year: '2005',
    avg_rating: '3.86',
  },
  {
    title: 'Wild Seed (Patternmaster, #1)',
    author: 'Octavia E. Butler',
    image_url:
      'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
    publication_year: '1980',
    avg_rating: '4.22',
  },
  {
    title: 'Bloodchild and Other Stories',
    author: 'Octavia E. Butler',
    image_url:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1428806161l/60930._SX98_.jpg',
    publication_year: '1995',
    avg_rating: '4.33',
  },
  {
    title: 'Bloodchildren: Stories by the Octavia E. Butler Scholars',
    author: 'Nisi Shawl',
    image_url:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1358369509l/17254552._SX98_.jpg',
    publication_year: '2013',
    avg_rating: '4.35',
  },
  {
    title: 'Adulthood Rites (Xenogenesis, #2)',
    author: 'Octavia E. Butler',
    image_url:
      'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
    publication_year: '1988',
    avg_rating: '4.16',
  },
  {
    title: "Lilith's Brood (Xenogenesis, #1-3)",
    author: 'Octavia E. Butler',
    image_url:
      'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
    publication_year: '1987',
    avg_rating: '4.35',
  },
  {
    title: 'Imago (Xenogenesis, #3)',
    author: 'Octavia E. Butler',
    image_url:
      'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
    publication_year: '1989',
    avg_rating: '4.19',
  },
  {
    title: 'Mind of My Mind (Patternmaster, #2)',
    author: 'Octavia E. Butler',
    image_url:
      'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
    publication_year: '1977',
    avg_rating: '4.12',
  },
  {
    title: "Clay's Ark (Patternmaster, #3)",
    author: 'Octavia E. Butler',
    image_url:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1461533398l/60933._SX98_.jpg',
    publication_year: '1984',
    avg_rating: '3.83',
  },
  {
    title: 'Luminescent Threads: Connections to Octavia E. Butler',
    author: 'Alexandra  Pierce',
    image_url:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1505389842l/35486346._SX98_.jpg',
    publication_year: '2017',
    avg_rating: '4.27',
  },
  {
    title:
      'Strange Matings: Science Fiction, Feminism, African American Voices, and Octavia E. Butler',
    author: 'Rebecca J. Holden',
    image_url:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1397622414l/17950693._SX98_.jpg',
    publication_year: '2013',
    avg_rating: '4.31',
  },
  {
    title: 'Octavia E. Butler',
    author: 'Gerry Canavan',
    image_url:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1472067839l/29872937._SX98_.jpg',
    publication_year: undefined,
    avg_rating: '4.46',
  },
  {
    title: 'Seed to Harvest (Patternmaster, #1-4)',
    author: 'Octavia E. Butler',
    image_url:
      'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
    publication_year: '1976',
    avg_rating: '4.35',
  },
  {
    title: 'Patternmaster (Patternmaster, #4)',
    author: 'Octavia E. Butler',
    image_url:
      'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
    publication_year: '1976',
    avg_rating: '4.01',
  },
  {
    title:
      'Black Atlantic Speculative Fictions: Octavia E. Butler, Jewelle Gomez, and Nalo Hopkinson',
    author: 'Ingrid Thaler',
    image_url:
      'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
    publication_year: '2009',
    avg_rating: '4.75',
  },
  {
    title: 'Bloodchild',
    author: 'Octavia E. Butler',
    image_url:
      'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
    publication_year: '1984',
    avg_rating: '4.12',
  },
]

export default feedFixture
