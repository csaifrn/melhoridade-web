import { useNavigate, useParams } from "react-router-dom";
import { Container } from "../../shared/Container";
import { SetaEsquerda } from "../../shared/components/SetaEsquerda";
import { Menu } from "../../shared/components/Menu";
import { Professor } from "./components/Professor";
import { Cronograma } from "./components/Cronograma";

export const Curso = () => {
  // pegar o id da url e retornar o curso correspondente
  // o curso terá o titulo, o professor, o cronograma

  const { id = "" } = useParams<"id">();

  const navigate = useNavigate();

  return (
    <>
      <SetaEsquerda />
      <Container>
        <Menu
          item1="Dados gerais"
          onclick1={() => {}}
          item2="Participantes"
          onclick2={() => navigate(`/cursos/${id}/participantes`)}
        />
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
