import React from "react";

//RSUITE
import { Grid, Row, Col } from 'rsuite';

//IMAGE
import render6 from "../../../../media/image/archviz/img4.jpg";

//ROUTER
import { Link } from "react-router-dom";

function Section4() {
    return (
      <>
        <Grid fluid>
                <Row className="show-grid">
                <Col className="colSection4Izq" xs={24} sm={24} md={12}>
                        <section>
                            <article className="contSectionDer4">
                                <div>
                                    <h2>XXX</h2>
                                    <p className="subtittleHero">
                                        La realidad virtual es una tecnología innovadora, 
                                        un nuevo medio para la creación de contenido y un nuevo canal de comunicación, 
                                        por lo que es una opción nueva e ideal para la optimización de las comunicaciones 
                                        tanto internas como externas de una empresa, facilitando el desarrollo de actividades, 
                                        además de reducir sus tiempos y costos. 
                                    </p>
                                    <button>Aprender más</button>
                                </div>
                            </article>
                        </section>
                    </Col>
                    <Col className="colSection4Der colSection5Color" xs={24} sm={24} md={12}>
                        <section>
                            <article className="conImgRender" >
                                <div>
                                    <img className="imgRender" src={render6} alt="GemDam Render" />
                                </div>
                            </article>
                        </section>
                    </Col>
                    <Col className="colSection4Izq contSectionImg6" xs={24} sm={24} md={12}>
                        <section>
                            <article className="contSection">
                                <div>
                                    {/* IMAGE BACK */}
                                </div>
                            </article>
                        </section>
                    </Col>
                    <Col className="colSection4Der" xs={24} sm={24} md={12}>
                        <section>
                            <article className="contSectionDer4">
                                <div>  
                                    <h2 className="subtittleHero">
                                    <p>   
                                        Esta tecnología se encuentra 
                                        disponible en una amplia variedad 
                                        de plataformas que se adaptan a la 
                                        necesidad de cada cliente ¿Cuál es ideal para tu negocio?     
                                    </p>                        
                                    <br></br>
                                    <p> - Experiencias realistas de visualización arquitectónica</p>
                                    
                                    <p> - Simulaciones de entornos laborales </p>
                                    
                                    <p> - Eventos virtuales inmersivos </p>
                                    
                                    <p> - Aventuras interactivas del estilo videojuego </p>

                                    </h2> 

                                    <br></br>  
                                    
                                    <Link style={{padding: '15px' , background:'grey'}} to="/vr"> VER MÁS </Link>

                                </div>
                            </article>
                        </section>
                    </Col>
                </Row>
            </Grid>
      </>
    );
  }
  
  export default Section4;
  