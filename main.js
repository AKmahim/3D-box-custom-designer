// =========================== here i can upload image from fabric canvas  all okay =======

// import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(56, 800 / 600, 0.1, 1000);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(800, 600);
// const canvas = document.getElementById('3d-canvas');
// canvas.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xffffff }); // Set an initial white color
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

// const fabricCanvas = document.getElementById('fabric-canvas');

// document.getElementById('sendTo3DButton').addEventListener('click', function () {
//     // Get the canvas image as a data URL
//     var imageDataURL = fabricCanvas.toDataURL('image/png');

//     // setTextureFromCanvas(imageDataURL);
//     setTextureFromCanvas(fabricCanvas)
// });

// // Function to set the texture from Fabric.js canvas
// function setTextureFromCanvas(canvas) {
//     const texture = new THREE.CanvasTexture(canvas);
//     cube.material.map = texture;
//     cube.material.needsUpdate = true;
// }

// function animate() {
//     requestAnimationFrame(animate);
//     cube.rotation.y += 0.01;
//     renderer.render(scene, camera);
// }

// animate();


// ==================================== add glb model and show add trying to add fabric canvas==
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(5, 800 / 600, 0.1, 1000);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(800, 600);
// const canvas = document.getElementById('3d-canvas');
// canvas.appendChild(renderer.domElement);



// const loader = new GLTFLoader();
// loader.load('/Main(Mesh).glb', (gltf) => {
//     const model = gltf.scene;
//     // console.log(model);
//     scene.add(model);
// });
// // console.log(model);

// camera.position.z = 4;
// // camera.lookAt(0, 0, 0);

// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
// scene.add(ambientLight);

// const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
// scene.add(directionalLight);

// const controls = new OrbitControls(camera, renderer.domElement);

// const animate = () => {
//     requestAnimationFrame(animate);
//     controls.update();
//     renderer.render(scene, camera);
// };

// animate();


// ============================= add fabric js function ===========
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(5, 800 / 600, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 600);
const canvas = document.getElementById('3d-canvas');
canvas.appendChild(renderer.domElement);
// canvas.style.backgroundColor = "transparent";

let model; // Create a variable to hold your 3D model
const fabricCanvas = document.getElementById('fabric-canvas');

document.getElementById('sendTo3DButton').addEventListener('click', function () {
    // Get the canvas image as a data URL
    var imageDataURL = fabricCanvas.toDataURL('image/png');

    // setTextureFromCanvas(imageDataURL);
    setTextureFromCanvas(fabricCanvas)
});
const loader = new GLTFLoader();
loader.load('/Main.glb', (gltf) => {
    model = gltf.scene; // Assign the loaded model to the 'model' variable
    scene.add(model);
    console.log('this is model : ',model);
    // Call the function to set the texture from Fabric.js canvas when the model is loaded
    setTextureFromCanvas(fabricCanvas);
});

camera.position.z = 1;

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
scene.add(directionalLight);

const controls = new OrbitControls(camera, renderer.domElement);

// Function to set the texture from Fabric.js canvas
function setTextureFromCanvas(canvas) {
    if (model) {
        const texture = new THREE.CanvasTexture(canvas);
        // console.dir(model[0]);
        const front = model.children.find(child => child.material.name === "1")
        console.log(front);
        // model.traverse(function (child) {
        //     console.log(child);
        //     if (child.isMesh) {
        //         child.material.map = texture;
        //         child.material.needsUpdate = true;
        //     }
        // });
        if (front) {
            texture.flipY = false;
            front.material.map = texture;
            front.material.needsUpdate = true;
        }
    }
}

const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    model.rotation.y +=0.04;
    renderer.render(scene, camera);
};

animate();
