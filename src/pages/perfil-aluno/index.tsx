import { SetaEsquerda } from "../../shared/components";
import { Container } from "../../shared/Container";
import { Atividades } from "./components/Atividades";
import { DadosPessoais } from "./components/DadosPessoais";
import { Documentacao } from "./components/Documentacao";

export const PerfilAluno = () => {
  return (
    <>
      <SetaEsquerda />
      <Container>
        <DadosPessoais />
      </Container>

      <Container>
        <Atividades />
      </Container>

      <Container>
        <Documentacao />
      </Container>
    </>
  );
};
