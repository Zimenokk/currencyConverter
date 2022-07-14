import React from 'react';
import styles from './ConvertItem.module.scss'
import MuiSelect from "../../../../../design-core/select/Select";
import MuiInput from "../../../../../design-core/input/Input";

const ConvertItem = ({...props}) => {



    return (
        <div className={styles.convertItem}>
            <p>{props.action}:</p>
            <div className={styles.inputContainer}>
                <MuiInput value={props.inputCountData} setValue={props.setInputCountData}/>
                <MuiSelect value={props.inputNameData} setValue={props.setInputNameData} completeObj={props.currencyObjectData}/>
            </div>
            <p>{props.currencyName}</p>
        </div>
    );
};

export default ConvertItem;
