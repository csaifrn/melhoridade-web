import { ICronograma } from "./Cronograma";
import { IProfessor } from "./Professor";

export type ICurso = {
  id: string;
  title: string;
  icon: string;
  professor?: IProfessor;
  cronograma?: ICronograma;
};
