// src/components/EquatorLine.js
import React, { useMemo } from 'react';
import * as THREE from 'three';

function EquatorLine({ radius }) {
  const points = useMemo(() => {
    const points = [];
    for (let i = 0; i <= 64; i++) {
      const theta = (i / 64) * Math.PI * 2;
      points.push(new THREE.Vector3(radius * Math.cos(theta), 0, radius * Math.sin(theta)));
    }
    return points;
  }, [radius]);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line>
      <bufferGeometry attach="geometry" {...lineGeometry} />
      <lineBasicMaterial attach="material" color="white" />
    </line>
  );
}

export default EquatorLine;
