import React from 'react';
import styles from './SmartphoneWindow.module.css';
import BalanceDisplay from './components/BalanceDisplay';
import CatContainer from './components/CatContainer';
import InterfacePanel from './components/InterfacePanel';

interface SmartphoneWindowProps {
    currentUsername: string;
}

const SmartphoneWindow: React.FC<SmartphoneWindowProps> = ({ currentUsername }) => {
    const balance = 1000000;

    return (
        <div className={styles.smartphoneWindow}>
            <h2>Welcome, {currentUsername}!</h2>
            <BalanceDisplay balance={balance} />
            <div className={styles.catContainer}>
                <CatContainer />
            </div>
            <div className={styles.interfacePanel}>
                <InterfacePanel />
            </div>
        </div>
    );
};

export default SmartphoneWindow;
