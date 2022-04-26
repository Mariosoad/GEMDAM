import React from "react";

//RSUITE
import { Grid, Row, Col } from 'rsuite';

function Section3() {
    return (
      <>
        <section className="contSection3Color">
            <article className="contSectionTittle">
                <div>
                    <h1 className="tittleContSep">VIRTUAL REALITY</h1>
                </div>
            </article>
        </section>
        <Grid fluid className="">
                <Row className="show-grid contSection3Color contSection3">
                    <div className="contGallery">
                        <Col className="colSection3Izq" xs={12} sm={12} md={7}>
                            <section>
                                <article className="contSection">
                                    <div>

                                    </div>
                                </article>
                            </section>
                        </Col>
                        <Col className="colSection3Mid" xs={12} sm={12} md={7}>
                            <section>
                                <article className="contSection">
                                    <div>

                                    </div>
                                </article>
                            </section>
                        </Col>
                        <Col className="colSection3Der" xs={12} sm={12} md={7}>
                            <section>
                                <article className="contSection">
                                    <div>

                                    </div>
                                </article>
                            </section>
                        </Col>
                    </div>
                </Row>
            </Grid>
      </>
    );
  }
  
  export default Section3;
  