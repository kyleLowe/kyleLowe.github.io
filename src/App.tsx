import { useRef, useEffect } from 'react'
import * as THREE from 'three';
import './App.css'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { int } from 'three/tsl';

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
    const camera = new THREE.PerspectiveCamera(20, sizes.width / sizes.height, 0.1, 1000);
    camera.position.set(
59.59175271743869,
29.97916640627271,
63.47938369185648);
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const raycasterObjects: THREE.Object3D<THREE.Object3DEventMap>[] = [];
    let currentIntersects: string | any[] = [];

    const socialLinks = {
      Linkedin: "https://www.linkedin.com/in/kyle-lowe-90b232233/",
      Github: "https://github.com/kyleLowe",
    }


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

    //Initial camera position
    controls.target.set(
3.595150393092032,
6.377301327597979,
0.6121572902007696);

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

    //Mouse object controls
    window.addEventListener("mousemove", (event) => {
    	pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	  pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    });

    window.addEventListener("click", (event) => {
      if (currentIntersects.length > 0) {
        const object = currentIntersects[0].object;

        //Links to socials based on click
        Object.entries(socialLinks).forEach(([name, url]) => {
          if (object.name && object.name.includes(name)) {
            const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
            if (newWindow) {
              newWindow.opener = null;
            }
          }
        }); 
      }
    }); 

    // Load the model
    loader.load(
      '/models/RoomPortfolio.glb',
      (glb) => {
        glb.scene.traverse((child) => {
          
          if ((child as THREE.Mesh).isMesh) {
            console.log('Mesh name:', child.name);
            (Object.keys(loadedTextures) as Array<keyof typeof loadedTextures>).forEach((key) => {
              console.log(`Child name: ${child.parent?.name}, Checking for key: ${key}`);
              if (child.name.includes(key)) {
                const material = new THREE.MeshStandardMaterial({
                  map: loadedTextures[key],
                  side: THREE.DoubleSide,
                });
                (child as THREE.Mesh).material = material;
              }
              if (child.name.includes("Raycaster") || child.parent?.name.includes("Raycaster")) {
                raycasterObjects.push(child);
                console.log('Added to raycaster objects:', child.name);
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
      // console.log('camera position:', camera.position);
      // console.log('controls position:', controls.target);
      	// update the picking ray with the camera and pointer position
      raycaster.setFromCamera( pointer, camera );

      // calculate objects intersecting the picking ray
      currentIntersects = raycaster.intersectObjects( raycasterObjects );

      for ( let i = 0; i < currentIntersects.length; i ++ ) {

        const mesh = currentIntersects[i].object as THREE.Mesh;
        if (
          mesh.material &&
          'color' in mesh.material &&
          mesh.material instanceof THREE.MeshStandardMaterial
        ) {
          mesh.material.color.set(0xff0000);
        }

      }
      if (currentIntersects.length > 0) {
        document.body.style.cursor = 'pointer';

      }
      else{
        document.body.style.cursor = 'default';
      }


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