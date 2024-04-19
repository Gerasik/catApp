import React from 'react';
import './Boosters.css';
import { useBoosters } from './BoostersContext';

function Boosters({ balance }) {
    const { boostersData, updateBoostersData } = useBoosters();

    const handleBoosterClick = (booster) => {
        if (booster.usesLeft !== undefined) {
            if (booster.usesLeft > 0) {

                const updatedBoostersData = boostersData.map(prevBooster =>
                    prevBooster.name === booster.name ? { ...prevBooster, usesLeft: prevBooster.usesLeft - 1 } : prevBooster
                );
                updateBoostersData(updatedBoostersData);

            } else {
                alert('You have no uses left for this booster!');
            }
        } else {

            const updatedBoostersData = boostersData.map(prevBooster =>
                prevBooster.name === booster.name ? { ...prevBooster, level: prevBooster.level + 1, cost: prevBooster.cost * 1.5 } : prevBooster
            );
            updateBoostersData(updatedBoostersData);
        }
    };

    return (
        <div className="boosters-container">
            <h2>Your Share Balance</h2>
            <p>{balance}</p>
            <hr />
            <div className="daily-booster">
                <h3>Your daily booster:</h3>
                <div className="booster-container">
                    <div className="booster-horizontal">
                        <img src="/images/Boosters/tapingGuru.svg" alt="Taping Guru" />
                        <p>3/3</p>
                    </div>
                    <div className="booster-horizontal">
                        <img src="/images/Boosters/fullTank.svg" alt="Full Tank" />
                        <p>3/3</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="boosters-list">
                <h3>Boosters:</h3>
                {boostersData.map((booster, index) => (
                    <div className={`booster ${index > 3 ? 'booster-vertical' : 'booster-horizontal'}`} key={index} onClick={() => handleBoosterClick(booster)}>
                        <img src={booster.image} alt={booster.name} />
                        <div>
                            <p>{booster.name}</p>
                            {booster.description && <p>{booster.description}</p>}
                            {booster.cost && <p>Cost: {booster.cost}</p>}
                            {booster.level && <p>Lvl {booster.level}</p>}
                            {booster.usesLeft !== undefined && <p>{booster.usesLeft}/3</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Boosters;
