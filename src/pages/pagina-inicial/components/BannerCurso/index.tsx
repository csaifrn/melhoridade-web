import { useNavigate } from "react-router-dom";
import { ICurso } from "../../../../types/Curso";
import { Container } from "./styles";

type Props = {
  curso: ICurso;
};

export const BannerCurso = ({ curso }: Props) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/cursos/${curso.id}`)}>
      <div>
        <img src={curso.icon} />
      </div>
      <p>{curso.title}</p>
    </Container>
  );
}
