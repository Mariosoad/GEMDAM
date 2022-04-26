import React from "react";

//RSUITE
import { Grid, Row, Col } from 'rsuite';

function Section2() {
    return (
      <>
        <Grid fluid>
                <Grid fluid>
                    <Row className="show-grid">
                        <Col className="colNosSectionTittle" xs={24} sm={24} md={24}>
                        <section>
                            <article className="contVrSection">
                                <div>
                                    <h1>GALLERY</h1>
                                </div>
                            </article>
                        </section>
                        </Col>
                    </Row>
                </Grid>
                <Row className="show-grid contRowVR">
                    <Col style={{border:'1px solid black'}} className="colVrGallery" xs={24} sm={24} md={7}>
                        <section>
                            <article className="contVrSection">
                                <div>
                                    VIDEO 1
                                </div>
                            </article>
                        </section>
                    </Col>
                    <Col style={{border:'1px solid black'}} className="colVrGallery" xs={24} sm={24} md={7}>
                        <section>
                            <article className="contVrSection">
                                <div>
                                    VIDEO 2 
                                </div>
                            </article>
                        </section>
                    </Col>
                    <Col style={{border:'1px solid black'}} className="colVrGallery" xs={24} sm={24} md={7}>
                        <section>
                            <article className="contVrSection">
                                <div>
                                    VIDEO 3
                                </div>
                            </article>
                        </section>
                    </Col>
                </Row>
            </Grid>
            <Grid fluid>
                <Row className="show-grid contRowVR">
                    <Col style={{border:'1px solid black'}} className="colVrGallery" xs={24} sm={24} md={7}>
                        <section>
                            <article className="contVrSection">
                                <div>
                                    VIDEO 4
                                </div>
                            </article>
                        </section>
                    </Col>
                    <Col style={{border:'1px solid black'}} className="colVrGallery" xs={24} sm={24} md={7}>
                        <section>
                            <article className="contVrSection">
                                <div>
                                    VIDEO 5 
                                </div>
                            </article>
                        </section>
                    </Col>
                    <Col style={{border:'1px solid black'}} className="colVrGallery" xs={24} sm={24} md={7}>
                        <section>
                            <article className="contVrSection">
                                <div>
                                    VIDEO 6
                                </div>
                            </article>
                        </section>
                    </Col>

                </Row>
            </Grid>
            {/* SEPARATE */}
            <Grid>
                <Row>
                    <Col className="colVrSep" xs={24} sm={24} md={24}>
                        <section>
                            <article className="contVrSection">
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
  