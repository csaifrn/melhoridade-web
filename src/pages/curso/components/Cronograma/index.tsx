import { ICronograma } from "../../../../types/Cronograma";
import { Container } from "./styles";

export const Cronograma = ({hora,dia,sala}: ICronograma) => {
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
                        <td><p className="horario">{hora}</p></td>
                        <td><p className="data">{dia}</p><p className="sala">{sala}</p></td>
                    </tr>
                </table>
            </div>
    </Container>
    </>
  );
}