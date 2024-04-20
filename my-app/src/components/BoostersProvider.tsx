
import React, { useState } from 'react';
import BoostersContext from './BoostersContext';

interface BoostersProviderProps {
    children: React.ReactNode;
}

const BoostersProvider: React.FC<BoostersProviderProps> = ({ children }) => {
    const [boosters, setBoosters] = useState([
        {
            name: 'Multitap',
            image: '/images/Boosters/multiTap.svg',
            description: 'Gives more points per tap',
            level: 1,
            cost: 100,
        },
        {
            name: 'Energy Limit',
            image: '/images/Boosters/energyLimit.svg',
            description: 'Increases maximum energy by 10',
            level: 1,
            cost: 200,
        },
        {
            name: 'Recharging Speed',
            image: '/images/Boosters/rechargingSpeed.svg',
            description: 'Increases energy recharge speed by 1',
            level: 1,
            cost: 300,
        },
        {
            name: 'Tap Bot',
            image: '/images/Boosters/tapBot.svg',
            description: 'Activates autoclicker (2 clicks per second)',
            level: 1,
            cost: 400,
        },
        {
            name: 'Taping Guru',
            image: '/images/Boosters/tapingGuru.svg',
            description: 'Doubles points per tap for 30 seconds',
            usesLeft: 3,
            active: false
        },
        {
            name: 'Full Tank',
            image: '/images/Boosters/fullTank.svg',
            description: 'Prevents energy loss for 60 seconds',
            usesLeft: 3,
            active: false
        }
    ]);

    const updateBooster = (name: string) => {
        setBoosters(prevBoosters => prevBoosters.map(booster => {
            if (booster.name === name) {
                if (booster.level && booster.cost) {
                    return {
                        ...booster,
                        level: booster.level + 1,
                        cost: Math.round(booster.cost * 1.2),
                    };
                } else if (booster.usesLeft) {
                    return {
                        ...booster,
                        usesLeft: booster.usesLeft - 1,
                    };
                }
            }
            return booster;
        }));
    };

    return (
        <BoostersContext.Provider value={{ boosters, updateBooster }}>
            {children}
        </BoostersContext.Provider>
    );
};

export default BoostersProvider;
