import { Box, useMediaQuery, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import { DrawerProvider, useDrawerContext } from '../MenuLateral/DrawerContext';
import { MenuLateral } from '../MenuLateral';
import { Container } from './styles'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';


export const Header = () => {

    const {toggleDrawerOpen} = useDrawerContext();
    const navigate = useNavigate();
    return(
        <>
            <Container>
                <DrawerProvider>
                    <Box>
                        <IconButton onClick={toggleDrawerOpen}>
                            <MenuRoundedIcon className='menu-icon' sx={{color: 'white'}}/>
                        </IconButton>
                    </Box>
                </DrawerProvider>
            
                <div className="home-icon" >
                    <img src="../images/commands/home.svg" alt="" onClick={() => navigate(`/home`)} />
                </div>
            </Container>
        </>
    )
}
