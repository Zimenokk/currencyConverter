import React from 'react';
import styles from './StaticCourse.module.scss'

const StaticCourse = ({cc, rate}) => {
    return (
        <div className={styles.staticContainer}>
            <p><strong>{cc}:</strong></p>
            <p><strong>{rate}</strong> UAH</p>
        </div>
    );
};

export default StaticCourse;
