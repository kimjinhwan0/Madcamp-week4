import React, { useState, useEffect } from 'react';
import SkyView from './SkyView';
import InfoPage from './InfoPage';
import NewPage from './NewPage';
import Popup from './Popup';
import './App.css';
import neop from './neop.png';

function App() {
  const [started, setStarted] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [constellation, setConstellation] = useState('');
  const [showNewPage, setShowNewPage] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [starsData, setStarsData] = useState([]);
  const [edgesData, setEdgesData] = useState([]);
  const [roomName, setRoomName] = useState('');

  useEffect(() => {
    console.log('showPopup 상태 변경:', showPopup);
  }, [showPopup]);

  const handleStart = () => {
    setStarted(true);
    console.log('App Started');
  };

  const handlePointClick = (point, constellation) => {
    setSelectedPoint(point);
    setConstellation(constellation);
    console.log('Point Clicked:', point, constellation);
  };

  const handleBack = () => {
    setSelectedPoint(null);
    console.log('Back Button Clicked');
  };

  const handleImageClick = (event) => {
    event.stopPropagation();

    const randomX = Math.random() * 400 - 100;
    const randomY = Math.random() * 400 - 100;

    event.target.style.setProperty('--translate-x', `${randomX}px`);
    event.target.style.setProperty('--translate-y', `${randomY}px`);
    event.target.style.transform = `translate(${randomX}px, ${randomY}px)`;
    console.log('Image Clicked and Moved');
  };

  const handleShowNewPage = () => {
    setShowPopup(true);
    console.log('Show New Page Button Clicked');
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    console.log('Popup Closed');
  };

  const handlePopupSubmit = (data) => {
    console.log('Popup Submit Data:', data);
    setShowPopup(false);
    setShowNewPage(true);
    setStarted(true);
    if (data.star) {
      setStarsData(data.star);
      console.log('Stars Data:', data.star);
    }
    if (data.edge) {
      setEdgesData(data.edge);
      console.log('Edges Data:', data.edge);
    }
    setRoomName(data.roomName);
    console.log('Room Name:', data.roomName);
    console.log('Popup Submitted');
  };

  const handleBackFromNewPage = () => {
    setShowNewPage(false);
    console.log('Back from New Page');
  };

  return (
    <div className={started ? '' : 'app-background'}>
      {!started ? (
        <div className="start-screen">
          <div className="start-content">
            <h1>Explore the Night Sky</h1>
            <button className="start-button" onClick={handleStart}>별자리</button>
            <button className="new-page-button" onClick={handleShowNewPage}>롤링페이퍼</button>
            <img src={neop} alt="Neop Logo" onClick={handleImageClick} />
          </div>
        </div>
      ) : showNewPage ? (
        <NewPage 
          onBack={handleBackFromNewPage} 
          starsData={starsData} 
          edgesData={edgesData} 
          roomName={roomName} 
        />
      ) : selectedPoint ? (
        <InfoPage point={selectedPoint} constellation={constellation} onBack={handleBack} />
      ) : (
        <SkyView onPointClick={handlePointClick} />
      )}

      {showPopup && <Popup onClose={handleClosePopup} onSubmit={handlePopupSubmit} />}
    </div>
  );
}

export default App;
