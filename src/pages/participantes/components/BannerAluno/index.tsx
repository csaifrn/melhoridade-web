import { useNavigate } from "react-router-dom";
import { IAluno } from "../../../../types/Aluno";
import { Container } from "./styles";

type Props = {
  aluno: IAluno;
};

export const BannerAluno = ({ aluno }: Props) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/alunos/${aluno.nome}`)}>
      <div className="borda">
        <div className="foto">
          <img src={""} />
        </div>
        <div>
          <div className="dados">
            <p>{aluno.nome}</p>
          </div>
          <div className="dados">
            <p>{aluno.cpf}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
