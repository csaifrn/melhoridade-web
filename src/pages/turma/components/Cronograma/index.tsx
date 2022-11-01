import { Container } from "./styles";

export function Cronograma() {
  return (
      <>
    <Container>
    <div className="container-cronograma">
                <h2 className="cronograma-titulo">Cronograma</h2>

                <table className="cronograma-table">
                    <tr>
                        <th><p className="cabecalho">Horário</p></th>
                        <th><p className="cabecalho">Dias e Local</p></th>
                    </tr>
                    <tr>
                        <td><p className="horario">07:00 - 07:45</p></td>
                        <td><p className="data">Terca e Quinta</p><p className="sala">SALA 1</p></td>
                    </tr>
                </table>
            </div>
    </Container>
    </>
  );
}