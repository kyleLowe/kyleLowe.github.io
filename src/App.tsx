import { useRef, useEffect, useState } from 'react'
import * as THREE from 'three';
import './App.css'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { OrbitControls } from './utils/OrbitControls.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import About from './components/About';
import Socials from './components/Socials';
import Home from './components/Home';
import Projects from './components/Projects';
import gsap from 'gsap';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  };
  useEffect(() => {

  }, []);
  

  const [modalDisplay, setModalDisplay] = useState<'home' | 'about' | 'project' | 'contact' | null>('home');

//Hide and show modals with GSAP
useEffect(() => {
  const activeModal = document.querySelector(
    `.${modalDisplay}.modal`
  ) as HTMLDivElement | null;

  if (activeModal) {
    // fade in the new modal
    activeModal.style.display = "block";
    gsap.fromTo(
      activeModal,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    );
  }

  // hide all the others
  document.querySelectorAll(".modal").forEach((el) => {
    if (!el.classList.contains(modalDisplay || "")) {
      gsap.to(el, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          (el as HTMLDivElement).style.display = "none";
        },
      });
    }
  });
}, [modalDisplay]);


  useEffect(() => {
    if (!canvasRef.current) return;

    //Loader
  const textureLoader = new THREE.TextureLoader();
  const dracoLoader = new DRACOLoader();
  // Specify path to a folder containing WASM/JS decoding libraries.
  dracoLoader.setDecoderPath( '/draco/' );

  const manager = new THREE.LoadingManager();
  let touchHappened = false;

  const loadingScreen = document.querySelector('.loading-screen') as HTMLDivElement;
  const loadingButton = document.querySelector('.loading-screen-button') as HTMLDivElement;

  
manager.onLoad = function () {
  loadingButton.style.border = "8px solid #2a0f4e";
  loadingButton.style.background = "#401d49";
  loadingButton.style.color = "#e6dede";
  loadingButton.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
  loadingButton.textContent = "Enter!";
  loadingButton.style.cursor = "pointer";
  loadingButton.style.transition =
    "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)";
  let isDisabled = false;

  // noSoundButton.textContent = "Enter without Sound :(";

  function handleEnter() {
    if (isDisabled) return;

    // noSoundButton.textContent = "";
    loadingButton.style.cursor = "default";
    loadingButton.style.border = "8px solid #6e5e9c";
    loadingButton.style.background = "#ead7ef";
    loadingButton.style.color = "#6e5e9c";
    loadingButton.style.boxShadow = "none";
    loadingButton.textContent = "Welcome to my website";
    loadingScreen.style.background = "#ead7ef";
    isDisabled = true;

    // if (!withSound) {
    //   isMuted = true;
    //   updateMuteState(true);

    //   soundOnSvg.style.display = "none";
    //   soundOffSvg.style.display = "block";
    // } else {
    //   backgroundMusic.play();
    // }

    playReveal();
  }

  loadingButton.addEventListener("mouseenter", () => {
    loadingButton.style.transform = "scale(1.3)";
  });

  loadingButton.addEventListener("touchend", (e) => {
    touchHappened = true;
    e.preventDefault();
    handleEnter();
  });

  loadingButton.addEventListener("click", (e) => {
    if (touchHappened) return;
    handleEnter();
  });

  loadingButton.addEventListener("mouseleave", () => {
    loadingButton.style.transform = "none";
  });

};

function playReveal() {
  const tl = gsap.timeline();

  tl.to(loadingScreen, {
    scale: 0.5,
    duration: 1.2,
    delay: 0.25,
    ease: "back.in(1.8)",
  }).to(
    loadingScreen,
    {
      y: "200vh",
      transform: "perspective(1000px) rotateX(45deg) rotateY(-35deg)",
      duration: 1.2,
      ease: "back.in(1.8)",
      onComplete: () => {
        loadingScreen.remove();
      },
    },
    "-=0.1"
  );
}
  const loader = new GLTFLoader(manager);
  loader.setDRACOLoader( dracoLoader );

  const textureMap = {
    First:"/textures/TextureSet1.webp",
    Second:"/textures/TextureSet2.webp",
    Third:"/textures/TextureSet3.webp",
  }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(20, sizes.width / sizes.height, 0.1, 1000);
    camera.position.set(
52.74958451968441,
17.86980008290608,
55.89145232301112);

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const raycasterObjects: THREE.Object3D<THREE.Object3DEventMap>[] = [];
    let currentIntersects: string | any[] = [];
    let currentHoveredObject: THREE.Object3D[] | null = [];
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


    const controls = new OrbitControls(camera, renderer.domElement);

    //Control restrictions
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.update();
    controls.minDistance = 10;
    controls.maxDistance = 100;
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI / 2;
    controls.minAzimuthAngle = 0;
    controls.maxAzimuthAngle = Math.PI / 2;

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

    //Touch screen controls
    window.addEventListener("touchstart", (event) => {
      event.preventDefault();
    	pointer.x = ( event.touches[0].clientX / window.innerWidth ) * 2 - 1;
	    pointer.y = - ( event.touches[0].clientY / window.innerHeight ) * 2 + 1;
    },  { passive: false } );

    window.addEventListener("touchend", (event) => {
      event.preventDefault();
      handleRaycastingInteraction()
    },  { passive: false } );

    function handleRaycastingInteraction(){
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
        console.log(object.parent?.name)
        if (object.name && object.parent?.name.includes("AboutButton_First_Raycaster")) {
          console.log("About button clicked");
          setModalDisplay("about");
        }
        if (object.name && object.parent?.name.includes("HomeButton_First_Raycaster")) {
          setModalDisplay("home");
        }
        if (object.name && object.parent?.name.includes("ProjectButton_First_Raycaster")) {
          setModalDisplay("project");
        }
        if (object.name && object.parent?.name.includes("Contact_First_Raycaster")) {
          setModalDisplay("contact");
        }
      }
    }
    window.addEventListener("click", handleRaycastingInteraction); 

    // Load the model
    loader.load(
      '/models/RoomPortfolio.glb',
      (glb) => {
        glb.scene.traverse((child) => {
          
          if ((child as THREE.Mesh).isMesh) {
            // console.log('Mesh name:', child.name);
            (Object.keys(loadedTextures) as Array<keyof typeof loadedTextures>).forEach((key) => {
              // console.log(`Child name: ${child.parent?.name}, Checking for key: ${key}`);
              if (child.name.includes(key)) {
                const material = new THREE.MeshStandardMaterial({
                  map: loadedTextures[key],
                  side: THREE.DoubleSide,
                });
                (child as THREE.Mesh).material = material;
              }
              if (child.parent?.name.includes("Raycaster") || child.name.includes("Raycaster")) {
                raycasterObjects.push(child);
                child.userData.intialScale = new THREE.Vector3().copy(child.scale);
                child.userData.intialPosition = new THREE.Vector3().copy(child.position);
                child.userData.intialRotation = new THREE.Euler().copy(child.rotation);
                child.userData.isAnimating = false
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

    //Hover Animation
    function playHoverAnimation (object: THREE.Object3D, hover: boolean) {
      gsap.killTweensOf(object.scale);
      if(hover){
        gsap.to(object.scale, {
          x: object.userData.intialScale.x * 1.2,
          y: object.userData.intialScale.y * 1.2,
          z: object.userData.intialScale.z * 1.2,
          duration: 0.1,
          ease: "bounce.out",
        });
      }else{
        gsap.to(object.scale, {
          x: object.userData.intialScale.x,
          y: object.userData.intialScale.y,
          z: object.userData.intialScale.z
      })
    }
  }
    let animationId: number;
    const animate = () => {
      controls.update();
      // console.log('camera position:', camera.position);
      // console.log('controls position:', controls.target);
      	// update the picking ray with the camera and pointer position
      raycaster.setFromCamera( pointer, camera );

      // calculate objects intersecting the picking ray
      currentIntersects = raycaster.intersectObjects( raycasterObjects );

      for ( let i = 0; i < currentIntersects.length; i ++ ) {

        //Highlight object red on hover

        // const mesh = currentIntersects[i].object as THREE.Mesh;
        // if (
        //   mesh.material &&
        //   'color' in mesh.material &&
        //   mesh.material instanceof THREE.MeshStandardMaterial
        // ) {
        //   mesh.material.color.set(0xff0000);
        //   console.log(mesh.name)
        // }

      }
if (currentIntersects.length > 0) {
  const hoveredObject = currentIntersects[0].object;
  const parentObject = scene.getObjectByName(hoveredObject.parent?.name || '');

  // Determine which objects to hover
  let newHoveredObjects: THREE.Object3D[] = [];
  if (hoveredObject.name.includes("Raycaster")) {
    newHoveredObjects = [hoveredObject];
  } else if (parentObject) {
    newHoveredObjects = parentObject.children;
  } else {
    newHoveredObjects = [hoveredObject];
  }

  // Remove hover from previous objects
  if (currentHoveredObject && currentHoveredObject.length > 0) {
    currentHoveredObject.forEach(child => {
      playHoverAnimation(child, false);
    });
  }

  // Apply hover to new objects
  newHoveredObjects.forEach(child => {
    playHoverAnimation(child, true);
  });

  // Update the hovered objects array
  currentHoveredObject = newHoveredObjects;

  document.body.style.cursor = 'pointer';
}
      else{
          if(currentHoveredObject){
            currentHoveredObject.forEach(child => {
            playHoverAnimation(child, false);
          });
            currentHoveredObject = [];
          }
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
      <canvas
        ref={canvasRef}
        id="experience-canvas"
        className="experience-canvas"
      ></canvas>
      <div className="loading-screen">
        <div className="loading-screen-button">Loading...</div>
      </div>

      {modalDisplay && (
        <div id="websiteinfo">
          <div
            className="home modal"
            style={{ display: modalDisplay === "home" ? "block" : "none" }}
          >
            <Home onHide={() => setModalDisplay(null)} />
          </div>
          <div
            className="about modal"
            style={{ display: modalDisplay === "about" ? "block" : "none" }}
          >
            <About onHide={() => setModalDisplay(null)} />
          </div>
          <div
            className="project modal"
            style={{ display: modalDisplay === "project" ? "block" : "none" }}
          >
            <Projects onHide={() => setModalDisplay(null)} />
          </div>
          <div
            className="contact modal"
            style={{ display: modalDisplay === "contact" ? "block" : "none" }}
          >
            <Socials onHide={() => setModalDisplay(null)} />
          </div>
        </div>
      )}
    </div>
  );

}

export default App