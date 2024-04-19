import React from 'react';

const InterfacePanel: React.FC = () => {
    const items = [
        { img: '/images/boosts.png', label: 'Boosts' },
        { img: '/images/ref.png', label: 'Ref/' },
        { img: '/images/Stats.png', label: 'Stats' },
        { img: '/images/tap.png', label: 'Tap' },
        { img: '/images/tasks.png', label: 'Tasks' },
    ];

    return (
        <div>
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