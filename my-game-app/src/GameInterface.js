import React from 'react';
import './GameInterface.css';

function GameInterface({ onElementClick }) {
    return (
        <div className="interface-container">
            <div className="ref-container" onClick={() => onElementClick('ref')}>
                <div className="ref-image-container">
                    <img src="/images/ref.png" alt="Ref" className="ref" />
                </div>
                <span className="ref-1">ref</span>
            </div>
            <div className="task-container" onClick={() => onElementClick('task')}>
                <div className="task-image-container">
                    <img src="/images/tasks.png" alt="Task" className="task-1" />
                </div>
                <span className="task">task</span>
            </div>
            <div className="tap-container" onClick={() => onElementClick('tap')}>
                <div className="tap-image-container">
                    <img src="/images/tap.png" alt="Tap" className="tap-1" />
                </div>
                <span className="tap">tap</span>
            </div>
            <div className="boosts-container" onClick={() => onElementClick('boosts')}>
                <div className="boosts-image-container">
                    <img src="/images/boosts.png" alt="Boosts" className="boosts" />
                </div>
                <span className="boost">boost</span>
            </div>
            <div className="stats-container" onClick={() => onElementClick('stats')}>
                <div className="stats-image-container">
                    <img src="/images/Stats.png" alt="Stats" className="stats-1" />
                </div>
                <span className="stats">stats</span>
            </div>
        </div>
    );
}

export default GameInterface;
