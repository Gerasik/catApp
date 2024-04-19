import React from 'react';
import './App.css';
import SmartphoneWindow from './SmartphoneWindow';
import RegistrationForm from './RegistrationForm';
import { useUser } from './UserContext';


function App() {
  const socket = new WebSocket('ws://localhost:3000');
  const { currentUsername } = useUser();
  return (
    <div className="App">
      <RegistrationForm socket={socket} />
      <SmartphoneWindow socket={socket} currentUsername={currentUsername} />
    </div>
  );
}

export default App;
