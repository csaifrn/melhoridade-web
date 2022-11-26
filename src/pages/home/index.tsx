import { useState } from "react";
import { Pesquisa } from "../../shared/components";
import { Container } from "../../shared/Container";
import { ICurso } from "../../types/Curso";
import { IListaDeAlunos } from "../../types/ListaDeAlunos";
import { ListaDeCursos } from "./components/ListaDeCursos";
import { MenuCurso } from "./components/MenuCurso";

export const Home = () => {
  const [listaDeCursos, setListaDeCursos] = useState<ICurso[]>([
    {
      id: "1",
      title: "Musculação 1",
      icon: "",
      participantes: {
        listaDeAlunos: [
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
        ],
      },
    },
    {
      id: "2",
      title: "Musculação 2",
      icon: "",
    },
    {
      id: "3",
      title: "Musculação 3",
      icon: "",
    },
  ]);

  return (
    <>
      <Pesquisa />
      <Container>
        <MenuCurso />
        <ListaDeCursos listaDeCursos={listaDeCursos} />
      </Container>
    </>
  );
};
