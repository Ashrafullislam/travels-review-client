import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const location  = useLocation()
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return   <div>  Loading ....  </div>
    }
  
    if(!user){
        return <Navigate to= '/login' state={{ from: location }} replace > </Navigate>

    }
    return children ;

};

export default PrivetRoute;