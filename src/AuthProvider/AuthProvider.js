import React, { Children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.init';


 const auth = getAuth(app)
 export  const AuthContext = createContext()

const Context = ({children}) => {
 const [loading,setLoading] = useState(true);
const [user,setUser] = useState(null);

const userInfo = {
    displayName: 'Ashrafull' 
}

//  create user with email and password 
const SignUpUser  = (email,password) => {
    setLoading(true)
   return createUserWithEmailAndPassword (auth,email,password) 
}

// Log in user  with email and password 
const LogInUser = (email,password) => {
    setLoading(true)
 return signInWithEmailAndPassword (auth,email,password) ;
}

// sign up with google 
const SignUpGoogle = (provider) => {
    setLoading(true)
    return signInWithPopup(auth,provider)
}

// log out 
const LogOut = () => {
    setLoading(true)
    signOut(auth)
}

// user auth state monitoring and set user 
useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setLoading(false) ;
        setUser(currentUser);
    })
    return () => {
        unsubscribe()
    }
},[]) 


//send data of user auth system 
const authInfo = {
    userInfo,
    user,
    LogInUser,
    SignUpUser,
    SignUpGoogle,
    LogOut,
    loading

}
    return (
        <div>
       <AuthContext.Provider value={authInfo} >  
          
         {children}

       </AuthContext.Provider>
            
        </div>
    );
};

export default Context;