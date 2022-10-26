import { useState } from "react";
import { Pesquisa } from "../../shared/components";
import { Container } from "../../shared/Container";
import { IAtividade } from "../../types/Atividade";
import { ContainerAtv } from "./components/ContainerAtv";

export const Home = () => {
  const [listAtividades, setListAtividades] = useState<IAtividade[]>([
    {
      id: "1",
      title: "Musculação 1",
      url: "",
    },
    {
      id: "2",
      title: "Musculação 2",
      url: "",
    },
    {
      id: "3",
      title: "Musculação 3",
      url: "",
    },
    {
      id: "4",
      title: "Musculação 4",
      url: "",
    },
    {
      id: "5",
      title: "Musculação 5",
      url: "",
    },
  ]);

  return (
    <>
      <Pesquisa />
      <Container>
        <ContainerAtv listaAtv={listAtividades} />
      </Container>
    </>
  );
};
