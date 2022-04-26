import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

//RSUITE
import { Navbar, Nav } from 'rsuite';

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

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

function NavbarHeader() {

  return (
        <Navbar className="colorNavbar">
            <div className="contNav">
                {/* ICON BRAND */}
                <Link className="rs-navbar-brand" to="/"> GEMDAM </Link>

                {/* NAVBAR */}
                <Nav className="navBarcito">
                    <Link className="LinkBar rs-navbar-item" to="/"> HOME </Link>
                    <Link className="LinkBar rs-navbar-item" to="/nosotros"> NOSOTROS </Link>
                    <Link className="LinkBar rs-navbar-item" to="/ar"> AR </Link>
                    <Link className="LinkBar rs-navbar-item" to="/vr"> VR </Link>
                    <Link className="LinkBar rs-navbar-item" to="/web"> WEB </Link>
                    <Link className="LinkBar rs-navbar-item" to="/contacto"> CONTACTO </Link>
                </Nav>
            </div>
        </Navbar>
  );
}

export default NavbarHeader;