import React, { Children, createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../Firebase/firebase.init';


 const auth = getAuth(app)
 export  const AuthContext = createContext()

const Context = ({children}) => {
const [user,setUser] = useState(null);
const [loading,setLoading] = useState(true);

const userInfo = {
    displayName: 'Ashrafull' 
}

//  create user with email and password 
const SignUpUser  = (email,password) => {
   return createUserWithEmailAndPassword (auth,email,password) 
}

// Log in user  with email and password 
const LogInUser = (email,password) => {
 return signInWithEmailAndPassword (auth,email,password) ;
}

// sign up with google 
const SignUpGoogle = (provider) => {
    return signInWithPopup(auth,provider)
}

//send data of user auth system 
const authInfo = {
    userInfo,
    user,
    LogInUser,
    SignUpUser,
    SignUpGoogle

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