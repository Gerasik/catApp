import React from 'react';

interface BalanceContextProps {
    balance: number;
    incrementBalance: (amount: number) => void;
    decrementBalance: (amount: number) => void;
}

const BalanceContext = React.createContext<BalanceContextProps>({
    balance: 0,
    incrementBalance: () => { },
    decrementBalance: () => { },
});

export default BalanceContext;
