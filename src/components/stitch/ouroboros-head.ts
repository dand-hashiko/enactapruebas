import * as THREE from "three";

export interface OuroborosHeadInstance {
  headGroup: THREE.Group;
  lowerJawGroup: THREE.Group;
  tongueMesh: THREE.LineSegments;
  eyeMaterial: THREE.LineBasicMaterial;
  animate: (elapsedTime: number) => void;
  dispose: () => void;
}

/**
 * createOuroborosHead — Constructor procedural de la cabeza de serpiente (Uróboros)
 *
 * Diseñada en estética wireframe bio-teal / ciber-tecnológica de alta precisión:
 * - Cráneo superior con arcos supraoculares y hocico de víbora angular.
 * - Mandíbula inferior articulada en postura de mordida abierta.
 * - Colmillos afilados curvados hacia atrás en menta luminiscente.
 * - Ojos facetados cibernéticos con pulsación de telemetría.
 * - Lengua bífida neón con oscilación periódica.
 */
export function createOuroborosHead(): OuroborosHeadInstance {
  const headGroup = new THREE.Group();

  // Materiales de alta fidelidad
  const wireMat = new THREE.LineBasicMaterial({
    color: 0x00e5a3,
    transparent: true,
    opacity: 0.85,
  });

  const hullMat = new THREE.MeshBasicMaterial({
    color: 0x002619,
    transparent: true,
    opacity: 0.35,
    side: THREE.DoubleSide,
  });

  const fangMat = new THREE.LineBasicMaterial({
    color: 0xa7ffeb,
    transparent: true,
    opacity: 0.95,
  });

  const eyeMaterial = new THREE.LineBasicMaterial({
    color: 0x43ffbb,
    transparent: true,
    opacity: 0.9,
  });

  const tongueMat = new THREE.LineBasicMaterial({
    color: 0x00ffc4,
    transparent: true,
    opacity: 0.95,
  });

  // 1. CRÁNEO SUPERIOR (Anatomía angular de víbora)
  const craniumSections = [
    { z: -1.2, w: 4.0, yt: 3.0, yb: -1.0 }, // Collar cuello
    { z: 0.0,  w: 4.4, yt: 3.2, yb: -1.0 }, // Base nuca
    { z: 3.8,  w: 5.8, yt: 3.8, yb: -1.2 }, // Glándulas temporales (forma triangular)
    { z: 7.5,  w: 4.6, yt: 3.0, yb: -0.8 }, // Arcos supraoculares / cuencas
    { z: 11.2, w: 3.2, yt: 2.2, yb: -0.6 }, // Maxilar medio
    { z: 14.2, w: 1.6, yt: 1.2, yb: -0.4 }, // Escama rostral
    { z: 15.6, w: 0.0, yt: 0.0, yb: 0.0 },  // Vértice punta del hocico
  ];

  const craniumVertices: number[] = [];
  const craniumIndices: number[] = [];

  for (let s = 0; s < craniumSections.length; s++) {
    const sec = craniumSections[s];
    if (sec.w === 0) {
      craniumVertices.push(0, (sec.yt + sec.yb) / 2, sec.z);
    } else {
      craniumVertices.push(
        0, sec.yt, sec.z,
        sec.w * 0.72, sec.yt * 0.9, sec.z,
        sec.w, (sec.yt + sec.yb) * 0.25, sec.z,
        sec.w * 0.8, sec.yb, sec.z,
        0, sec.yb, sec.z,
        -sec.w * 0.8, sec.yb, sec.z,
        -sec.w, (sec.yt + sec.yb) * 0.25, sec.z,
        -sec.w * 0.72, sec.yt * 0.9, sec.z
      );
    }
  }

  for (let s = 0; s < craniumSections.length - 2; s++) {
    const ringA = s * 8;
    const ringB = (s + 1) * 8;
    for (let i = 0; i < 8; i++) {
      const next = (i + 1) % 8;
      craniumIndices.push(
        ringA + i, ringB + i, ringB + next,
        ringA + i, ringB + next, ringA + next
      );
    }
  }

  const lastCraniumRing = (craniumSections.length - 2) * 8;
  const craniumTipIdx = lastCraniumRing + 8;
  for (let i = 0; i < 8; i++) {
    const next = (i + 1) % 8;
    craniumIndices.push(lastCraniumRing + i, craniumTipIdx, lastCraniumRing + next);
  }

  const craniumGeo = new THREE.BufferGeometry();
  craniumGeo.setAttribute("position", new THREE.Float32BufferAttribute(craniumVertices, 3));
  craniumGeo.setIndex(craniumIndices);
  craniumGeo.computeVertexNormals();

  const craniumWire = new THREE.WireframeGeometry(craniumGeo);
  const craniumWireMesh = new THREE.LineSegments(craniumWire, wireMat);
  const craniumHullMesh = new THREE.Mesh(craniumGeo, hullMat);

  headGroup.add(craniumWireMesh);
  headGroup.add(craniumHullMesh);

  // 2. MANDÍBULA INFERIOR (Articulada en gape abierto para morder el cuerpo)
  const lowerJawGroup = new THREE.Group();
  lowerJawGroup.position.set(0, -1.0, 2.0); // Eje bisagra

  const jawSections = [
    { z: 0.0,  w: 4.8, yt: -0.2, yb: -1.8 }, // Articular posterior
    { z: 4.2,  w: 4.2, yt: -2.0, yb: -3.8 }, // Rama mandibular
    { z: 8.2,  w: 3.0, yt: -3.6, yb: -5.2 }, // Cuerpo medio
    { z: 11.2, w: 1.5, yt: -4.6, yb: -5.8 }, // Sínfisis mentoniana
    { z: 12.4, w: 0.0, yt: -4.9, yb: -4.9 }, // Punta del mentón
  ];

  const jawVertices: number[] = [];
  const jawIndices: number[] = [];

  for (let s = 0; s < jawSections.length; s++) {
    const sec = jawSections[s];
    if (sec.w === 0) {
      jawVertices.push(0, (sec.yt + sec.yb) / 2, sec.z);
    } else {
      jawVertices.push(
        0, sec.yt, sec.z,
        sec.w * 0.7, sec.yt * 0.95, sec.z,
        sec.w, (sec.yt + sec.yb) * 0.5, sec.z,
        sec.w * 0.8, sec.yb, sec.z,
        0, sec.yb, sec.z,
        -sec.w * 0.8, sec.yb, sec.z,
        -sec.w, (sec.yt + sec.yb) * 0.5, sec.z,
        -sec.w * 0.7, sec.yt * 0.95, sec.z
      );
    }
  }

  for (let s = 0; s < jawSections.length - 2; s++) {
    const ringA = s * 8;
    const ringB = (s + 1) * 8;
    for (let i = 0; i < 8; i++) {
      const next = (i + 1) % 8;
      jawIndices.push(
        ringA + i, ringB + i, ringB + next,
        ringA + i, ringB + next, ringA + next
      );
    }
  }

  const lastJawRing = (jawSections.length - 2) * 8;
  const jawTipIdx = lastJawRing + 8;
  for (let i = 0; i < 8; i++) {
    const next = (i + 1) % 8;
    jawIndices.push(lastJawRing + i, jawTipIdx, lastJawRing + next);
  }

  const jawGeo = new THREE.BufferGeometry();
  jawGeo.setAttribute("position", new THREE.Float32BufferAttribute(jawVertices, 3));
  jawGeo.setIndex(jawIndices);
  jawGeo.computeVertexNormals();

  const jawWire = new THREE.WireframeGeometry(jawGeo);
  const jawWireMesh = new THREE.LineSegments(jawWire, wireMat);
  const jawHullMesh = new THREE.Mesh(jawGeo, hullMat);

  lowerJawGroup.add(jawWireMesh);
  lowerJawGroup.add(jawHullMesh);
  headGroup.add(lowerJawGroup);

  // 3. COLMILLOS (Fangs afilados y curvados)
  const fangGeo = new THREE.ConeGeometry(0.5, 3.8, 5);
  fangGeo.rotateX(Math.PI / 7); // Inclinación hacia atrás
  const fangWire = new THREE.WireframeGeometry(fangGeo);

  const leftFang = new THREE.LineSegments(fangWire, fangMat);
  leftFang.position.set(2.3, -0.6, 9.4);
  leftFang.rotation.x = Math.PI; // Hacia abajo
  headGroup.add(leftFang);

  const rightFang = new THREE.LineSegments(fangWire, fangMat);
  rightFang.position.set(-2.3, -0.6, 9.4);
  rightFang.rotation.x = Math.PI; // Hacia abajo
  headGroup.add(rightFang);

  // 4. OJOS CIBERNÉTICOS (Facetados con núcleo de brillo bio-teal)
  const eyeGeo = new THREE.OctahedronGeometry(1.0, 0);
  const eyeWire = new THREE.WireframeGeometry(eyeGeo);

  const leftEye = new THREE.LineSegments(eyeWire, eyeMaterial);
  leftEye.position.set(3.8, 1.4, 6.8);
  headGroup.add(leftEye);

  const rightEye = new THREE.LineSegments(eyeWire, eyeMaterial);
  rightEye.position.set(-3.8, 1.4, 6.8);
  headGroup.add(rightEye);

  // 5. LENGUA BÍFIDA CIBERNÉTICA (Neon Bifurcated Tongue)
  const tonguePoints = [
    new THREE.Vector3(0, -1.8, 4.0),
    new THREE.Vector3(0, -2.8, 8.5),
    new THREE.Vector3(0, -3.4, 12.5),
    // Horquilla izquierda
    new THREE.Vector3(0, -3.4, 12.5),
    new THREE.Vector3(1.2, -3.6, 15.0),
    // Horquilla derecha
    new THREE.Vector3(0, -3.4, 12.5),
    new THREE.Vector3(-1.2, -3.6, 15.0),
  ];

  const tongueGeo = new THREE.BufferGeometry().setFromPoints(tonguePoints);
  const tongueMesh = new THREE.LineSegments(tongueGeo, tongueMat);
  headGroup.add(tongueMesh);

  // 6. COLLAR DE ESCAMAS (Anillos que unen el cráneo con el nudo torus)
  for (let c = 0; c < 3; c++) {
    const ringRadius = 4.1 + c * 0.2;
    const ringGeo = new THREE.RingGeometry(ringRadius - 0.2, ringRadius, 16);
    const ringWire = new THREE.WireframeGeometry(ringGeo);
    const ringMesh = new THREE.LineSegments(ringWire, wireMat);
    ringMesh.position.set(0, 0.4, -0.8 - c * 1.0);
    headGroup.add(ringMesh);
  }

  // Escala global de la cabeza calibrada con el Torus Knot (radio tubo = 3.8)
  headGroup.scale.set(0.95, 0.95, 0.95);

  return {
    headGroup,
    lowerJawGroup,
    tongueMesh,
    eyeMaterial,
    animate: (elapsedTime: number) => {
      // 1. Respiración orgánica / mordida cíclica de la mandíbula
      lowerJawGroup.rotation.x = -0.12 + Math.sin(elapsedTime * 1.8) * 0.08;

      // 2. Latido cibernético de los ojos
      eyeMaterial.opacity = 0.7 + Math.sin(elapsedTime * 3.0) * 0.3;

      // 3. Destello de la lengua bífida
      const tongueFlick = Math.sin(elapsedTime * 4.0);
      tongueMesh.position.z = tongueFlick > 0.6 ? 1.0 : 0.0;
      tongueMesh.visible = Math.sin(elapsedTime * 2.0) > -0.2;
    },
    dispose: () => {
      craniumGeo.dispose();
      craniumWire.dispose();
      jawGeo.dispose();
      jawWire.dispose();
      fangGeo.dispose();
      fangWire.dispose();
      eyeGeo.dispose();
      eyeWire.dispose();
      tongueGeo.dispose();
      wireMat.dispose();
      hullMat.dispose();
      fangMat.dispose();
      eyeMaterial.dispose();
      tongueMat.dispose();
    },
  };
}
