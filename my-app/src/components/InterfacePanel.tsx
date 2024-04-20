import React from 'react';
import styles from './InterfacePanel.module.css';

interface InterfacePanelProps {
    onStatsClick: () => void;
    onBoostersClick: () => void;
    onTapClick: () => void;
}

const InterfacePanel: React.FC<InterfacePanelProps> = ({ onStatsClick, onBoostersClick, onTapClick }) => {
    const items = [
        { img: '/images/ref.png', label: 'Ref/' },
        { img: '/images/tasks.png', label: 'Tasks' },
        { img: '/images/tap.png', label: 'Tap', onClick: onTapClick },
        { img: '/images/boosts.png', label: 'Boosts', onClick: onBoostersClick },
        { img: '/images/Stats.png', label: 'Stats', onClick: onStatsClick },
    ];

    return (
        <div className={styles.interfacePanel}>
            {items.map((item, index) => (
                <div key={index} onClick={item.onClick}>
                    <img src={item.img} alt={item.label} />
                    <span>{item.label}</span>
                </div>
            ))}
        </div>
    );
};

export default InterfacePanel;
