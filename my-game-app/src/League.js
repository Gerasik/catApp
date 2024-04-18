import React, { useState, useEffect } from 'react';
import './League.css';

function League({ balance, requiredValues }) {
    const [leagueNumber, setLeagueNumber] = useState(1);

    useEffect(() => {
        const index = requiredValues.findIndex(value => value >= balance);
        if (index !== -1) {
            setLeagueNumber(index);
        }
    }, [balance, requiredValues]);

    const leagueImages = [
        "/images/leagues/petСage.png",
        "/images/leagues/box.png",
        "/images/leagues/clawSharpener.png",
        "/images/leagues/mat.png",
        "/images/leagues/petBed.png",
        "/images/leagues/petHouse.png",
        "/images/leagues/petBag.png",
        "/images/leagues/petPlayhouse.png",
        "/images/leagues/cleaner.png",
        "/images/leagues/collar.png"
    ];

    const goToPrevLeague = () => {
        setLeagueNumber(prevNumber => Math.max(prevNumber - 1, 0));
    };

    const goToNextLeague = () => {
        setLeagueNumber(prevNumber => Math.min(prevNumber + 1, requiredValues.length + 1));
    };

    return (
        <div className="league-container">
            <div className="league-wrapper">
                <h2 className="league-wrapper__headline">League {leagueNumber}</h2>
                <p className="league-wrapper__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse labore
                    perferendis nostrum mollitia modi deleniti.
                </p>
            </div>

            <div className="league-image-container">
                <img src={leagueImages[leagueNumber - 1]} alt={`League ${leagueNumber}`} className="league-image" />
            </div>

            <div className="buttons">
                <div className="button-prev" onClick={goToPrevLeague}>Prev</div>
                <div className="button-next" onClick={goToNextLeague}>Next</div>
            </div>

            <div className="league-wrapper">
                From <span className="league-wrapper">{requiredValues[leagueNumber - 1]}</span>
            </div>
        </div>
    );
}

export default League;
