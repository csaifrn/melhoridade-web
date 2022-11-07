import { Container } from "../../shared/Container";
import { SetaEsquerda } from "../../shared/components/SetaEsquerda";
import { MenuTurma } from "./components/MenuTurma";
import { Professor } from "./components/Professor";
import { Cronograma } from "./components/Cronograma";

export const Turma = () => {
  return (
    <>
      <SetaEsquerda />
      <Container>
        <MenuTurma />
        <hr />
        <Professor
          title="Marina da Silva"
          url="../images/commands/professora-perfil.png"
        />
        <Cronograma dia="Terça/Quinta" hora="07:00 - 07:45" sala="Sala 1" />
      </Container>
    </>
  );
};
