export default interface ProjectDetailsInterface {
  title: string;
  description: string;
  date: string;
  location: string;
  githubLink?: string;
  technologies?: string[];
  image?: string;
  learnings?: string[];
}
