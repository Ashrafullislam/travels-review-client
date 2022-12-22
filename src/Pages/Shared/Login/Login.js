import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import UseTitle from '../../../Title/UseTitle';


 const Login = () => {
  const {LogInUser,SignUpGoogle,LogOut } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
     UseTitle('Login') 
    const [findUser,setFindUser] = useState(null);
    const [error, setError ] = useState(null) ;

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // set user on the state and its type will be object or database 
    const [user,setUser] = useState({});

    const handleValueOnBlur = (event) => { 
        const name = event.target.name ;
        const value = event.target.value ;
        const newUser = {...user}
        newUser[name] = value ;
        setUser(newUser);

    }

// hanle login form 
    const handleForm = (event) => {
        event.preventDefault()
        setError(null)
        const form = event.target ;
        const email = form.email.value ;
        const password = form.password.value ;
         console.log(email,password)
        LogInUser(email,password)
        .then(result => {
            const user = result.user ;
            toast.success (' Succesfully Log in  ', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
              });
              setError(null)
              navigate(from, { replace: true }); 
            form.reset()
        })
        .catch(err => {
            const error = err.message ;
            setError(error)
        })
    }

 // signup google handlar 
 const GoogleSignUp = () => {
    SignUpGoogle(googleProvider) ;
 }


    return (
        <div className='login  w-4/5 bg-slate-600 p-8 mx-auto mt-10 mb-20 rounded-md'>
            <h3 className='lg:text-4xl text-3xl text-white font-semibold my-4'> Please Log in  </h3> 
             <form onSubmit={handleForm}> 
           
                <input onBlur={handleValueOnBlur} type="email" name = 'email' placeholder='Enter email' required className='w-1/2 h-8 px-3 rounded-md'  />
                <br /> <br />
                <input onBlur={handleValueOnBlur} type="password" name = 'password' placeholder='Enter password' required className='w-1/2 h-8 px-3 rounded-md'  />
                <br /> <br />

                 <input type="submit" value="Log in " className='text-md text-white  btn btn-outline btn-info' />
                 <br  />

                 <span className='text-lg text-white'> You have no account ?   <Link className='text-orange-300' to= '/signup' > Sign Up here   </Link>  </span> 
                 <br /> <br  />
                 {
                    error && <span className='text-red-500'> {error} </span> 
                 }
                 <br  />
                 <button onClick={GoogleSignUp} className="btn btn-md bg-slate-900  "> Login with google  </button>
                 
             </form>

             <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
      />
           <ToastContainer />
        </div>
    );
 };

 export default Login;


