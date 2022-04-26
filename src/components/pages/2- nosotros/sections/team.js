import React from "react";
import User1 from "../../../../media/image/rori.jpg"
import User2 from "../../../../media/image/me2.png"

//RSUITE
import { Grid, Row, Col } from 'rsuite';

function Team() {
    return (
      <>
        <Grid fluid>
            <Row className="show-grid">
                <Col className="colNosSectionTittle" xs={24} sm={24} md={24}>
                <section>
                    <article className=" colNosSectionTittle">
                        <div>
                            <h1>NUESTRO EQUIPO</h1>
                        </div>
                    </article>
                </section>
                </Col>
            </Row>
        </Grid>
        <Grid fluid>
                <Row className="show-grid ">
                    {/* SEPARATE */}
                    <Col xs={0} sm={0} md={4}>
                    
                    </Col>
                    <Col className="colNosSectionIzq5" xs={24} sm={24} md={8}>
                        <section>
                            <article className="contNosotrosSection">
                                <div className="contUserTeam">
                                    <div>
                                        <img className="userStyle" alt="Mario Hinostroza" src={User2}/>
                                    </div>
                                    <div>
                                        <h2> Mario Hinostroza </h2>
                                        <p className="teamTittle">CO-FOUNDER & CEO</p>
                                        <p className="teamTexto">Programador, diseñador multimedia, <br></br>
                                            tester de videojuegos y un estratega <br></br>
                                            de la tecnología para mejorar la experiencia de vida.
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </section>
                    </Col>
                    <Col className="colNosSectionDer5" xs={24} sm={24} md={8}>
                        <section>
                            <article className="contNosotrosSection">
                                <div className="contUserTeam">
                                    <div>
                                        <img className="userStyle" alt="Rodrigo Isaasmendi" src={User1}/>
                                    </div>
                                    <div>
                                        <h2> Rodrigo Isaasmendi </h2>
                                        <p className="teamTittle">CO-FOUNDER & 3D ARTIST</p>
                                        <p className="teamTexto">Programador, diseñador multimedia, <br></br>
                                            tester de videojuegos y un estratega <br></br>
                                            en la tecnología para mejorar la experiencia de vida
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </section>
                    </Col>
                    {/* SEPARATE */}
                    <Col xs={0} sm={0} md={4}>
                    
                    </Col>
                </Row>
            </Grid>
      </>
    );
  }
  
  export default Team;
  