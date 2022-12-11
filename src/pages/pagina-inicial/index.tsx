import { Menu } from "../../shared/components/Menu";
import { Pesquisa } from "../../shared/components";
import { Container } from "../../shared/Container";
import { ListaDeCursos } from "./components/ListaDeCursos";
import { Filtro } from "./components/Filtro";
import { useState } from "react";
import { ICurso } from "../../types/Curso";

export const Home = () => {
  const [listaDeCursos, setlistaDeCursos] = useState<ICurso[]>([]);

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
