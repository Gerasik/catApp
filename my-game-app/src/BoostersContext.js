import React, { createContext, useState, useContext } from 'react';

const BoostersContext = createContext();

export const BoostersProvider = ({ children }) => {
    const [boostersData, setBoostersData] = useState([
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

    const updateBoostersData = (updatedData) => {
        setBoostersData(updatedData);
    };

    return (
        <BoostersContext.Provider value={{ boostersData, updateBoostersData }}>
            {children}
        </BoostersContext.Provider>
    );
};

export const useBoosters = () => {
    const context = useContext(BoostersContext);
    if (!context) {
        throw new Error('useBoosters must be used within a BoostersProvider');
    }
    return context;
};
