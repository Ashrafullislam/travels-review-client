import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';


const SignUp = () => {
    // set user on the state and its type will be object 
    const [user,setUser] = useState({});
    const handleValueOnBlur = (event) => {
        
        const name = event.target.name ;
        const value = event.target.value ;
        const newUser = {...user}
        newUser[name] = value ;
        setUser(newUser);

    }
    // send data mongo db by post api 
    const handleFormSignUp = (event) => {
        event.preventDefault()
        fetch(`http://localhost:5000/users` ,{
            method:'POST',  
            headers: {

                'Content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('User added successfully ')
                event.target.reset()
                 
            }
            console.log(data,'data in client site ')

        })
        .catch(error => console.log(error))
        

    }
    return (
        <div className='Signup w-4/5 bg-sky-800 p-8 mx-auto my-10 rounded-md'>
            <h3 className='text-4xl font-semibold text-white py-6'> Please Sign Up  </h3> 
             <form onSubmit={handleFormSignUp}> 
                <input  onBlur={handleValueOnBlur} type="text" name = 'name' placeholder='Enter name'
                required  className='w-1/2 h-8 px-3 rounded-md'  />
                <br /> <br />
                <input onBlur={handleValueOnBlur} type="email" name = 'email' placeholder='Enter email' required  className='w-1/2 h-8 px-3 rounded-md'/>
                <br /> <br />
                <input onBlur={handleValueOnBlur} type="text" name = 'password' placeholder='Enter password' required  className='w-1/2 h-8 px-3 rounded-md'/>
                 <br /> <br />
                 <input onBlur={handleValueOnBlur} type="text" name = 'confirm' placeholder=' Confirm password ' required  className='w-1/2 h-8 px-3 rounded-md'/>
                <br /> <br />
                 <input type="submit" value="Submit " className='text-md text-white  btn btn-outline btn-warning' />
                 <br  />
                 <span className='text-lg text-white '> You have already an account ?  </span> <Link to='/login' className='text-orange-400' > Log  in now  </Link>
             </form>
        </div>
    );
};

export default SignUp;