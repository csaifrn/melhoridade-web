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
              <p className="btn dados-button">Dados gerais</p>
            </li>
            <li>
              <p
                className="btn participantes-button"
                onClick={() => navigate(`/participantes/${id}`)}
              >
                Participantes
              </p>
            </li>
          </ol>
        </nav>
      </Container>
    </>
  );
};
