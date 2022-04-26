import { useRef, useEffect } from 'react'

//IMPORT THREE MODEL SCENE
import { cleanUpScene, mountScene } from './scriptThree'
import { cleanUpScene2, mountScene2 } from './scriptThreeModel2'
import { cleanUpScene3, mountScene3 } from './scriptThreeModel3'

//RSUITE
import { Grid, Row, Col } from 'rsuite';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Keyboard } from 'swiper';

//IMAGE
import render6 from "../../media/image/archviz/img1.jpg";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Keyboard]);

const PruebaTexture = () => {

    const mountRef = useRef(null)
    const mountRef2 = useRef(null)
    const mountRef3 = useRef(null)

    useEffect(() => {
        mountScene(mountRef)
        mountScene2(mountRef2)
        mountScene3(mountRef3)
    //CLEAN SCENE 
        return () =>{
            cleanUpScene()
            cleanUpScene2()
            cleanUpScene3()
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
                                    ref={mountRef}
                                    style={{width:'100%', height: '100vh'}}
                                >
                                    {/* MODELO 3D */}
                                </div>
                            </article>
                        </section>
                    </Col>
                    <Col style={{border:'1px solid black'}}  xs={24} sm={24} md={8}>
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
                    <Col style={{border:'1px solid black'}}  xs={24} sm={24} md={8}>
                        <section>
                            <article>

                            </article>
                        </section>
                    </Col>
                    <Col xs={24} sm={24} md={24}>
                        <Swiper  
                            cssMode={true}
                            keyboard={true}

                            slidesPerView={3} 
                            spaceBetween={10} 
                            slidesPerGroup={1} 
                            loop={true} 
                            pagination={{
                                "clickable": false
                            }} 
                            navigation={true} >
                        <SwiperSlide>                                 
                            <div
                                className='tamImg'
                                ref={mountRef3}
                            >
                            </div> 
                        </SwiperSlide>
                        <SwiperSlide> <img className='tamImg' src={render6} /> </SwiperSlide>
                        <SwiperSlide> <img className='tamImg' src={render6} /> </SwiperSlide>
                        <SwiperSlide> <img className='tamImg' src={render6} /> </SwiperSlide>
                        <SwiperSlide> <img className='tamImg' src={render6} /> </SwiperSlide>
                        <SwiperSlide> <img className='tamImg' src={render6} /> </SwiperSlide>
                        </Swiper>
                    </Col>
                    <Col xs={24} sm={24} md={24}>
                        <div style={{height:'400px'}}>

                        </div>
                    </Col>
                </Row>
            </Grid>
        </>
    )
}

export default PruebaTexture;
