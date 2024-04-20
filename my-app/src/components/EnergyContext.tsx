import React from 'react';

interface EnergyContextProps {
    currentEnergy: number;
    maxEnergy: number;
    energyPerSecond: number;
    increaseMaxEnergy: (amount: number) => void;
    increaseEnergyPerSecond: (amount: number) => void;
    decreaseEnergy: (amount: number) => void;
}

const EnergyContext = React.createContext<EnergyContextProps>({
    currentEnergy: 500,
    maxEnergy: 500,
    energyPerSecond: 1,
    increaseMaxEnergy: () => { },
    increaseEnergyPerSecond: () => { },
    decreaseEnergy: () => { },
});

export default EnergyContext;
