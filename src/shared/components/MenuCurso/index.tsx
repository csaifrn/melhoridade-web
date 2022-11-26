import { useNavigate, useParams } from "react-router-dom";
import { Container } from "./styles";

export const MenuCurso = () => {
  const { id = "" } = useParams<"id">();

  const navigate = useNavigate();

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
              <button
                className="btn participantes-button"
                type="button"
                onClick={() => navigate(`/participantes/${id}`)}
              >
                Participantes
              </button>
            </li>
          </ol>
        </nav>
      </Container>
    </>
  );
};
