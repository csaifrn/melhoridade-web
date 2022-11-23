import { useState } from "react";
import { Pesquisa, SetaEsquerda } from "../../shared/components";
import { MenuCurso } from "../../shared/components/MenuCurso";
import { Container } from "../../shared/Container";
import { IAluno } from "../../types/Aluno";
import { ListaDeAlunos } from "./components/ListaDeAlunos";

export const Participantes = () => {
  const [listaDeAlunos, setlistaDeAlunos] = useState<IAluno[]>([
    {
      id: "1",
      name: "Adeilda",
      cpf: "123.456.789-00",
      url: "",
    },
    {
      id: "2",
      name: "Adeilda",
      cpf: "123.456.789-00",
      url: "",
    },
    {
      id: "2",
      name: "Adeilda",
      cpf: "123.456.789-00",
      url: "",
    },
  ]);

  return (
    <>
      <SetaEsquerda />
      <Pesquisa />
      <Container>
        <MenuCurso />
        <hr />
        <ListaDeAlunos listaDeAlunos={listaDeAlunos} />
      </Container>
    </>
  );
};
