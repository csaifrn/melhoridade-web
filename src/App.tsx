import React from "react";
import { Header } from "./components/Header";
import { Pesquisa } from "./components/PesquisaInput";
import { Container } from "./components/Container";
import { Atividades } from "./components/Atividades";

const App = () => {
  return (
    <div className="App container">
      <Header />
      <Pesquisa />
      <Container>
        <Atividades />
      </Container>
    </div>
  );
};

export default App;
