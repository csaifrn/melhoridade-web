import { useState } from "react";
import { Pesquisa } from "../../shared/components";
import { Container } from "../../shared/Container";
import { ICurso } from "../../types/Curso";
import { ListaDeCursos } from "./components/ListaDeCursos";
import { MenuCurso } from "./components/MenuCurso";

export const Home = () => {
  const [listaDeCursos, setListaDeCursos] = useState<ICurso[]>([
    {
      id: "1",
      title: "Musculação 1",
      icon: "",
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
    {
      id: "4",
      title: "Musculação 4",
      icon: "",
    },
    {
      id: "5",
      title: "Musculação 5",
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
