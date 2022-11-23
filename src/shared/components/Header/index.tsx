import { useNavigate } from 'react-router-dom';
import { Container } from './styles'

import imageMenu from '/images/commands/menu-sanduiche.svg';

export const Header = () => {
    const navigate = useNavigate();
    return(
        <Container >
            <div className="menu-icon" >
                <img src="../images/commands/home.svg" alt="" onClick={() => navigate(`/home`)} />
            </div>
            <div className="menu-icon">
                <img src={imageMenu} alt="" />
            </div>
        </Container>
    )
}
