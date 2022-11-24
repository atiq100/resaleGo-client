import React, { createContext, useEffect, useState } from 'react';
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,updateProfile,signOut, signInWithPopup} from 'firebase/auth'
import app from '../../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const providerLogin = (provider)=>{
        setLoading(false)
        return signInWithPopup(auth,provider)
    }

    const updateUserProfile = (userinfo)=>{
        return updateProfile(auth.currentUser,userinfo)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect( ()=>{
      const unsubscribe=  onAuthStateChanged(auth,currentUser =>{
            console.log('user observer');
            setUser(currentUser)
            setLoading(false)
        });
        return () => unsubscribe();
    },[])
    const authInfo={createUser,signIn,providerLogin,user,updateUserProfile,logOut,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;