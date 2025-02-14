import {createBrowserRouter} from "react-router-dom"
import Layout from "../pages/Layout"
import CreateUser from "../pages/CreateUser"
import AllUser from "../pages/AllUser"
import Edit from '../pages/Edit'
import Home from '../pages/Home'
import Product from "../pages/Product"


export let router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Home/>,
            },
            {
                path:"/create",
                element:<CreateUser/>
            },
            {
                path:"/alluser",
                element:<AllUser/>
            },
            {
                path:"/edit/:id",
                element:<Edit/>
            },
            {
                path:"/allproduct",
                element:<Product/>
            }
        ]

    }
])