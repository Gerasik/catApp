// src/components/Boosters.tsx
import React from 'react';
import styles from './Boosters.module.css';

const Boosters: React.FC = () => {
    return (
        <div className={styles.boostersContainer}>
            <div className={styles.title}>Your Share Balance</div>
            <div className={styles.text}>balance</div>
            <div className={styles.boosterSeparator}></div>
            <div className={styles.title}>Your daily boosters:</div>
            <div className={styles.boostersRow}> {/* Новый контейнер для бустеров */}
                <div className={styles.booster}>
                    <img src="/images/Boosters/tapingGuru.svg" alt="Taping Guru" />
                    <div className={styles.boosterInfo}>
                        <p className={styles.text}>Taping Guru</p>
                        <div className={styles.text}> 3/3</div>
                    </div>
                </div>
                <div className={styles.booster}>
                    <img src="/images/Boosters/fullTank.svg" alt="Full Tank" />
                    <div className={styles.boosterInfo}>
                        <p className={styles.text}>Full Tank</p>
                        <div className={styles.text}> 3/3</div>
                    </div>
                </div>

            </div>
            <div className={styles.title}>Boosters:</div>
            <div className={styles.boostersColumn}>
                <div className={styles.booster}>
                    <img src="/images/Boosters/multiTap.svg" alt="Multitap" />
                    <div className={styles.boosterInfo}>
                        <p className={styles.text}>Multitap</p>
                        <div className={styles.text}>Cost: 100 | Level: 1</div>
                    </div>
                </div>
                <div className={styles.booster}>
                    <img src="/images/Boosters/energyLimit.svg" alt="Energy Limit" />
                    <div className={styles.boosterInfo}>
                        <p className={styles.text}>Energy Limit</p>
                        <div className={styles.text}>Cost: 200 | Level: 1</div>
                    </div>
                </div>
                <div className={styles.booster}>
                    <img src="/images/Boosters/rechargingSpeed.svg" alt="Recharging Speed" />
                    <div className={styles.boosterInfo}>
                        <p className={styles.text}>Recharging Speed</p>
                        <div className={styles.text}>Cost: 300 | Level: 1</div>
                    </div>
                </div>
                <div className={styles.booster}>
                    <img src="/images/Boosters/tapBot.svg" alt="Tap Bot" />
                    <div className={styles.boosterInfo}>
                        <p className={styles.text}>Tap Bot</p>
                        <div className={styles.text}>Cost: 400 | Level: 1</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Boosters;
