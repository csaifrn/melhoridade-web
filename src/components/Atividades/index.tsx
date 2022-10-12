import { ContainerAtividades } from "./styles";
import { MenuAtividades } from "../MenuAtividades";


export function Atividades() {
  return (
    <ContainerAtividades>
      <MenuAtividades/>
      <section className="container-atv">
        <ul>{/* Lista de atividades */}</ul>
      </section>
    </ContainerAtividades>
  );
}