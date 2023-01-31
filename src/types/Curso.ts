import { IPessoa } from "./Pessoa";

export interface ICronograma {
  dia: string;
  hora: string;
  sala: string;
}

export interface ICurso {
  id: string;
  nome: string;
  periodo: string;
  tipo: string;
  professor: string;
  cronograma: ICronograma[];
  participantes: IPessoa[];
}
