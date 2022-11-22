import { IListaDeCursos } from "../../../../types/ListaDeCursos";
import { Curso } from "../Curso";
import { Container } from "./styles";

export const ListaDeCursos = ({ listaDeCursos }: IListaDeCursos) => {
  return (
    <Container>
      <ul>
        {listaDeCursos.map((curso) => (
          <Curso key={curso.id} curso={curso} />
        ))}
      </ul>
    </Container>
  );
};
