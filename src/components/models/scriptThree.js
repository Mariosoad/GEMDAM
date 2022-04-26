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

//GLTF LOADER
    const geometryGrava = new GLTFLoader()
    geometryGrava.load('./media/model/cabeza2/grava2.glb'
    // ,
    //     (gltf) => { 
    //         scene.add(gltf.scene)
    //         console.log("SE CARGO EL MODELO")
    //      },
    //     () => {  },
    //     () => {  },
    )

    //TEXTURES GRAVA
    const textureGrava = new THREE.TextureLoader()
    // const colorGrava = textureGrava.load('./media/texturesGrava/TX_Grava_001_BaseColor')
    const mapGrava = textureGrava.load('./mediaTX_Grava_001_BaseColor')
    const aoMapGrava = textureGrava.load('./media/texturesGrava/TX_Grava_001_AO')
    const metalnessMapGrava = textureGrava.load('./media/texturesGrava/TX_Grava_001_Metallic')
    const roughnessMapGrava = textureGrava.load('./media/texturesGrava/TX_Grava_001_Roughness')
    const normalMapGrava = textureGrava.load('./media/texturesGrava/TX_Grava_001_Normal')
    const heightMapGrava = textureGrava.load('./media/texturesGrava/Brick_Wall_012_DISP.png')
    // const displacementMap = textureGrava.load('./media/texturesGrava/Brick_Wall_012_DISP.png')

    //SPHERE GRAVA
    // const geometryGrava = new THREE.SphereBufferGeometry()
    const materialGrava = new THREE.MeshStandardMaterial({
        map: mapGrava,
        aoMap: aoMapGrava,
        metalnessMap : metalnessMapGrava,
        roughnessMap: roughnessMapGrava,
        normalMap: normalMapGrava,
        displacementMap: heightMapGrava,
        displacementScale: 0.01
    })

    const grava = new THREE.Mesh(
        geometryGrava,
        materialGrava
    )
    grava.scale.set(1,1,1)
    scene.add(grava);

//TEXTURES
    const textureLoader = new THREE.TextureLoader()
    const map = textureLoader.load('./media/textures/Brick_Wall_012_COLOR.jpg')
    const aoMap = textureLoader.load('./media/textures/Brick_Wall_012_OCC.jpg')
    const roughnessMap = textureLoader.load('./media/textures/Brick_Wall_012_ROUGH.jpg')
    const normalMap = textureLoader.load('./media/textures/Brick_Wall_012_NORM.jpg')
    const heightMap = textureLoader.load('./media/textures/Brick_Wall_012_DISP.png')

//SPHERE
    const geometry = new THREE.SphereBufferGeometry()
    const material = new THREE.MeshStandardMaterial({
        map: map,
        aoMap: aoMap,
        roughnessMap: roughnessMap,
        normalMap: normalMap,
        displacementMap: heightMap,
        displacementScale: 0.01
    })

    const sphere = new THREE.Mesh(
        geometry,
        material
    )
    sphere.scale.set(1,1,1)
    scene.add(sphere);

//LIGHTS
    //AMBIENT LIGHT
    const AO = new THREE.AmbientLight(0xffffff, 1)
    //scene.add(AO)
    //POINT LIGHT
    const pointLight = new THREE.PointLight(0xff0000, 1)
    pointLight.position.y = 2
    //scene.add(pointLight)
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
    scene.environment = envMap
    scene.background = envMap
   
//RENDER SCENE
    const animate = () => {
        controls.update()
        renderer.render(scene,camera)
        requestAnimationFrame(animate)
    }
    animate()

//INICIA SCENE
    export const mountScene = (mountRef) => {
        currentMount = mountRef.current
        resize()
        currentMount.appendChild(renderer.domElement)
    }

//CLEAN SCENE
    export const cleanUpScene = () => {
        scene.dispose()
        currentMount.removeChild(renderer.domElement)
    }