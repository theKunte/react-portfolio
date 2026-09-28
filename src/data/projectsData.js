// Projects pinned to the front of the Projects section, whatever the data source.
export const pinnedProjects = [
  {
    id: 'wildpeer',
    title: 'WildPeer',
    status: 'Coming soon',
    desc: 'A trust-focused platform for peer-to-peer outdoor gear sharing. Borrow tents, packs, and trail gear from friends and clubs you already trust.',
    tech: 'TypeScript, React, Node.js, Prisma, Firebase Auth, Docker',
    demo: 'https://thekunte.github.io/wildpeer-coming-soon/',
    github: '',
    image: 'portfolio/wildpeer.webp',
  },
];

// Fallback projects, used only when Firestore and public/projects.json are unavailable.
const projects = [
  {
    title: 'GearShare',
    desc: 'A community gear-sharing platform where neighbours list equipment, form trusted groups, and manage borrow requests in real time.',
    tech: 'React, TypeScript, Node.js, Express, PostgreSQL, Prisma, Firebase Auth, Docker',
    github: 'https://github.com/theKunte/local-resource-sharing',
  },
  {
    title: 'Dice Game (Strike)',
    desc: 'I built this so my husband and I could play our favorite dice game on road trips, with no ads. Roll five dice up to three times a turn and choose from 13 scoring categories. Built in React and playable live.',
    tech: 'React, JavaScript, CSS',
    demo: 'https://thekunte.github.io/dice-game/',
    github: 'https://github.com/theKunte/dice-game',
  },
  {
    title: 'Spotify Favorites',
    desc: 'Pick a year and listen to the songs I had on repeat.',
    tech: 'React, Spotify embeds',
    github: 'https://github.com/theKunte/spotify-favorites',
  },
];

export default projects;
