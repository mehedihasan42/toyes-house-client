import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import app from '../../Firebase/Firebase.config';

export const AuthContext = createContext(null);


const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleGoogleAuthProvider = ()=>{
       return signInWithPopup(auth,provider)
    }


    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,loggedUser =>{
        //    console.log('manage user on auth state change',loggedUser)
           setUser(loggedUser)
           setLoading(false)
        })
        return ()=>{
           unsubscribe();
        }
    },[])
 
    const authInfo = {
       user,
       loading,
       createUser,
       signIn,
       logOut,
       handleGoogleAuthProvider
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;