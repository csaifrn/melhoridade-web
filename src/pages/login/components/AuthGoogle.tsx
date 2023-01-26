import React, { useEffect, useState } from 'react';
import {getAuth, onAuthStateChanged, signOut, User} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import {useDrawerContext } from '../../../shared/components/MenuLateral/DrawerContext';

const AuthGoogle = () => {

    const auth = getAuth();
    const navigate = useNavigate();

    const {toggleDrawerOpen} = useDrawerContext();
    const [user, setUser] =  useState<User>();
    const [loading, setLoading] = useState(false);
    
    
        const handleLogout = () => {
            signOut(auth).then(() => {
                console.log("Logout")
                navigate("/");
            }).catch((error) => {
                // An error happened.
            });
        }

    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("user is logged in");
                setUser(user);
            } else {
                console.log("user is not logged in");
            }
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return {
        user: user,
        loading: loading,
        logOut: handleLogout,
    }
}

export default AuthGoogle;