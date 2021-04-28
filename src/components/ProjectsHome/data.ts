import { ProjectItem } from './Project';
import { GithubProjectItem } from './GithubProject';
import hydrautronics from './images/hydrautronics.jpg';
import ivdh from './images/ivdh.jpg';
import mmi from './images/mmi.jpg';

// featured projects
export const projects: ProjectItem[] = [
  {
    name: 'Hydrautronics',
    year: 2019,
    image: hydrautronics,
    imageAlt: 'Bekijk de website van Hydrautronics',
    url: 'https://hydrautronics.eu',
  },
  {
    name: 'Ivdh Interieurontwerp',
    year: 2020,
    image: ivdh,
    imageAlt: 'Bekijk de website van Ivdh Interieurontwerp',
    url: 'https://ivdhinterieurontwerp.nl',
  },
  {
    name: 'MMI',
    year: 2019,
    image: mmi,
    imageAlt: 'Bekijk de website over MMI en Maatschappelijke invloeden.',
    url: 'https://wesselvanree.github.io/mmi',
  },
];

// github projects
export const githubProjects: GithubProjectItem[] = [
  {
    name: 'smooth-scrolling',
    url: 'https://github.com/wesselvanree/smooth-scrolling',
    description: "Vloeiend scrollen op webpagina's",
    topics: ['Typescript'],
  },
  {
    name: 'vsc-xcode-theme',
    url: 'https://github.com/wesselvanree/vsc-xcode-theme',
    description: 'Een kleurenthema voor Visual Studio Code.',
    topics: ['json'],
  },
];
