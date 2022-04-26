import { useRef, useEffect } from 'react'

//IMPORT THREE MODEL SCENE
import { cleanUpScene2, mountScene2 } from './scriptThreeModel2'

//RSUITE
import { Grid, Row, Col } from 'rsuite';

const PruebaTexture = () => {

    const mountRef2 = useRef(null)

    useEffect(() => {
        mountScene2(mountRef2)
    //CLEAN SCENE 
        return () =>{
            cleanUpScene2()
        }
    }, []) 

    return (
        <>
            <Grid fluid>
                <Row className="show-grid">
                    <Col style={{border:'1px solid black'}}  xs={24} sm={24} md={24}>
                        <section>
                            <article>
                                <div
                                    className='Contenedor3D'
                                    ref={mountRef2}
                                    style={{width:'100%', height: '100vh'}}
                                >
                                    {/* MODELO 3D */}
                                </div>
                            </article>
                        </section>
                    </Col>
                </Row>
            </Grid>
        </>
    )
}

export default PruebaTexture;
