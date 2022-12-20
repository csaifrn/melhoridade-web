export type IAluno = {
  nome: string;
  cpf: string;
  data_de_nascimento: string;
  idade: number;
  responsavel: {
    inscricao: string;
    emergencia: {
      telefone?: string;
      contato?: string;
    };
  };
  atividades: {
    atividade_1: {
      titulo: string;
      tipo: string;
    };
    atividade_2: {
      titulo: string;
      tipo: string;
    };
    atividade_3: {
      titulo: string;
      tipo: string;
    };
    atividade_4: {
      titulo: string;
      tipo: string;
    };
    atividade_5: {
      titulo: string;
      tipo: string;
    };
    atividade_6: {
      titulo: string;
      tipo: string;
    };
    atividade_7: {
      titulo: string;
      tipo: string;
    };
    atividade_8: {
      titulo: string;
      tipo: string;
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
};
