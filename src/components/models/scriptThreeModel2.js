//THREE JS
import * as THREE from "three"
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

let currentMount = null

//SCENE
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        25,
        100 / 100,
        0.1,
        1000
    )
    camera.position.z = 12
    scene.add(camera);

//RENDERER
    const renderer = new THREE.WebGLRenderer()

//ORBIT CONTROLS
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

//RESIZE
const resize = () => {
    renderer.setSize(
        currentMount.clientWidth, 
        currentMount.clientHeight
    )
    camera.aspect = currentMount.clientWidth / currentMount.clientHeight
    camera.updateProjectionMatrix()
}
window.addEventListener('resize', resize)

//MODEL GLTF LOADER
    const gltfLoader2 = new GLTFLoader()
    gltfLoader2.load('./media/model/cabeza/cabeza.gltf',
        (gltf) => { 
            scene.add(gltf.scene)
            console.log("SE CARGO EL MODELO")
         },
        () => {  },
        () => {  },
    )

//LIGHTS
    //AMBIENT LIGHT
    const AO = new THREE.AmbientLight(0xffffff, 1)
    scene.add(AO)
    //POINT LIGHT
    const pointLight = new THREE.PointLight(0xff0000, 1)
    pointLight.position.y = 2
    scene.add(pointLight)
    //DIRECTIONAL LIGHT
    const directionalLight = new THREE.DirectionalLight(
        0xf00000,
        1.3
    )
    directionalLight.position.set(5, 5, 5)
    //scene.add(directionalLight)

//HDR ENVIRONMENT MAP
    const enviromentMap = new THREE.CubeTextureLoader()
    const envMap = enviromentMap.load([
        './media/hdr/px.png',
        './media/hdr/nx.png',
        './media/hdr/py.png',
        './media/hdr/ny.png',
        './media/hdr/pz.png',
        './media/hdr/nz.png'
    ])
    //SCENA CON ENVMAP
    //scene.environment = envMap
    //FONDO ENVMAP
    //scene.background = envMap
   
//RENDER SCENE
    const animate = () => {
        controls.update()
        renderer.render(scene,camera)
        requestAnimationFrame(animate)
    }
    animate()

//INICIA SCENE
    export const mountScene2 = (mountRef2) => {
        currentMount = mountRef2.current
        resize()
        currentMount.appendChild(renderer.domElement)
    }

//CLEAN SCENE
    export const cleanUpScene2 = () => {
        scene.dispose()
        currentMount.removeChild(renderer.domElement)
    }