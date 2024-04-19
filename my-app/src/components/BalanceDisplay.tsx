import React from 'react';

interface BalanceDisplayProps {
    balance: number;
}

const BalanceDisplay: React.FC<BalanceDisplayProps> = ({ balance }) => {
    return (
        <div>
            <img src="/images/balance.png" alt="Balance" />
            <span>{balance}</span>
        </div>
    );
};

export default BalanceDisplay;
