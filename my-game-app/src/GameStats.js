import React from 'react';
import './GameStats.css';

function GameStats() {


    return (
        <div className="game-stats">
            <div className="stats-item">
                <span className="total-touches">  Total Share Balance:</span>
                <div className="count-of-total-touches">5.55K</div>
            </div>
            <hr className="stats-divider" />
            <div className="stats-item">
                <span className="total-touches">Total Touches:</span>
                <div className="count-of-total-touches">123653</div >
            </div>
            <div className="stats-item">
                <span className="total-touches"> Total Players:</span>
                <div className="count-of-total-touches">7</div>
            </div>
            <div className="stats-item">
                <span className="total-touches"> Daily Users:</span>
                <div className="count-of-total-touches">2</div>
            </div>
            <div className="stats-item">
                <span className="total-touches">  Online Players:</span>
                <div className="count-of-total-touches">2</div>
            </div>
        </div>
    );
}

export default GameStats;
