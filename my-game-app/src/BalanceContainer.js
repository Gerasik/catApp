import React, { useState, useEffect } from 'react';
import './BalanceContainer.css';

function BalanceContainer({ socket }) {
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const handleSocketMessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.balance !== undefined) {
                setBalance(data.balance);
            }
        };

        socket.addEventListener('message', handleSocketMessage);

        return () => {
            socket.removeEventListener('message', handleSocketMessage);
        };
    }, [socket]);

    return (
        <div className="balance-container">
            <img src="/images/balance.png" alt="Balance" />
            <span>{balance}</span>
        </div>
    );
}

export default BalanceContainer;
