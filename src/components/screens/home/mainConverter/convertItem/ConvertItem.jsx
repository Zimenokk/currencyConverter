import React from 'react';
import styles from './ConvertItem.module.scss'
import MuiSelect from "../../../../../design-core/select/Select";
import MuiInput from "../../../../../design-core/input/Input";

const ConvertItem = ({action, currencyCount, currencyName}) => {
    return (
        <div className={styles.convertItem}>
            <p>{action}:</p>
            <div className={styles.inputContainer}>
                <MuiInput/>
                <MuiSelect/>
            </div>
            <p>{currencyName}</p>
        </div>
    );
};

export default ConvertItem;
