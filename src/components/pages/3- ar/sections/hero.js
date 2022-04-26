import React from "react";

//RSUITE
import { Grid, Row, Col } from 'rsuite';

function Hero() {
    return (
      <>
            <Grid fluid>
                <Row className="show-grid">
                    <Col className="colNosArIzq" xs={24} sm={24} md={8}>
                        <section>
                            <article className="contColModelHero">
                                <div>
                                    SLIDE 1 - MODELO 3D
                                </div>
                            </article>
                        </section>
                    </Col>
                    <Col className="colNosArMid" xs={24} sm={24} md={8}>
                        <section>
                            <article className="contColModelHero">
                                <div>
                                    SLIDE 2 - MODELO 3D
                                </div>
                            </article>
                        </section>
                    </Col>
                    <Col className="colNosArDer" xs={24} sm={24} md={8}>
                        <section>
                            <article className="contColModelHero">
                                <div>
                                    SLIDE 3 - MODELO 3D
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
  