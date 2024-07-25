import React, { useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import './NewPage.css';

extend({ SphereGeometry: THREE.SphereGeometry });

const r = 200;

const generateStarsFromData = (starsData) => {
  console.log('Generating Stars from Data:', starsData);
  return starsData.map(star => ({
    starID: star.starID,
    starRa: star.starRa,
    starDec: star.starDec,
    starColor: star.starColor,
    starSize: star.starSize,
    starUsed: star.starUsed,
  }));
};

function PointsOnSphere({ starID, ra, dec, size, color, onClick, isSelected }) {
  const point = useMemo(() => {
    const radius = r - 5;
    const x = radius * Math.cos(dec) * Math.cos(ra);
    const y = radius * Math.cos(dec) * Math.sin(ra);
    const z = radius * Math.sin(dec);
    return new THREE.Vector3(x, y, z);
  }, [ra, dec]);

  const sphereRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (sphereRef.current) {
      const blinkSpeed = 0.0001 + Math.random() * 0.00031;
      sphereRef.current.scale.setScalar((isSelected ? size * 1.5 : size) * 0.9 + Math.sin(time * blinkSpeed) * 2);
    }
  });

  const handlePointerDown = (event) => {
    event.stopPropagation();
    onClick(point, starID, color);
    console.log('Point Clicked:', starID, point);
  };

  return (
    <mesh ref={sphereRef} position={point} onPointerDown={handlePointerDown}>
      <sphereGeometry args={[size * 0.08, 20, 20]} />
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  );
}

function GradientLine({ point1, point2, color1, color2 }) {
  const points = useMemo(() => [point1, point2], [point1, point2]);

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const colors = new Float32Array([
      ...new THREE.Color(color1).toArray(),
      ...new THREE.Color(color2).toArray()
    ]);
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geometry;
  }, [points, color1, color2]);

  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial vertexColors transparent opacity={1} />
    </line>
  );
}

function RotatingSphere({ stars, isRotating, showEquator, onPointClick, selectedPoints, lines }) {
  const sphereRef = useRef();

  useFrame(() => {
    if (sphereRef.current && isRotating) {
      sphereRef.current.rotation.x += 0.001;
      sphereRef.current.rotation.y += 0.001;
      sphereRef.current.rotation.z += 0.001;
    }
  });

  const starComponents = useMemo(() => {
    return stars.map((star) => (
      <PointsOnSphere
        key={star.starID}
        starID={star.starID}
        ra={parseFloat(star.starRa)}
        dec={parseFloat(star.starDec)}
        size={parseFloat(star.starSize)}
        color={star.starColor}
        isSelected={selectedPoints.some(sp => sp.id === star.starID)}
        onClick={(point, id, color, used) => onPointClick(point, id, color, used)}
      />
    ));
  }, [stars, onPointClick, selectedPoints]);

  const lineComponents = useMemo(() => {
    return lines.map((line, index) => (
      <GradientLine key={index} point1={line[0]} point2={line[1]} color1={line[2]} color2={line[3]} />
    ));
  }, [lines]);

  return (
    <group ref={sphereRef}>
      <Sphere args={[208, 64, 64]}>
        <meshStandardMaterial
          attach="material"
          color="black"
          wireframe
          side={THREE.BackSide}
          transparent
          opacity={0.3}
        />
      </Sphere>

      {starComponents}
      {lineComponents}

      {showEquator && <EquatorLine />}
    </group>
  );
}

function EquatorLine() {
  const points = useMemo(() => {
    const p = [];
    for (let i = 0; i <= 360; i++) {
      const theta = (i * Math.PI) / 180;
      const x = (r - 4) * Math.cos(theta);
      const y = ((r) - 4) * Math.sin(theta);
      p.push(new THREE.Vector3(x, y, 0));
    }
    return p;
  }, []);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line>
      <bufferGeometry attach="geometry" {...lineGeometry} />
      <lineBasicMaterial attach="material" color="white" />
    </line>
  );
}

