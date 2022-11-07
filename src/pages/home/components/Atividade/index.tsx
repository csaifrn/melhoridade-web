import { useNavigate } from "react-router-dom";
import { IAtividade } from "../../../../types/Atividade";
import { Container } from "./styles";

type Props = {
  atv: IAtividade;
};

export function Atividade({ atv }: Props) {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/turma/${atv.id}`)}>
      <div>
        <img src={atv.icon} />
      </div>
      <p>{atv.title}</p>
    </Container>
  );
}
