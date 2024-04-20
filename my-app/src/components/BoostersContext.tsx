import React from 'react';

interface Booster {
    name: string;
    image: string;
    description: string;
    level?: number;
    cost?: number;
    usesLeft?: number;
    active?: boolean;
}

interface BoostersContextProps {
    boosters: Booster[];
    updateBooster: (name: string) => void;
}

const BoostersContext = React.createContext<BoostersContextProps>({
    boosters: [],
    updateBooster: () => { },
});

export default BoostersContext;