function NewPage({ onBack, starsData, edgesData, roomName }) {
  const [rotationX, setRotationX] = useState(37);
  const [rotationY, setRotationY] = useState(0);
  const [rotationZ, setRotationZ] = useState(0);
  const [isRotating, setIsRotating] = useState(true);
  const [showEquator, setShowEquator] = useState(true);
  const [selectedPoints, setSelectedPoints] = useState([]);
  const [lines, setLines] = useState([]);
  const [animating, setAnimating] = useState(false);
  const [showMemoPopup, setShowMemoPopup] = useState(false);
  const [showViewMemoPopup, setShowViewMemoPopup] = useState(false);
  const [memo, setMemo] = useState('');
  const [viewMemo, setViewMemo] = useState('');
  const [connectedStarIDs, setConnectedStarIDs] = useState(new Set());
  const stars = useMemo(() => generateStarsFromData(starsData), [starsData]);

  useEffect(() => {
    const newLines = [];
    const connectedIDs = new Set();
    edgesData.forEach(edge => {
      const uStar = stars.find(star => star.starID === edge.u);
      const vStar = stars.find(star => star.starID === edge.v);
      if (uStar && vStar) {
        const uPoint = new THREE.Vector3(
          r * Math.cos(uStar.starDec) * Math.cos(uStar.starRa),
          r * Math.cos(uStar.starDec) * Math.sin(uStar.starRa),
          r * Math.sin(uStar.starDec)
        );
        const vPoint = new THREE.Vector3(
          r * Math.cos(vStar.starDec) * Math.cos(vStar.starRa),
          r * Math.cos(vStar.starDec) * Math.sin(vStar.starRa),
          r * Math.sin(vStar.starDec)
        );
        newLines.push([uPoint, vPoint, uStar.starColor, vStar.starColor, uStar.starID, vStar.starID, false]);
        connectedIDs.add(uStar.starID);
        connectedIDs.add(vStar.starID);
        console.log('Line Created:', { uStar, vStar, uPoint, vPoint });
      }
    });
    setLines(newLines);
    setConnectedStarIDs(connectedIDs);
  }, [edgesData, stars]);

  const handlePointClick = (point, id, color, used) => {
    if (animating) return;

    if (connectedStarIDs.has(id)) {
      handleViewMemo(id);
      return;
    }

    setSelectedPoints((prev) => {
      const newSelectedPoints = [...prev];
      const index = newSelectedPoints.findIndex(sp => sp.id === id);
      if (index === -1) {
        newSelectedPoints.push({ point, id, color });
      } else {
        newSelectedPoints.splice(index, 1);
      }
      return newSelectedPoints;
    });

    if (selectedPoints.length === 1) {
      const selectedPoint = selectedPoints[0];
      console.log('Selected Points Pair:', selectedPoint.id, id); // 두 점의 순서쌍 출력

      setLines((prevLines) => {
        const existingLineIndex = prevLines.findIndex(
          (line) =>
            (line[4] === selectedPoint.id && line[5] === id) ||
            (line[4] === id && line[5] === selectedPoint.id)
        );

        if (existingLineIndex !== -1) {
          // 선이 이미 있으면 제거
          const newLines = [...prevLines];
          newLines.splice(existingLineIndex, 1);
          console.log('Removing Existing Line:', { point1: selectedPoint.point, point2: point });
          return newLines;
        } else {
          // 선이 없으면 추가
          const newLines = [...prevLines, [selectedPoint.point, point, selectedPoint.color, color, selectedPoint.id, id, true]];
          console.log('Adding New Line:', { point1: selectedPoint.point, point2: point });
          return newLines;
        }
      });

      setSelectedPoints([]);
    }
  };

  const handleMemoSave = async () => {
    const newEdges = lines.filter(line => line[6]).map(line => ({
      u: line[4],
      v: line[5],
    }));

    const bodyData = {
      edgeNum: newEdges.length,
      edge: newEdges,
      memo: memo
    };

    console.log('Sending bodyData:', bodyData);

    try {
      const response = await fetch(`http://172.10.7.109/room/${roomName}/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
      });
      console.log('Response Status:', response.status);
      if (response.status === 200) {
        const data = await response.json();
        console.log('Memo Saved Response:', data);
      } else {
        const errorData = await response.json();
        console.error('Failed to save memo. Status:', response.status, 'Response:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }

    setShowMemoPopup(false);
  };

  const handleViewMemo = async (id) => {
    const starID = id || (selectedPoints.length && selectedPoints[selectedPoints.length - 1].id);
    if (!starID) {
      console.error('No star selected to view memo.');
      return;
    }

    const bodyData = { starID };

    console.log('Sending bodyData for viewing memo:', bodyData);

    try {
      const response = await fetch(`http://172.10.7.109/room/${roomName}/memo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
      });
      console.log('Response Status:', response.status);
      if (response.status === 200) {
        const data = await response.json();
        setViewMemo(data);
        setShowViewMemoPopup(true);
        console.log('Memo Retrieved:', data);
      } else {
        const errorData = await response.json();
        console.error('Failed to retrieve memo. Status:', response.status, 'Response:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleAnimationEnd = () => {
    setAnimating(false);
  };

  return (
    <>
      <button className="back-button" onClick={onBack}>Back</button>
      <div className="control-panel">
        <div>
          <label htmlFor="rotation-x-slider">X Rotation Angle: {rotationX}°</label>
          <input
            id="rotation-x-slider"
            type="range"
            min="0"
            max="360"
            value={rotationX}
            onChange={(e) => setRotationX(parseInt(e.target.value, 10))}
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
        style={{ height: '100vh', width: '100vw', backgroundColor: '#000000' }}
        camera={{ position: [0, 0, 0.1] }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <group rotation={[THREE.MathUtils.degToRad(rotationX), THREE.MathUtils.degToRad(rotationY), THREE.MathUtils.degToRad(rotationZ)]}>
          <RotatingSphere
            stars={stars}
            isRotating={isRotating}
            showEquator={showEquator}
            selectedPoints={selectedPoints}
            lines={lines}
            onPointClick={handlePointClick}
            onAnimationEnd={handleAnimationEnd}
          />
        </group>
        <OrbitControls target={[0, 0, 0]} />
      </Canvas>
      <div className="button-container">
        <button className="memo-button" onClick={() => setShowMemoPopup(true)}>메모 추가</button>
        <button className="view-memo-button" onClick={handleViewMemo}>메모 보기</button>
      </div>
      {showMemoPopup && (
        <div className="memo-popup">
          <textarea
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            placeholder="작품에 대한 설명을 써주세요"
          />
          <button onClick={handleMemoSave}>저장</button>
          <button onClick={() => setShowMemoPopup(false)}>취소</button>
        </div>
      )}
      {showViewMemoPopup && (
        <div className="memo-popup">
          <textarea
            value={viewMemo}
            readOnly
          />
          <button onClick={() => setShowViewMemoPopup(false)}>닫기</button>
        </div>
      )}
    </>
  );
}

export default NewPage;
