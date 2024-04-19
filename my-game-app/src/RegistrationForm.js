import React, { useState, useEffect } from 'react';
import { useUser } from './UserContext';

function RegistrationForm({ socket }) {
    const { setCurrentUsername } = useUser();
    const [username, setUsername] = useState('');
    const [referralCode, setReferralCode] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        if (!username || !password) {
            alert('Please enter your username and password.');
            return;
        }

        socket.send(JSON.stringify({ type: 'register', username, referralCode, password }));
    };

    const handleLogin = (data) => {
        if (data.success) {
            alert('Login successful!');
            setCurrentUsername(username);
        } else {
            alert('Login failed. ' + (data.message || 'Please try again.'));
        }
    };

    useEffect(() => {
        const handleSocketMessage = (event) => {
            const data = JSON.parse(event.data);
            console.log('data', data);
            if (data.type === 'registerResponse') {
                if (data.success) {
                    alert('Registration successful!');
                } else {
                    alert('Registration failed. Please try again.');
                }
            } else if (data.type === 'loginResponse') {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                handleLogin(data);
            }
        };

        socket.addEventListener('message', handleSocketMessage);


        return () => {
            socket.removeEventListener('message', handleSocketMessage);

        };
    }, [socket, handleLogin, username]);

    return (

        <div>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="text" placeholder="Referral Code" value={referralCode} onChange={(e) => setReferralCode(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleRegister}>Register</button>
            <button onClick={() => handleLogin({ success: true, username })}>Login</button>
        </div>
    );
}

export default RegistrationForm;
