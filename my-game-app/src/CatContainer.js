import React, { useState, useEffect } from 'react';
import './CatContainer.css';

function CatContainer({ socket, currentUsername }) {
    const [clawsOut, setClawsOut] = useState(false);
    const [scorePosition, setScorePosition] = useState({ x: 0, y: 0 });
    const [showScore, setShowScore] = useState(false);
    const [energy, setEnergy] = useState(500);
    const [progressBarColor, setProgressBarColor] = useState('green');

    useEffect(() => {
        setProgressBarColor(getProgressBarColor());
        const interval = setInterval(() => {
            if (energy < 500) {
                setEnergy(Math.min(500, energy + 10));
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [energy]);

    const handleClick = (e) => {
        if (energy > 0) {
            setClawsOut(!clawsOut);
            setScorePosition({ x: e.clientX, y: e.clientY });
            setShowScore(true);

            setEnergy(energy - 10);
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
        if (energy >= 400) {
            return 'green';
        } else if (energy >= 200) {
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
                <div className="energy-text">{energy}/500</div>
                <div className="energy-bar" style={{ width: `${(energy / 500) * 100}%`, backgroundColor: progressBarColor }}>

                </div>
            </div>
            {showScore && (
                <div
                    className="score-animation"
                    style={{ left: scorePosition.x, top: scorePosition.y }}
                    onAnimationEnd={() => setShowScore(false)}
                >
                    +10
                </div>
            )}
        </div>
    );
}

export default CatContainer;
