import { useParams } from "react-router-dom";
import { Container } from "./styles";

export const DadosPessoais = () => {
  // pegar o id da url e retornar o aluno correspondente
  // o aluno terá as informações

  const { id = "" } = useParams<"id">();

  return (
    <Container>
      <div className="container-dados">
        <ol>
          <li className="recolher">
            <img src="" />
          </li>
          <li>
            <h1 className="dados">Dados pessoais</h1>
          </li>
        </ol>
      </div>

      <hr/>

      <div className="container-idoso">
        <ol>
          <li className="foto-idoso">
            <img src="" />
          </li>
          <li className="nome-idoso">
            <p>Adeilda Conceição Gomes da Silva</p>
          </li>
        </ol>
      </div>

      <div className="container-infoidoso">
        <ul className="infoidoso">
          <li className="dado-idoso">
            <p>CPF: 123.456.789-00</p>
          </li>
          <li className="dado-idoso">
            <p>Idade: 61</p>
          </li>
          <li className="dado-idoso">
            <p>Data de Nascimento: 06/12/1960</p>
          </li>
          <li className="dado-idoso">
            <p>Tel. Contato: (84) 9 9999-9999</p>
          </li>

          <hr/>

          <h2 className="contato-emergencia">Contato de Emergência</h2>
          <li className="dado-idoso">
            <p>Nome: Kamila</p>
          </li>
          <li className="dado-idoso">
            <p>Vínculo: Filha</p>
          </li>
          <li className="dado-idoso">
            <p>Tel. Contato: (84) 8 8888-8888</p>
          </li>
        </ul>
      </div>
    </Container>
  );
};
