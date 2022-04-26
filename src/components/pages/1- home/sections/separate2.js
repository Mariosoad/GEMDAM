import React from "react";

//RSUITE
import { Grid, Row, Col } from 'rsuite';

function Separate2() {
    return (
      <>
        <Grid fluid className="">
                <Row className="show-grid">
                    <Col className="colSep" xs={24} sm={24} md={24}>
                        <section>
                            <article className="contSeparate">
                                <div>
                                    <h2 className="subtittleHero">
                                        "El equilibrio perfecto se encuentra
                                         entre cómo se siente y cómo funciona."
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
  
  export default Separate2;
  