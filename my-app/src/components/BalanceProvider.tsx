import React, { useState } from 'react';
import BalanceContext from './BalanceContext';

interface BalanceProviderProps {
    children: React.ReactNode;
}

const BalanceProvider: React.FC<BalanceProviderProps> = ({ children }) => {
    const [balance, setBalance] = useState(100000);

    const incrementBalance = (amount: number) => {
        setBalance(prevBalance => prevBalance + amount);
    };

    const decrementBalance = (amount: number) => {
        setBalance(prevBalance => prevBalance - amount);
    };

    return (
        <BalanceContext.Provider value={{ balance, incrementBalance, decrementBalance }}>
            {children}
        </BalanceContext.Provider>
    );
};

export default BalanceProvider;
