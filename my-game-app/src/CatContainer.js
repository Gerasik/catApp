import React from 'react';
import './CatContainer.css';

function CatContainer() {
    return (
        <div className="cat-container">
            <img src="/images/cat1.svg" alt="Cat" className="cat-image" />
            <progress value="70" max="100" className="energy-bar">
                70%
            </progress>
        </div>
    );
}

export default CatContainer;
