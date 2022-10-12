import { Container } from './styles'

export function Header() {
    return(
        <Container>
            <div className="menu-icon">
                <img src="../images/commands/home.png" alt="" />
            </div>
            <div className="menu-icon">
                <img src="../images/commands/menu-sanduiche.png" alt="" />
            </div>
        </Container>
    )
}