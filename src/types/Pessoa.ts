export interface IAtividades {
  periodo: string;
  extensao: string[];
  ensino: string[];
  extra: string[];
}

export interface IPessoa {
  id: string;
  nome: string;
  cpf: string;
  data_de_nascimento: string;
  idade: number;
  responsavel: {
    inscricao: string;
    emergencia: {
      telefone: string;
      contato: string;
    };
  };
  documentos: {
    foto: boolean;
    rg: boolean;
    cpf: boolean;
    residencia: boolean;
    atestado: {
      cardio: boolean;
      dermatologico: boolean;
    };
    passaporte_vacinal: boolean;
  };
  historico: IAtividades[];
}
