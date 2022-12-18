import { IListaDeCursos } from "../../../../types/ListaDeCursos";
import { BannerCurso } from "../BannerCurso";
import { Container } from "./styles";

export const ListaDeCursos = ({ listaDeCursos }: IListaDeCursos) => {
  return (
    <Container>
      <ul>
        {listaDeCursos.map((curso) => (
          <BannerCurso key={curso.id} curso={curso} />
        ))}
      </ul>
    </Container>
  );
};
