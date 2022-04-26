import React from "react";

//RSUITE
import { Grid, Row, Col } from 'rsuite';

function Separate() {
    return (
      <>
        <Grid fluid className="">
                <Row className="show-grid">
                    <Col className="colSep" xs={24} sm={24} md={24}>
                        <section>
                            <article className="contSeparate">
                                <div>
                                    <h2 className="subtittleHero">
                                        “La realidad no es más que una ilusión, 
                                        aunque una muy persistente”
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
  
  export default Separate;
  