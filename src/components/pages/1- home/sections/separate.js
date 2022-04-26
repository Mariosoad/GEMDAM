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
                                        "Darle significado a las cosas más 
                                        pequeñas construye siempre los mejores resultados."
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
  