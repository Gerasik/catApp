import React, { useState, useEffect, useMemo } from 'react';
import './CatContainer.css';
import { useBoosters } from './BoostersContext';

function CatContainer({ socket, currentUsername }) {
    const { boostersData } = useBoosters();

    const energy = useMemo(() => 500 + (boostersData.find(booster => booster.name === 'Energy Limit')?.level || 0) * 10, [boostersData]);
    const maxEnergy = useMemo(() => 500 + (boostersData.find(booster => booster.name === 'Energy Limit')?.level || 0) * 10, [boostersData]);
    const tapValue = useMemo(() => boostersData.find(booster => booster.name === 'Multitap')?.level || 1, [boostersData]);
    const rechargingSpeed = useMemo(() => boostersData.find(booster => booster.name === 'Recharging Speed')?.level || 1, [boostersData]);

    const [energyState, setEnergyState] = useState(energy);
    const [clawsOut, setClawsOut] = useState(false);
    const [scorePosition, setScorePosition] = useState({ x: 0, y: 0 });
    const [showScore, setShowScore] = useState(false);

    useEffect(() => {
        setEnergyState(energy);
    }, [energy]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (energyState < maxEnergy) {
                setEnergyState(Math.min(maxEnergy, energyState + rechargingSpeed));
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [energyState, maxEnergy, rechargingSpeed]);

    const handleClick = (e) => {
        if (energyState > 0) {
            setClawsOut(!clawsOut);
            setScorePosition({ x: e.clientX, y: e.clientY });
            setShowScore(true);

            setEnergyState(Math.max(0, energyState - tapValue));
            if (socket && socket.readyState === WebSocket.OPEN) {
                socket.send(JSON.stringify({ type: 'tap', username: currentUsername }));
            } else {
                console.error('WebSocket is not open. State:', socket.readyState);
            }
        }
        setTimeout(() => {
            setShowScore(false);
        }, 1000);
    };

    const getProgressBarColor = () => {
        if (energyState >= 0.8 * maxEnergy) {
            return 'green';
        } else if (energyState >= 0.4 * maxEnergy) {
            return 'yellow';
        } else {
            return 'red';
        }
    };

    return (
        <div className="cat-container" onClick={handleClick}>
            <img src={clawsOut ? "/images/cat2.svg" : "/images/cat1.svg"} alt="Cat" className="cat-image" width="400"
                height="400"
                preserveAspectRatio="xMidYMid meet" />
            <div className="progress-container">
                <div className="energy-text">{energyState}/{maxEnergy}</div>
                <div className="energy-bar" style={{ width: `${(energyState / maxEnergy) * 100}%`, backgroundColor: getProgressBarColor() }}></div>
            </div>
            {showScore && (
                <div
                    className="score-animation"
                    style={{ left: scorePosition.x, top: scorePosition.y }}
                    onAnimationEnd={() => setShowScore(false)}
                >
                    +{tapValue}
                </div>
            )}
        </div>
    );
}

export default CatContainer;
