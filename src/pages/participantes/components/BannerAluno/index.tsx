import { useNavigate } from "react-router-dom";
import { IAluno } from "../../../../types/Aluno";
import { Container } from "./styles";

type Props = {
  aluno: IAluno;
};

export function BannerAluno({ aluno }: Props) {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/curso/${aluno.id}`)}>
      {/* Banner */}
    </Container>
  );
}
