import React from 'react';
import { Auth, getAuth } from '@firebase/auth';
import { children } from '../../../types/Children';
import {Navigate } from "react-router-dom";

const AuthRoute: React.FunctionComponent<children> = props => {
    const { children } = props;
    
    if (!getAuth().currentUser) 
        return <Navigate to='/login'/>;
    

    return (
        
        <>{children}</>
    );
}

export default AuthRoute;