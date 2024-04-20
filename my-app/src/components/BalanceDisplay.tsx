import React, { useContext } from 'react';
import styles from './BalanceDisplay.module.css';
import BalanceContext from './BalanceContext';

const BalanceDisplay: React.FC = () => {
    const { balance } = useContext(BalanceContext);

    return (
        <div className={styles.balanceDisplay}>
            <img src="/images/balance.png" alt="Balance" />
            <span>{balance}</span>
        </div>
    );
};

export default BalanceDisplay;
