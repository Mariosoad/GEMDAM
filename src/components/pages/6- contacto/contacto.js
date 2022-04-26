import React, {forwardRef} from "react";

//RSUITE
import { Form, Button, ButtonToolbar, Input, Grid, Row, Col  } from 'rsuite';

function Contacto() {

    const Textarea = forwardRef(
      (props, ref) => <Input {...props} as="textarea" ref={ref} />
    );

    return (
      <>
        <Grid fluid className="contColForm">
          <Row className="show-grid">
            <Col xs={8} sm={8} md={6}>
              <section>
              </section>
            </Col>
            <Col className="contForm" xs={24} sm={24} md={12}>
              <section>
                <article>
                  <Form>
                    <Form.Group controlId="name">
                      <Form.ControlLabel>Nombre y Apellido</Form.ControlLabel>
                      <Form.Control name="name" />
                      <Form.HelpText tooltip>Su nombre es requerido.</Form.HelpText>
                    </Form.Group>
                    <Form.Group controlId="email">
                      <Form.ControlLabel>Email</Form.ControlLabel>
                      <Form.Control name="email" type="email" />
                      <Form.HelpText tooltip>Ingrese su email.</Form.HelpText>
                    </Form.Group>
                    <Form.Group controlId="empresa">
                      <Form.ControlLabel>Empresa</Form.ControlLabel>
                      <Form.Control name="empresa" type="text" />
                      <Form.HelpText tooltip>Ingrese nombre de la empresa.</Form.HelpText>
                    </Form.Group>
                    <Form.Group controlId="asunto">
                      <Form.ControlLabel>Asunto</Form.ControlLabel>
                      <Form.Control name="asunto" type="text" />
                      <Form.HelpText tooltip>Escriba un asunto.</Form.HelpText>
                    </Form.Group>
                    <Form.Group controlId="textarea">
                      <Form.ControlLabel>Mensaje</Form.ControlLabel>
                      <Form.Control rows={5} name="textarea" accepter={Textarea} />
                      <Form.HelpText tooltip>Escriba un asunto.</Form.HelpText>
                    </Form.Group>
                    <Form.Group>
                      <ButtonToolbar>
                        <Button className="btnEnviar" appearance="primary">Enviar consulta</Button>
                      </ButtonToolbar>
                    </Form.Group>
                  </Form>
                </article>
              </section>
            </Col>
            <Col xs={8} sm={8} md={6}>
              <section>
              </section>
            </Col>
          </Row>
        </Grid>
      </>
    );
  }
  
  export default Contacto;
  