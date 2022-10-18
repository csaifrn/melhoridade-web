import { Container } from './styles'

import imageMenu from '/images/commands/menu-sanduiche.png';

export function Header() {
    return(
        <Container>
            <div className="menu-icon">
                <img src="../images/commands/home.png" alt="" />
            </div>
            <div className="menu-icon">
                <img src={imageMenu} alt="" />
            </div>
        </Container>
    )
}