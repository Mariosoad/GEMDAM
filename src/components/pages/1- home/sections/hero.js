import React from "react";

//RSUITE
import { Grid, Row, Col } from 'rsuite';

function Hero() {
    return (
      <>
            <Grid fluid className="contIndexWeb ">
                <Row className="show-grid ">
                    <Col className="colHeroIzq" xs={24} sm={24} md={10}>
                        <section>
                            <article className="contColHero">
                                <div>
                                    <h1 className="tittleHero">CREAMOS <br></br> MUNDOS Y<br></br> EXPERIENCIAS <br></br> ÚNICAS</h1>
                                </div>
                                <div>
                                    <h2 className="subtittleHero">
                                    Creamos soluciones útiles, creativas e innovadoras que resuelvan 
                                    todo tipo de problemas y se ajusten a tus requisitos 
                                    </h2>
                                    <div>
                                        <button>ARROW</button>
                                    </div>
                                </div>
                            </article>
                        </section>
                    </Col>
                    <Col className="colHeroDer contSectionImagen1" xs={24} sm={24} md={14}>
                        <section>
                            <article className="contColModelHero">
                                <div>
                                   
                                </div>
                            </article>
                        </section>
                    </Col>
                </Row>
            </Grid>
      </>
    );
  }
  
  export default Hero;
  