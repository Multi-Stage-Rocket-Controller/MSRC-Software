import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; // For loading models

const style = {
  border: "2px solid green",
  borderRadius: "10px",
  width: "200px",
  height: "240px",
  display: "inline-grid",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Orbitron, sans-serif",
  backgroundColor: "#375237",
};

const TitleStyle = {
  color: "white",
  fontFamily: "Orbitron, sans-serif",
  margin: "0",
};

const scene = new THREE.Scene();

const loader = new GLTFLoader();

loader.load(
  "./../../public/assets/models/red_rocket.glb", // Path to the GLB model
  function (gltf) {
    scene.add(gltf.scene); // Add the loaded model to the scene
    gltf.scene.position.set(0, 0, 0); // Optional: Adjust the model's position if needed
  },
  undefined,
  function (error) {
    console.error(error); // Handle loading errors
  }
);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
// Remove this line if you don't need the cube anymore
scene.add(cube); 

const light = new THREE.AmbientLight(0x404040);
scene.add(light);

const RocketBox = ({ label, cameraPosition }) => {
  const mountRef = useRef(null); // Create a ref to attach the Three.js renderer

  useEffect(() => {
    // Create a camera for this RocketBox
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.set(...cameraPosition); // Set the camera's position based on props
    camera.lookAt(0, 0, 0); // Ensure the camera is always looking at the center of the scene (model's origin)

    // Renderer setup
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(150, 150); // Set the size of the canvas
    mountRef.current.appendChild(renderer.domElement); // Attach the renderer's canvas to the DOM

    // Animation function
    const animate = function () {
      requestAnimationFrame(animate);

      // Cube rotation (applies to the shared cube across all RocketBoxes)
      cube.rotation.x += 0.001;
      cube.rotation.y += 0.001;

      renderer.render(scene, camera); // Render the shared scene from the camera's perspective
    };

    animate();
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [cameraPosition]);

  return (
    <div style={style}>
      <p style={TitleStyle}>{label}</p>
      <div ref={mountRef} /> {/* This div will contain the Three.js renderer */}
    </div>
  );
};

export default RocketBox;
