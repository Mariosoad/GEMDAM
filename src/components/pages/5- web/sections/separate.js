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
                                        Lorem ipsum dolor sit amet, 
                                        consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt 
                                        ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud 
                                        exercitation ullamco laboris nisi ut 
                                        aliquip ex ea commodo consequat.
                                        Lorem ipsum dolor sit amet, 
                                        consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt 
                                        ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud 
                                        exercitation ullamco laboris nisi ut 
                                        aliquip ex ea commodo consequat.
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
  