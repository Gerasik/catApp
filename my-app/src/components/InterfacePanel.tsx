import React from 'react';
import styles from './InterfacePanel.module.css';

const InterfacePanel: React.FC = () => {
    const items = [
        { img: '/images/ref.png', label: 'Ref/' },
        { img: '/images/tasks.png', label: 'Tasks' },
        { img: '/images/tap.png', label: 'Tap' },
        { img: '/images/boosts.png', label: 'Boosts' },
        { img: '/images/Stats.png', label: 'Stats' },
    ];

    return (
        <div className={styles.interfacePanel}>
            {items.map((item, index) => (
                <div key={index}>
                    <img src={item.img} alt={item.label} />
                    <span>{item.label}</span>
                </div>
            ))}
        </div>
    );
};

export default InterfacePanel;