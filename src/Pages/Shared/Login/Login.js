import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Routes/PrivetRoutes/AuthContext';


const Login = () => {
    const authInfo = useContext(AuthContext)
    console.log(authInfo.userInfo.displayName)
    // set user on the state and its type will be object 
    const [user,setUser] = useState({});
    console.log(user)
    const handleValueOnBlur = (event) => {
        
        const name = event.target.name ;
        const value = event.target.value ;
        const newUser = {...user}
        newUser[name] = value ;
        setUser(newUser);

    }
    const handleForm = (event) => {
        event.preventDefault()
         

    }
    return (
        <div className='login  w-4/5 bg-sky-800 p-8 mx-auto my-10 rounded-md'>
            <h3 className='text-4xl text-white font-semibold my-4'> Please Log in  </h3> 
             <form onSubmit={handleForm}> 
           
                <input onBlur={handleValueOnBlur} type="email" name = 'email' placeholder='Enter email' required className='w-1/2 h-8 px-3 rounded-md'  />
                <br /> <br />
                <input onBlur={handleValueOnBlur} type="text" name = 'password' placeholder='Enter password' required className='w-1/2 h-8 px-3 rounded-md'  />
                <br /> <br />

                 <input type="submit" value="Log in " className='text-md text-white  btn btn-outline btn-warning' />
                 <br  />

                 <span className='text-lg text-white'> You have no account ?   <Link className='text-orange-300' to= '/signup' > Sign Up here   </Link>  </span> 
                 <br /> <br  />

                 <button className="btn btn-sm bg-blue-700 text-lime-100 border-orange-300 "> Login by google  </button>

             </form>
        </div>
    );
};

export default Login;