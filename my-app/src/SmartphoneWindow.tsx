import React, { useState } from 'react';
import styles from './SmartphoneWindow.module.css';
import BalanceDisplay from './components/BalanceDisplay';
import CatContainer from './components/CatContainer';
import InterfacePanel from './components/InterfacePanel';
import GameStats from './components/GameStats';
import Boosters from './components/Boosters';
import EnergyBar from './components/EnergyBar';

interface SmartphoneWindowProps {
    currentUsername: string;
}

const SmartphoneWindow: React.FC<SmartphoneWindowProps> = ({ currentUsername }) => {
    const [showGameStats, setShowGameStats] = useState(false);
    const [showBoosters, setShowBoosters] = useState(false);
    const [showTap, setShowTap] = useState(true);

    const handleStatsClick = () => {
        setShowGameStats(true);
        setShowBoosters(false);
        setShowTap(false);
    };

    const handleBoostersClick = () => {
        setShowBoosters(true);
        setShowGameStats(false);
        setShowTap(false);
    };

    const handleTapClick = () => {
        setShowTap(true);
        setShowGameStats(false);
        setShowBoosters(false);
    };

    return (
        <div className={styles.smartphoneWindow}>
            {!showGameStats && !showBoosters && <BalanceDisplay />}
            {showTap && (
                <>
                    <div className={styles.catContainer}>
                        <CatContainer />
                    </div>
                    <EnergyBar />
                </>
            )}
            <div className={styles.interfacePanel}>
                <InterfacePanel onStatsClick={handleStatsClick} onBoostersClick={handleBoostersClick} onTapClick={handleTapClick} />
            </div>
            {showGameStats && <GameStats />}
            {showBoosters && <Boosters />}
        </div>
    );
};

export default SmartphoneWindow;
