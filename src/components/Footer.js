import React from "react";

//RSUITE
import { Grid, Row, Col } from 'rsuite';

function Footer() {
    return (
      <>
        <Grid fluid className="contColFooter">
                <Row className="show-grid contRowFooterContacto">
                    <Col className="colContactFooter colorContContacto" xs={24} sm={24} md={24}>
                        <section>
                            <article className="contSection ">
                                <div className="contFlexFooter">
                                    <div>
                                        <h2 className="tittleContSepFooter"> ¿ALGUNA IDEA BRILLANTE? </h2>
                                        <h2 className="tittleContSepFooter">HACELA REALIDAD CON NOSOTROS! </h2>
                                    </div>
                                    <div>
                                        <a href="/contacto" className="btnStyle">VAMOS!</a>
                                    </div>
                                </div>
                            </article>
                        </section>
                    </Col>
               </Row>
        </Grid> 
        <Grid fluid className="contColFooter">
                <Row className="show-grid contRowFooter">
                    <Col className="colFooterIzq" xs={8} sm={8} md={8}>
                        <section>
                            <article className="contSection">
                                <div>
                                    <h2 className="tittleFooter">GEMDAM</h2>
                                    <p></p>
                                    <p>Calle 56 Nº574</p>
                                    <p>Cel: 2214768804</p>
                                    <p>La Plata. Buenos Aires. 1900.</p>
                                    <p>Argentina.</p>
                                </div>
                            </article>
                        </section>
                    </Col>
                    <Col className="colFooterMid" xs={8} sm={8} md={8}>
                        <section>
                            <article className="contSection">
                                <div>
                                    <h2 className="tittleFooter">
                                        Nuestros Servicios
                                    </h2>
                                    <p></p>                                    
                                    <p className=" textFooter"> <a href="/home" className="hoverUnderlineAnim">Home</a> </p> 
                                    <p className=" textFooter"> <a href="/nosotros" className="hoverUnderlineAnim">Nosotros</a> </p>  
                                    <p className=" textFooter"> <a href="/ar" className="hoverUnderlineAnim">Augmented Reality</a> </p>        
                                    <p className=" textFooter"> <a href="/vr" className="hoverUnderlineAnim">Virtual Reality</a>  </p>                
                                    <p className=" textFooter"> <a href="/web" className="hoverUnderlineAnim">Desarrollo Web</a> </p>                         
                                    <p className=" textFooter"> <a href="/contacto" className="hoverUnderlineAnim">Contacto</a> </p> 
                                                    
                                </div>
                            </article>
                        </section>
                    </Col>
                    <Col className="colFooterDer" xs={8} sm={8} md={8}>
                        <section>
                            <article className="contSection">
                                <div>
                                    <h2 className="tittleFooter">
                                        Redes Sociales
                                    </h2>
                                    <p></p>
                                    <div className="contIcons">
                                        <a style={{paddingRight:'20px', paddingLeft:'2px'}} className="iconStyle fa fa-facebook"></a> <p><a className="hoverUnderlineAnim"> GemDam Studio </a></p>
                                    </div>
                                    <div className="contIcons"> 
                                        <a style={{paddingLeft:'1px'}} className="iconStyle fa fa-instagram"></a><p><a className="hoverUnderlineAnim">@gemdam</a></p>
                                    </div>
                                    <div className="contIcons">                                    
                                        <a className="iconStyle fa fa-envelope"></a> <p><a className="hoverUnderlineAnim" href="mailto:info@gemdam.com.ar">info@gemdam.com.ar</a></p>
                                    </div>
                                </div>
                            </article>
                        </section>
                    </Col>
                </Row>
            </Grid>

            {/* COPYRIGHT */}
            <section>
                <article className="contCopyright">
                    <div className="contCopyrightText" >
                        <h2 className="tittleCopyright">
                            © 2022, GEMDAM STUDIO. Todos los derechos reservados.
                        </h2>
                    </div>
                </article>
            </section>
      </>
    );
  }
  
  export default Footer;
  