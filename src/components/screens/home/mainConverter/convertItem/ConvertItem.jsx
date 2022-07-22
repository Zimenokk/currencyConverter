import React from 'react';
import styles from './ConvertItem.module.scss'
import MuiSelect from "../../../../../design-core/select/Select";
import MuiInput from "../../../../../design-core/input/Input";

const ConvertItem = ({...props}) => {

    const currencyName = props.list.filter(item => (item.cc === props.inputNameData));
    
    return (
        <div className={styles.convertItem}>
            <p>{props.action}:</p>
            <div className={styles.inputContainer}>
                <MuiInput value={props.inputCountData} setValue={props.setInputCountData}/>
                <MuiSelect value={props.inputNameData} setValue={props.setInputNameData} completeObj={props.list}/>
                {}
            </div>
            <p>{currencyName[0]?.txt}</p>
        </div>
    );
};

export default ConvertItem;
