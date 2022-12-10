import { useState } from "react";
import { Pesquisa } from "../../shared/components";
import { Container } from "../../shared/Container";
import { ICurso } from "../../types/Curso";
import { ListaDeCursos } from "./components/ListaDeCursos";
import { Filtro } from "./components/Filtro";
import { Menu } from "../../shared/components/Menu";

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
        <ol className="menu-atv">
          <li>
            <Menu
              item1="Extensão"
              onclick1={() => {}}
              item2="Ensino"
              onclick2={() => {}}
            />
          </li>
          <li>
            <Filtro />
          </li>
        </ol>
        <ListaDeCursos listaDeCursos={listaDeCursos} />
      </Container>
    </>
  );
};
