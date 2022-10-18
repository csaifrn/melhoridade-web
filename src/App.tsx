import { useState } from "react";
import { Header } from "./components/Header";
import { Pesquisa } from "./components/PesquisaInput";
import { Container } from "./style";
import { ContainerAtv } from "./components/ContainerAtv";
import { IAtividade } from "./types/Atividade";

const App = () => {
  const [listAtividades, setListAtividades] = useState<IAtividade[]>([
    {
      id: '1',
      title: 'Musculação 1',
      url: ''
    },
    {
      id: '2',
      title: 'Musculação 2',
      url: ''
    },
    {
      id: '3',
      title: 'Musculação 3',
      url: ''
    },
    {
      id: '4',
      title: 'Musculação 4',
      url: ''
    },
    {
      id: '5',
      title: 'Musculação 5',
      url: ''
    }
  ]);

  return (
    <div className="App container">
      <Header />
      <Pesquisa />
      <Container>
        <ContainerAtv listaAtv={listAtividades}/>
      </Container>
    </div>
  );
};

export default App;