import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../../Main/Main';
import AddReview from '../../Pages/AddReview/AddReview';
import AddService from '../../Pages/AddService/AddService';
import Blog from '../../Pages/Blog/Blog';
import Home from '../../Pages/Home/Home';
import ServiceDetails from '../../Pages/Home/Homes/OurService/ServiceCard/ServiceDetails/ServiceDetails';
import MyReviews from '../../Pages/My-Reviews/MyReviews';
import Services from '../../Pages/Services/Services';
import Login from '../../Pages/Shared/Login/Login';
import SignUp from '../../Pages/Shared/SignUp/SignUp';
import PrivetRoute from '../PrivetRoutes/PrivetRoute';

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
                     loader: () => fetch('https://travelzone.vercel.app/allservices')
                },
                {
                    path: '/service/:id',
                    element: <ServiceDetails > </ServiceDetails>,
                    loader:({params}) => {
                        return fetch(`https://travelzone.vercel.app/service/${params.id}`)
                    }
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
                    path: '/addreview/:id',
                    loader : ({params}) => fetch(`https://travelzone.vercel.app/service_review/${params.id}`),
                    element : <PrivetRoute > <AddReview > </AddReview> </PrivetRoute> 
               },
                {
                    path: '/add', element: <PrivetRoute > <AddService > </AddService> </PrivetRoute>
                },
                {
                    path: '/my-reviews' , element: <PrivetRoute >  <MyReviews > </MyReviews> </PrivetRoute>
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