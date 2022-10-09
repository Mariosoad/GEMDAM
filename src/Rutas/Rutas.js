import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import NavBar from "../Componentes/Navbar/Navbar";
//PAGES
import Home from "../Pages/Home/Home";

export default function Rutas() {


    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/nosotros" element={<Home />} />
                    <Route path="/AR" element={<Home />} />
                    <Route path="/VR" element={<Home />} />
                    <Route path="/web" element={<Home />} />
                    <Route path="/contacto" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}








