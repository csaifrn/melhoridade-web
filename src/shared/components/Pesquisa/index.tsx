import { ContainerPesquisa } from "./styles";
import lupa from "/images/commands/lupa.svg";

export const Pesquisa = () => {
  return (
    <ContainerPesquisa>
      <img className="icon" src={lupa} alt="" />
      <input type="text" id="buscar" placeholder="Buscar por pessoa" />
    </ContainerPesquisa>
  );
};
