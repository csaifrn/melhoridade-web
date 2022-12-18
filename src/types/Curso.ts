import { ICronograma } from "./Cronograma";
import { IListaDeAlunos } from "./ListaDeAlunos";
import { IProfessor } from "./Professor";

export type ICurso = {
  id: string;
  title: string;
  icon: string;
  professor?: IProfessor;
  cronograma?: ICronograma;
  participantes?: IListaDeAlunos;
};
