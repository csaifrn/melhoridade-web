import { IListaDeAlunos } from "../../../../types/ListaDeAlunos";
import { BannerAluno } from "../BannerAluno";
import { Container } from "./styles";

export const ListaDeAlunos = ({ listaDeAlunos }: IListaDeAlunos) => {
  return (
    <Container>
      <ul>
        {listaDeAlunos.map((aluno) => (
          <BannerAluno key={aluno.cpf} aluno={aluno} />
        ))}
      </ul>
    </Container>
  );
};
