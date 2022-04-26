import React from "react";

//RSUITE
import { Grid, Row, Col } from 'rsuite';

function Section2() {
    return (
      <>
        <Grid fluid>
                <Row className="show-grid">
                    <Col className="colSection2Izq contSectionImg2" xs={24} sm={24} md={12}>
                        <section>
                            <article className="contSection">
                                <div>
                                    {/* IMAGE BACK */}
                                </div>
                            </article>
                        </section>
                    </Col>
                    <Col className="colSection2Der" xs={24} sm={24} md={12}>
                        <section>
                            <article className="contSectionDer2">
                                <div>
                                    <h2 className="subtittleHero">
                                        <p>- Une el mundo físico con el mundo digital. </p>
                                        <p>- Amplía las posibilidades de los dispositivos. </p>
                                        <p>- Potencia y se conjuga con nuevas tecnologías. </p>
                                        <p>- Otorga flexibilidad y soluciones innovadoras. </p>
                                        <p>- Intensifica experiencias mixtas. </p>
                                    </h2>
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
  