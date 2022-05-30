import React, { useEffect, useRef } from "react";
import styles from "./Sponsoring.module.css";
import * as THREE from "three";
import {
  CSS2DObject,
  CSS2DRenderer,
} from "three/examples/jsm/renderers/CSS2DRenderer";
import logoSrc from "../../../static/img/logo.png";
import { Object3D } from "three";
import Sponsors from "./Sponsors";

// TODO: Use orbitcontrols to simulate rotation instead of doing it manually

export const Sponsoring = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const nodes = [];
    const nodeNumber = 50;
    let camera, scene, renderer, renderer2D;
    let baseSpeed = 0.002;
    let logo;

    let canvas;

    init();

    function init() {
      canvas = canvasRef.current;

      camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.01,
        10
      );
      camera.position.z = 1;

      scene = new THREE.Scene();

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas,
        alpha: true,
      });
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      renderer2D = new CSS2DRenderer();
      renderer2D.setSize(canvas.clientWidth, canvas.clientHeight);
      renderer2D.domElement.style.position = "absolute";
      renderer2D.domElement.style.marginTop = `-${canvas.clientHeight}px`;
      renderer2D.domElement.style.pointerEvents = "none";
      canvas.parentNode.appendChild(renderer2D.domElement);

      const htmlLogo = document.createElement("img");
      htmlLogo.src = logoSrc;
      htmlLogo.className = `${styles.sponsoringIfcjsLogo} logo-spin`;
      const htmlLogoContainer = document.createElement("div");
      htmlLogoContainer.appendChild(htmlLogo);
      logo = new CSS2DObject(htmlLogoContainer);
      scene.add(logo);

      const littleSphere = new THREE.SphereGeometry(0.01, 5, 5);
      const mat = new THREE.MeshBasicMaterial({ color: 0x428cec });

      for (let i = 0; i < nodeNumber; i++) {
        const root = new Object3D();
        const label = new THREE.Mesh(littleSphere, mat);
        label.position.set(
          getRandom(0.3, 0.1),
          getRandom(0.3, 0.1),
          getRandom(0.3, 0.1)
        );
        root.add(label);
        scene.add(root);
        nodes.push({ mesh: root, speed: getRandom(0.008, 0.002) });
      }

      for (let i = 0; i < Sponsors.length; i++) {
        const root = new Object3D();
        const htmlRoot = document.createElement("div");

        const htmlText = document.createElement("div");
        htmlText.innerText = Sponsors[i].name;
        htmlText.className = `${styles.sponsorText} ${styles.hidden}`;

        const htmlImage = document.createElement("img");
        htmlImage.className = styles.sponsorPicture;
        htmlImage.src = Sponsors[i].source;
        htmlImage.onclick = () => window.open(Sponsors[i].link);
        htmlImage.onmouseenter = (event) =>
          (htmlText.className = `${styles.sponsorText}`);
        htmlImage.onmouseleave = (event) =>
          (htmlText.className = `${styles.sponsorText} ${styles.hidden}`);

        htmlRoot.appendChild(htmlText);
        htmlRoot.appendChild(htmlImage);

        const label = new CSS2DObject(htmlRoot);
        label.position.set(
          getRandom(0.2, 0.05),
          getRandom(0.2, 0.05),
          getRandom(0.2, 0.05)
        );

        // nodes.push(label);
        root.add(label);
        scene.add(root);
        nodes.push({ mesh: root, speed: getRandom(0.01, 0.001) });
      }
    }

    (function animation() {
      renderer.render(scene, camera);
      renderer2D.render(scene, camera);

      nodes.forEach((node) => updateNode(node));

      requestAnimationFrame(animation);
    })();

    function updateNode(node) {
      node.mesh.rotation.x += baseSpeed + node.speed;
      node.mesh.rotation.y += baseSpeed + node.speed;
      if (node.mesh.rotation.x > 2 * Math.PI) node.mesh.rotation.x = 0;
      if (node.mesh.rotation.y > 2 * Math.PI) node.mesh.rotation.y = 0;
    }

    function getRandom(factor, min = 0, onlyPositive = false) {
      const positiveOrNegative = Math.random() > 0.5 || onlyPositive ? 1 : -1;
      return (
        Math.random() * positiveOrNegative * factor + min * positiveOrNegative
      );
    }

    function resize() {
      const canvas = canvasRef.current;
      const size = {};
      size.width = canvas.clientWidth;
      size.height = canvas.clientHeight;
      camera.aspect = size.width / size.height;
      camera.updateProjectionMatrix();
      renderer.setSize(size.width, size.height);
      renderer2D.setSize(size.width, size.height);
    }

    resize();

    window.addEventListener("resize", () => resize());
  }, []);

  return (
    <div>
      <canvas className={styles.sponsoringCanvas} ref={canvasRef} />
    </div>
  );
};
