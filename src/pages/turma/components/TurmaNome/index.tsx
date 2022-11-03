import { Container } from "./styles";
import {ITurmaNome} from '../../../../types/TurmaNome'
export function TurmaNome({title} : ITurmaNome) {
  return (
      <>
    <Container>
        <div className="titulo-atv">
                <ol>
                    <li><h1>{title}</h1></li>
                    <li className="editar"><img src="../images/commands/editar.png"/></li>
                </ol>
            </div>
    </Container>
            <hr/>
    </>
  );
}