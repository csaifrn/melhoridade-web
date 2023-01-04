import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';
import { Box, InputAdornment, TextField, useTheme, Typography, Button, Link   } from '@mui/material';

export const Cadastro = () =>{

    const theme = useTheme();

    return(
        <>
            <Typography 
                variant='h4' 
                fontFamily='Poppins, sans-serif'
                sx={{
                    marginTop:theme.spacing(5),
                }}
                >
                Cadastro
            </Typography>
            <Box 
                marginTop={5}
                marginBottom={3}
                display='flex'
                flexDirection='column'
                fontWeight='bold'
                width='80%'
                maxWidth={theme.spacing(50)}
                
            >
                CPF
                    <TextField 
                    id="standard-basics" 
                    variant="standard"
                    placeholder='Digite seu CPF'
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start" >
                            <PersonIcon sx={{color:'#A0A0A0'}}/>
                        </InputAdornment>
                        ),
                    }} 
                    
                />
            </Box>
            <Box
                display='flex'
                flexDirection='column'
                fontWeight='bold'
                width='80%'
                maxWidth={theme.spacing(50)}
            >
            Senha
                <TextField 
                id="standard-basic" 
                variant="standard"
                type='Password'
                placeholder='Digite sua senha'
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <LockIcon sx={{color:'#c8c8c8'}}/>
                    </InputAdornment>
                    ),
                }} 
                />
            </Box>
            

            <Button 
            variant="contained"
            sx={{
                marginTop: theme.spacing(5),
                backgroundColor:'#161250',
                borderRadius: theme.spacing(100),
                width:'80%',
                maxWidth:theme.spacing(50),
                padding:theme.spacing(1.2),
                '&:hover': {
                    backgroundColor: '#161250',
                },
            }}
            >Cadastrar</Button>

                <Typography
                sx={{
                    marginTop:theme.spacing(20),
                    marginBottom:theme.spacing(10),
                    color:'#A0A0A0',
                    textAlign:'center'
                }}
                >Se já possuir uma conta <br/>
                faça login <Link href='../login' fontWeight='bold' underline="none" sx={{cursor:'pointer', color:'black'}}>aqui</Link>
                </Typography>
        </>
    );
};