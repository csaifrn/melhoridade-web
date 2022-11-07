import { Container } from "./styles";

export function MenuTurma() {
  return (
    <>
      <Container>
        <nav className="menu-turma">
          <ol>
            <li>
              <button className="btn dados-button" type="button">
                Dados gerais
              </button>
            </li>
            <li>
              <button className="btn participantes-button" type="button">
                Participantes
              </button>
            </li>
          </ol>
        </nav>
      </Container>
    </>
  );
}
