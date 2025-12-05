import { useEffect, useRef } from 'react';

const ThreeDScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.async = true;
    script.onload = () => {
      initThreeJS();
    };
    document.body.appendChild(script);

    let scene, camera, renderer, animationId;
    let coreGroup, outerGroup;
    let mouseX = 0, mouseY = 0;

    const initThreeJS = () => {
      const THREE = window.THREE;
      if (!THREE || !mountRef.current) return;

      // 1. Scene Setup
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        60,
        mountRef.current.clientWidth / mountRef.current.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 20;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      mountRef.current.appendChild(renderer.domElement);

      // 2. Lighting
      const ambientLight = new THREE.AmbientLight(0x404040, 2);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xf59e0b, 2, 100);
      pointLight.position.set(0, 0, 0);
      scene.add(pointLight);

      const blueLight = new THREE.PointLight(0x3b82f6, 2, 50);
      blueLight.position.set(10, 5, 5);
      scene.add(blueLight);

      // 3. Central Core
      coreGroup = new THREE.Group();
      scene.add(coreGroup);

      const geometry = new THREE.IcosahedronGeometry(2, 1);
      const material = new THREE.MeshPhongMaterial({
        color: 0xf59e0b,
        emissive: 0xd97706,
        emissiveIntensity: 0.5,
        wireframe: false,
        shininess: 100
      });
      const core = new THREE.Mesh(geometry, material);
      coreGroup.add(core);

      // Wireframe Overlay
      const wireGeo = new THREE.IcosahedronGeometry(2.2, 2);
      const wireMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
        transparent: true,
        opacity: 0.1
      });
      const wireMesh = new THREE.Mesh(wireGeo, wireMat);
      coreGroup.add(wireMesh);

      // 4. Orbit Rings
      outerGroup = new THREE.Group();
      scene.add(outerGroup);

      const createRing = (radius, rotationX, rotationY) => {
        const curve = new THREE.EllipseCurve(
          0, 0,
          radius, radius,
          0, 2 * Math.PI,
          false,
          0
        );
        const points = curve.getPoints(100);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
          color: 0x60a5fa,
          transparent: true,
          opacity: 0.3
        });
        const ellipse = new THREE.Line(geometry, material);
        ellipse.rotation.x = rotationX;
        ellipse.rotation.y = rotationY;
        outerGroup.add(ellipse);
      };

      createRing(6, Math.PI / 2.5, 0);
      createRing(6, Math.PI / 2.5, Math.PI / 3);
      createRing(6, Math.PI / 2.5, -Math.PI / 3);

      // 5. HELPER FUNCTIONS FOR CUSTOM OBJECTS
      // Helper: Create Text Sprite (for Equations)
      const createTextSprite = (text, colorStr) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 512;
        canvas.height = 256;
        ctx.fillStyle = colorStr;
        ctx.font = 'Bold 80px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, 256, 128);
        const texture = new THREE.CanvasTexture(canvas);
        const material = new THREE.SpriteMaterial({ map: texture, transparent: true, opacity: 0.9 });
        const sprite = new THREE.Sprite(material);
        sprite.scale.set(3, 1.5, 1);
        return sprite;
      };

      // Helper: Create Science Flask
      const createFlask = (liquidColor) => {
        const group = new THREE.Group();
        const glassMat = new THREE.MeshPhongMaterial({ color: 0xffffff, transparent: true, opacity: 0.3, shininess: 100 });

        const bulbGeo = new THREE.SphereGeometry(0.4, 32, 32);
        const bulb = new THREE.Mesh(bulbGeo, glassMat);
        group.add(bulb);

        const neckGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.5, 32);
        const neck = new THREE.Mesh(neckGeo, glassMat);
        neck.position.y = 0.4;
        group.add(neck);

        const liquidGeo = new THREE.SphereGeometry(0.35, 32, 32);
        const liquidMat = new THREE.MeshPhongMaterial({ color: liquidColor, shininess: 50 });
        const liquid = new THREE.Mesh(liquidGeo, liquidMat);
        group.add(liquid);

        return group;
      };

      // Helper: Create DNA Segment
      const createDNA = () => {
        const group = new THREE.Group();
        const color1 = 0x60a5fa;
        const color2 = 0xf59e0b;

        for (let i = 0; i < 5; i++) {
          const y = (i - 2) * 0.2;
          const sphereGeo = new THREE.SphereGeometry(0.08, 8, 8);
          const mat1 = new THREE.MeshLambertMaterial({ color: color1 });
          const mat2 = new THREE.MeshLambertMaterial({ color: color2 });

          const s1 = new THREE.Mesh(sphereGeo, mat1);
          s1.position.set(0.2, y, 0);
          const s2 = new THREE.Mesh(sphereGeo, mat2);
          s2.position.set(-0.2, y, 0);

          const barGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.4, 8);
          barGeo.rotateZ(Math.PI / 2);
          const barMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
          const bar = new THREE.Mesh(barGeo, barMat);
          bar.position.set(0, y, 0);

          const pairGroup = new THREE.Group();
          pairGroup.add(s1);
          pairGroup.add(s2);
          pairGroup.add(bar);
          pairGroup.rotation.y = i * 0.5;
          group.add(pairGroup);
        }
        return group;
      };

      // Helper: Create Methane (CH4)
      const createMethane = () => {
        const group = new THREE.Group();

        const carbonGeo = new THREE.SphereGeometry(0.2, 32, 32);
        const carbonMat = new THREE.MeshPhongMaterial({ color: 0x333333 });
        const carbon = new THREE.Mesh(carbonGeo, carbonMat);
        group.add(carbon);

        const positions = [[1, 1, 1], [-1, -1, 1], [-1, 1, -1], [1, -1, -1]];
        const hydrogenGeo = new THREE.SphereGeometry(0.12, 16, 16);
        const hydrogenMat = new THREE.MeshPhongMaterial({ color: 0xffffff });
        const bondGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.1, 8);
        const bondMat = new THREE.MeshStandardMaterial({ color: 0x999999 });

        positions.forEach(pos => {
          const vec = new THREE.Vector3(...pos).normalize().multiplyScalar(0.4);

          const hAtom = new THREE.Mesh(hydrogenGeo, hydrogenMat);
          hAtom.position.copy(vec);
          group.add(hAtom);

          const bond = new THREE.Mesh(bondGeo, bondMat);
          const halfVec = vec.clone().multiplyScalar(0.5);
          bond.position.copy(halfVec);
          bond.lookAt(vec);
          bond.rotateX(Math.PI / 2);
          bond.scale.y = vec.length() * 10;
          group.add(bond);
        });

        return group;
      };

      // 6. POPULATE SCENE
      const shapes = [];
      const createFloatingObject = (type, param) => {
        let mesh;

        if (type === 'book') {
          const geo = new THREE.BoxGeometry(0.6, 0.8, 0.15);
          const mat = new THREE.MeshStandardMaterial({ color: param });
          mesh = new THREE.Mesh(geo, mat);
        } else if (type === 'math') {
          mesh = createTextSprite(param.text, param.color);
        } else if (type === 'flask') {
          mesh = createFlask(param);
        } else if (type === 'dna') {
          mesh = createDNA();
          mesh.scale.set(1.5, 1.5, 1.5);
        } else if (type === 'methane') {
          mesh = createMethane();
          mesh.scale.set(1.5, 1.5, 1.5);
        } else {
          const geo = new THREE.SphereGeometry(0.3, 16, 16);
          const mat = new THREE.MeshStandardMaterial({ color: param });
          mesh = new THREE.Mesh(geo, mat);
        }

        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);
        const r = 7 + Math.random() * 5;

        mesh.position.set(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        );

        mesh.userData = {
          rotSpeedX: Math.random() * 0.02,
          rotSpeedY: Math.random() * 0.02,
          orbitSpeed: 0.001 + Math.random() * 0.002
        };

        outerGroup.add(mesh);
        shapes.push(mesh);
      };

      // Add Books
      for (let i = 0; i < 6; i++) createFloatingObject('book', i % 2 === 0 ? 0xfcd34d : 0x3b82f6);

      // Add Math Equations
      const equations = [
        { text: 'E=mc²', color: '#fcd34d' },
        { text: 'π', color: '#ffffff' },
        { text: '∑', color: '#60a5fa' },
        { text: '√x', color: '#fcd34d' },
        { text: 'sin(θ)', color: '#ffffff' }
      ];
      equations.forEach(eq => createFloatingObject('math', eq));

      // Add Science Gadgets
      for (let i = 0; i < 3; i++) createFloatingObject('flask', i % 2 === 0 ? 0xff0000 : 0x00ff00);

      // Add DNA
      for (let i = 0; i < 4; i++) createFloatingObject('dna', null);

      // Add Molecules (Methane)
      for (let i = 0; i < 4; i++) createFloatingObject('methane', null);

      // Add generic atoms
      for (let i = 0; i < 4; i++) createFloatingObject('sphere', 0x60a5fa);

      // 6. Starfield
      const starGeo = new THREE.BufferGeometry();
      const starCount = 1000;
      const starPos = new Float32Array(starCount * 3);
      for (let i = 0; i < starCount * 3; i++) {
        starPos[i] = (Math.random() - 0.5) * 80;
      }
      starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
      const starMat = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.05,
        transparent: true,
        opacity: 0.6
      });
      const stars = new THREE.Points(starGeo, starMat);
      scene.add(stars);

      // 7. Interaction
      const handleMouseMove = (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      };
      window.addEventListener('mousemove', handleMouseMove);

      const handleResize = () => {
        if (!mountRef.current) return;
        camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      };
      window.addEventListener('resize', handleResize);

      // 8. Animation Loop
      const animate = () => {
        animationId = requestAnimationFrame(animate);

        coreGroup.rotation.y += 0.005;
        coreGroup.rotation.z += 0.002;

        outerGroup.rotation.y -= 0.001;

        shapes.forEach(shape => {
          if (shape.userData.rotSpeedX) {
            shape.rotation.x += shape.userData.rotSpeedX;
            shape.rotation.y += shape.userData.rotSpeedY;
          }
        });

        stars.rotation.y += 0.0005;

        const targetX = mouseX * 0.5;
        const targetY = mouseY * 0.5;
        scene.rotation.y += (targetX * 0.2 - scene.rotation.y) * 0.05;
        scene.rotation.x += (targetY * 0.2 - scene.rotation.x) * 0.05;

        renderer.render(scene, camera);
      };
      animate();
    };

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (renderer) {
        renderer.dispose();
      }
      if (mountRef.current && renderer) {
        mountRef.current.removeChild(renderer.domElement);
      }
      const scripts = document.querySelectorAll('script[src*="three.js"]');
      scripts.forEach(s => s.remove());
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default ThreeDScene;
