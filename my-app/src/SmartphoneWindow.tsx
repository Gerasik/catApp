import React, { useState } from 'react';
import styles from './SmartphoneWindow.module.css';
import BalanceDisplay from './components/BalanceDisplay';
import CatContainer from './components/CatContainer';
import InterfacePanel from './components/InterfacePanel';
import GameStats from './components/GameStats'; // Импортируем GameStats

interface SmartphoneWindowProps {
    currentUsername: string;
}

const SmartphoneWindow: React.FC<SmartphoneWindowProps> = ({ currentUsername }) => {
    const [showGameStats, setShowGameStats] = useState(false);
    const balance = 1000000;

    const toggleGameStats = () => {
        setShowGameStats(prev => !prev);
    };

    return (
        <div className={styles.smartphoneWindow}>
            {!showGameStats && <BalanceDisplay balance={balance} />}
            {!showGameStats && (
                <div className={styles.catContainer}>
                    <CatContainer />
                </div>
            )}
            <div className={styles.interfacePanel}>
                <InterfacePanel />
            </div>
            <button onClick={toggleGameStats}>Toggle Game Stats</button>
            {showGameStats && <GameStats />}
        </div>
    );
};

export default SmartphoneWindow;
