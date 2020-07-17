/// <reference types="react-scripts" />
interface Project {
  name: string;
  year: number;
  image: string;
  imageAlt: string;
  url: string;
}

interface Projects {
  hydrautronics: Project;
  ivdh: Project;
}

interface ProjectsProps {
  projects: Projects;
}

interface GithubProject {
  name: string;
  url: string;
  description: string;
  topics: string[];
}

interface GithubProjectProps {
  project: GithubProject;
}

interface NavigationLink {
  text: string;
  url: string;
}
