import React, { useState, useRef, useContext } from 'react';
import styles from './CatContainer.module.css';
import BalanceContext from './BalanceContext';
import EnergyContext from './EnergyContext';
import BoostersContext from './BoostersContext';

const CatContainer: React.FC = () => {
    const { incrementBalance } = useContext(BalanceContext);
    const { decreaseEnergy } = useContext(EnergyContext);
    const { boosters } = useContext(BoostersContext);
    const [clawsOut, setClawsOut] = useState(false);
    const [scorePositions, setScorePositions] = useState<{ x: number; y: number }[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleClick = (e: React.MouseEvent) => {
        setClawsOut(true);
        setTimeout(() => setClawsOut(false), 100);
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setScorePositions(prev => [...prev, { x, y }]);

            const multitapBooster = boosters.find(booster => booster.name === 'Multitap');
            const multitapLevel = multitapBooster?.level ?? 1;
            incrementBalance(multitapLevel);
            decreaseEnergy(multitapLevel);
        }
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        e.preventDefault();
        setClawsOut(true);
        setTimeout(() => setClawsOut(false), 100);
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const touch = e.changedTouches[0];
            const x = touch.clientX - rect.left;
            const y = touch.clientY - rect.top;
            setScorePositions(prev => [...prev, { x, y }]);

            const multitapBooster = boosters.find(booster => booster.name === 'Multitap');
            const multitapLevel = multitapBooster?.level ?? 1;
            incrementBalance(multitapLevel);
            decreaseEnergy(multitapLevel);
        }
    };

    return (
        <div ref={containerRef} className={styles.catContainer} onClick={handleClick} onTouchEnd={handleTouchEnd}>
            <img
                src={clawsOut ? "/images/cat2.svg" : "/images/cat1.svg"}
                alt="Cat"
                className={styles.catImage}
            />
            {scorePositions.map((position, index) => (
                <div
                    key={index}
                    className={styles.scoreAnimation}
                    style={{ left: `${position.x}px`, top: `${position.y}px` }}
                >
                    +{boosters.find(booster => booster.name === 'Multitap')?.level ?? 1}
                </div>
            ))}
        </div>
    );
};

export default CatContainer;
