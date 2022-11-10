import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../../Firebase/firebase.init';


export const auth = getAuth(app)
const AuthContext = createContext()
const Context = ({children}) => {
const [user,setUser] = useState(null);
const [loading,setLoading] = useState(true);
const userInfo = {
    displayName: 'Ashrafull' 
}

//send data of user auth system 
const authInfo = {
    userInfo,
    user

}
    return (
        <div>
            <AuthContext.Provider authInfo = {authInfo} > 
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default Context;