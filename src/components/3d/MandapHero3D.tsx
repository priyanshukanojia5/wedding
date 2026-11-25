import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { isWebGLAvailable } from '../../utils/webglCheck';

export const MandapHero3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    if (!isWebGLAvailable() || !containerRef.current) {
      setHasWebGL(false);
      return;
    }

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.5, 9.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Group for entire mandap
    const mandapGroup = new THREE.Group();
    scene.add(mandapGroup);

    // Materials - Antique Gold & Brass
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xc5a15b,
      roughness: 0.3,
      metalness: 0.85,
    });

    const polishedGoldMaterial = new THREE.MeshStandardMaterial({
      color: 0xe5cb8c,
      roughness: 0.2,
      metalness: 0.9,
    });

    const brassMaterial = new THREE.MeshStandardMaterial({
      color: 0x9e7b35,
      roughness: 0.35,
      metalness: 0.8,
    });

    const maroonFabric = new THREE.MeshStandardMaterial({
      color: 0x5a121e,
      roughness: 0.85,
      metalness: 0.1,
    });

    // Helper: Create an ornamental pillar
    const createPillar = (x: number, z: number) => {
      const pillarGroup = new THREE.Group();
      pillarGroup.position.set(x, -2.6, z);

      // Base Pedestal
      const baseGeo = new THREE.CylinderGeometry(0.35, 0.42, 0.3, 16);
      const baseMesh = new THREE.Mesh(baseGeo, brassMaterial);
      baseMesh.position.y = 0.15;
      pillarGroup.add(baseMesh);

      // Lower ring
      const lowerRingGeo = new THREE.TorusGeometry(0.34, 0.05, 8, 24);
      const lowerRing = new THREE.Mesh(lowerRingGeo, polishedGoldMaterial);
      lowerRing.rotation.x = Math.PI / 2;
      lowerRing.position.y = 0.35;
      pillarGroup.add(lowerRing);

      // Main Column Shaft
      const shaftGeo = new THREE.CylinderGeometry(0.22, 0.25, 4.4, 16);
      const shaftMesh = new THREE.Mesh(shaftGeo, goldMaterial);
      shaftMesh.position.y = 2.55;
      pillarGroup.add(shaftMesh);

      // Middle decorative ring
      const midRingGeo = new THREE.TorusGeometry(0.26, 0.04, 8, 24);
      const midRing = new THREE.Mesh(midRingGeo, polishedGoldMaterial);
      midRing.rotation.x = Math.PI / 2;
      midRing.position.y = 2.5;
      pillarGroup.add(midRing);

      // Upper capital
      const capitalGeo = new THREE.CylinderGeometry(0.42, 0.24, 0.4, 16);
      const capitalMesh = new THREE.Mesh(capitalGeo, brassMaterial);
      capitalMesh.position.y = 4.8;
      pillarGroup.add(capitalMesh);

      // Top abacus ring
      const topRingGeo = new THREE.TorusGeometry(0.42, 0.05, 8, 24);
      const topRing = new THREE.Mesh(topRingGeo, polishedGoldMaterial);
      topRing.rotation.x = Math.PI / 2;
      topRing.position.y = 5.0;
      pillarGroup.add(topRing);

      return pillarGroup;
    };

    // Four Mandap Pillars
    const p1 = createPillar(-2.9, 0.4);
    const p2 = createPillar(2.9, 0.4);
    const p3 = createPillar(-2.5, -2.2);
    const p4 = createPillar(2.5, -2.2);
    mandapGroup.add(p1, p2, p3, p4);

    // Front Arch Canopy Beam
    const archCurve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-2.9, 2.4, 0.4),
      new THREE.Vector3(0, 3.8, 0.4),
      new THREE.Vector3(2.9, 2.4, 0.4)
    );
    const archTubeGeo = new THREE.TubeGeometry(archCurve, 32, 0.12, 12, false);
    const archMesh = new THREE.Mesh(archTubeGeo, polishedGoldMaterial);
    mandapGroup.add(archMesh);

    // Secondary decorative arch
    const archInnerCurve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-2.6, 2.2, 0.4),
      new THREE.Vector3(0, 3.3, 0.4),
      new THREE.Vector3(2.6, 2.2, 0.4)
    );
    const archInnerGeo = new THREE.TubeGeometry(archInnerCurve, 28, 0.06, 8, false);
    const archInnerMesh = new THREE.Mesh(archInnerGeo, goldMaterial);
    mandapGroup.add(archInnerMesh);

    // Mandap Dome Ceiling structure
    const domeGeo = new THREE.SphereGeometry(3.2, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2.8);
    const domeMesh = new THREE.Mesh(domeGeo, maroonFabric);
    domeMesh.position.set(0, 1.8, -0.9);
    mandapGroup.add(domeMesh);

    // Dome Kalash (Finial at top)
    const kalashGroup = new THREE.Group();
    kalashGroup.position.set(0, 4.4, -0.9);
    const kalashPot = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), polishedGoldMaterial);
    const kalashSpire = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.6, 12), polishedGoldMaterial);
    kalashSpire.position.y = 0.4;
    kalashGroup.add(kalashPot, kalashSpire);
    mandapGroup.add(kalashGroup);

    // Centerpiece Diya
    const diyaGroup = new THREE.Group();
    diyaGroup.position.set(0, -2.1, 0.8);

    // Brass Diya Base & Bowl
    const diyaBaseGeo = new THREE.CylinderGeometry(0.55, 0.65, 0.15, 24);
    const diyaBase = new THREE.Mesh(diyaBaseGeo, brassMaterial);
    diyaGroup.add(diyaBase);

    const diyaCupGeo = new THREE.CylinderGeometry(0.5, 0.25, 0.35, 24);
    const diyaCup = new THREE.Mesh(diyaCupGeo, polishedGoldMaterial);
    diyaCup.position.y = 0.25;
    diyaGroup.add(diyaCup);

    // Oil surface in Diya
    const oilGeo = new THREE.CircleGeometry(0.46, 24);
    const oilMat = new THREE.MeshStandardMaterial({
      color: 0x936526,
      roughness: 0.1,
      metalness: 0.6,
    });
    const oilMesh = new THREE.Mesh(oilGeo, oilMat);
    oilMesh.rotation.x = -Math.PI / 2;
    oilMesh.position.y = 0.41;
    diyaGroup.add(oilMesh);

    // Diya Flame Mesh (Tear-drop flame)
    const flameGeo = new THREE.ConeGeometry(0.14, 0.45, 12);
    const flameMat = new THREE.MeshBasicMaterial({
      color: 0xffd54f,
    });
    const flameMesh = new THREE.Mesh(flameGeo, flameMat);
    flameMesh.position.y = 0.62;
    diyaGroup.add(flameMesh);

    const flameInnerGeo = new THREE.ConeGeometry(0.08, 0.3, 12);
    const flameInnerMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
    });
    const flameInnerMesh = new THREE.Mesh(flameInnerGeo, flameInnerMat);
    flameInnerMesh.position.y = 0.58;
    diyaGroup.add(flameInnerMesh);

    mandapGroup.add(diyaGroup);

    // Rotating Wedding Medallion / Emblem
    const emblemGroup = new THREE.Group();
    emblemGroup.position.set(0, 1.4, 0.2);

    const discGeo = new THREE.CylinderGeometry(1.0, 1.0, 0.08, 32);
    const discMesh = new THREE.Mesh(discGeo, polishedGoldMaterial);
    discMesh.rotation.x = Math.PI / 2;
    emblemGroup.add(discMesh);

    // Ornate Ring around Medallion
    const rimGeo = new THREE.TorusGeometry(1.1, 0.07, 12, 32);
    const rimMesh = new THREE.Mesh(rimGeo, goldMaterial);
    emblemGroup.add(rimMesh);

    // Outer decorative dots
    for (let i = 0; i < 16; i++) {
      const angle = (i / 16) * Math.PI * 2;
      const dotGeo = new THREE.SphereGeometry(0.045, 8, 8);
      const dotMesh = new THREE.Mesh(dotGeo, polishedGoldMaterial);
      dotMesh.position.set(Math.cos(angle) * 1.2, Math.sin(angle) * 1.2, 0);
      emblemGroup.add(dotMesh);
    }

    mandapGroup.add(emblemGroup);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x4a101b, 1.2);
    scene.add(ambientLight);

    const goldDirLight = new THREE.DirectionalLight(0xffecd0, 1.8);
    goldDirLight.position.set(4, 7, 5);
    scene.add(goldDirLight);

    const fillLight = new THREE.DirectionalLight(0xc5a15b, 0.9);
    fillLight.position.set(-4, 3, 2);
    scene.add(fillLight);

    // Point Light from Diya Flame
    const diyaLight = new THREE.PointLight(0xff9922, 2.8, 8, 1.2);
    diyaLight.position.set(0, -1.4, 0.9);
    scene.add(diyaLight);

    // 3D Floating Petals System
    const petalCount = 75;
    const petalGroup = new THREE.Group();
    scene.add(petalGroup);

    interface PetalData {
      mesh: THREE.Mesh;
      speedY: number;
      rotSpeedX: number;
      rotSpeedY: number;
      rotSpeedZ: number;
      windOffset: number;
    }

    const petals: PetalData[] = [];
    const rosePetalMat = new THREE.MeshStandardMaterial({
      color: 0x8b1e2c,
      roughness: 0.6,
      side: THREE.DoubleSide,
    });
    const marigoldPetalMat = new THREE.MeshStandardMaterial({
      color: 0xe5a024,
      roughness: 0.5,
      side: THREE.DoubleSide,
    });

    const petalGeo = new THREE.SphereGeometry(0.14, 7, 7);
    petalGeo.scale(1, 0.25, 1.8); // Flatten to petal shape

    for (let i = 0; i < petalCount; i++) {
      const mat = i % 2 === 0 ? rosePetalMat : marigoldPetalMat;
      const mesh = new THREE.Mesh(petalGeo, mat);
      mesh.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 8 + 1,
        (Math.random() - 0.5) * 6 + 1
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      const scale = 0.6 + Math.random() * 0.8;
      mesh.scale.set(scale, scale, scale);

      petalGroup.add(mesh);
      petals.push({
        mesh,
        speedY: 0.008 + Math.random() * 0.012,
        rotSpeedX: (Math.random() - 0.5) * 0.03,
        rotSpeedY: (Math.random() - 0.5) * 0.03,
        rotSpeedZ: (Math.random() - 0.5) * 0.02,
        windOffset: Math.random() * Math.PI * 2,
      });
    }

    // Parallax Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = 0;
    let targetCameraY = 0.5;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Diya Flame Flicker
      const flicker = Math.sin(elapsedTime * 15) * 0.08 + Math.cos(elapsedTime * 23) * 0.05;
      flameMesh.scale.set(1 + flicker, 1 + flicker * 1.5, 1 + flicker);
      diyaLight.intensity = 2.8 + flicker * 2.0;

      // Rotate Emblem gracefully
      emblemGroup.rotation.y = Math.sin(elapsedTime * 0.5) * 0.35;
      emblemGroup.rotation.z = Math.cos(elapsedTime * 0.4) * 0.05;

      // Animate Petals
      petals.forEach((p) => {
        p.mesh.position.y -= p.speedY;
        p.mesh.position.x += Math.sin(elapsedTime + p.windOffset) * 0.005;
        p.mesh.position.z += Math.cos(elapsedTime + p.windOffset) * 0.003;

        p.mesh.rotation.x += p.rotSpeedX;
        p.mesh.rotation.y += p.rotSpeedY;
        p.mesh.rotation.z += p.rotSpeedZ;

        // Reset if petal falls below floor
        if (p.mesh.position.y < -3.5) {
          p.mesh.position.y = 4.5;
          p.mesh.position.x = (Math.random() - 0.5) * 10;
          p.mesh.position.z = (Math.random() - 0.5) * 6 + 1;
        }
      });

      // Camera Lerp Parallax
      targetCameraX = mouseX * 0.6;
      targetCameraY = 0.5 + mouseY * 0.4;

      camera.position.x += (targetCameraX - camera.position.x) * 0.04;
      camera.position.y += (targetCameraY - camera.position.y) * 0.04;
      camera.lookAt(0, 0.4, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[520px] md:min-h-[640px] flex items-center justify-center">
      {hasWebGL ? (
        <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-auto" />
      ) : (
        /* Graceful 2D WebGL Fallback */
        <div className="absolute inset-0 flex items-center justify-center bg-radial from-[#4A101B]/50 to-transparent">
          <img
            src="/images/haldi-decor.jpg"
            alt="Traditional Mandap Backdrop"
            className="w-full h-full object-cover opacity-30 mix-blend-screen"
          />
        </div>
      )}
    </div>
  );
};
