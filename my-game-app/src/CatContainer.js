import React, { useState, useEffect } from 'react';
import './CatContainer.css';
import { useBoosters } from './BoostersContext';

function CatContainer({ socket, currentUsername }) {
    const { boostersData } = useBoosters();


    const [energy, setEnergy] = useState(500 + (boostersData.find(booster => booster.name === 'Energy Limit')?.level || 0) * 10);
    const [maxEnergy, setMaxEnergy] = useState(500 + (boostersData.find(booster => booster.name === 'Energy Limit')?.level || 0) * 10);
    // eslint-disable-next-line no-unused-vars
    const [tapValue, setTapValue] = useState((boostersData.find(booster => booster.name === 'Multitap')?.level || 1));
    const [rechargingSpeed, setRechargingSpeed] = useState((boostersData.find(booster => booster.name === 'Recharging Speed')?.level || 1));


    useEffect(() => {
        setMaxEnergy(500 + (boostersData.find(booster => booster.name === 'Energy Limit')?.level || 0) * 10);
        setRechargingSpeed((boostersData.find(booster => booster.name === 'Recharging Speed')?.level || 1));
    }, [boostersData]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (energy < maxEnergy) {
                setEnergy(Math.min(maxEnergy, energy + rechargingSpeed));
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [energy, maxEnergy, rechargingSpeed]);

    const [clawsOut, setClawsOut] = useState(false);
    const [scorePosition, setScorePosition] = useState({ x: 0, y: 0 });
    const [showScore, setShowScore] = useState(false);

    const handleClick = (e) => {
        if (energy > 0) {
            setClawsOut(!clawsOut);
            setScorePosition({ x: e.clientX, y: e.clientY });
            setShowScore(true);

            setEnergy(Math.max(0, energy - tapValue));
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
        if (energy >= 0.8 * maxEnergy) {
            return 'green';
        } else if (energy >= 0.4 * maxEnergy) {
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
                <div className="energy-text">{energy}/{maxEnergy}</div>
                <div className="energy-bar" style={{ width: `${(energy / maxEnergy) * 100}%`, backgroundColor: getProgressBarColor() }}></div>
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
