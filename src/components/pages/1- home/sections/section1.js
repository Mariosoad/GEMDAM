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
                                    <h1 className="tittleContSep">AUGMENTED REALITY</h1>
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
                </Row>
            </Grid>


      </>
    );
  }
  
  export default Section1;
  