import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Animation: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 10;

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        const confettiCount = 100;
        const particles: THREE.Mesh[] = [];

        // 寒色系のカラーパレットを定義
        const coldColors = [0x3498db, 0x1abc9c, 0x9b59b6, 0x5dade2, 0x2980b9];

        for (let i = 0; i < confettiCount; i++) {
            const geometry = new THREE.PlaneGeometry(0.2, 0.2);
            const material = new THREE.MeshBasicMaterial({
                color: coldColors[Math.floor(Math.random() * coldColors.length)],
                side: THREE.DoubleSide
            });

            const confetti = new THREE.Mesh(geometry, material);

            confetti.position.set(
                (Math.random() - 0.5) * 20,
                Math.random() * 10,
                (Math.random() - 0.5) * 20
            );

            confetti.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);

            particles.push(confetti);
            scene.add(confetti);
        }

        const animate = () => {
            requestAnimationFrame(animate);

            particles.forEach(confetti => {
                confetti.position.y -= 0.05; // 落下
                confetti.rotation.x += 0.02;
                confetti.rotation.y += 0.02;

                if (confetti.position.y < -5) {
                    confetti.position.y = Math.random() * 10;
                    confetti.position.x = (Math.random() - 0.5) * 20;
                    confetti.position.z = (Math.random() - 0.5) * 20;
                }
            });

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            container.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={containerRef} style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: -1 }} />;
};

export default Animation;