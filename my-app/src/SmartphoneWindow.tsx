// src/SmartphoneWindow.tsx
import React from 'react';
import './SmartphoneWindow.css';
import BalanceDisplay from './components/BalanceDisplay';
import CatContainer from './components/CatContainer';
import InterfacePanel from './components/InterfacePanel';

interface SmartphoneWindowProps {
    currentUsername: string;
}

const SmartphoneWindow: React.FC<SmartphoneWindowProps> = ({ currentUsername }) => {
    const balance = 1000000;

    return (
        <div className="smartphone-window">
            <h2>Welcome, {currentUsername}!</h2>
            <BalanceDisplay balance={balance} />
            <CatContainer />
            <InterfacePanel />
        </div>
    );
};

export default SmartphoneWindow;
