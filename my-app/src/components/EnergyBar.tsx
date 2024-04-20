import React, { useContext } from 'react';
import styles from './EnergyBar.module.css';
import EnergyContext from './EnergyContext';

const EnergyBar: React.FC = () => {
    const { currentEnergy, maxEnergy } = useContext(EnergyContext);
    const energyPercentage = (currentEnergy / maxEnergy) * 100;
    const energyColor = `hsl(${energyPercentage * 1.2}, 100%, 50%)`;

    return (
        <div className={styles.energyBarContainer}>
            <div
                className={styles.energyBar}
                style={{ width: `${energyPercentage}%`, backgroundColor: energyColor }}
            >
                <div className={styles.energyText}>{currentEnergy}/{maxEnergy}</div>
            </div>
        </div>
    );
};

export default EnergyBar;
