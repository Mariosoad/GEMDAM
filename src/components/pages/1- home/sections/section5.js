import React from "react";

//RSUITE
import { Grid, Row, Col } from 'rsuite';

function Section1() {
    return (
      <>
        <Grid fluid>
                <Row className="show-grid">
                    <Col className="colSectionIzq" xs={24} sm={24} md={12}>
                        <section>
                            <article className="contSection">
                                <div>
                                    <h1 className="tittleContSep">DESARROLLO WEB</h1>
                                </div>
                            </article>
                        </section>
                    </Col>
                    <Col className="colSectionDer contSectionImg1" xs={24} sm={24} md={12}>
                        <section>
                            <article className="contSection">
                                <div>
                                    <span> </span>
                                </div>
                            </article>
                        </section>
                    </Col>
                    <Col className="colSection2Izq contSectionImg2" xs={24} sm={24} md={12}>
                        <section>
                            <article className="contSection">
                                <div>
                                    {/* IMAGE BACK */}
                                </div>
                            </article>
                        </section>
                    </Col>
                    <Col className="colSection5Der" xs={24} sm={24} md={12}>
                        <section>
                            <article className="contSectionDer2">
                                <div>
                                    <h2>Desarrollo web</h2>
                                    <p>Realizamos webs ajustadas a la 
                                        necesidad de cada cliente y sus proyectos.
                                    </p>

                                    <h2>Diseño gráfico</h2>
                                    <p> Logramos diseños que potencian 
                                        negocios a través de identidades únicas. 
                                    </p>
                                    
                                    <h2>Programación a medida</h2>
                                    <p> Llevamos a cabo las propuestas y funcionalidades 
                                        que nuestros clientes necesitan. 
                                    </p>

                                    <h2>Consultoria en comunicación digital</h2>
                                    <p> Asesoramiento para la elaboración 
                                        de las mejores estrategias de comunicación
                                    </p>
                                </div>
                            </article>
                        </section>
                    </Col>
                </Row>
            </Grid>


      </>
    );
  }
  
  export default Section1;
  