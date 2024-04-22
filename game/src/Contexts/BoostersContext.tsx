import React from 'react';

export interface Booster {
    title: string;
    img: string;
    level?: number;
    cost?: number;
    count?: number;
    total?: number;
}

interface BoostersContextProps {
    dailyBoosters: Booster[];
    boosters: Booster[];
    updateBooster: (title: string) => void;
    activateBooster: (title: string) => void;
}

const BoostersContext = React.createContext<BoostersContextProps>({
    dailyBoosters: [],
    boosters: [],
    updateBooster: () => { },
    activateBooster: () => { },
});

export default BoostersContext;
