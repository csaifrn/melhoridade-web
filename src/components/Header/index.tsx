import { ContainerHeader } from './styles'

export function Header() {
    return(
        <ContainerHeader>
            <div className="menu-icon">
                <img src="../images/commands/home.png" alt="" />
            </div>
            <div className="menu-icon">
                <img src="../images/commands/menu-sanduiche.png" alt="" />
            </div>
        </ContainerHeader>
    )
}