import { useRef, useEffect } from 'react'

//THREE JS
import * as THREE from "three"
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

const PruebaModel = () => {

    const mountRef = useRef(null)

    useEffect(() => {
        const currentMount = mountRef.current

        //SCENE
        //SCENE
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            25,
            currentMount.clientWidth / currentMount.clientHeight,
            0.1,
            1000
        )
        camera.position.z = 12
        scene.add(camera);

        //RENDERER
        //RENDERER
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(
            currentMount.clientWidth, 
            currentMount.clientHeight
        )
        currentMount.appendChild(renderer.domElement)

        //CONTROLS
        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true

        //CUBE
        const cube = new THREE.Mesh(
            new THREE.BoxBufferGeometry(1,1,1),
            new THREE.MeshBasicMaterial()
        )
        //scene.add(cube);
        //SPHERE
        const geometry = new THREE.SphereGeometry( 0.4, 32, 16 );
        const material = new THREE.MeshBasicMaterial( { 
            color: 0xff0000,
            transparent: true,
            opacity: 0.1,
            wireframe: true 
            } );
        const sphere = new THREE.Mesh( geometry, material );
        scene.add( sphere );
        sphere.position.x = 1.5
        //TORUS
        const geometry1 = new THREE.TorusKnotGeometry( 0.3, 0.1, 100, 16 );
        const material1 = new THREE.MeshNormalMaterial({
            flatShading: true
        });
        const torusKnot = new THREE.Mesh( geometry1, material1 );
        //scene.add( torusKnot );
        torusKnot.position.set(-1.5, 0, 0)

        //MODEL GLTF LOADER
        const gltfLoader = new GLTFLoader()
        gltfLoader.load('./cabeza/cabeza.gltf',
            (gltf) => { 
                scene.add(gltf.scene)
                console.log("SE CARGO EL MODELO")
            },
            () => {  },
            () => {  },
        )

        //TORUS2
        const textureLoader = new THREE.TextureLoader()
        const matcap = textureLoader.load('./media/matCapDorado.png')

        const geometry2 = new THREE.TorusKnotGeometry( 0.3, 0.1, 100, 16 );
        const material2 = new THREE.MeshMatcapMaterial({
            matcap: matcap
        });
        const torusKnot2 = new THREE.Mesh( geometry2, material2 );
        scene.add( torusKnot2 );
        torusKnot2.position.set(-3, 0, 0)

        //RENDER SCENE
        const animate = () => {
            controls.update()
            renderer.render(scene,camera)
            requestAnimationFrame(animate)
        }
        animate()

        //CLEAN SCENE 
        return () =>{
            currentMount.removeChild(renderer.domElement)
        }
    }, []) 

    return (
        <div
            className='Contenedor3D'
            ref={mountRef}
            style={{width:'100%', height: '100vh'}}
        >
        </div>
    )
}

export default PruebaModel;
