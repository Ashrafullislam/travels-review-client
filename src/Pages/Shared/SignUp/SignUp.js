import {GoogleAuthProvider} from 'firebase/auth';
import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../../AuthProvider/AuthProvider';
import './SignUp.css';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaGoogle, IconName} from 'react-icons/fa';
import UseTitle from '../../../Title/UseTitle';

const SignUp = () => {
  const {SignUpUser, SignUpGoogle} = useContext (AuthContext);
  const [error,  setError] = useState(null)
  const provider = new GoogleAuthProvider ();
   UseTitle("Sign up")
  // set user on the state and its type will be object
  const [user, setUser] = useState ({});
  const handleValueOnBlur = event => {
    const name = event.target.name;
    const value = event.target.value;
    const newUser = {...user};
    newUser[name] = value;
    setUser (newUser);
  };

  // sign up with google
  const GoogleSignUp = () => {
    SignUpGoogle (provider);
  };

  // send data mongo db by post api
  const handleFormSignUp = event => {
    event.preventDefault ();
    setError(null)
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    
    console.log (email, password);
    if (password !== confirm) {
      alert ('Password and Confirm password not match ');
      return;
    }
    SignUpUser (email, password)
      .then (result => {

        toast.success (' Succesfully Created Account ', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        setError(null)
        form.reset()
      })
      .catch (err => {
        const error = err.message;
        console.log (error, ' error');
        setError(error)
        form.reset()
      });


//     fetch (`http://localhost:5000/users`, {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: JSON.stringify (user),
//     })
//       .then (res => res.json ())
//       .then (data => {
//         if (data.acknowledged) {
//           alert ('User added successfully ');
//           event.target.reset ();
//         }
//         console.log (data, 'data in client site ');
//       })
//       .catch (error => console.log (error));
  };

  return (
    <div className="Signup w-4/5 bg-sky-800 p-8 mx-auto my-10 rounded-md">
      <h3 className="text-4xl font-semibold text-white py-6">
        {' '}Please Sign Up{' '}
      </h3>
      <form onSubmit={handleFormSignUp}>
        <input
          onBlur={handleValueOnBlur}
          type="text"
          name="name"
          placeholder="Enter name"
          required
          className="w-1/2 h-8 px-3 rounded-md"
        />
        <br /> <br />
        <input
          onBlur={handleValueOnBlur}
          type="email"
          name="email"
          placeholder="Enter email"
          required
          className="w-1/2 h-8 px-3 rounded-md"
        />
        <br /> <br />
        <input
          onBlur={handleValueOnBlur}
          type="password"
          name="password"
          placeholder="Enter password"
          required
          className="w-1/2 h-8 px-3 rounded-md"
        />
        <br /> <br />
        <input
          onBlur={handleValueOnBlur}
          type="password"
          name="confirm"
          placeholder=" Confirm password "
          required
          className="w-1/2 h-8 px-3 rounded-md"
        />
        <br /> <br />
        <input
          type="submit"
          value="Submit "
          className="text-md text-white  btn btn-outline btn-warning"
        />
        <br />
        <span className="text-lg text-white ">
          {' '}You have already an account ?{' '}
        </span>
        {' '}
        <Link to="/login" className="text-orange-400"> Log  in now </Link>
        <br />  <br />
        {
            error && <span className='text-red-400' > {error} </span>
        }
        <br  />
        <button
          onClick={GoogleSignUp}
          className="btn btn-sm bg-blue-700 text-lime-100 border-orange-300 "
        >
          {' '}Signup by google{' '}
        </button>

      </form>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />

    </div>
  );
};

export default SignUp;
