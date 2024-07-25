import React, { useRef, useState, useMemo, useEffect, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import {
  orion, canisMajor, orionLines, canisMajorLines, taurus, taurusLines,
  lyra, lyraLines, cygnus, cygnusLines, aquila, aquilaLines,
  pegasus, pegasusLines, andromeda, andromedaLines, cassiopeia, cassiopeiaLines,
  leo, leoLines, virgo, virgoLines, ursaMajor, ursaMajorLines
} from './constellations';

const r = 200;

// Points Component
function PointsOnSphere({ addPoint, ra, dec, size, color, onClick, name }) {
  const points = useMemo(() => {
    const p = [];

    // 구 좌표계에서 데카르트 좌표계로 변환
    const x = (r-5) * Math.cos(dec) * Math.cos(ra);
    const y = (r-5) * Math.cos(dec) * Math.sin(ra);
    const z = (r-5) * Math.sin(dec);

    const point = new THREE.Vector3(x, y, z);
    p.push(point); // 지정된 적경과 적위에 점 추가
    return p;
  }, [ra, dec]);

  const pointGeometry = new THREE.BufferGeometry().setFromPoints(points);

  const pointMaterialRef = useRef();

  useEffect(() => {
    addPoint(points[0], name);
  }, [addPoint, points, name]);

  // 반짝이는 효과 추가
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (pointMaterialRef.current) {
      pointMaterialRef.current.size = size + Math.sin(time * 5) * 0.6;
    }
  });

  const handlePointerDown = (event) => {
    event.stopPropagation();
    onClick(points[0], name);
  };

  return (
    <points onPointerDown={handlePointerDown}>
      <bufferGeometry attach="geometry" {...pointGeometry} />
      <pointsMaterial
        ref={pointMaterialRef}
        attach="material"
        color={color}
        size={size}
        sizeAttenuation={true}
        transparent={true}
      />
    </points>
  );
}

// Lines Component
function LinesOnSphere({ points, lines }) {
  const linePoints = useMemo(() => {
    if (!points || !lines) return [];

    const lineSegments = [];
    lines.forEach(([start, end]) => {
      if (points[start] && points[end]) {
        lineSegments.push(points[start], points[end]);
      }
    });

    return lineSegments;
  }, [points, lines]);

  if (linePoints.length === 0) return null;

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(linePoints);

  return (
    <lineSegments>
      <bufferGeometry attach="geometry" {...lineGeometry} />
      <lineBasicMaterial attach="material" color="white" />
    </lineSegments>
  );
}

// Equator Component
function EquatorLine() {
  const points = useMemo(() => {
    const p = [];
    for (let i = 0; i <= 360; i++) {
      const theta = (i * Math.PI) / 180; // 각도를 라디안으로 변환
      const x = (r-1) * Math.cos(theta);
      const y = (r-1) * Math.sin(theta);
      p.push(new THREE.Vector3(x, y, 0));
    }
    return p;
  }, []);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line>
      <bufferGeometry attach="geometry" {...lineGeometry} />
      <lineBasicMaterial attach="material" color="whtie" />
    </line>
  );
}

