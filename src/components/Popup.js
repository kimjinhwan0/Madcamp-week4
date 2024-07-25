import React, { useState, useEffect } from 'react';
import './Popup.css';

function Popup({ onClose, onSubmit }) {
  const [userName, setUserName] = useState('');
  const [roomName, setRoomName] = useState('');

  useEffect(() => {
    console.log('Popup 렌더링됨');
  }, []);

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
    console.log('UserName:', event.target.value);
  };

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
    console.log('RoomName:', event.target.value);
  };

  const handleCreateRoom = async (event) => {
    event.preventDefault();
    console.log('Creating Room:', { userName, roomName });
    try {
      const response = await fetch('http://172.10.7.109/room', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, roomName }),
      });
      console.log('Response Status:', response.status);
      const data = await response.json();
      console.log('Create Room Response:', data);
      onSubmit({ ...data, roomName });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleJoinRoom = async (event) => {
    event.preventDefault();
    console.log('Joining Room:', { userName, roomName });
    try {
      const response = await fetch(`http://172.10.7.109/room/${roomName}/read`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName }),
      });
      console.log('Response Status:', response.status);
      const data = await response.json();
      console.log('Join Room Response:', data);
      onSubmit({ ...data, roomName });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>별자리 롤링페이퍼</h2>
        <form>
          <input 
            type="text" 
            placeholder="닉 name" 
            value={userName} 
            onChange={handleUserNameChange} 
          />
          <input 
            type="text" 
            placeholder="paper name" 
            value={roomName} 
            onChange={handleRoomNameChange} 
          />
          <div>
          <button onClick={handleCreateRoom}>방 만들기</button>
          <button onClick={handleJoinRoom}>방 들어가기</button>
          <button type="button" onClick={onClose}>취소</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Popup;
