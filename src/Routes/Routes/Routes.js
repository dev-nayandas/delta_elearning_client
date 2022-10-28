import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main'
import Blog from "../../pages/Blog/Blog";
import ChekOut from "../../pages/CheckOut/ChekOut";
import CourseDetails from "../../pages/CourseDetails/CourseDetails";
import Courses from "../../pages/Courses/Courses";
import Faq from "../../pages/Faq/Faq";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
            }  ,
            {
                path:'/home',
                element: <Home></Home>,
            }  ,
            {
                path: '/courses',
                loader: async () =>{
                   return fetch('http://localhost:5000/topic')
                },
                element:<Courses></Courses>
            },
            {
                path:'/categorey/:categoreyId',
                loader: async ({params})=>{
                    console.log(params.categoreyId)
                    return fetch (`http://localhost:5000/topic/${params.categoreyId}`)
                },
                 
                 element:<CourseDetails></CourseDetails>

            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/checkout/:checkoutId',
                loader: async ({params}) =>{
                    return fetch(`http://localhost:5000/topic/${params.checkoutId}`)
                 },
                element:<PrivateRoute><ChekOut></ChekOut></PrivateRoute>
            },
           
        ]
    },
    {
        path:'*',
        element:<h1 className="text-red-400 text-5xl">The page you are loooking for not found</h1>
    }
])