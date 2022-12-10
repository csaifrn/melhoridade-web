import { useParams } from "react-router-dom";
import { Menu } from "../../../../shared/components/Menu";
import { Container } from "./styles";

export const Atividades = () => {
  const { id = "" } = useParams<"id">();

  return (
    <Container>
      <div className="atv-ttl">
        <ol>
          <li className="recolher">
            <img src="" />
          </li>
          <li>
            <h1 className="dados">Atividades</h1>
          </li>
        </ol>
      </div>

      <hr />

      <Menu
        item1="Extensão"
        onclick1={() => {}}
        item2="Ensino"
        onclick2={() => {}}
      />

      <div className="tabela">
        <table className="extensao-table">
          <tr>
            <th>
              <p className="cabecalho">ATIVIDADE</p>
            </th>
            <th>
              <p className="cabecalho">TURMA</p>
            </th>
            <th>
              <p className="cabecalho">PROFESSOR</p>
            </th>
          </tr>
          <tr>
            <td>
              <p className="atividade">DANÇA</p>
            </td>
            <td>
              <p className="turma">TERÇA-FEIRA</p>
              <p className="horario">7:00-7:45</p>
              <p className="sala">SALA 1</p>
            </td>
            <td>
              <p className="professor">GUSTAVO BRITO</p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="atividade">CORAL</p>
            </td>
            <td>
              <p className="turma">TERÇA-FEIRA</p>
              <p className="horario">7:45-8:00</p>
              <p className="sala">SALA 3</p>
            </td>
            <td>
              <p className="professor">JOÃO</p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="atividade">MUSCULAÇÃO</p>
            </td>
            <td>
              <p className="turma">QUARTA-FEIRA</p>
              <p className="horario">7:00-7:45</p>
              <p className="sala">SALA 1</p>
            </td>
            <td>
              <p className="professor">MARIA</p>
            </td>
          </tr>
        </table>
      </div>
    </Container>
  );
};