// RotatingSphere Component
function RotatingSphere({ isRotating, addPoint, starPoints, showEquator, onPointClick }) {
  const sphereRef = useRef();

  useFrame(() => {
    if (sphereRef.current && isRotating) {
      sphereRef.current.rotation.x += 0.00;
      sphereRef.current.rotation.y += 0.00;
      sphereRef.current.rotation.z += 0.001;
    }
  });

  return (
    <group ref={sphereRef}>
      <Sphere args={[200, 50, 50]}>
        <meshStandardMaterial attach="material" color="black" wireframe transparent opacity={0.5} />
      </Sphere>
      {orion.map((star, index) => (
        <PointsOnSphere
          key={star.name}
          addPoint={(point) => addPoint(point, 'Orion')}
          ra={star.ra}
          dec={star.dec}
          size={star.size}
          color={star.color}
          onClick={(point) => onPointClick(point, 'Orion')}
        />
      ))}
      <LinesOnSphere points={starPoints.filter(p => p.name === 'Orion').map(p => p.point)} lines={orionLines} />

      {canisMajor.map((star, index) => (
        <PointsOnSphere
          key={star.name}
          addPoint={(point) => addPoint(point, 'CanisMajor')}
          ra={star.ra}
          dec={star.dec}
          size={star.size}
          color={star.color}
          onClick={(point) => onPointClick(point, 'CanisMajor')}
        />
      ))}
      <LinesOnSphere points={starPoints.filter(p => p.name === 'CanisMajor').map(p => p.point)} lines={canisMajorLines} />

      {taurus.map((star, index) => (
        <PointsOnSphere
          key={star.name}
          addPoint={(point) => addPoint(point, 'Taurus')}
          ra={star.ra}
          dec={star.dec}
          size={star.size}
          color={star.color}
          onClick={(point) => onPointClick(point, 'Taurus')}
        />
      ))}
      <LinesOnSphere points={starPoints.filter(p => p.name === 'Taurus').map(p => p.point)} lines={taurusLines} />

      {lyra.map((star, index) => (
        <PointsOnSphere
          key={star.name}
          addPoint={(point) => addPoint(point, 'Lyra')}
          ra={star.ra}
          dec={star.dec}
          size={star.size}
          color={star.color}
          onClick={(point) => onPointClick(point, 'Lyra')}
        />
      ))}
      <LinesOnSphere points={starPoints.filter(p => p.name === 'Lyra').map(p => p.point)} lines={lyraLines} />

      {cygnus.map((star, index) => (
        <PointsOnSphere
          key={star.name}
          addPoint={(point) => addPoint(point, 'Cygnus')}
          ra={star.ra}
          dec={star.dec}
          size={star.size}
          color={star.color}
          onClick={(point) => onPointClick(point, 'Cygnus')}
        />
      ))}
      <LinesOnSphere points={starPoints.filter(p => p.name === 'Cygnus').map(p => p.point)} lines={cygnusLines} />

      {aquila.map((star, index) => (
        <PointsOnSphere
          key={star.name}
          addPoint={(point) => addPoint(point, 'Aquila')}
          ra={star.ra}
          dec={star.dec}
          size={star.size}
          color={star.color}
          onClick={(point) => onPointClick(point, 'Aquila')}
        />
      ))}
      <LinesOnSphere points={starPoints.filter(p => p.name === 'Aquila').map(p => p.point)} lines={aquilaLines} />

      {pegasus.map((star, index) => (
        <PointsOnSphere
          key={star.name}
          addPoint={(point) => addPoint(point, 'Pegasus')}
          ra={star.ra}
          dec={star.dec}
          size={star.size}
          color={star.color}
          onClick={(point) => onPointClick(point, 'Pegasus')}
        />
      ))}
      <LinesOnSphere points={starPoints.filter(p => p.name === 'Pegasus').map(p => p.point)} lines={pegasusLines} />

      {andromeda.map((star, index) => (
        <PointsOnSphere
          key={star.name}
          addPoint={(point) => addPoint(point, 'Andromeda')}
          ra={star.ra}
          dec={star.dec}
          size={star.size}
          color={star.color}
          onClick={(point) => onPointClick(point, 'Andromeda')}
        />
      ))}
      <LinesOnSphere points={starPoints.filter(p => p.name === 'Andromeda').map(p => p.point)} lines={andromedaLines} />

      {cassiopeia.map((star, index) => (
        <PointsOnSphere
          key={star.name}
          addPoint={(point) => addPoint(point, 'Cassiopeia')}
          ra={star.ra}
          dec={star.dec}
          size={star.size}
          color={star.color}
          onClick={(point) => onPointClick(point, 'Cassiopeia')}
        />
      ))}
      <LinesOnSphere points={starPoints.filter(p => p.name === 'Cassiopeia').map(p => p.point)} lines={cassiopeiaLines} />

      {leo.map((star, index) => (
        <PointsOnSphere
          key={star.name}
          addPoint={(point) => addPoint(point, 'Leo')}
          ra={star.ra}
          dec={star.dec}
          size={star.size}
          color={star.color}
          onClick={(point) => onPointClick(point, 'Leo')}
        />
      ))}
      <LinesOnSphere points={starPoints.filter(p => p.name === 'Leo').map(p => p.point)} lines={leoLines} />

      {virgo.map((star, index) => (
        <PointsOnSphere
          key={star.name}
          addPoint={(point) => addPoint(point, 'Virgo')}
          ra={star.ra}
          dec={star.dec}
          size={star.size}
          color={star.color}
          onClick={(point) => onPointClick(point, 'Virgo')}
        />
      ))}
      <LinesOnSphere points={starPoints.filter(p => p.name === 'Virgo').map(p => p.point)} lines={virgoLines} />

      {ursaMajor.map((star, index) => (
        <PointsOnSphere
          key={star.name}
          addPoint={(point) => addPoint(point, 'UrsaMajor')}
          ra={star.ra}
          dec={star.dec}
          size={star.size}
          color={star.color}
          onClick={(point) => onPointClick(point, 'UrsaMajor')}
        />
      ))}
      <LinesOnSphere points={starPoints.filter(p => p.name === 'UrsaMajor').map(p => p.point)} lines={ursaMajorLines} />

      {showEquator && <EquatorLine />}
    </group>
  );
}

