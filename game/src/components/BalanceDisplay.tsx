import React from 'react';
import styles from './BalanceDisplay.module.css';

interface BalanceDisplayProps {
    balance: number;
}

const BalanceDisplay: React.FC<BalanceDisplayProps> = ({ balance }) => {
    return (
        <div className={styles.balanceDisplay}>
            <img src="/images/balance.png" alt="Balance" />
            <span>{balance}</span>
        </div>
    );
};

export default BalanceDisplay;
