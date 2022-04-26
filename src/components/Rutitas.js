import React from "react";
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

//PAGES
import Navbar from './Navbar';
    import Home from './pages/1- home/home';
    import Nosotros from './pages/2- nosotros/nosotros';
    import Ar from './pages/3- ar/ar';
    import Vr from './pages/4- vr/vr';
    import Web from './pages/5- web/web';
    import Contacto from './pages/6- contacto/contacto';
import Footer from './Footer';

//STYLES
    //NAV
    import '../style/nav.css'
    //HOME
    import '../style/home.css'
    //FORM
    import '../style/form.css'
    //NOSOTROS
    import '../style/nosotros.css'
    //AR
    import '../style/ar.css'
    //VR
    import '../style/vr.css'
    //FOOTER
    import '../style/footer.css'

    
    //MODELS
    import '../style/models.css'

function Rutitas() {

    return (
      <BrowserRouter>
          <Navbar />

          <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="/nosotros" element={<Nosotros/>} />
              <Route path="/ar" element={<Ar/>} />
              <Route path="/vr" element={<Vr/>} />
              <Route path="/web" element={<Web/>} />
              <Route path="/contacto" element={<Contacto/>} />
          </Routes>

          <Footer />
      </BrowserRouter>
    );
  }
  
  export default Rutitas;