import { useState } from "react";
import { Pesquisa } from "../../shared/components";
import { Container } from "../../shared/Container";
import { IAtividade } from "../../types/Atividade";
import { ListaAtv } from "./components/ListaAtv";
import { MenuAtv } from "./components/MenuAtv";

export const Home = () => {
  const [listAtividades, setListAtividades] = useState<IAtividade[]>([
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
        <MenuAtv />
        <ListaAtv listaAtv={listAtividades} />
      </Container>
    </>
  );
};
