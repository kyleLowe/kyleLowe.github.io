import { useRef, useEffect } from 'react'
import * as THREE from 'three';
import './App.css'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  //Loader
  const textureLoader = new THREE.TextureLoader();
  const dracoLoader = new DRACOLoader();
  // Specify path to a folder containing WASM/JS decoding libraries.
  dracoLoader.setDecoderPath( '/draco/' );

  const loader = new GLTFLoader();
  loader.setDRACOLoader( dracoLoader );

  const textureMap = {
    First:"/textures/TextureSet1.webp",
    Second:"/textures/TextureSet2.webp",
    Third:"/textures/TextureSet3.webp",
  }




  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
    camera.position.set(0, 20, 100);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 20, 10);
    scene.add(directionalLight);

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Example: add a cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.update();

         // Preload and configure textures
    const loadedTextures: Record<string, THREE.Texture> = {};
    Object.entries(textureMap).forEach(([key, path]) => {
      const tex = textureLoader.load(path);
      tex.flipY = false;
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      loadedTextures[key] = tex;
    });

     // Load the model
    loader.load(
      '/models/RoomPortfolio.glb',
      (glb) => {
        glb.scene.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            console.log('Mesh name:', child.name);
            (Object.keys(loadedTextures) as Array<keyof typeof loadedTextures>).forEach((key) => {
              if (child.name.includes(key)) {
                const material = new THREE.MeshStandardMaterial({
                  map: loadedTextures[key],
                  side: THREE.DoubleSide,
                });
                (child as THREE.Mesh).material = material;
              }
            });
          }
        });
        scene.add(glb.scene);
      },
      undefined,
      (error) => {
        console.error('An error happened loading the model:', error);
      }
    );

    //Event listener for resizing
    const handleResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      // Update camera and renderer
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width , sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', handleResize);

    let animationId: number;
    const animate = () => {
      controls.update();
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
    };
  }, []);

  return (
    <div id="experience">
      <canvas ref={canvasRef} id="experience-canvas" className="experience-canvas"></canvas>
    </div>
  );
}

export default App