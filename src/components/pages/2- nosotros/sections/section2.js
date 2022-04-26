import React from "react";

//RSUITE
import { Grid, Row, Col } from 'rsuite';

function Section2() {
    return (
      <>
            <Grid fluid>
                <Row className="show-grid">
                    <Col className="colNosotrosIzq2" xs={24} sm={24} md={12}>
                        <section>
                            <article className="contNosotrosSection">
                                <div>
                                    <h1>QUIENES SOMOS</h1>
                                    <h2 className="subtittleHero">
                                        Lorem ipsum dolor sit amet, 
                                        consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt 
                                        ut labore et dolore magna aliqua.
                                    </h2>
                                </div>
                            </article>
                        </section>
                    </Col>
                    <Col className="colNosotrosDer2 contSectionImg6" xs={24} sm={24} md={12}>
                        <section>
                            <article className="contNosotrosSection">
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
  
  export default Section2;
  