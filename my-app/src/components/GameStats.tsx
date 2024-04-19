import React from 'react';
import styles from './GameStats.module.css';

const GameStats: React.FC = () => {
    return (
        <div className={styles.gameStats}>
            <div className={styles.statsItem}>
                <span className={styles.statLabel}>Total Share Balance:</span>
                <div className={styles.statValue}>5.55K</div>
            </div>
            <hr className={styles.statsDivider} />
            <div className={styles.statsItem}>
                <span className={styles.statLabel}>Total Touches:</span>
                <div className={styles.statValue}>123653</div>
            </div>
            <div className={styles.statsItem}>
                <span className={styles.statLabel}>Total Players:</span>
                <div className={styles.statValue}>7</div>
            </div>
            <div className={styles.statsItem}>
                <span className={styles.statLabel}>Daily Users:</span>
                <div className={styles.statValue}>2</div>
            </div>
            <div className={styles.statsItem}>
                <span className={styles.statLabel}>Online Players:</span>
                <div className={styles.statValue}>2</div>
            </div>
        </div>
    );
};

export default GameStats;