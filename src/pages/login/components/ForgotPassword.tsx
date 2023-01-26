import React, { useState } from 'react';
import ErrorText from '../../../shared/components/ErrorText';
import {getAuth, sendPasswordResetEmail} from 'firebase/auth'
import { Box, Input, TextField, useTheme, Typography, Button, Link   } from '@mui/material';



const ForgotPasswordPage = () => {
    const [sending, setSending] = useState<boolean>(false);
    const [sent, setSent] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');
    const theme = useTheme()
    const auth = getAuth();


    const resetPasswordRequest = () => {
        if (error !== '') setError('');

        setSending(true);

        sendPasswordResetEmail(auth,email)
        .then(() => {
            console.log('Email sent.');
            setSent(true);
            setSending(false);
        })
        .catch(error => {
            console.log(error);
            setError(error.message);
            setSending(false);
        });
    }

    return (
        <>
        {sent ?
                <p>Um link foi enviado ao seu email</p>
            :
            <>
                <Box 
                        marginTop={5}
                        marginBottom={3}
                        display='flex'
                        flexDirection='column'
                        fontWeight='bold'
                        width='80%'
                        maxWidth={theme.spacing(50)}
                        
                    >
                        Email
                            <TextField 
                            id="standard-basics" 
                            variant="standard"
                            onChange={event => setEmail(event.target.value)}
                            placeholder='Digite seu Email'
                            type='email'
                            name='email'
                            value={email}
                            // InputProps={{
                            //     startAdornment: (
                            //     <InputAdornment position="start" >
                            //         <PersonIcon sx={{color:'#A0A0A0'}}/>
                            //     </InputAdornment>
                            //     ),
                            // }} 
                            
                        />
                    </Box>
                <Button 
                    variant="contained"
                    onClick={resetPasswordRequest}
                    sx={{
                        marginTop: theme.spacing(3),
                        backgroundColor:'#161250',
                        borderRadius: theme.spacing(100),
                        width:'80%',
                        maxWidth:theme.spacing(50),
                        padding:theme.spacing(1.2),
                        '&:hover': {
                            backgroundColor: '#161250',
                        },
                    }}
                    >Enviar link</Button>
                </>
        }
        </>
    )
}

export default ForgotPasswordPage;

