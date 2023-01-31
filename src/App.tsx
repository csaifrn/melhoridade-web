import {
  child,
  get,
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
  update,
} from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "./services/firebase";
import { ICurso } from "./types/Curso";
import { IPessoa } from "./types/Pessoa";

export const App = () => {
  const pessoasRef = ref(database, `pessoas/`);
  const cursosRef = ref(database, `cursos/`);

  const [pessoas, setPessoas] = useState<IPessoa[]>([]);
  const [cursos, setCursos] = useState<ICurso[]>([]);

  // getPessoas
  onValue(
    pessoasRef,
    (snapshot) => {
      setPessoas(snapshot.val());
    },
    {
      onlyOnce: true,
    }
  );

  // // getPessoaByKey
  // const getPessoaByKey = (key: string) => {
  //   const newPessoaRef = ref(database, `pessoas/${key}`);

  //   onValue(newPessoaRef, (snapshot) => {
  //     setPessoaByKey(snapshot.val());
  //   });
  // };

  // createPessoa
  const createPessoa = (props: IPessoa) => {
    const newPessoaKey = push(child(ref(database), "cursos")).key;

    set(ref(database, "pessoas/" + newPessoaKey), {
      id: newPessoaKey,
      nome: props.nome,
      cpf: props.cpf,
      data_de_nascimento: props.data_de_nascimento,
      idade: props.idade,
      responsavel: props.responsavel,
      documentos: props.documentos,
      historico: props.historico,
    });
  };

  // updatePessoa
  const updatePessoa = (props: IPessoa) => {
    update(ref(database, "pessoas/" + props.id), {
      nome: props.nome,
      cpf: props.cpf,
      data_de_nascimento: props.data_de_nascimento,
      idade: props.idade,
      responsavel: props.responsavel,
      documentos: props.documentos,
      historico: props.historico,
    });
  };

  // deletePessoa
  const deletePessoa = (key: string) => {
    remove(ref(database, "pessoas/" + key));
  };

  // addPessoaEmCurso
  const addPessoaEmCurso = (pessoakey: string, cursoKey: string) => {
    let pessoa: IPessoa = {
      id: "",
      nome: "",
      cpf: "",
      data_de_nascimento: "",
      idade: 0,
      responsavel: {
        inscricao: "",
        emergencia: { telefone: "", contato: "" },
      },
      documentos: {
        foto: false,
        rg: false,
        cpf: false,
        residencia: false,
        atestado: { cardio: false, dermatologico: false },
        passaporte_vacinal: false,
      },
      historico: [],
    };
    let curso: ICurso = {
      id: "",
      nome: "",
      periodo: "",
      tipo: "",
      professor: "",
      cronograma: [],
      participantes: [],
    };

    const dbRef = ref(getDatabase());

    get(child(dbRef, `cursos/${cursoKey}`)).then((snapshot) => {
      curso = snapshot.val();
    });

    get(child(dbRef, `pessoas/${pessoakey}`))
      .then((snapshot) => {
        pessoa = snapshot.val();
      })
      .then(() => {
        const updates: { [index: string]: any } = {};

        updates[
          "/pessoas/" +
            pessoakey +
            "/historico/" +
            curso.periodo +
            "/" +
            curso.tipo +
            "/" +
            curso.nome
        ] = curso.id;
        updates["/cursos/" + cursoKey + "/participantes/" + pessoa.id] =
          pessoa.cpf;

        update(ref(database), updates);
      });
  };

  // getCursos
  onValue(
    cursosRef,
    (snapshot) => {
      setCursos(snapshot.val());
    },
    {
      onlyOnce: true,
    }
  );

  // // getCursoByKey
  // const getCursoByKey = (key: string) => {
  //   const newRef = ref(database, `cursos/${key}`);

  //   onValue(newRef, (snapshot) => {
  //     setCursoByKey(snapshot.val());
  //   });
  // };

  // createCurso
  const createCurso = (props: ICurso) => {
    const newCursoKey = push(child(ref(database), "cursos")).key;

    set(ref(database, "cursos/" + newCursoKey), {
      id: newCursoKey,
      nome: props.nome,
      periodo: props.periodo,
      tipo: props.tipo,
      professor: props.professor,
      cronograma: props.cronograma,
    });
  };

  // updateCurso
  const updateCurso = (props: ICurso) => {
    update(ref(database, "cursos/" + props.id), {
      nome: props.nome,
      periodo: props.periodo,
      tipo: props.tipo,
      professor: props.professor,
      cronograma: props.cronograma,
    });
  };

  // deleteCurso
  const deleteCurso = (key: string) => {
    remove(ref(database, "cursos/" + key));
  };

  const cursoCreate = {
    id: "",
    nome: "teste2",
    periodo: "2023",
    tipo: "Ensino",
    professor: "João",
    cronograma: [
      {
        dia: "Segunda",
        hora: "7:00",
        sala: "5",
      },
      {
        dia: "Segunda",
        hora: "7:45",
        sala: "5",
      },
    ],
    participantes: [],
  };

  const cursoUpdate = {
    id: "",
    nome: "teste3",
    periodo: "2023",
    tipo: "Ensino",
    professor: "João",
    cronograma: [
      {
        dia: "Segunda",
        hora: "7:00",
        sala: "5",
      },
      {
        dia: "Segunda",
        hora: "7:45",
        sala: "5",
      },
    ],
    participantes: [],
  };

  const cursoDelete = "";

  const handleCreateCurso = () => {
    createCurso(cursoCreate);
  };

  const handleUpdateCurso = () => {
    updateCurso(cursoUpdate);
  };

  const handleDeleteCurso = () => {
    deleteCurso(cursoDelete);
  };

  const pessoaCreate = {
    id: "",
    nome: "test2",
    cpf: "123",
    data_de_nascimento: "test",
    idade: 100,
    responsavel: {
      inscricao: "test",
      emergencia: { telefone: "test", contato: "test" },
    },
    documentos: {
      foto: true,
      rg: true,
      cpf: true,
      residencia: true,
      atestado: { cardio: true, dermatologico: true },
      passaporte_vacinal: false,
    },
    historico: [],
  };

  const pessoaUpdate = {
    id: "",
    nome: "tes3",
    cpf: "321",
    data_de_nascimento: "test",
    idade: 100,
    responsavel: {
      inscricao: "test",
      emergencia: { telefone: "test", contato: "test" },
    },
    documentos: {
      foto: false,
      rg: false,
      cpf: false,
      residencia: false,
      atestado: { cardio: false, dermatologico: false },
      passaporte_vacinal: false,
    },
    historico: [],
  };

  const pessoaDelete = "";

  const handleCreatePessoa = () => {
    createPessoa(pessoaCreate);
  };

  const handleUpdatePessoa = () => {
    updatePessoa(pessoaUpdate);
  };

  const handleDeletePessoa = () => {
    deletePessoa(pessoaDelete);
  };

  const pessoaKey = "-NL8VLiBLdJtK_kzGfcK";
  const cursoKey = "-NL8UVdE16txXJuRa9UW";
  const handleAddPessoaEmCurso = async () => {
    addPessoaEmCurso(pessoaKey, cursoKey);
  };

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={handleCreateCurso}>Create Curso</button>
      <br />
      <br />
      <button onClick={handleUpdateCurso}>Update Curso</button>
      <br />
      <br />
      <button onClick={handleDeleteCurso}>Delete Curso</button>
      <br />
      <br />
      <button onClick={handleCreatePessoa}>Create Pessoa</button>
      <br />
      <br />
      <button onClick={handleUpdatePessoa}>Update Pessoa</button>
      <br />
      <br />
      <button onClick={handleDeletePessoa}>Delete Pessoa</button>
      <br />
      <br />
      <button onClick={handleAddPessoaEmCurso}>Add Pessoa Em Curso</button>
    </>
  );
};
