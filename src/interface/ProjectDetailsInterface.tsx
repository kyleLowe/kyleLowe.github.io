export default interface ProjectDetailsInterface {
  title: string;
  description: string;
  date: string;
  technologies: string[];
  image: string;
  type: "work" | "personal" | "university";
}

export interface WorkProjectDetailsInterface extends ProjectDetailsInterface {
  type: "work";
  company: string;
  location: string;
  linkToCompany: string;
}

export interface PersonalProjectDetailsInterface
  extends ProjectDetailsInterface {
  type: "personal";
  githubLink: string;
}

export interface UniversityProjectDetailsInterface
  extends ProjectDetailsInterface {
  type: "university";
  course: string;
  githubLink: string;
}

export type ProjectDetails =
  | WorkProjectDetailsInterface
  | PersonalProjectDetailsInterface
  | UniversityProjectDetailsInterface;
