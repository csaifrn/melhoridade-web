import { Container } from "./styles";

export function Professor() {
  return (
      <>
    <Container>
            <div className="container-prof">            
                <h2 className="prof-titulo">Professor</h2>

                <ol>
                    <li className="prof-foto"><img src="../images/commands/professora-perfil.png"/></li>
                    <li className="prof-nome"><p>Professora Marina da Silva</p></li>
                </ol>
            </div>
    </Container>
            <hr/>
    </>
  );
}

