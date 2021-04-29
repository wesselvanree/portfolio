import { ProjectItem } from './Project';
import hydrautronics from './images/hydrautronics.jpg';
import ivdh from './images/ivdh.jpg';

export interface GithubProjectItem {
  name: string;
  url: string;
  description: string;
  topics: string[];
  demoUrl?: string;
}

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
];

// github projects
export const githubProjects: GithubProjectItem[] = [
  {
    name: 'smooth-scrolling',
    url: 'https://github.com/wesselvanree/smooth-scrolling',
    description: 'Smooth scrolling for webpages.',
    topics: ['TypeScript'],
    demoUrl: 'https://wesselvanree.github.io/smooth-scrolling/',
  },
  {
    name: 'vsc-xcode-theme',
    url: 'https://github.com/wesselvanree/vsc-xcode-theme',
    description: 'A color theme for Visual Studio Code.',
    topics: ['json'],
  },
  {
    name: 'js-keyboard-event',
    url: 'https://github.com/wesselvanree/js-keyboard-event',
    description: 'A tool to visualize the javascript keyboard event properties',
    topics: ['JavaScript'],
    demoUrl: 'https://wesselvanree.github.io/js-keyboard-event/',
  },
];
