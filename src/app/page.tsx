import React from 'react';
import Resume from './components/resume';
import styles from './components/Resume.module.css';

const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <Resume />
        </div>
    );
};

export default Home;
