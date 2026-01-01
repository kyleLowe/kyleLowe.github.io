export default interface ProjectDetailsInterface {
  title: string;
  description: string;
  date: string;
  technologies: string[];
  image: string;
}

export interface WorkProjectDetailsInterface extends ProjectDetailsInterface {
  company: string;
  location: string;
  linkToCompany: string;
}

export interface PersonalProjectDetailsInterface
  extends ProjectDetailsInterface {
  githubLink: string;
}

export interface UniversityProjectDetailsInterface
  extends ProjectDetailsInterface {
  course: string;
  githubLink: string;
}

export type ProjectDetails =
  | WorkProjectDetailsInterface
  | PersonalProjectDetailsInterface
  | UniversityProjectDetailsInterface;
