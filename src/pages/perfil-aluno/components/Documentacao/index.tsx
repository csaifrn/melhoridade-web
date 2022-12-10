import { Container } from "./styles";

export const Documentacao = () => {
  return (
    <Container>
      <div className="documentacao-ttl">
        <ol>
          <li className="recolher">
            <img src="" />
          </li>
          <li>
            <h1 className="dados">Documentação</h1>
          </li>
        </ol>
      </div>

      <hr/>
      
      <table className="documentos-table">
        <tr>
          <td className="situacao">
            <img src="" />
          </td>
          <td>
            <p className="documento">FOTO 3X4</p>
          </td>
        </tr>
        <tr>
          <td className="situacao">
            <img src="" />
          </td>
          <td>
            <p className="documento">CÓPIA DO RG (FRENTE)</p>
          </td>
        </tr>
        <tr>
          <td className="situacao">
            <img src="" />
          </td>
          <td>
            <p className="documento">CÓPIA DO RG (VERSO)</p>
          </td>
        </tr>
        <tr>
          <td className="situacao">
            <img src="" />
          </td>
          <td>
            <p className="documento">COMPROVANTE DE RESIDÊNCIA</p>
          </td>
        </tr>
        <tr>
          <td className="situacao">
            <img src="" />
          </td>
          <td>
            <p className="documento">PASSAPORTE VACINAL</p>
          </td>
        </tr>
        <tr>
          <td className="situacao">
            <img src="" />
          </td>
          <td>
            <p className="documento">ATESTADO CARDIOLOGISTA</p>
          </td>
        </tr>
        <tr>
          <td className="situacao">
            <img src="" />
          </td>
          <td>
            <p className="documento">ATESTADO DERMATOLOGISTA</p>
          </td>
        </tr>
      </table>
    </Container>
  );
};
