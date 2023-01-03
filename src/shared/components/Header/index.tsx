import { Box, useMediaQuery, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import { Container } from './styles'
import { DrawerProvider, useDrawerContext } from '../MenuLateral/DrawerContext';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';


export const Header = () => {

    const {toggleDrawerOpen} = useDrawerContext();
    const navigate = useNavigate();
    return(
        <>
            <Container>
            
                <div className="home-icon" >
                    <img src="../images/commands/home.svg" alt="" onClick={() => navigate(`/home`)} />
                </div>
                <DrawerProvider>
                    <Box className='menu-icon-box'>
                        <IconButton onClick={toggleDrawerOpen}>
                            <MenuRoundedIcon className='menu-icon' sx={{color: 'white'}} fontSize='large'/>
                        </IconButton>
                    </Box>
                </DrawerProvider>
            </Container>
        </>
    )
}
