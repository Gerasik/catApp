import React from 'react';
import styles from './CatContainer.module.css';

const CatContainer: React.FC = () => {
    return (
        <div className={styles.catContainer}>
            <img src="/images/cat1.svg" alt="Cat" />
        </div>
    );
};

export default CatContainer;
