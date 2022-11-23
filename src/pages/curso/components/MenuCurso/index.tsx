import { Container } from "./styles";

export const MenuCurso = () => {
  return (
    <>
      <Container>
        <nav className="menu-curso">
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
