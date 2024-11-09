import Home from "@/pages/Home/Home";
import Layout from "../layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import About from "@/pages/About";
import Menu from "@/pages/Menu";

const Approute = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
                index: true,
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "menu",
                element: <Menu/>
            },
        ]
    }
])


export default Approute;