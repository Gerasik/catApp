import React, { useContext } from 'react';
import styles from './Boosters.module.css';
import BoostersContext from './BoostersContext';

const Boosters: React.FC = () => {
    const { boosters, updateBooster } = useContext(BoostersContext);

    return (
        <div className={styles.boostersContainer}>
            <div className={styles.title}>Your Share Balance</div>
            <div className={styles.text}>balance</div>
            <div className={styles.boosterSeparator}></div>
            <div className={styles.title}>Your daily boosters:</div>
            <div className={styles.boostersRow}>
                {boosters.slice(4).map(booster => (
                    <div key={booster.name} className={styles.booster} onClick={() => updateBooster(booster.name)}>
                        <img src={booster.image} alt={booster.name} />
                        <div className={styles.boosterInfo}>
                            <p className={styles.text}>{booster.name}</p>
                            <div className={styles.text}>{booster.usesLeft}/3</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.title}>Boosters:</div>
            <div className={styles.boostersColumn}>
                {boosters.slice(0, 4).map(booster => (
                    <div key={booster.name} className={styles.booster} onClick={() => updateBooster(booster.name)}>
                        <img src={booster.image} alt={booster.name} />
                        <div className={styles.boosterInfo}>
                            <p className={styles.text}>{booster.name}</p>
                            <div className={styles.text}>Cost: {booster.cost} | Level: {booster.level}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Boosters;
