import { useState } from "react";
import { useParams } from "react-router-dom";
import { Pesquisa, SetaEsquerda } from "../../shared/components";
import { MenuCurso } from "../../shared/components/MenuCurso";
import { Container } from "../../shared/Container";
import { IAluno } from "../../types/Aluno";
import { ListaDeAlunos } from "./components/ListaDeAlunos";

export const Participantes = () => {
  // pegar o id da url e retornar o curso correspondente
  // o curso terá a lista de participantes

  const { id = "" } = useParams<"id">();

  const [listaDeAlunos, setlistaDeAlunos] = useState<IAluno[]>([]);

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
