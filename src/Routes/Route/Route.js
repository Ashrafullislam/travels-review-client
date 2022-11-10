import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../../Main/Main';
import Blog from '../../Pages/Blog/Blog';
import Home from '../../Pages/Home/Home';
import ServiceDetails from '../../Pages/Home/Homes/OurService/ServiceCard/ServiceDetails/ServiceDetails';
import Review from '../../Pages/Review/Review';
import Services from '../../Pages/Services/Services';
import Login from '../../Pages/Shared/Login/Login';
import SignUp from '../../Pages/Shared/SignUp/SignUp';

const Route = () => {
    const router = createBrowserRouter([
        {
            path: '/', element: <Main > </Main>,
            children:[
                
                {
                    path: '/', element: <Home> </Home>
                },

                {
                    path: '/service',
                     element: <Services > </Services> ,
                     loader: () => fetch('http://localhost:5000/service')
                },
                {
                    path: '/service-details/:id',
                    element: <ServiceDetails > </ServiceDetails>,
                    loader:({params}) => {
                        return fetch(`http://localhost:5000/service-details/${params.id}`)
                    }
                },
                {
                    path: '/review' , element: <Review > </Review>
                },
                {
                    path: '/blog' , element: <Blog > </Blog>
                },
                {
                    path: '/login' ,  element: <Login > </Login>
                }, 
                {
                    path: '/signup' , element: <SignUp > </SignUp>
                },
                {
                    path: '*' , element: <div> 404 Routes not found  </div>
                }

            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router} > </RouterProvider>
        
        </div>
    );
};

export default Route;