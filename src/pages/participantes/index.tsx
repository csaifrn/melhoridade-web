import { useState } from "react";
import { Pesquisa, SetaEsquerda } from "../../shared/components";
import { Container } from "../../shared/Container";
import { IAluno } from "../../types/Aluno";
import { ListaDeAlunos } from "./components/ListaDeAlunos";

export const Participantes = () => {
  const [listaDeAlunos, setlistaDeAlunos] = useState<IAluno[]>([]);
  return (
    <>
      <SetaEsquerda />
      <Pesquisa />
      <Container>
        <ListaDeAlunos listaDeAlunos={listaDeAlunos} />
      </Container>
    </>
  );
};
