import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { Box, InputAdornment, TextField, useTheme, Typography, Button, Link   } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, RouteComponentProps } from 'react-router-dom';
import ErrorText from '../../../shared/components/ErrorText';
import { confirmPasswordReset, getAuth, verifyPasswordResetCode } from "firebase/auth/";
import  queryString  from 'querystring';

export const ResetPassword:React.FunctionComponent<RouteComponentProps> = props =>{

    const [verifying, setVerifying] = useState<boolean>(true);
    const [verified, setVerified] = useState<boolean>(false);
    const [changing, setChanging] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [confirm, setConfirm] = useState<string>('');
    const [oobCode, setOobCode] = useState<string>('');
    const [error, setError] = useState<string>('');

    const theme = useTheme();

    const navigate = useNavigate();
    const auth = getAuth();

        useEffect(() => {
            console.log('pegando o codigo')

            let stringParams = queryString.parse(props.location.search)

            if(stringParams){
                let oobCode = stringParams.oobCode as string
                if (oobCode){
                    console.log('sem codigo')

                }else{
                    console.log('impossivel achar o codigo')
                    setVerified(false)
                    setVerifying(false)
                }
            }else{
                console.log('impossivel achar o codigo')
                    setVerified(false)
                    setVerifying(false)
            }
        },[]);

        const verifyPasswordResetLink = (_oobCode: string) => {
            verifyPasswordResetCode(auth, _oobCode)
            .then(result => {
                console.log(result);
                setOobCode(_oobCode);
                setVerified(true);
                setVerifying(false);
            })
            .catch(error => {
                console.log(error);
                setVerified(false);
                setVerifying(false);
            });
        }

    const passwordResetRequest = async () => {
        if (password !== confirm) setError('As senhas devem ser iguais');

        if (error !== '') setError('');

        setChanging(true);

        confirmPasswordReset(auth, oobCode, password)
        .then(() => {
            navigate('/login')
        }).catch(() => {
            console.log(error)
            setError(error);
            setChanging(false)
        })
    }

    return(
        <>
            {verifying ?
                console.log('nada n')
            :
                <>
                    {verified ?
                        <>
                            <p>Please enter a strong password.</p>
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
                                onChange={event => setPassword(event.target.value)}
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
                        onClick={passwordResetRequest}
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
                        </>
                    :
                        <p>Invalid link.</p>
                    }
                </>
            }
        </>
    );
}
