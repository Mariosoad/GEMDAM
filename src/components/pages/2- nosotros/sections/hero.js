import React from "react";

//RSUITE
import { Grid, Row, Col } from 'rsuite';

function Hero() {
    return (
      <>
            <Grid fluid>
                <Row className="show-grid">
                    <Col className="colHeroIzq" xs={24} sm={24} md={14}>
                        <section>
                            <article className="contColHero">
                                <div>
                                    <h1 className="tittleHero">NOSOTROS</h1>
                                </div>
                                <div>
                                    <h2 className="subtittleHero">
                                        Lorem ipsum dolor sit amet, 
                                        consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt 
                                        ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud 
                                        exercitation ullamco laboris nisi ut 
                                        aliquip ex ea commodo consequat.
                                    </h2>
                                    <div>
                                        <button>BOTON 1</button>
                                        <button>BOTON 2</button>
                                    </div>
                                </div>
                            </article>
                        </section>
                    </Col>
                    <Col className="colHeroDer" xs={24} sm={24} md={10}>
                        <section>
                            <article className="contColModelHero">
                                <div>
                                    MODELO 3D
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
  