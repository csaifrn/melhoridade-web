import { ContainerMenuAtv } from "./styles";

export function MenuAtividades() {
  return (
    <ContainerMenuAtv>
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
              <button className="filtro-button">
                Filtro
                <img
                  className="seta-baixo"
                  src="../images/commands/seta-baixo.png"
                  alt=""
                />
              </button>
            </li>
          </ol>
        </nav>
    </ContainerMenuAtv>
  );
}