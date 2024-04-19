import React, { useState } from 'react';
import './SmartphoneWindow.css';
import BalanceContainer from './BalanceContainer';
import CatContainer from './CatContainer';
import GameInterface from './GameInterface';
import GameStats from './GameStats';
import League from './League';

function SmartphoneWindow({ socket, currentUsername }) {
    const [selectedElement, setSelectedElement] = useState('');
    const leagueConstants = [1, 5000, 50000, 250000, 500000, 10000000, 25000000, 50000000, 100000000];
    const handleElementClick = (element) => {
        setSelectedElement(element);
    };
    return (
        <div className="smartphone-window">
            <div>
                {selectedElement === 'stats' ? (
                    <GameStats />
                ) : selectedElement === 'task' ? (
                    <League balance={53004} requiredValues={leagueConstants} />
                ) : (
                    <div>
                        <BalanceContainer socket={socket} />
                        <CatContainer socket={socket} currentUsername={currentUsername} />
                    </div>
                )}
                <GameInterface onElementClick={handleElementClick} />
            </div>
        </div>
    );
}



export default SmartphoneWindow;
