import { ContainerPesquisa } from "./styles"

export const Pesquisa = () => {
    return(
        <ContainerPesquisa>
            <img className="icon" src="../images/commands/lupa.svg" alt=""/>
            <input type="text" id="buscar" placeholder="Buscar por pessoa"/>
        </ContainerPesquisa>
    )
}