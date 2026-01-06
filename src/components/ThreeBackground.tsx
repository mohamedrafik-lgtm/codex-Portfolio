'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import gsap from 'gsap';

type Particle = {
  velocity: THREE.Vector3;
};

const POINT_COUNT = 280;
const SNAP_EPS = 0.35; // snap angles to 0/90/45
const BASE_CONNECTION = 16;
const LINE_COLOR = 0xff0000;
const LINE_COLOR_DARK = 0x660000;

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined' || !containerRef.current) return undefined;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Black background for Three.js canvas

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 40);

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      powerPreference: 'high-performance',
      alpha: false // Keep solid background
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1); // Solid black
    
    // Set canvas style to ensure it stays fixed
    const canvas = renderer.domElement;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.maxWidth = '100vw';
    canvas.style.maxHeight = '100vh';
    canvas.style.overflow = 'hidden';
    canvas.style.zIndex = '-1';
    
    containerRef.current.appendChild(canvas);

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.25,
      0.4,
      0.1
    );
    bloomPass.threshold = 0.85;
    bloomPass.strength = 0.25;
    bloomPass.radius = 0.15;
    composer.addPass(bloomPass);

    const group = new THREE.Group();
    scene.add(group);

    const particles: Particle[] = [];
    const pointPositions = new Float32Array(POINT_COUNT * 3);
    const pointGeometry = new THREE.BufferGeometry();
    pointGeometry.setAttribute('position', new THREE.BufferAttribute(pointPositions, 3));
    const pointMaterial = new THREE.PointsMaterial({
      color: LINE_COLOR,
      size: 0.14,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
    });
    const points = new THREE.Points(pointGeometry, pointMaterial);
    group.add(points);

    const maxConnections = POINT_COUNT * 8;
    const linePositions = new Float32Array(maxConnections * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));
    lineGeometry.setDrawRange(0, 0);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: LINE_COLOR_DARK,
      transparent: true,
      opacity: 0.3,
      linewidth: 1,
      depthWrite: false,
    });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    group.add(lines);

    let boundsX = 24;
    let boundsY = 14;
    let boundsZ = 18;
    const resizeBounds = () => {
      const distance = Math.abs(camera.position.z);
      const h = 2 * distance * Math.tan((camera.fov * Math.PI) / 360);
      const w = h * camera.aspect;
      boundsX = w * 0.75;
      boundsY = h * 0.75;
      boundsZ = (w + h) * 0.35;
    };
    resizeBounds();

    for (let i = 0; i < POINT_COUNT; i += 1) {
      const ix = i * 3;
      pointPositions[ix] = (Math.random() - 0.5) * boundsX * 1.1;
      pointPositions[ix + 1] = (Math.random() - 0.5) * boundsY * 1.1;
      pointPositions[ix + 2] = (Math.random() - 0.5) * boundsZ;
      particles.push({
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.005
        ),
      });
    }

    const mouse = new THREE.Vector2();
    const cameraTarget = { x: 0, y: 0 };

    const isCircuitAngle = (dx: number, dy: number, dz: number) => {
      const adx = Math.abs(dx);
      const ady = Math.abs(dy);
      const adz = Math.abs(dz);
      const close = SNAP_EPS;
      const axis = adx < close || ady < close || adz < close;
      const diagXY = Math.abs(adx - ady) < close;
      const diagXZ = Math.abs(adx - adz) < close;
      const diagYZ = Math.abs(ady - adz) < close;
      return axis || diagXY || diagXZ || diagYZ;
    };

    const onPointerMove = (event: PointerEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      gsap.to(cameraTarget, {
        x: mouse.x * 2.2,
        y: mouse.y * 1.8,
        duration: 0.4,
        ease: 'power2.out',
      });
    };
    window.addEventListener('pointermove', onPointerMove);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
      bloomPass.setSize(window.innerWidth, window.innerHeight);
      resizeBounds();
    };
    window.addEventListener('resize', onResize);

    const onScrollProgress = (e: Event) => {
      const customEvent = e as CustomEvent<{ progress: number; scrollY: number }>;
      const { progress, scrollY } = customEvent.detail;
      gsap.to(camera.position, {
        z: 40 + progress * 5,
        duration: 0.5,
        ease: 'power2.out',
      });
      gsap.to(group.rotation, {
        z: progress * 0.1,
        duration: 0.8,
        ease: 'power2.out',
      });
      const intensity = 0.25 + Math.sin(scrollY * 0.001) * 0.1;
      gsap.to(lineMaterial, {
        opacity: Math.max(0.2, Math.min(0.4, intensity)),
        duration: 0.3,
      });
    };
    window.addEventListener('scroll-progress', onScrollProgress as EventListener);

    // Card hover effect: pulse lines faster and brighter
    const onCardHover = (e: Event) => {
      const customEvent = e as CustomEvent<{ active: boolean }>;
      const { active } = customEvent.detail;

      if (active) {
        // Brighten and pulse faster
        gsap.to(lineMaterial, {
          opacity: 0.6,
          duration: 0.2,
          ease: 'power2.out',
        });
        gsap.to(pointMaterial, {
          size: 0.18,
          opacity: 1,
          duration: 0.2,
        });
      } else {
        // Restore normal state
        gsap.to(lineMaterial, {
          opacity: 0.3,
          duration: 0.3,
          ease: 'power2.out',
        });
        gsap.to(pointMaterial, {
          size: 0.14,
          opacity: 0.95,
          duration: 0.3,
        });
      }
    };
    window.addEventListener('card-hover', onCardHover as EventListener);

    // Section transition effects: camera shake + subtle zoom
    const onSectionTransition = (e: Event) => {
      const customEvent = e as CustomEvent<{ section: string; direction: string }>;
      const { direction } = customEvent.detail;

      // Camera shake effect
      const shakeAmount = 0.4;
      gsap.timeline()
        .to(camera.position, {
          x: `+=${Math.random() * shakeAmount - shakeAmount / 2}`,
          y: `+=${Math.random() * shakeAmount - shakeAmount / 2}`,
          duration: 0.1,
          ease: 'power2.out',
        })
        .to(camera.position, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: 'elastic.out(1, 0.3)',
        });

      // Subtle zoom-in effect
      gsap.timeline()
        .to(camera, {
          fov: direction === 'down' ? 58 : 62,
          duration: 0.2,
          ease: 'power2.inOut',
          onUpdate: () => camera.updateProjectionMatrix(),
        })
        .to(camera, {
          fov: 60,
          duration: 0.4,
          ease: 'power2.out',
          onUpdate: () => camera.updateProjectionMatrix(),
        });

      // Boost line brightness briefly
      gsap.timeline()
        .to(lineMaterial, {
          opacity: 0.6,
          duration: 0.15,
          ease: 'power2.in',
        })
        .to(lineMaterial, {
          opacity: 0.3,
          duration: 0.25,
          ease: 'power2.out',
        });
    };
    window.addEventListener('section-transition', onSectionTransition as EventListener);

    gsap.to(lineMaterial, {
      opacity: 0.35,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    const tempA = new THREE.Vector3();
    const tempB = new THREE.Vector3();

    const animate = () => {
      const pos = pointGeometry.attributes.position.array as Float32Array;
      let lineIdx = 0;
      const influence = Math.max(boundsX, boundsY) * 0.18;
      const cx = mouse.x * boundsX * 0.5;
      const cy = mouse.y * boundsY * 0.5;
      const maxConnect = Math.min(BASE_CONNECTION + boundsX * 0.2, 32);

      for (let i = 0; i < POINT_COUNT; i += 1) {
        const ix = i * 3;
        const p = particles[i];

        pos[ix] += p.velocity.x;
        pos[ix + 1] += p.velocity.y;
        pos[ix + 2] += p.velocity.z;

        if (Math.abs(pos[ix]) > boundsX * 0.52) p.velocity.x *= -1;
        if (Math.abs(pos[ix + 1]) > boundsY * 0.52) p.velocity.y *= -1;
        if (Math.abs(pos[ix + 2]) > boundsZ * 0.52) p.velocity.z *= -1;

        const dx = pos[ix] - cx;
        const dy = pos[ix + 1] - cy;
        const distSq = dx * dx + dy * dy;
        if (distSq < influence * influence) {
          const force = (influence - Math.sqrt(distSq)) * 0.0012;
          p.velocity.x += (dx / influence) * force;
          p.velocity.y += (dy / influence) * force;
        }
      }

      for (let i = 0; i < POINT_COUNT; i += 1) {
        tempA.fromArray(pos, i * 3);
        let connections = 0;
        for (let j = i + 1; j < POINT_COUNT; j += 1) {
          tempB.fromArray(pos, j * 3);
          const dx = tempA.x - tempB.x;
          const dy = tempA.y - tempB.y;
          const dz = tempA.z - tempB.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist > maxConnect) continue;
          if (!isCircuitAngle(dx, dy, dz)) continue;
          if (lineIdx + 6 >= linePositions.length) break;

          const alpha = 1 - dist / maxConnect;
          linePositions[lineIdx++] = tempA.x;
          linePositions[lineIdx++] = tempA.y;
          linePositions[lineIdx++] = tempA.z;
          linePositions[lineIdx++] = tempB.x;
          linePositions[lineIdx++] = tempB.y;
          linePositions[lineIdx++] = tempB.z;

          lineMaterial.opacity = 0.2 + alpha * 0.2;
          connections += 1;
          if (connections > 10) break;
        }
      }

      lineGeometry.setDrawRange(0, lineIdx / 3);
      lineGeometry.attributes.position.needsUpdate = true;
      pointGeometry.attributes.position.needsUpdate = true;

      gsap.to(group.position, {
        x: cameraTarget.x * 0.35,
        y: cameraTarget.y * 0.35,
        duration: 0.35,
        ease: 'power2.out',
      });
      camera.lookAt(0, 0, 0);

      composer.render();
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll-progress', onScrollProgress as EventListener);
      window.removeEventListener('section-transition', onSectionTransition as EventListener);
      window.removeEventListener('card-hover', onCardHover as EventListener);
      if (containerRef.current && renderer.domElement.parentElement === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      pointGeometry.dispose();
      pointMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      composer.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-full h-full overflow-hidden" 
      style={{ 
        zIndex: -1,
        pointerEvents: 'none',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'fixed',
        maxWidth: '100vw',
        maxHeight: '100vh'
      }} 
    />
  );
}
