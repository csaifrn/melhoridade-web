import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { Box, InputAdornment, TextField, useTheme, Typography, Button, Link   } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorText from '../../shared/components/ErrorText';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth/";


export const Cadastro = () =>{

    const [registering, setRegistering] = useState<Boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setpassword] = useState<string>('');
    const [confirm, setConfirm] = useState<string>('');
    const [error, setError] = useState<string>('');
    const theme = useTheme();

    const navigate = useNavigate();
    const auth = getAuth();
    
    const signUpWithEmailAndPassword = async () => {
        if (password !== confirm) setError('As senhas devem ser iguais');

        if (error !== '') setError('');

        setRegistering(true);

        await createUserWithEmailAndPassword(auth, email,password)
        .then(result => {
            console.log(result);
            navigate('/login');
        })
        .catch(error => {
            console.log(error);

            if(error.code.includes('auth/weak-password'))
            {
                setError('A senha deve ter ao menos 6 caracteres')
            }
            else if('auth/invalid-email'){
                setError('Insira um email valido')
            }
            else if('auth/email-already-exists'){
                setError('Email já em uso')
            }
            else{
                setError('Impossivel se registrar, tente novamente mais tarde.')
            }

            setRegistering(false);
        })
    }

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
                
                display='flex'
                flexDirection='column'
                fontWeight='bold'
                width='80%'
                maxWidth={theme.spacing(50)}
                
            >
                Email
                    <TextField 
                    id="email"
                    type="email"
                    name='email' 
                    onChange={event => setEmail(event.target.value)}
                    value={email}
                    variant="standard"
                    placeholder='Digite seu email'
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
                margin={3}
            >
            Senha
                <TextField 
                id="password"
                name='password' 
                onChange={event => setpassword(event.target.value)}
                value={password}
                variant="standard"
                type='Password'
                placeholder='Digite sua senha'
                autoComplete='new-password'
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <LockIcon sx={{color:'#c8c8c8'}}/>
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
            Confirme a senha
                <TextField 
                id="confirm"
                name='confirm' 
                onChange={event => setConfirm(event.target.value)}
                value={confirm}
                variant="standard"
                type='password'
                placeholder='Confirme sua senha'
                autoComplete='new-password'
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <LockIcon sx={{color:'#c8c8c8'}}/>
                    </InputAdornment>
                    ),
                }} 
                />
            </Box>
            
            <ErrorText error={error}/>

            <Button 
           
            variant="contained"
            onClick={signUpWithEmailAndPassword}
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
            >Cadastrar
            </Button>

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
