import React, { useState, useEffect, useContext } from 'react';
import EnergyContext from './EnergyContext';
import BoostersContext from './BoostersContext';

interface EnergyProviderProps {
    children: React.ReactNode;
}

const EnergyProvider: React.FC<EnergyProviderProps> = ({ children }) => {
    const [currentEnergy, setCurrentEnergy] = useState(500);
    const [maxEnergy, setMaxEnergy] = useState(500);
    const [energyPerSecond, setEnergyPerSecond] = useState(1);
    const { boosters } = useContext(BoostersContext);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentEnergy(prevEnergy => Math.min(prevEnergy + energyPerSecond, maxEnergy));
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [energyPerSecond, maxEnergy]);

    useEffect(() => {
        const energyLimitBooster = boosters.find(booster => booster.name === 'Energy Limit');
        const rechargingSpeedBooster = boosters.find(booster => booster.name === 'Recharging Speed');

        if (energyLimitBooster && energyLimitBooster.level) {
            const extraEnergy = (energyLimitBooster.level - 1) * 10;
            setMaxEnergy(500 + extraEnergy);
        } else {
            setMaxEnergy(500);
        }

        if (rechargingSpeedBooster && rechargingSpeedBooster.level) {
            const extraEnergyPerSecond = rechargingSpeedBooster.level - 1;
            setEnergyPerSecond(1 + extraEnergyPerSecond);
        } else {
            setEnergyPerSecond(1);
        }
    }, [boosters]);

    const increaseMaxEnergy = (amount: number) => {
        setMaxEnergy(prevMax => prevMax + amount);
    };

    const increaseEnergyPerSecond = (amount: number) => {
        setEnergyPerSecond(prevEPS => prevEPS + amount);
    };

    const decreaseEnergy = (amount: number) => {
        setCurrentEnergy(prevEnergy => Math.max(0, prevEnergy - amount));
    };

    return (
        <EnergyContext.Provider value={{ currentEnergy, maxEnergy, energyPerSecond, increaseMaxEnergy, increaseEnergyPerSecond, decreaseEnergy }}>
            {children}
        </EnergyContext.Provider>
    );
};

export default EnergyProvider;
