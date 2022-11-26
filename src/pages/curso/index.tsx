import { Container } from "../../shared/Container";
import { SetaEsquerda } from "../../shared/components/SetaEsquerda";
import { MenuCurso } from "../../shared/components/MenuCurso";
import { Professor } from "./components/Professor";
import { Cronograma } from "./components/Cronograma";
import { useParams } from "react-router-dom";

export const Curso = () => {
  // pegar o id da url e retornar o curso correspondente
  // o curso terá o titulo, o professor, o cronograma

  const { id = "" } = useParams<"id">();

  return (
    <>
      <SetaEsquerda />
      <Container>
        <MenuCurso />
        <hr />
        <Professor
          id="1"
          name="Marina da Silva"
          url="../images/commands/professora-perfil.png"
        />
        <Cronograma dia="Terça/Quinta" hora="07:00 - 07:45" sala="Sala 1" />
      </Container>
    </>
  );
};
