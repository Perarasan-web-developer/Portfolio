import React from "react";
import  ReactDOM  from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Body from "./src/component/Body"
import Footer from "./src/component/Footer";
import Header from "./src/component/Header";
import Project from "./src/component/Project";
import Service from "./src/component/Service";
import Skills from "./src/component/Skills";
import Home from "./src/component/Home";

let App=()=>{
    return(
        <div className="bg-black text-white">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
        )
};

 let approuter=createBrowserRouter([
    {
        path:"",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },{
                path:"/Aboutme",
                element:<Body/>
            },
            {
                path:"/service",
                element:<Service/>
            },
            {
                path:"/skill",
                element:<Skills/>
            },
            {
                path:"/project",
                element:<Project/>
            }
        ]
    }
 ])

let  b = ReactDOM.createRoot(document.getElementById("main"));
b.render(<RouterProvider router={approuter} />); 