function SkyView({ onPointClick }) {
  const [rotationX, setRotationX] = useState(37); // 초기 x축 회전 각도
  const [rotationY, setRotationY] = useState(0);  // 초기 y축 회전 각도
  const [rotationZ, setRotationZ] = useState(0);  // 초기 z축 회전 각도
  const [isRotating, setIsRotating] = useState(true); // 회전 상태
  const [starPoints, setStarPoints] = useState([]);
  const [showEquator, setShowEquator] = useState(true); // 적도선 표시 상태

  const addPoint = useCallback((point, name) => {
    setStarPoints((prevPoints) => [...prevPoints, { point, name }]);
  }, []);

  return (
    <>
      <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 1, backgroundColor: 'white', padding: '10px', borderRadius: '5px' }}>
        <div>
          <label htmlFor="rotation-x-slider">X Rotation Angle: {rotationX}°</label>
          <input
            id="rotation-x-slider"
            type="range"
            min="0"
            max="360"
            value={rotationX}
            onChange={(e) => setRotationX(parseInt(e.target.value, 10))}
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label htmlFor="rotation-y-slider">Y Rotation Angle: {rotationY}°</label>
          <input
            id="rotation-y-slider"
            type="range"
            min="0"
            max="360"
            value={rotationY}
            onChange={(e) => setRotationY(parseInt(e.target.value, 10))}
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label htmlFor="rotation-z-slider">Z Rotation Angle: {rotationZ}°</label>
          <input
            id="rotation-z-slider"
            type="range"
            min="0"
            max="360"
            value={rotationZ}
            onChange={(e) => setRotationZ(parseInt(e.target.value, 10))}
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <button onClick={() => setIsRotating(!isRotating)}>
            {isRotating ? 'Stop Rotation' : 'Start Rotation'}
          </button>
        </div>
        <div>
          <button onClick={() => setShowEquator(!showEquator)}>
            {showEquator ? 'Hide Equator' : 'Show Equator'}
          </button>
        </div>
      </div>
      <Canvas
        style={{ height: '100vh', width: '100vw', backgroundColor: '#000000' }} // 배경색 설정 (검은색)
        camera={{ position: [5, 0, 5] }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <axesHelper args={[5]} />
        <group rotation={[THREE.MathUtils.degToRad(rotationX), THREE.MathUtils.degToRad(rotationY), THREE.MathUtils.degToRad(rotationZ)]}>
          <RotatingSphere
            isRotating={isRotating}
            addPoint={addPoint}
            starPoints={starPoints}
            showEquator={showEquator}
            onPointClick={onPointClick}
          />
        </group>
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default SkyView;
