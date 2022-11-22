import { Filtro } from "../Filtro";
import { Container } from "./styles";

export function MenuCurso() {
  return (
    <Container>
        <nav className="menu-atv">
          <ol>
            <li>
              <button className="btn extensao-button" type="button">
                Extensão
              </button>
              <button className="btn ensino-button" type="button">
                Ensino
              </button>
            </li>
            <li>
              <Filtro />
            </li>
          </ol>
        </nav>
    </Container>
  );
}