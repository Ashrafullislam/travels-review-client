import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../../Main/Main';
import Blog from '../../Pages/Blog/Blog';
import Home from '../../Pages/Home/Homes/Home';
import Review from '../../Pages/Review/Review';
import Service from '../../Pages/Service/Service';

const Route = () => {
    const router = createBrowserRouter([
        {
            path: '/', element: <Main > </Main>,
            children:[
                
                {
                    path: '/home', element: <Home> </Home>
                },

                {
                    path: '/service', element: <Service > </Service>
                },
                {
                    path: '/review' , element: <Review > </Review>
                },
                {
                    path: '/blog' , element: <Blog > </Blog>
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