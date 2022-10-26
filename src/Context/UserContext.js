import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import app from '../firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser] = useState();
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth , email, password)
    };


    const signIn =(email,password) =>{
        return signInWithEmailAndPassword(auth , email, password)
    };
    const googleSignIn = (provider)=>{
        return signInWithPopup(auth, provider)
    }

    // const user = {displayName: 'Nayan'};
    const authInfo = {user, createUser, signIn, googleSignIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;