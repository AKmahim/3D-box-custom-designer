

// Import Three.js modules
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Initialize Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setSize(window.innerWidth/2.2,600);
const box = document.getElementById('box');
box.appendChild(renderer.domElement);
// renderer.setClearColor(0xeafaff);
renderer.setClearColor(0xffea00);

// Set the desired dimensions of the box
const width = 3;    // Replace with your desired width
const height = 4;   // Replace with your desired height
const depth = 0.8;  // Replace with your desired depth


// Load default textures
const defaultTextures = [
    '/img/default_top.png',
    '/img/default_left.png',
    '/img/default_right.png',
    '/img/default_top.png',
    '/img/default_front.png',
    '/img/default_back.png'
];


// const material = new THREE.MeshBasicMaterial({ color: 0xeafaff });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);
// ... (previous code)

// Get references to the sliders
const widthSlider = document.getElementById('widthSlider');
const heightSlider = document.getElementById('heightSlider');
const depthSlider = document.getElementById('depthSlider');



// Add event listeners to the sliders
widthSlider.addEventListener('input', updateBoxDimensions);
heightSlider.addEventListener('input', updateBoxDimensions);
depthSlider.addEventListener('input', updateBoxDimensions);



const materials = defaultTextures.map((textureURL) => {
    const texture = new THREE.Texture();
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const loader = new THREE.TextureLoader();
    loader.load(textureURL, (loadedTexture) => {
        // Set texture filters to prevent blurriness
        loadedTexture.minFilter = THREE.LinearFilter;
        loadedTexture.magFilter = THREE.LinearFilter;
        material.map = loadedTexture;
        material.needsUpdate = true;
    });
    return material;
});

// Create a box
const geometry = new THREE.BoxGeometry(width, height, depth);
const cube = new THREE.Mesh(geometry, materials);
scene.add(cube);
// Function to update the box dimensions
function updateBoxDimensions() {
    const newWidth = parseFloat(widthSlider.value);
    const newHeight = parseFloat(heightSlider.value);
    const newDepth = parseFloat(depthSlider.value);

    cube.scale.set(newWidth, newHeight, newDepth);
}

for (let i = 0; i < 6; i++) {
    const texture = new THREE.Texture();
    const material = new THREE.MeshBasicMaterial({ map: texture });
    materials.push(material);
}


// Function to update texture based on uploaded image
function updateTexture(materialIndex, textureURL) {
    const loader = new THREE.TextureLoader();
    loader.load(textureURL, (texture) => {
        console.log('Texture loaded:', texture);
            // Set texture filters to prevent blurriness
        texture.minFilter = THREE.LinearFilter;  // Use LinearFilter for minification
        texture.magFilter = THREE.LinearFilter;  // Use LinearFilter for magnification
        materials[materialIndex].map = texture;
        materials[materialIndex].needsUpdate = true;
    });
}




// Handle file input changes
const fileInputs = document.querySelectorAll('input[type="file"]');
fileInputs.forEach((input, index) => {
    input.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const imageURL = URL.createObjectURL(file);
        console.log('Image URL:', imageURL);
        updateTexture(index, imageURL);
        }
    });

});


const controls = new OrbitControls(camera, renderer.domElement);

// Disable autorotation
controls.autoRotate = false;

// Set initial camera position
camera.position.set(0, 0, 5);

// Animation loop
const animate = () => {
    requestAnimationFrame(animate);

    // cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    // Update controls
    controls.update();

    // Render the scene
    // renderer.render(scene, camera);

    renderer.render(scene, camera);
};

animate();
