import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
            <TransitionGroup>
                {!showGameStats && !showBoosters && (
                    <CSSTransition key="balance" timeout={300} classNames={{
                        enter: styles.fadeEnter,
                        enterActive: styles.fadeEnterActive,
                        exit: styles.fadeExit,
                        exitActive: styles.fadeExitActive,
                    }}>
                        <BalanceDisplay />
                    </CSSTransition>
                )}
                {showTap && (
                    <CSSTransition key="tap" timeout={300} classNames={{
                        enter: styles.fadeEnter,
                        enterActive: styles.fadeEnterActive,
                        exit: styles.fadeExit,
                        exitActive: styles.fadeExitActive,
                    }}>
                        <div>
                            <div className={styles.catContainer}>
                                <CatContainer />
                            </div>
                            <EnergyBar />
                        </div>
                    </CSSTransition>
                )}
                {showGameStats && (
                    <CSSTransition key="stats" timeout={300} classNames={{
                        enter: styles.fadeEnter,
                        enterActive: styles.fadeEnterActive,
                        exit: styles.fadeExit,
                        exitActive: styles.fadeExitActive,
                    }}>
                        <GameStats />
                    </CSSTransition>
                )}
                {showBoosters && (
                    <CSSTransition key="boosters" timeout={300} classNames={{
                        enter: styles.fadeEnter,
                        enterActive: styles.fadeEnterActive,
                        exit: styles.fadeExit,
                        exitActive: styles.fadeExitActive,
                    }}>
                        <Boosters />
                    </CSSTransition>
                )}
            </TransitionGroup>
            <div className={styles.interfacePanel}>
                <InterfacePanel onStatsClick={handleStatsClick} onBoostersClick={handleBoostersClick} onTapClick={handleTapClick} />
            </div>
        </div>
    );
};

export default SmartphoneWindow;
