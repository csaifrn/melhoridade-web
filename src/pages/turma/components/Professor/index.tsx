import { Container } from "./styles";
import { IProfessor } from "../../../../types/Professor";

export function Professor({ title, url }: IProfessor) {
  return (
    <>
      <Container>
        <h2 className="prof-titulo">Professor</h2>
        <div className="container-prof">
          <ol>
            <li className="prof-foto">
              <img src={url} />
            </li>
            <li className="prof-nome">
              <p>{title}</p>
            </li>
          </ol>
        </div>
      </Container>
      <hr />
    </>
  );
}
