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
                                    <h1 className="tittleHero">TU PROPIO METAVERSO <br></br> ES POSIBLE</h1>
                                </div>
                                <div>
                                    <h2 className="subtittleHero">
                                        Sumate a esta nueva realidad y se parte de la 
                                        experiencia que está revolucionando el mercado. <br></br>
                                        Descubrí la amplia variedad de alternativas que este mundo tiene para tu empresa.
                                    </h2>
                                    <div>
                                        <button>BOTON 1</button>
                                    </div>
                                </div>
                            </article>
                        </section>
                    </Col>
                    <Col className="colHeroDer" xs={24} sm={24} md={10}>
                        <section>
                            <article className="contColModelHero">
                                <div>
                                    VIDEO FONDO RENDERS
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
  