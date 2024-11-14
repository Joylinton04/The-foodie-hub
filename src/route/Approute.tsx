import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Layout from "@/layout/Layout";
import About from "@/pages/About";
import Menu from "@/pages/Menu";
import Reservation from "@/pages/Reservation";
import Gallery from "@/pages/Gallery";

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
            {
                path: "reservation",
                element: <Reservation/>
            },
            {
                path: "gallery",
                element: <Gallery/>
            },
        ]
    }
])


export default Approute;