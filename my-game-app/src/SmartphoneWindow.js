import React from 'react';
import './SmartphoneWindow.css';
import BalanceContainer from './BalanceContainer';
import CatContainer from './CatContainer';

function SmartphoneWindow() {
    return (
        <div className="smartphone-window ">
            <div className="balance-container">      <BalanceContainer /></div>
            <div className="cat-click">      <CatContainer /></div>
            <div className="interface-container">Interface</div>
        </div>
    );
}

export default SmartphoneWindow;
