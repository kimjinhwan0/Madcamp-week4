import React, { useState, useEffect } from 'react';
import './InfoPage.css'; // CSS 파일을 임포트합니다

// 별 데이터 (이름과 위치)
const starPositions = {
  Orion: [
    { name: 'Betelgeuse', x: 100, y: 50 },
    { name: 'Rigel', x: 200, y: 300 },
    { name: 'Bellatrix', x: 150, y: 100 },
    // 필요한 만큼 추가
  ],
  CanisMajor: [
    { name: 'Sirius', x: 100, y: 50 },
    { name: 'Mirzam', x: 200, y: 300 },
    { name: 'Muliphein', x: 150, y: 100 },
    // 필요한 만큼 추가
  ],
  Taurus: [
    { name: '알데바란', x: 100, y: 50 },
    { name: 'ㅁㅁ', x: 200, y: 300 },
    { name: 'ㄴㄴ', x: 150, y: 100 },
    // 필요한 만큼 추가
  ],
};

function InfoPage({ point, constellation, onBack }) {
  const stars = starPositions[constellation] || [];
  const [infoText, setInfoText] = useState('');

  useEffect(() => {
    // 여기에 서버에서 정보를 불러오는 코드 작성
    fetch(`/api/get-constellation-info?name=${constellation}`)
      .then(response => response.json())
      .then(data => setInfoText(data.info))
      .catch(error => console.error('Error fetching data:', error));
  }, [constellation]);

  const handleStarClick = (star) => {
    // 새로운 창을 열어 별의 정보를 표시
    window.open(`/star-info?name=${star.name}`, '_blank');
  };

  return (
    <div
      className="info-page"
      style={{
        backgroundImage: 'url(/InfoBack3.png)',
      }}
    >
      <div className="background-overlay"></div>
      <div className="content">
        <h1 className="title">{constellation} 자리</h1>
        <p>Point clicked: {JSON.stringify(point)}</p>
        <div style={{ display: 'flex' }}>
          <div className="constellation-map">
            {stars.map((star, index) => (
              <div
                key={index}
                onClick={() => handleStarClick(star)}
                style={{
                  position: 'absolute',
                  left: `${star.x}px`,
                  top: `${star.y}px`,
                  width: '10px',
                  height: '10px',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  cursor: 'pointer'
                }}
              >
                <span style={{ display: 'none' }}>{star.name}</span>
              </div>
            ))}
          </div>
          <div className="text-area">
            <h2>별자리 정보</h2>
            <textarea 
              value={infoText} 
              onChange={(e) => setInfoText(e.target.value)} 
              placeholder="여기에 정보를 입력하세요..." 
            />
          </div>
        </div>
        <button onClick={onBack}>Back</button>
      </div>
      <img src="./goose1.png" alt="Goose" className="goose" />
    </div>
  );
}

export default InfoPage;
