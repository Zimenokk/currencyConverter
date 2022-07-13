import React from 'react';
import styles from './ConvertItem.module.scss'
import FormInput from "../../../../../design-core/select/Select";

const ConvertItem = ({action, currencyCount, currencyName}) => {
    return (
        <div className={styles.convertItem}>
            <p>{action}:</p>
            <div className={styles.inputContainer}>

            </div>
            <p>{currencyName}</p>
        </div>
    );
};

export default ConvertItem;
