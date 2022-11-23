import { Container } from "../../shared/Container";
import { SetaEsquerda } from "../../shared/components/SetaEsquerda";
import { MenuCurso } from "./components/MenuCurso";
import { Professor } from "./components/Professor";
import { Cronograma } from "./components/Cronograma";

export const Curso = () => {
  return (
    <>
      <SetaEsquerda />
      <Container>
        <MenuCurso />
        <hr />
        <Professor
          name="Marina da Silva"
          url="../images/commands/professora-perfil.png"
        />
        <Cronograma dia="Terça/Quinta" hora="07:00 - 07:45" sala="Sala 1" />
      </Container>
    </>
  );
};
